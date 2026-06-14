// ─────────────────────────────────────────────────────────────────────────────
// useFormSubmit — shared submission logic for ALL forms on the site
//
// Every form (Navbar callback, Sidebar, Contact page) calls this hook.
// Configure EmailJS + WhatsApp ONCE here and every form is wired automatically.
//
// HOW TO ACTIVATE:
//   1. npm install @emailjs/browser
//   2. Create .env.local with your three keys (see .env.example)
//   3. Uncomment the two blocks below marked UNCOMMENT
// ─────────────────────────────────────────────────────────────────────────────

// UNCOMMENT this line once you have EmailJS set up:
import emailjs from '@emailjs/browser';

import { CONTACT } from '../data/siteData';

/**
 * submitForm({ name, phone, email, department, message, formType })
 *   formType — label shown in the email subject so you know which form fired
 *              e.g. "Call Back Request", "Sidebar Appointment", "Contact Page"
 *
 * Returns a promise — resolves on success, rejects on failure.
 */
export async function submitForm({ name, phone, email = '', department = '', message = '', formType = 'Appointment Request' }) {

  // ── STEP 1: Send Email via EmailJS ────────────────────────────────────────
  // UNCOMMENT the block below once your .env.local keys are set:

  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      form_type:    formType,
      from_name:    name,
      from_phone:   phone,
      from_email:   email  || 'Not provided',
      department:   department || 'Not specified',
      message:      message || 'No message',
      to_email:     CONTACT.email,
      reply_to:     email || CONTACT.email,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
  

  // ── STEP 2: Send WhatsApp notification ────────────────────────────────────
  // UNCOMMENT the block below to also ping WhatsApp on every form submit:
  
  const waText = encodeURIComponent(
    `🏥 *${formType}*\n\n` +
    `👤 *Name:*       ${name}\n` +
    `📞 *Phone:*      ${phone}\n` +
    `📧 *Email:*      ${email      || 'N/A'}\n` +
    `🏥 *Department:* ${department || 'Not specified'}\n` +
    `📝 *Message:*    ${message    || 'No message'}`
  );
  window.open(`https://wa.me/${CONTACT.whatsapp}?text=${waText}`, '_blank');


  // ── Simulation (DELETE this line once EmailJS is configured) ──────────────
  await new Promise(r => setTimeout(r, 1000));
}
