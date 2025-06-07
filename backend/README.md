# Portfolio Backend API

A Node.js backend API for the portfolio website with contact form and newsletter functionality.

## Features

- **Contact Form API**: Handles contact form submissions with email notifications
- **Newsletter API**: Manages newsletter subscriptions with welcome emails
- **Rate Limiting**: Prevents spam and abuse
- **Input Validation**: Validates all incoming data
- **Email Integration**: Sends automated emails using Nodemailer
- **CORS Support**: Configured for frontend integration
- **Security**: Helmet.js for security headers

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Configure your email settings in `.env`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=your-email@gmail.com
FRONTEND_URL=http://localhost:5173
PORT=5000
```

4. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### Contact Form
- **POST** `/api/contact`
- **Body**: `{ name, email, subject, message }`
- **Rate Limit**: 5 requests per hour per IP

### Newsletter
- **POST** `/api/newsletter`
- **Body**: `{ email, name? }`
- **Rate Limit**: 100 requests per 15 minutes per IP

### Health Check
- **GET** `/health`
- Returns server status and uptime

## Email Setup (Gmail)

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in `EMAIL_PASS`

## Security Features

- Rate limiting on all endpoints
- Input validation with Joi
- CORS configuration
- Helmet.js security headers
- Request size limits

## Production Deployment

1. Set environment variables on your hosting platform
2. Use a proper database for newsletter subscribers
3. Configure email service (SendGrid, AWS SES, etc.)
4. Set up monitoring and logging
5. Use HTTPS in production