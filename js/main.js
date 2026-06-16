/* ============================================================
   Multica AI — Interactions
   ============================================================ */
(function () {
  "use strict";

  /* ============================================================
     Internationalization (TH / EN)
     ============================================================ */
  var translations = {
    th: {
      "nav.features": "ฟีเจอร์",
      "nav.how": "วิธีใช้งาน",
      "nav.pricing": "ราคา",
      "nav.faq": "คำถามที่พบบ่อย",
      "nav.gallery": "แกลเลอรี",
      "nav.cta": "เริ่มใช้งานฟรี",
      "hero.badge": "⚡ ขับเคลื่อนด้วย Claude Opus 4.8",
      "hero.title": 'เปลี่ยนงานที่ซ้ำซาก<br />ให้กลายเป็น <span class="gradient-text">ระบบอัตโนมัติอัจฉริยะ</span>',
      "hero.sub": "Multica AI คือแพลตฟอร์มที่รวมพลัง AI เข้ากับ workflow ของคุณ วิเคราะห์ข้อมูล ตอบลูกค้า และตัดสินใจได้แม่นยำขึ้น — ภายในไม่กี่นาที",
      "hero.ctaPrimary": "เริ่มต้นใช้งานฟรี →",
      "hero.ctaSecondary": "ดูวิธีการทำงาน",
      "hero.stat1": "Uptime",
      "hero.stat2": "ธุรกิจที่ใช้งาน",
      "hero.stat3": "งานที่ประมวลผล",
      "features.heading": "ทุกสิ่งที่ทีมคุณต้องการ ในที่เดียว",
      "features.sub": "เครื่องมือครบชุดที่ออกแบบมาเพื่อให้คุณโฟกัสกับงานที่สำคัญจริงๆ",
      "features.f1.title": "AI Reasoning",
      "features.f1.body": "โมเดลภาษาที่เข้าใจบริบทธุรกิจของคุณ ตอบคำถามและสรุปข้อมูลได้อย่างแม่นยำ",
      "features.f2.title": "Workflow Automation",
      "features.f2.body": "เชื่อมต่อทุกขั้นตอนการทำงานแบบ no-code ตั้งค่าครั้งเดียว ทำงานได้ตลอด 24 ชม.",
      "features.f3.title": "Realtime Analytics",
      "features.f3.body": "แดชบอร์ดที่อัปเดตทันที เห็นภาพรวมและเจาะลึกได้ในคลิกเดียว",
      "features.f4.title": "Enterprise Security",
      "features.f4.body": "เข้ารหัสระดับธนาคาร พร้อมการควบคุมสิทธิ์ละเอียดและ audit log ครบถ้วน",
      "features.f5.title": "100+ Integrations",
      "features.f5.body": "เชื่อมต่อกับเครื่องมือที่คุณใช้อยู่แล้ว ทั้ง Slack, Notion, Google และอีกมากมาย",
      "features.f6.title": "Deploy in Minutes",
      "features.f6.body": "เริ่มต้นได้ทันทีโดยไม่ต้องเขียนโค้ด พร้อมเทมเพลตสำเร็จรูปให้เลือกใช้",
      "how.heading": "เริ่มต้นได้ใน 3 ขั้นตอน",
      "how.s1.title": "เชื่อมต่อข้อมูล",
      "how.s1.body": "นำเข้าข้อมูลจากแหล่งที่คุณใช้ ทั้งไฟล์ ฐานข้อมูล หรือ API",
      "how.s2.title": "ออกแบบ Workflow",
      "how.s2.body": "ลาก-วางขั้นตอนการทำงาน แล้วให้ AI จัดการส่วนที่เหลือ",
      "how.s3.title": "ปล่อยให้ทำงาน",
      "how.s3.body": "ระบบทำงานอัตโนมัติ พร้อมรายงานผลและแจ้งเตือนแบบเรียลไทม์",
      "gallery.heading": "เห็นภาพการทำงานจริงของแพลตฟอร์ม",
      "gallery.sub": "ตัวอย่างหน้าจอและการใช้งานจริงของ Multica AI",
      "gallery.cap1": "แดชบอร์ดวิเคราะห์ข้อมูลแบบเรียลไทม์",
      "gallery.cap2": "ระบบ AI อัตโนมัติอัจฉริยะ",
      "gallery.cap3": "ออกแบบ Workflow แบบ no-code",
      "gallery.cap4": "รายงานเชิงลึกสำหรับธุรกิจ",
      "gallery.cap5": "ทำงานร่วมกันได้ทั้งทีม",
      "gallery.cap6": "ผู้ช่วย AI ที่พร้อมตลอด 24 ชม.",
      "pricing.heading": "ราคาที่โปร่งใส เลือกได้ตามการใช้งาน",
      "pricing.perMonth": "/เดือน",
      "pricing.popular": "ยอดนิยม",
      "pricing.starter.l1": "1,000 งาน/เดือน",
      "pricing.starter.l2": "3 Workflows",
      "pricing.starter.l3": "Community support",
      "pricing.starter.cta": "เริ่มฟรี",
      "pricing.pro.l1": "50,000 งาน/เดือน",
      "pricing.pro.l2": "Workflows ไม่จำกัด",
      "pricing.pro.l3": "Priority support",
      "pricing.pro.l4": "Advanced analytics",
      "pricing.pro.cta": "เลือกแพ็กเกจนี้",
      "pricing.enterprise.amount": "ติดต่อเรา",
      "pricing.enterprise.l1": "งานไม่จำกัด",
      "pricing.enterprise.l2": "SLA & Dedicated support",
      "pricing.enterprise.l3": "SSO & ความปลอดภัยขั้นสูง",
      "pricing.enterprise.cta": "ติดต่อฝ่ายขาย",
      "faq.heading": "คำถามที่พบบ่อย",
      "faq.q1": "ต้องมีความรู้ด้านโปรแกรมมิ่งไหม?",
      "faq.a1": "ไม่จำเป็นเลยครับ Multica AI ออกแบบมาให้ใช้งานแบบ no-code ลาก-วางได้ทันที",
      "faq.q2": "ทดลองใช้ฟรีได้นานแค่ไหน?",
      "faq.a2": "แพ็กเกจ Starter ใช้งานได้ฟรีตลอด ไม่มีค่าใช้จ่ายแอบแฝง อัปเกรดเมื่อพร้อม",
      "faq.q3": "ข้อมูลของเราปลอดภัยหรือไม่?",
      "faq.a3": "เราเข้ารหัสข้อมูลทั้งระหว่างส่งและจัดเก็บ พร้อมมาตรฐานความปลอดภัยระดับองค์กร",
      "faq.q4": "ยกเลิกได้ตลอดเวลาไหม?",
      "faq.a4": "ได้ครับ คุณสามารถยกเลิกหรือเปลี่ยนแพ็กเกจได้ทุกเมื่อ ไม่มีสัญญาผูกมัด",
      "cta.heading": "พร้อมเปลี่ยนวิธีทำงานของคุณแล้วหรือยัง?",
      "cta.sub": "เริ่มต้นฟรีวันนี้ ไม่ต้องใช้บัตรเครดิต",
      "cta.placeholder": "กรอกอีเมลของคุณ",
      "cta.button": "เริ่มใช้งานฟรี",
      "cta.invalid": "กรุณากรอกอีเมลให้ถูกต้อง",
      "cta.success": "🎉 ขอบคุณ! เราส่งลิงก์เริ่มต้นใช้งานไปที่ {email} แล้ว",
      "footer.tagline": "แพลตฟอร์ม AI สำหรับการทำงานอัตโนมัติอัจฉริยะ",
      "footer.col1": "ผลิตภัณฑ์",
      "footer.col2": "บริษัท",
      "footer.col3": "ช่วยเหลือ",
      "footer.about": "เกี่ยวกับเรา",
      "footer.blog": "บล็อก",
      "footer.careers": "ร่วมงานกับเรา",
      "footer.contact": "ติดต่อ",
      "footer.docs": "เอกสาร",
      "footer.rights": '© <span id="year"></span> Multica AI. สงวนลิขสิทธิ์.',
      "footer.madein": "สร้างด้วย ❤️ ในประเทศไทย",
      "aria.toTop": "กลับขึ้นบน"
    },
    en: {
      "nav.features": "Features",
      "nav.how": "How it works",
      "nav.pricing": "Pricing",
      "nav.faq": "FAQ",
      "nav.gallery": "Gallery",
      "nav.cta": "Get started free",
      "hero.badge": "⚡ Powered by Claude Opus 4.8",
      "hero.title": 'Turn repetitive work<br />into <span class="gradient-text">intelligent automation</span>',
      "hero.sub": "Multica AI is the platform that brings AI into your workflow — analyze data, respond to customers, and make sharper decisions in just minutes.",
      "hero.ctaPrimary": "Start free →",
      "hero.ctaSecondary": "See how it works",
      "hero.stat1": "Uptime",
      "hero.stat2": "Businesses using it",
      "hero.stat3": "Tasks processed",
      "features.heading": "Everything your team needs, in one place",
      "features.sub": "A complete toolkit designed to let you focus on the work that truly matters.",
      "features.f1.title": "AI Reasoning",
      "features.f1.body": "A language model that understands your business context, answering questions and summarizing data with precision.",
      "features.f2.title": "Workflow Automation",
      "features.f2.body": "Connect every step of your process with no code. Set it up once and it runs 24/7.",
      "features.f3.title": "Realtime Analytics",
      "features.f3.body": "Dashboards that update instantly — see the big picture and drill down in a single click.",
      "features.f4.title": "Enterprise Security",
      "features.f4.body": "Bank-grade encryption with fine-grained access control and complete audit logs.",
      "features.f5.title": "100+ Integrations",
      "features.f5.body": "Connect to the tools you already use — Slack, Notion, Google, and many more.",
      "features.f6.title": "Deploy in Minutes",
      "features.f6.body": "Get started instantly with no coding required, plus ready-made templates to choose from.",
      "how.heading": "Get started in 3 steps",
      "how.s1.title": "Connect your data",
      "how.s1.body": "Import data from your sources — files, databases, or APIs.",
      "how.s2.title": "Design your workflow",
      "how.s2.body": "Drag and drop your process steps, then let AI handle the rest.",
      "how.s3.title": "Let it run",
      "how.s3.body": "The system runs automatically, with real-time reports and notifications.",
      "gallery.heading": "See the platform in action",
      "gallery.sub": "Real screenshots and use cases of Multica AI.",
      "gallery.cap1": "Real-time analytics dashboard",
      "gallery.cap2": "Intelligent AI automation",
      "gallery.cap3": "No-code workflow builder",
      "gallery.cap4": "In-depth business insights",
      "gallery.cap5": "Collaborate across your whole team",
      "gallery.cap6": "An AI assistant available 24/7",
      "pricing.heading": "Transparent pricing, scaled to your usage",
      "pricing.perMonth": "/month",
      "pricing.popular": "Popular",
      "pricing.starter.l1": "1,000 tasks/month",
      "pricing.starter.l2": "3 Workflows",
      "pricing.starter.l3": "Community support",
      "pricing.starter.cta": "Start free",
      "pricing.pro.l1": "50,000 tasks/month",
      "pricing.pro.l2": "Unlimited workflows",
      "pricing.pro.l3": "Priority support",
      "pricing.pro.l4": "Advanced analytics",
      "pricing.pro.cta": "Choose this plan",
      "pricing.enterprise.amount": "Contact us",
      "pricing.enterprise.l1": "Unlimited tasks",
      "pricing.enterprise.l2": "SLA & Dedicated support",
      "pricing.enterprise.l3": "SSO & advanced security",
      "pricing.enterprise.cta": "Contact sales",
      "faq.heading": "Frequently asked questions",
      "faq.q1": "Do I need programming knowledge?",
      "faq.a1": "Not at all. Multica AI is designed to be fully no-code — drag and drop and you're ready to go.",
      "faq.q2": "How long is the free trial?",
      "faq.a2": "The Starter plan is free forever with no hidden costs. Upgrade whenever you're ready.",
      "faq.q3": "Is our data secure?",
      "faq.a3": "We encrypt your data both in transit and at rest, meeting enterprise-grade security standards.",
      "faq.q4": "Can I cancel anytime?",
      "faq.a4": "Yes. You can cancel or change your plan at any time — no long-term contracts.",
      "cta.heading": "Ready to transform the way you work?",
      "cta.sub": "Start free today — no credit card required.",
      "cta.placeholder": "Enter your email",
      "cta.button": "Get started free",
      "cta.invalid": "Please enter a valid email address",
      "cta.success": "🎉 Thanks! We've sent your getting-started link to {email}",
      "footer.tagline": "The AI platform for intelligent work automation.",
      "footer.col1": "Product",
      "footer.col2": "Company",
      "footer.col3": "Support",
      "footer.about": "About us",
      "footer.blog": "Blog",
      "footer.careers": "Careers",
      "footer.contact": "Contact",
      "footer.docs": "Docs",
      "footer.rights": '© <span id="year"></span> Multica AI. All rights reserved.',
      "footer.madein": "Made with ❤️ in Thailand",
      "aria.toTop": "Back to top"
    }
  };

  var STORAGE_KEY = "multica_lang";
  var currentLang = "th";

  function t(key) {
    var dict = translations[currentLang] || translations.th;
    return dict[key] != null ? dict[key] : key;
  }

  function setYear() {
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function applyLang(lang) {
    if (!translations[lang]) lang = "th";
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);

    // textContent translations
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n"));
      if (val) el.textContent = val;
    });
    // innerHTML translations (for markup like <br>, <span>)
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n-html"));
      if (val) el.innerHTML = val;
    });
    // placeholder translations
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n-placeholder"));
      if (val) el.setAttribute("placeholder", val);
    });
    // aria-label translations
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n-aria"));
      if (val) el.setAttribute("aria-label", val);
    });

    // The footer year lives inside a data-i18n-html string, so re-inject it.
    setYear();

    // Switch button shows the language you can switch TO.
    var label = document.getElementById("langLabel");
    if (label) label.textContent = lang === "th" ? "EN" : "ไทย";

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  // Initial language: saved preference, else document default (th).
  var saved;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  applyLang(saved || document.documentElement.getAttribute("lang") || "th");

  var langSwitch = document.getElementById("langSwitch");
  if (langSwitch) {
    langSwitch.addEventListener("click", function () {
      applyLang(currentLang === "th" ? "en" : "th");
    });
  }

  /* ---- Navbar: shrink/blur on scroll ---- */
  var nav = document.getElementById("nav");
  var toTop = document.getElementById("toTop");
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle("scrolled", y > 20);
    toTop.classList.toggle("show", y > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu toggle ---- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      toggle.classList.remove("open");
    }
  });

  /* ---- Back to top ---- */
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---- Animated stat counters ---- */
  var counters = document.querySelectorAll(".stat strong[data-count]");
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var decimals = (target % 1 !== 0) ? 1 : 0;
    var start = 0, duration = 1600, startTime = null;
    function tick(now) {
      if (!startTime) startTime = now;
      var p = Math.min((now - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      var val = start + (target - start) * eased;
      el.textContent = val.toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ("IntersectionObserver" in window) {
    var statIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            statIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) { statIO.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---- FAQ accordion ---- */
  var faqList = document.getElementById("faqList");
  if (faqList) {
    faqList.addEventListener("click", function (e) {
      var btn = e.target.closest(".faq__q");
      if (!btn) return;
      var item = btn.parentElement;
      var answer = item.querySelector(".faq__a");
      var isOpen = item.classList.toggle("open");
      answer.style.maxHeight = isOpen ? answer.scrollHeight + "px" : null;
    });
  }

  /* ---- CTA email form ---- */
  var form = document.getElementById("ctaForm");
  var note = document.getElementById("ctaNote");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.getElementById("ctaEmail").value.trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!valid) {
        note.style.color = "#ff8aa0";
        note.textContent = t("cta.invalid");
        return;
      }
      note.style.color = "";
      note.textContent = t("cta.success").replace("{email}", email);
      form.reset();
    });
  }
})();
