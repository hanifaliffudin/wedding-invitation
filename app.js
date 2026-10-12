(function () {
  "use strict";

  const DATA = window.INVITATION_DATA || {};
  const COPY = {
    id: {
      description: "Undangan pernikahan digital.",
      skip: "Lewati ke undangan",
      "preview.label": "Data contoh",
      "preview.message": "Pratinjau ini memakai detail fiktif dan foto stok berlisensi, bukan foto pasangan. Jangan dibagikan kepada tamu.",
      "cover.kicker": "Undangan Pernikahan",
      "cover.intro": "Dengan penuh rasa syukur, kami mengundang Anda untuk merayakan hari istimewa bersama kami.",
      "cover.open": "Buka Undangan",
      "cover.hint": "Ketuk untuk melihat undangan",
      brand: "Undangan",
      "brand.aria": "Kembali ke awal undangan",
      "nav.aria": "Navigasi undangan",
      "language.aria": "Pilih bahasa",
      "nav.details": "Acara",
      "nav.rsvp": "RSVP",
      "nav.location": "Lokasi",
      "hero.kicker": "Dengan penuh kebahagiaan",
      "hero.invitation": "mengundang Anda untuk hadir dan berbagi kebahagiaan di hari pernikahan kami.",
      "hero.countdown": "hari menuju hari bahagia",
      "calendar.download": "Tambahkan ke Kalender",
      "calendar.downloaded": "File kalender berhasil diunduh.",
      "music.label": "Musik pilihan pasangan",
      "date.tbd": "Tanggal akan diisi",
      "story.kicker": "Tentang Kami",
      "story.title": "Sebuah cerita",
      "details.kicker": "Catat tanggalnya",
      "details.title": "Rangkaian Acara",
      "details.intro": "Kami akan sangat bahagia jika Anda dapat hadir.",
      "event.dateTbd": "Waktu acara akan diisi",
      "event.venueTbd": "Nama tempat akan diisi",
      "event.addressTbd": "Alamat akan diisi",
      "event.map": "Lihat peta",
      "location.kicker": "Temukan kami",
      "location.title": "Lokasi Acara",
      "location.intro": "Informasi lokasi akan ditambahkan setelah tempat acara ditentukan.",
      "location.map": "Buka peta",
      "gallery.kicker": "Referensi Visual",
      "gallery.title": "Inspirasi Pernikahan",
      "gallery.note": "Foto stok untuk inspirasi pratinjau; bukan foto Nadia & Rafi.",
      "gallery.placeholder": "Foto pasangan akan ditambahkan di sini setelah tersedia.",
      "guest.kicker": "Untuk Anda",
      "guest.title": "Informasi untuk Tamu",
      "guest.intro": "Catatan singkat untuk membantu Anda merencanakan kehadiran.",
      "guest.giftTitle": "Informasi Hadiah",
      "rsvp.kicker": "Kabar dari Anda",
      "rsvp.title": "Konfirmasi Kehadiran",
      "rsvp.intro": "Mohon isi konfirmasi di bawah ini. Pesan akan disiapkan untuk dikirim melalui WhatsApp.",
      "rsvp.deadline": "Mohon konfirmasi kehadiran paling lambat {date}.",
      "rsvp.name": "Nama lengkap",
      "rsvp.attendance": "Apakah Anda akan hadir?",
      "rsvp.yes": "Ya, saya akan hadir",
      "rsvp.no": "Maaf, saya belum dapat hadir",
      "rsvp.guestCount": "Jumlah tamu yang hadir",
      "rsvp.guestCountHint": "Termasuk Anda.",
      "rsvp.note": "Pesan untuk pasangan",
      "rsvp.optional": "(opsional)",
      "rsvp.prepare": "Siapkan Pesan RSVP",
      "rsvp.privacy": "Jawaban tidak disimpan di situs ini. Anda akan mengirimkannya sendiri melalui WhatsApp.",
      "rsvp.messageLabel": "Pratinjau pesan",
      "rsvp.openWhatsapp": "Buka WhatsApp untuk mengirim",
      "rsvp.openWhatsappPreview": "Buka tautan WhatsApp dummy",
      "rsvp.copy": "Salin Pesan",
      "rsvp.errorName": "Masukkan nama Anda untuk melanjutkan.",
      "rsvp.errorAttendance": "Pilih konfirmasi kehadiran Anda.",
      "rsvp.errorGuestCount": "Masukkan jumlah tamu minimal satu orang.",
      "rsvp.statusReady": "Pesan RSVP sudah disiapkan. Lanjutkan ke WhatsApp, lalu tekan tombol Kirim untuk mengonfirmasi.",
      "rsvp.statusPreview": "Mode pratinjau: pesan belum dikirim karena nomor WhatsApp pasangan belum diisi.",
      "rsvp.statusPreviewNumber": "Mode pratinjau: tautan memakai nomor dummy. Jangan kirim pesan.",
      "rsvp.messageGreeting": "Halo, saya {name}.",
      "rsvp.messageAttending": "Saya mengonfirmasi akan hadir.",
      "rsvp.messageNotAttending": "Mohon maaf, saya belum dapat hadir.",
      "rsvp.messageGuests": "Jumlah tamu: {count}.",
      "rsvp.messageNote": "Pesan: {note}",
      "rsvp.copied": "Pesan berhasil disalin.",
      "rsvp.copyManual": "Pilih dan salin pesan secara manual.",
      "closing.kicker": "Dengan kasih",
      "closing.title": "Sampai berjumpa di hari bahagia",
      "closing.thanks": "Terima kasih atas doa dan restu yang menyertai kami.",
      footer: "Dibuat dengan penuh kasih."
    },
    en: {
      description: "Digital wedding invitation.",
      skip: "Skip to the invitation",
      "preview.label": "Sample data",
      "preview.message": "This preview uses fictional details and licensed stock photos, not photos of the couple. Do not share it with guests.",
      "cover.kicker": "Wedding Invitation",
      "cover.intro": "With gratitude, we invite you to celebrate this special day with us.",
      "cover.open": "Open Invitation",
      "cover.hint": "Tap to view the invitation",
      brand: "Invitation",
      "brand.aria": "Return to the top of the invitation",
      "nav.aria": "Invitation navigation",
      "language.aria": "Choose language",
      "nav.details": "Schedule",
      "nav.rsvp": "RSVP",
      "nav.location": "Location",
      "hero.kicker": "With great joy",
      "hero.invitation": "invite you to join us and share in the joy of our wedding day.",
      "hero.countdown": "days until the celebration",
      "calendar.download": "Add to calendar",
      "calendar.downloaded": "The calendar file has been downloaded.",
      "music.label": "The couple’s chosen music",
      "date.tbd": "Wedding date to be added",
      "story.kicker": "About Us",
      "story.title": "Our story",
      "details.kicker": "Save the date",
      "details.title": "Wedding Schedule",
      "details.intro": "We would be delighted if you could join us.",
      "event.dateTbd": "Event time to be added",
      "event.venueTbd": "Venue name to be added",
      "event.addressTbd": "Address to be added",
      "event.map": "View map",
      "location.kicker": "Find us",
      "location.title": "Event Locations",
      "location.intro": "Location details will be added once the venue is confirmed.",
      "location.map": "Open map",
      "gallery.kicker": "Visual References",
      "gallery.title": "Wedding Inspiration",
      "gallery.note": "Licensed stock photos for preview inspiration; not photos of Nadia & Rafi.",
      "gallery.placeholder": "Couple photos will be added here when available.",
      "guest.kicker": "For You",
      "guest.title": "Guest Information",
      "guest.intro": "A few notes to help you plan your visit.",
      "guest.giftTitle": "Gift Information",
      "rsvp.kicker": "A note from you",
      "rsvp.title": "Please RSVP",
      "rsvp.intro": "Please fill in your response below. Your message will be prepared for WhatsApp.",
      "rsvp.deadline": "Please reply by {date}.",
      "rsvp.name": "Full name",
      "rsvp.attendance": "Will you be joining us?",
      "rsvp.yes": "Yes, I will be there",
      "rsvp.no": "Sorry, I cannot attend",
      "rsvp.guestCount": "Number of guests attending",
      "rsvp.guestCountHint": "Including yourself.",
      "rsvp.note": "A note for the couple",
      "rsvp.optional": "(optional)",
      "rsvp.prepare": "Prepare RSVP Message",
      "rsvp.privacy": "Your response is not stored on this site. You will send it yourself through WhatsApp.",
      "rsvp.messageLabel": "Message preview",
      "rsvp.openWhatsapp": "Open WhatsApp to send",
      "rsvp.openWhatsappPreview": "Open dummy WhatsApp link",
      "rsvp.copy": "Copy Message",
      "rsvp.errorName": "Enter your name to continue.",
      "rsvp.errorAttendance": "Choose your attendance response.",
      "rsvp.errorGuestCount": "Enter at least one guest.",
      "rsvp.statusReady": "Your RSVP message is ready. Continue to WhatsApp, then tap Send to confirm.",
      "rsvp.statusPreview": "Preview mode: the message was not sent because the couple's WhatsApp number has not been added.",
      "rsvp.statusPreviewNumber": "Preview mode: this link uses a dummy number. Do not send the message.",
      "rsvp.messageGreeting": "Hello, my name is {name}.",
      "rsvp.messageAttending": "I confirm that I will attend.",
      "rsvp.messageNotAttending": "I am sorry, but I cannot attend.",
      "rsvp.messageGuests": "Number of guests: {count}.",
      "rsvp.messageNote": "Message: {note}",
      "rsvp.copied": "Message copied.",
      "rsvp.copyManual": "Select and copy the message manually.",
      "closing.kicker": "With love",
      "closing.title": "We look forward to celebrating with you",
      "closing.thanks": "Thank you for your prayers and kind wishes.",
      footer: "Made with love."
    }
  };

  const byId = function (id) {
    return document.getElementById(id);
  };
  const text = function (id, value) {
    const node = byId(id);
    if (node) node.textContent = value;
  };
  const localized = function (value, language, fallback) {
    if (typeof value === "string") return value.trim() || fallback;
    if (!value) return fallback;
    return (value[language] || value.id || value.en || "").trim() || fallback;
  };
  const interpolate = function (template, values) {
    return template.replace(/\{([a-z]+)\}/gi, function (_, key) {
      return Object.prototype.hasOwnProperty.call(values, key) ? values[key] : "";
    });
  };

  let language = DATA.languageDefault === "en" ? "en" : "id";
  try {
    const savedLanguage = window.localStorage.getItem("wedding-invitation-language");
    if (savedLanguage === "id" || savedLanguage === "en") language = savedLanguage;
  } catch (error) {
    /* The language toggle remains usable when storage is unavailable. */
  }

  let lastRsvp = null;
  let revealObserver = null;
  let invitationOpened = false;

  function renderCopy() {
    const copy = COPY[language];
    document.documentElement.lang = language;
    document.querySelectorAll("[data-copy]").forEach(function (node) {
      const key = node.getAttribute("data-copy");
      if (copy[key] !== undefined) node.textContent = copy[key];
    });
    document.querySelectorAll("[data-copy-aria]").forEach(function (node) {
      const key = node.getAttribute("data-copy-aria");
      if (copy[key] !== undefined) node.setAttribute("aria-label", copy[key]);
    });
    document.querySelectorAll("[data-language]").forEach(function (button) {
      const selected = button.getAttribute("data-language") === language;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    if (lastRsvp) renderRsvpResult();
    const description = document.getElementById("pageDescription");
    if (description) description.content = copy.description;
    renderEventContent();
    renderOptionalContent();
    renderMusicPlayer();
  }

  function formatDate(dateValue, options) {
    if (!dateValue) return "";
    const date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return "";
    try {
      return new Intl.DateTimeFormat(language === "id" ? "id-ID" : "en-GB", Object.assign({
        timeZone: DATA.timeZone || "Asia/Jakarta"
      }, options || {})).format(date);
    } catch (error) {
      return "";
    }
  }

  function renderCoupleAndDate() {
    const first = (DATA.couple && DATA.couple.first || "").trim();
    const second = (DATA.couple && DATA.couple.second || "").trim();
    const firstName = first || (language === "id" ? "Nama Mempelai 1" : "Partner One");
    const secondName = second || (language === "id" ? "Nama Mempelai 2" : "Partner Two");
    const formattedDate = formatDate(DATA.weddingDate, { day: "numeric", month: "long", year: "numeric" });
    text("coverNames", firstName + " & " + secondName);
    text("partnerOne", firstName);
    text("partnerTwo", secondName);
    text("closingNames", firstName + " & " + secondName);
    text("coverDate", formattedDate || COPY[language]["date.tbd"]);
    text("heroDate", formattedDate || COPY[language]["date.tbd"]);
    const hostValue = DATA.hosts && (DATA.hosts[language] || DATA.hosts.id || DATA.hosts.en);
    const hostText = Array.isArray(hostValue)
      ? hostValue.map(function (item) { return String(item || "").trim(); }).filter(Boolean).join("\n")
      : localized(hostValue, language, "");
    const hostNode = byId("heroHosts");
    if (hostNode) {
      hostNode.textContent = hostText;
      hostNode.hidden = !hostText;
    }
    const deadline = formatDate(DATA.rsvpDeadline, { day: "numeric", month: "long", year: "numeric" });
    const deadlineNode = byId("rsvpDeadline");
    if (deadlineNode) {
      deadlineNode.textContent = deadline
        ? interpolate(COPY[language]["rsvp.deadline"], { date: deadline })
        : "";
      deadlineNode.hidden = !deadline;
    }
    document.title = first && second
      ? (language === "id" ? "Pernikahan " : "The Wedding of ") + first + " & " + second
      : (language === "id" ? "Undangan Pernikahan | Pratinjau" : "Wedding Invitation | Preview");

    const countdown = byId("countdown");
    const date = DATA.weddingDate ? new Date(DATA.weddingDate) : null;
    if (countdown && date && !Number.isNaN(date.getTime())) {
      const difference = date.getTime() - Date.now();
      const days = Math.max(0, Math.ceil(difference / 86400000));
      text("countdownDays", String(days));
      countdown.hidden = false;
    } else if (countdown) {
      countdown.hidden = true;
    }
  }

  function safeMapUrl(value) {
    if (!value) return "";
    try {
      const url = new URL(value);
      return url.protocol === "https:" ? url.href : "";
    } catch (error) {
      return "";
    }
  }

  function calendarDate(value) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  }

  function escapeCalendarText(value) {
    return String(value || "")
      .replace(/\\/g, "\\\\")
      .replace(/\r?\n/g, "\\n")
      .replace(/,/g, "\\,")
      .replace(/;/g, "\\;");
  }

  function foldCalendarLine(line) {
    const encoder = new TextEncoder();
    let output = "";
    let byteCount = 0;
    for (const character of line) {
      const characterBytes = encoder.encode(character).length;
      if (byteCount + characterBytes > 75) {
        output += "\r\n ";
        byteCount = 1;
      }
      output += character;
      byteCount += characterBytes;
    }
    return output;
  }

  function createCalendarFile() {
    const events = Array.isArray(DATA.events) ? DATA.events : [];
    const coupleName = [DATA.couple && DATA.couple.first, DATA.couple && DATA.couple.second]
      .filter(Boolean)
      .join(" & ");
    const nameSlug = coupleName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "wedding";
    const timestamp = calendarDate(new Date());
    const calendarEvents = events.map(function (event, index) {
      const startsAt = calendarDate(event.startsAt);
      if (!startsAt) return "";
      const start = new Date(event.startsAt);
      const end = event.endsAt ? new Date(event.endsAt) : null;
      const title = localized(event.title, language, (language === "id" ? "Acara " : "Event ") + (index + 1));
      const venue = localized(event.venue, language, "");
      const address = localized(event.address, language, "");
      const location = [venue, address].filter(Boolean).join(", ");
      const mapUrl = safeMapUrl(event.mapUrl);
      const uidDate = startsAt.replace(/[^0-9TZ]/g, "");
      const lines = [
        "BEGIN:VEVENT",
        "UID:" + nameSlug + "-" + (index + 1) + "-" + uidDate + "@wedding-invitation.local",
        "DTSTAMP:" + timestamp,
        "DTSTART:" + startsAt
      ];
      if (end && !Number.isNaN(end.getTime()) && end > start) {
        lines.push("DTEND:" + calendarDate(end));
      }
      lines.push("SUMMARY:" + escapeCalendarText(title));
      if (location) lines.push("LOCATION:" + escapeCalendarText(location));
      if (coupleName) lines.push("DESCRIPTION:" + escapeCalendarText(coupleName));
      if (mapUrl) lines.push("URL:" + mapUrl);
      lines.push("STATUS:CONFIRMED", "END:VEVENT");
      return lines.join("\r\n");
    }).filter(Boolean);

    if (calendarEvents.length === 0) return false;
    const lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Wedding Invitation//ID",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "X-WR-CALNAME:" + escapeCalendarText(coupleName || (language === "id" ? "Pernikahan" : "Wedding")),
      ...calendarEvents,
      "END:VCALENDAR"
    ];
    const fileContents = lines.map(foldCalendarLine).join("\r\n") + "\r\n";
    const file = new Blob([fileContents], { type: "text/calendar;charset=utf-8" });
    const objectUrl = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = nameSlug + "-wedding.ics";
    link.hidden = true;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () { URL.revokeObjectURL(objectUrl); }, 1000);
    const status = byId("calendarStatus");
    if (status) {
      status.textContent = COPY[language]["calendar.downloaded"];
      status.hidden = false;
    }
    return true;
  }

  function renderMusicPlayer() {
    const player = byId("musicPlayer");
    const audio = byId("invitationAudio");
    if (!player || !audio) return;
    const music = DATA.music || {};
    const source = String(music.src || "").trim();
    let safeSource = "";
    if (source) {
      try {
        const url = new URL(source, document.baseURI);
        if (url.protocol === "https:" || url.origin === window.location.origin) safeSource = url.href;
      } catch (error) {
        safeSource = "";
      }
    }
    if (safeSource && audio.dataset.source !== safeSource) {
      audio.src = safeSource;
      audio.dataset.source = safeSource;
      audio.load();
    }
    player.hidden = !safeSource;
    const title = localized(music.title, language, "");
    text("musicTitle", title);
    audio.setAttribute("aria-label", language === "id" ? "Putar atau jeda musik undangan" : "Play or pause the invitation music");
  }

  function observeRevealTargets(root) {
    if (!revealObserver || !root) return;
    const targets = [];
    if (root.matches && root.matches("[data-reveal]")) targets.push(root);
    if (root.querySelectorAll) targets.push.apply(targets, root.querySelectorAll("[data-reveal]"));
    targets.forEach(function (target) {
      if (!target.classList.contains("is-visible")) revealObserver.observe(target);
    });
  }

  function prepareScrollReveals() {
    const targets = document.querySelectorAll("[data-reveal]");
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (target) { target.classList.add("is-visible"); });
      return;
    }
    document.documentElement.classList.add("motion-ready");
    revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    observeRevealTargets(document);
  }

  function createTextElement(tagName, className, value) {
    const node = document.createElement(tagName);
    if (className) node.className = className;
    node.textContent = value;
    return node;
  }

  function renderEventContent() {
    renderCoupleAndDate();
    const events = Array.isArray(DATA.events) ? DATA.events : [];
    const eventList = byId("eventList");
    const locationList = byId("locationList");
    if (!eventList || !locationList) return;
    eventList.replaceChildren();
    locationList.replaceChildren();

    const copy = COPY[language];
    events.forEach(function (event, index) {
      const title = localized(event.title, language, (language === "id" ? "Acara " : "Event ") + (index + 1));
      const venue = localized(event.venue, language, copy["event.venueTbd"]);
      const address = localized(event.address, language, copy["event.addressTbd"]);
      const eventDate = formatDate(event.startsAt, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
      const startTime = formatDate(event.startsAt, { hour: "2-digit", minute: "2-digit" });
      const endDate = formatDate(event.endsAt, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
      const endTime = formatDate(event.endsAt, { hour: "2-digit", minute: "2-digit" });
      const sameEventDay = eventDate && endDate && eventDate === endDate;
      const time = eventDate && startTime
        ? eventDate + " · " + startTime + (endTime ? (sameEventDay ? "–" : " – " + endDate + " · ") + endTime : "")
        : "";
      const mapUrl = safeMapUrl(event.mapUrl);

      const card = document.createElement("article");
      card.className = "event-card";
      card.setAttribute("data-reveal", "");
      card.style.setProperty("--reveal-delay", Math.min(index * 120, 240) + "ms");
      const inner = document.createElement("div");
      inner.className = "event-card__inner";
      inner.appendChild(createTextElement("span", "event-card__ornament", "❧"));
      inner.appendChild(createTextElement("h3", "", title));
      inner.appendChild(createTextElement("p", "event-card__detail event-card__date", time || copy["event.dateTbd"]));
      inner.appendChild(createTextElement("p", "event-card__detail", venue));
      inner.appendChild(createTextElement("p", "event-card__detail", address));
      if (mapUrl) {
        const actions = document.createElement("div");
        actions.className = "event-card__actions";
        const link = createTextElement("a", "text-action", copy["event.map"]);
        link.href = mapUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        actions.appendChild(link);
        inner.appendChild(actions);
      }
      card.appendChild(inner);
      eventList.appendChild(card);

      const location = document.createElement("article");
      location.className = "location-item";
      const locationCopy = document.createElement("div");
      locationCopy.className = "location-item__copy";
      locationCopy.appendChild(createTextElement("h3", "", title));
      locationCopy.appendChild(createTextElement("p", "", venue));
      locationCopy.appendChild(createTextElement("p", "", address));
      location.appendChild(locationCopy);
      if (mapUrl) {
        const link = createTextElement("a", "text-action location-item__map", copy["location.map"]);
        link.href = mapUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        location.appendChild(link);
      }
      locationList.appendChild(location);
    });

    const calendarButton = byId("downloadCalendar");
    if (calendarButton) {
      calendarButton.hidden = !events.some(function (event) { return Boolean(calendarDate(event.startsAt)); });
    }
    observeRevealTargets(eventList);

    const hasLocation = events.some(function (event) {
      return localized(event.venue, language, "").trim() || localized(event.address, language, "").trim();
    });
    const locationIntro = document.querySelector(".location-section .section-heading__intro");
    if (locationIntro && hasLocation) {
      locationIntro.textContent = language === "id"
        ? "Pilih peta untuk melihat petunjuk menuju lokasi acara."
        : "Open a map for directions to each event location.";
    } else if (locationIntro) {
      locationIntro.textContent = copy["location.intro"];
    }
  }

  function renderOptionalContent() {
    const story = DATA.story || {};
    const storyText = localized(story, language, "");
    const storySection = byId("story");
    if (storySection) {
      storySection.hidden = !storyText;
      text("storyText", storyText);
    }

    const photos = Array.isArray(DATA.photos) ? DATA.photos : [];
    const gallery = byId("gallery");
    const galleryGrid = byId("galleryGrid");
    if (!gallery || !galleryGrid) return;
    galleryGrid.replaceChildren();
    photos.forEach(function (photo) {
      if (!photo || !photo.src) return;
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = photo.src;
      image.alt = localized(photo.alt, language, language === "id" ? "Foto detail pernikahan" : "A wedding detail photo");
      image.loading = "lazy";
      image.decoding = "async";
      figure.appendChild(image);
      const credit = document.createElement("figcaption");
      credit.className = "photo-credit";
      credit.appendChild(document.createTextNode(language === "id" ? "Foto oleh " : "Photo by "));
      const photographerName = String(photo.creditName || "").trim();
      const photographerUrl = safeMapUrl(photo.creditUrl);
      if (photographerName && photographerUrl) {
        const photographerLink = createTextElement("a", "", photographerName);
        photographerLink.href = photographerUrl;
        photographerLink.target = "_blank";
        photographerLink.rel = "noopener noreferrer";
        credit.appendChild(photographerLink);
      } else {
        credit.appendChild(document.createTextNode(photographerName || "Unsplash contributor"));
      }
      credit.appendChild(document.createTextNode(" · "));
      const sourceUrl = safeMapUrl(photo.sourceUrl);
      if (sourceUrl) {
        const sourceLink = createTextElement("a", "", "Unsplash");
        sourceLink.href = sourceUrl;
        sourceLink.target = "_blank";
        sourceLink.rel = "noopener noreferrer";
        credit.appendChild(sourceLink);
      } else {
        credit.appendChild(document.createTextNode("Unsplash"));
      }
      figure.appendChild(credit);
      galleryGrid.appendChild(figure);
    });
    const hasPhotos = galleryGrid.childElementCount > 0;
    const galleryPlaceholder = byId("galleryPlaceholder");
    const galleryNote = byId("galleryNote");
    if (galleryPlaceholder) galleryPlaceholder.hidden = hasPhotos;
    if (galleryNote) galleryNote.hidden = !hasPhotos;
    gallery.hidden = false;

    const guestInfo = byId("guestInfo");
    const guestNoteGrid = byId("guestNoteGrid");
    const giftNote = byId("giftNote");
    const guestNotes = Array.isArray(DATA.guestNotes) ? DATA.guestNotes : [];
    if (guestNoteGrid) {
      guestNoteGrid.replaceChildren();
      guestNotes.forEach(function (note) {
        const label = localized(note && note.label, language, "");
        const value = localized(note && note.value, language, "");
        if (!label || !value) return;
        const article = document.createElement("article");
        article.className = "guest-note";
        article.appendChild(createTextElement("h3", "", label));
        article.appendChild(createTextElement("p", "", value));
        guestNoteGrid.appendChild(article);
      });
    }
    const giftText = localized(DATA.giftInfo, language, "");
    if (giftNote) giftNote.hidden = !giftText;
    text("giftMessage", giftText);
    if (guestInfo) {
      guestInfo.hidden = (!guestNoteGrid || guestNoteGrid.childElementCount === 0) && !giftText;
    }
    observeRevealTargets(guestInfo);
  }

  function readAttendance() {
    const selected = document.querySelector('input[name="attendance"]:checked');
    return selected ? selected.value : "";
  }

  function prepareMessage() {
    const values = lastRsvp;
    const copy = COPY[language];
    const lines = [interpolate(copy["rsvp.messageGreeting"], { name: values.name })];
    if (values.attendance === "yes") {
      lines.push(copy["rsvp.messageAttending"]);
      lines.push(interpolate(copy["rsvp.messageGuests"], { count: values.guestCount }));
    } else {
      lines.push(copy["rsvp.messageNotAttending"]);
    }
    if (values.note) lines.push(interpolate(copy["rsvp.messageNote"], { note: values.note }));
    return lines.join("\n");
  }

  function validWhatsAppNumber() {
    const number = String(DATA.whatsappNumber || "").replace(/\D/g, "");
    return number.length >= 8 && number.length <= 15 ? number : "";
  }

  function renderRsvpResult() {
    if (!lastRsvp) return;
    const message = prepareMessage();
    const number = validWhatsAppNumber();
    const preview = byId("messagePreview");
    const link = byId("whatsappLink");
    preview.value = message;
    text("rsvpStatus", number
      ? (DATA.previewMode ? COPY[language]["rsvp.statusPreviewNumber"] : COPY[language]["rsvp.statusReady"])
      : COPY[language]["rsvp.statusPreview"]);
    if (link) {
      link.hidden = !number;
      if (number) {
        link.textContent = DATA.previewMode
          ? COPY[language]["rsvp.openWhatsappPreview"]
          : COPY[language]["rsvp.openWhatsapp"];
        const url = new URL("https://wa.me/" + number);
        url.searchParams.set("text", message);
        link.href = url.href;
      } else {
        link.removeAttribute("href");
        link.textContent = COPY[language]["rsvp.openWhatsapp"];
      }
    }
  }

  function showError(message) {
    const error = byId("formError");
    if (!error) return;
    error.textContent = message;
    error.hidden = false;
  }

  function clearError() {
    const error = byId("formError");
    if (!error) return;
    error.textContent = "";
    error.hidden = true;
  }

  function invalidateRsvpResult() {
    clearError();
    lastRsvp = null;
    const result = byId("rsvpResult");
    const status = byId("copyStatus");
    if (result) result.hidden = true;
    if (status) status.textContent = "";
  }

  function handleRsvpSubmit(event) {
    event.preventDefault();
    clearError();
    const name = byId("guestName").value.trim();
    const attendance = readAttendance();
    const count = Number(byId("guestCount").value);
    if (!name) {
      showError(COPY[language]["rsvp.errorName"]);
      byId("guestName").focus();
      return;
    }
    if (!attendance) {
      showError(COPY[language]["rsvp.errorAttendance"]);
      document.querySelector('input[name="attendance"]').focus();
      return;
    }
    if (attendance === "yes" && (!Number.isInteger(count) || count < 1)) {
      showError(COPY[language]["rsvp.errorGuestCount"]);
      byId("guestCount").focus();
      return;
    }

    lastRsvp = {
      name: name,
      attendance: attendance,
      guestCount: attendance === "yes" ? count : 0,
      note: byId("guestNote").value.trim()
    };
    renderRsvpResult();
    byId("rsvpResult").hidden = false;
    byId("copyStatus").textContent = "";
  }

  async function copyRsvpMessage() {
    const message = byId("messagePreview").value;
    const status = byId("copyStatus");
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(message);
        status.textContent = COPY[language]["rsvp.copied"];
        return;
      }
    } catch (error) {
      /* Fall through to manual selection when clipboard access is unavailable. */
    }
    const preview = byId("messagePreview");
    preview.focus();
    preview.select();
    status.textContent = COPY[language]["rsvp.copyManual"];
  }

  function setLanguage(nextLanguage) {
    if (nextLanguage !== "id" && nextLanguage !== "en") return;
    language = nextLanguage;
    clearError();
    byId("copyStatus").textContent = "";
    try {
      window.localStorage.setItem("wedding-invitation-language", language);
    } catch (error) {
      /* The selected language still applies for this page view. */
    }
    renderCopy();
  }

  function openInvitation() {
    if (invitationOpened) return;
    invitationOpened = true;
    const cover = byId("cover");
    const site = byId("site");
    const hero = byId("home");
    const button = byId("openInvitation");
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (button) button.disabled = true;
    if (cover && !reduceMotion) cover.classList.add("cover--opening");

    function revealPage() {
      if (cover) cover.hidden = true;
      if (site) {
        site.hidden = false;
        if (!reduceMotion) site.classList.add("site--entering");
      }
      prepareScrollReveals();
      if (hero) {
        hero.setAttribute("tabindex", "-1");
        hero.focus({ preventScroll: true });
        hero.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      }
      if (!reduceMotion && site) {
        window.setTimeout(function () { site.classList.remove("site--entering"); }, 720);
      }
    }

    if (reduceMotion) revealPage();
    else window.setTimeout(revealPage, 620);
  }

  const previewBanner = byId("previewBanner");
  if (previewBanner) previewBanner.hidden = !DATA.previewMode;
  document.querySelectorAll("[data-language]").forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-language"));
    });
  });
  byId("openInvitation").addEventListener("click", openInvitation);
  byId("downloadCalendar").addEventListener("click", createCalendarFile);

  document.querySelectorAll('input[name="attendance"]').forEach(function (input) {
    input.addEventListener("change", function () {
      const attending = readAttendance() === "yes";
      const countField = byId("guestCountField");
      const countInput = byId("guestCount");
      countField.hidden = !attending;
      countInput.disabled = !attending;
      countInput.required = attending;
      if (!attending) countInput.value = "1";
      invalidateRsvpResult();
    });
  });
  byId("rsvpForm").addEventListener("submit", handleRsvpSubmit);
  byId("rsvpForm").addEventListener("input", invalidateRsvpResult);
  byId("rsvpForm").addEventListener("change", invalidateRsvpResult);
  byId("copyMessage").addEventListener("click", copyRsvpMessage);

  renderCopy();
})();
