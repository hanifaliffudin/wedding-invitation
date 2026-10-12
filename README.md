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
- Add the RSVP deadline, family host lines in both languages, guest notes (dress code, parking, access, accommodation, and FAQs), and gift information in `invitation-data.js`.
- Replace the event title, start time, venue, address, and HTTPS map link.
- The sample WhatsApp number is invalid. Do not use it for a real message or publish it.
- Replace the sample story with the couple's story, or clear it. The included Unsplash photos are licensed wedding-detail and venue images for preview only, not photos of the couple. Replace them with couple-supplied photos if available; each gallery photo renders its photographer and Unsplash source credit.

The page starts in Bahasa Indonesia. The ID / EN toggle changes all site copy and remembers the guest's choice in local storage. The page uses noindex, nofollow; keep it that way for a link-shared invitation.

## Guest experience

- The cover opens into the invitation, and sections reveal once as guests scroll. Both effects are skipped when the device requests reduced motion.
- “Tambahkan ke Kalender” / “Add to calendar” downloads an `.ics` file containing every event with a valid `startsAt`. Add `endsAt` to each event when the real end time is known.
- Couple photos are optional. Add only supplied images to `photos`, with localized alt text. Each photo entry can include `creditName`, `creditUrl`, and `sourceUrl` for a visible attribution; the gallery placeholder is shown when the list is empty.
- Music is optional and never starts automatically. To show the native play/pause control, set `music.src` to a local audio file such as `./assets/wedding-song.mp3` and add its title in both languages. Include that audio file in the site folder and use music the couple has permission to share.

The included photos are from Unsplash and are used under the [Unsplash License](https://unsplash.com/license); their photographer and source links appear below each image. Attribution is not required by that license, but is included here as requested. These sample names, story, guest notes, venues, times, map searches, and contact number are fictional. Do not share this preview with guests or send its dummy RSVP link.

Do not publish this sample preview. After the invitation is complete, test a real RSVP handoff on a phone before sharing the link.
