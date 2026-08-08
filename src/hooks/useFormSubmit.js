
import emailjs from '@emailjs/browser';

import { CONTACT } from '../data/siteData';

export async function submitForm({ name, phone, email = '', department = '', message = '', formType = 'Appointment Request' }) {

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
  
  const waText = encodeURIComponent(
    ` *${formType}*\n\n` +
    ` *Name:*       ${name}\n` +
    ` *Phone:*      ${phone}\n` +
    ` *Email:*      ${email      || 'N/A'}\n` +
    ` *Department:* ${department || 'Not specified'}\n` +
    ` *Message:*    ${message    || 'No message'}`
  );
  window.open(`https://wa.me/${CONTACT.whatsapp}?text=${waText}`, '_blank');


  await new Promise(r => setTimeout(r, 1000));
}
