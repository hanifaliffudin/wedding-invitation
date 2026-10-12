(function () {
  "use strict";

  const DATA = window.INVITATION_DATA || {};
  const COPY = {
    id: {
      description: "Undangan pernikahan digital.",
      skip: "Lewati ke undangan",
      "preview.label": "Data contoh",
      "preview.message": "Pratinjau ini memakai nama, tanggal, lokasi, dan kontak fiktif. Jangan dibagikan kepada tamu.",
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
      "gallery.kicker": "Momen Kami",
      "gallery.title": "Galeri",
      "rsvp.kicker": "Kabar dari Anda",
      "rsvp.title": "Konfirmasi Kehadiran",
      "rsvp.intro": "Mohon isi konfirmasi di bawah ini. Pesan akan disiapkan untuk dikirim melalui WhatsApp.",
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
      "preview.message": "This preview uses fictional names, dates, venues, and contact details. Do not share it with guests.",
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
      "gallery.kicker": "Our Moments",
      "gallery.title": "Gallery",
      "rsvp.kicker": "A note from you",
      "rsvp.title": "Please RSVP",
      "rsvp.intro": "Please fill in your response below. Your message will be prepared for WhatsApp.",
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
      const time = formatDate(event.startsAt, { weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
      const mapUrl = safeMapUrl(event.mapUrl);

      const card = document.createElement("article");
      card.className = "event-card";
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
      image.alt = localized(photo.alt, language, language === "id" ? "Foto pasangan" : "A photo of the couple");
      image.loading = "lazy";
      figure.appendChild(image);
      galleryGrid.appendChild(figure);
    });
    gallery.hidden = galleryGrid.childElementCount === 0;
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
    const cover = byId("cover");
    const site = byId("site");
    if (cover) cover.hidden = true;
    if (site) site.hidden = false;
    const hero = byId("home");
    if (hero) {
      hero.setAttribute("tabindex", "-1");
      hero.focus({ preventScroll: true });
      hero.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
  }

  const previewBanner = byId("previewBanner");
  if (previewBanner) previewBanner.hidden = !DATA.previewMode;
  document.querySelectorAll("[data-language]").forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-language"));
    });
  });
  byId("openInvitation").addEventListener("click", openInvitation);

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
