// ============================================
// Aishan.ai — Configuration (DO NOT COMMIT)
// Add this file to .gitignore to keep credentials private
// ============================================

const AISHAN_CONFIG = {
  web3forms: {
    accessKey: 'f59163c7-6409-403a-94ed-e263532467e8'  // Get free key: https://web3forms.com → enter 100expertdays@gmail.com → check inbox
  },
  contact: {
    email: '100expertdays@gmail.com',
    phone: '+91 87545 76548'
  }
  
};


/*
  ──────────────────────────────────────────────
  WEB3FORMS SETUP (one-time, takes 30 seconds):
  ──────────────────────────────────────────────
  1. Go to https://web3forms.com
  2. Enter: 100expertdays@gmail.com
  3. Click "Create Access Key"
  4. Check your Gmail inbox → copy the Access Key
  5. Paste it above replacing YOUR_ACCESS_KEY
  6. Done — no template, no account needed
  ──────────────────────────────────────────────
*/

/*
  ──────────────────────────────────────────────
  EMAIL TEMPLATE SETUP on emailjs.com:
  ──────────────────────────────────────────────
  1. Go to https://dashboard.emailjs.com/admin/templates
  2. Click "Create New Template"
  3. Set Template ID to: template_enquiry
  4. Set Subject to:
       New Enquiry from {{from_name}} — {{service}}
  5. Set Body to:
       Name:    {{from_name}}
       Email:   {{from_email}}
       Phone:   {{phone}}
       Company: {{company}}
       Service: {{service}}

       Message:
       {{message}}
  6. Set "To Email" to: 100expertdays@gmail.com
  7. Save the template
  ──────────────────────────────────────────────
*/
