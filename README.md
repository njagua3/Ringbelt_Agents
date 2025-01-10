# Ringbelt Estate Agents Website

A modern, responsive real estate website for Ringbelt Estate Agents in Nyeri, Kenya.

## Features

- 🏠 Property listings and management services
- 🌓 Dark/Light mode toggle
- ⏰ Real-time availability clock
- 📱 Fully responsive design
- 🖼️ Optimized image loading
- ⬆️ Smooth scroll-to-top functionality
- 📝 Working contact form with EmailJS integration
- 🗺️ Office location with Google Maps integration

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons
- EmailJS for contact form
- React Hot Toast for notifications

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up EmailJS:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a new email service
   - Create an email template
   - Add your EmailJS credentials to `.env`:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contact Form Setup

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{phone_number}}` - Sender's phone number
   - `{{user_type}}` - Type of user (landlord, tenant, etc.)
   - `{{message}}` - Message content
4. Copy your credentials and add them to the `.env` file
5. The contact form will now send emails through your EmailJS service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Ringbelt Estate Agents. All rights reserved.