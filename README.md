# Wedding invitation preview

This is a static, mobile-first wedding invitation. It has no server or RSVP database. The RSVP form prepares a message for WhatsApp, and the guest must send that message in WhatsApp to confirm.

## Preview locally

~~~~sh
python3 -m http.server 4173
~~~~

Then open http://127.0.0.1:4173. If that port is already in use, replace `4173` with another free port.

## Sample data and real details

Edit invitation-data.js:

- The current names, story, date, venues, map searches, and WhatsApp number are fictional preview data. Keep previewMode true while using them.
- Replace every sample value with real details, then set previewMode to false before sharing.
- Add the couple's names, an ISO wedding date with timezone offset, and the WhatsApp phone number in international digits without a plus sign.
- Replace the event title, start time, venue, address, and HTTPS map link.
- The sample WhatsApp number is invalid. Do not use it for a real message or publish it.
- Replace the sample story with the couple's story, or clear it. Add photo entries only when the couple supplies photos.

The page starts in Bahasa Indonesia. The ID / EN toggle changes all site copy and remembers the guest's choice in local storage. The page uses noindex, nofollow; keep it that way for a link-shared invitation.

Do not publish this sample preview. After the invitation is complete, test a real RSVP handoff on a phone before sharing the link.
