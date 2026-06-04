# Divya Jyoti Hospital Website

A full React.js hospital website built with Vite and React Router.

## Tech Stack
- React 18 + Vite
- React Router DOM (client-side routing)
- Lucide React (icons)
- CSS Modules (styling)

## Getting Started

```bash
npm install
npm run dev      # development
npm run build    # production build
```

## Deploying to Vercel

1. Push this folder to GitHub
2. Import the repo in vercel.com
3. Vercel auto-detects Vite — no extra settings needed
4. The `vercel.json` handles SPA routing automatically

## Enabling Email (Appointment Forms)

1. Create a free account at https://emailjs.com
2. Add a Gmail or SMTP service
3. Create an email template with variables: `from_name`, `from_email`, `phone`, `department`, `message`
4. In `src/pages/Contact.jsx`, uncomment the emailjs block and fill in:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`
5. Install: `npm install @emailjs/browser`

## Enabling WhatsApp Notifications

In `src/pages/Contact.jsx`, uncomment the WhatsApp block and update the number in `src/data/siteData.js`:
```js
whatsapp: '919999999999', // Country code + number, no + or spaces
```

## Adding Your Logo

The logo image is at `public/logo.png`. To swap it:
- Replace `public/logo.png` with your own PNG/SVG
- Or edit `src/components/Navbar.jsx` — look for the `<!-- LOGO PLACEHOLDER -->` comment

## Updating Content

All site content (doctors, services, blogs, etc.) is in:
`src/data/siteData.js`

Edit the arrays there to update any page content.
# divyajyotihosptal
