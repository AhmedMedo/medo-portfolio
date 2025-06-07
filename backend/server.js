const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const Joi = require('joi');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 contact requests per hour
  message: 'Too many contact requests from this IP, please try again later.'
});

app.use(limiter);

// Email transporter setup (using Gmail as example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Validation schemas
const contactSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().min(5).max(200).required(),
  message: Joi.string().min(10).max(1000).required()
});

const newsletterSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(2).max(100).optional()
});

// In-memory storage for newsletter (in production, use a database)
const newsletterSubscribers = new Set();

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Portfolio Backend API',
    version: '1.0.0',
    endpoints: {
      contact: 'POST /api/contact',
      newsletter: 'POST /api/newsletter'
    }
  });
});

// Contact Us API
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    // Validate request body
    const { error, value } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.details.map(detail => detail.message)
      });
    }

    const { name, email, subject, message } = value;

    // Email to yourself (portfolio owner)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Reply to:</strong> ${email}
            </p>
          </div>
        </div>
      `
    };

    // Auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank You for Your Message!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p style="font-style: italic; color: #6b7280;">"${message}"</p>
          </div>
          <p>I typically respond within 24-48 hours. If your inquiry is urgent, please feel free to reach out to me directly.</p>
          <p>Best regards,<br>Ahmed Alaa</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="font-size: 12px; color: #9ca3af;">This is an automated response. Please do not reply to this email.</p>
        </div>
      `
    };

    // Send emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! Thank you for contacting me.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Newsletter Subscription API
app.post('/api/newsletter', async (req, res) => {
  try {
    // Validate request body
    const { error, value } = newsletterSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.details.map(detail => detail.message)
      });
    }

    const { email, name } = value;

    // Check if already subscribed
    if (newsletterSubscribers.has(email)) {
      return res.status(409).json({
        success: false,
        message: 'This email is already subscribed to our newsletter.'
      });
    }

    // Add to newsletter list
    newsletterSubscribers.add(email);

    // Send welcome email
    const welcomeEmailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Ahmed Alaa\'s Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to My Newsletter!</h1>
          </div>
          <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <p>Hi ${name || 'there'}! 👋</p>
            <p>Thank you for subscribing to my newsletter! You'll now receive updates about:</p>
            <ul style="color: #4b5563; line-height: 1.8;">
              <li>🚀 New projects and developments</li>
              <li>💡 Tech insights and tutorials</li>
              <li>📝 Blog posts and articles</li>
              <li>🎯 Career updates and opportunities</li>
            </ul>
            <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <p style="margin: 0; color: #1e40af;">
                <strong>What's next?</strong> Keep an eye on your inbox for exciting updates and exclusive content!
              </p>
            </div>
            <p>If you have any questions or just want to say hi, feel free to reply to this email.</p>
            <p>Best regards,<br>Ahmed Alaa</p>
          </div>
          <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
            <p>You can unsubscribe at any time by replying to this email with "UNSUBSCRIBE"</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(welcomeEmailOptions);

    // Notify yourself about new subscriber
    const notificationOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Newsletter Subscriber</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
            <p><strong>Email:</strong> ${email}</p>
            ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
            <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Total subscribers:</strong> ${newsletterSubscribers.size}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(notificationOptions);

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe to newsletter. Please try again later.'
    });
  }
});

// Get newsletter stats (optional endpoint for admin)
app.get('/api/newsletter/stats', (req, res) => {
  res.json({
    success: true,
    data: {
      totalSubscribers: newsletterSubscribers.size,
      subscribedEmails: Array.from(newsletterSubscribers) // Remove in production
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Make sure to set up your email credentials in .env file`);
});