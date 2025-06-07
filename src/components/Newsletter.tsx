import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(result.message, {
          duration: 5000,
          icon: <CheckCircle className="w-5 h-5" />,
        });
        setEmail('');
        setName('');
      } else {
        toast.error(result.message || 'Failed to subscribe', {
          duration: 5000,
          icon: <AlertCircle className="w-5 h-5" />,
        });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('Network error. Please check your connection and try again.', {
        duration: 5000,
        icon: <AlertCircle className="w-5 h-5" />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter and get the latest updates on my projects, tech insights, and career journey.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                  Subscribing...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Subscribe to Newsletter
                </>
              )}
            </button>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>Weekly updates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;