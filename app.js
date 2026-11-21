/**
 * LegalMind — Core Application Logic
 * Full Bilingual Engine: Uzbekistan Legal Codes & UN Human Rights
 */

const state = {
  lang: localStorage.getItem('legalmind_lang') || 'uz',
  activeTab: 'home',
  activeCodeFilter: 'hr'
};

const libraryData = {
  hr: [
    {
      num: "1-modda / Article 1",
      titleUz: "Erkinlik va Tenglik",
      titleEn: "Right to Equality & Dignity",
      bodyUz: "Barcha insonlar erkin, qadr-qimmat va huquqlarda teng bo‘lib tug‘iladilar. Ularga aql va vijdon ato qilingan bo‘lib, bir-birlariga birodarlik ruhida munosabatda bo‘lishlari lozim.",
      bodyEn: "All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience."
    },
    {
      num: "3-modda / Article 3",
      titleUz: "Yashash va Shaxsiy Daxlsizlik Huquqi",
      titleEn: "Right to Life, Liberty, and Security",
      bodyUz: "Har bir inson yashash, erkinlik va shaxsiy daxlsizlik huquqiga egadir.",
      bodyEn: "Everyone has the right to life, liberty, and security of person."
    },
    {
      num: "5-modda / Article 5",
      titleUz: "Qiynoqlarni Mutlaq Taqiqlash",
      titleEn: "Freedom from Torture",
      bodyUz: "Hech kim qiynoqqa yoki shafqatsiz, g‘ayriinsoniy yoxud qadr-qimmatni kamsituvchi muomala va jazoga duchor etilishi mumkin emas.",
      bodyEn: "No one shall be subjected to torture or to cruel, inhuman or degrading treatment."
    },
    {
      num: "19-modda / Article 19",
      titleUz: "Fikr va So‘z Erkinligi",
      titleEn: "Freedom of Expression and Opinion",
      bodyUz: "Har bir inson fikr va so‘z erkinligi huquqiga ega; axborot va g‘oyalarni har qanday vositalar bilan izlash va tarqatish kafolatlanadi.",
      bodyEn: "Everyone has the right to freedom of opinion and expression without interference."
    },
    {
      num: "23-modda / Article 23",
      titleUz: "Adolatli Mehnat va Teng Haq Olish",
      titleEn: "Right to Fair Work and Equal Remuneration",
      bodyUz: "Har bir inson erkin mehnat qilish, adolatli va xavfsiz sharoitda ishlash hamda teng mehnat uchun teng haq olish huquqiga ega.",
      bodyEn: "Everyone has the right to work, favorable conditions, and equal pay for equal work."
    }
  ],
  const: [
    {
      num: "1-modda / Article 1",
      titleUz: "Suveren, Huquqiy va Ijtimoiy Davlat",
      titleEn: "Sovereign and Legal Republic",
      bodyUz: "O‘zbekiston — suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat.",
      bodyEn: "Uzbekistan is a sovereign, democratic, legal, social and secular state."
    },
    {
      num: "13-modda / Article 13",
      titleUz: "Inson Qadri — Eng Oliy Qadriyat",
      titleEn: "Human Dignity as Supreme Value",
      bodyUz: "Inson, uning hayoti, erkinligi, sha'ni, qadr-qimmati va boshqa daxlsiz huquqlari oliy qadriyat hisoblanadi.",
      bodyEn: "Human life, liberty, honor, dignity, and inalienable rights are the supreme value."
    },
    {
      num: "31-modda / Article 31",
      titleUz: "Shaxsiy Daxlsizlik va Ma'lumotlar Himoyasi",
      titleEn: "Inviolability of Private Life",
      bodyUz: "Har kim o‘z sha'ni va qadr-qimmati, shaxsiy hayotining daxlsizligi va shaxsiy ma'lumotlarining himoya qilinishi huquqiga ega.",
      bodyEn: "Everyone has the right to inviolability of private life, honor, and personal data."
    },
    {
      num: "42-modda / Article 42",
      titleUz: "Erkin Mehnat Kafolati",
      titleEn: "Freedom of Labor",
      bodyUz: "Har kim munosib mehnat qilish, erkin ish tanlash, xavfsiz mehnat sharoiti va adolatli haq olish huquqiga ega.",
      bodyEn: "Everyone has the right to decent work, free choice of profession, and fair pay."
    }
  ],
  labor: [
    {
      num: "161-modda / Article 161",
      titleUz: "Ishdan bo‘shatishning qat'iy asoslari",
      titleEn: "Statutory Termination Safeguards",
      bodyUz: "Xodim faqat qonunda ko‘rsatilgan asoslar bilan, 2 oy oldin yozma ogohlantirish va ishdan bo‘shatish nafaqasi to‘lanishi sharti bilan bo‘shatilishi mumkin.",
      bodyEn: "Termination by employer requires strict statutory grounds and advance written notice with severance."
    },
    {
      num: "181-modda / Article 181",
      titleUz: "Ish vaqtining 40 soatlik me'yori",
      titleEn: "Standard 40-Hour Work Week",
      bodyUz: "Haftalik ish vaqti 40 soatdan oshishi mumkin emas. 50 soatlik majburiy ish vaqti belgilash qonunga ziddir.",
      bodyEn: "Weekly working hours cannot exceed 40 hours under any standard agreement."
    },
    {
      num: "269-modda / Article 269",
      titleUz: "Oylikdan jarima undirish taqiqi",
      titleEn: "Prohibition of Monetary Deductions",
      bodyUz: "Xodimdan intizomiy jazo sifatida oyligidan pul ushlab qolish qat'iyan taqiqlanadi.",
      bodyEn: "Direct financial penalty deductions from wages are strictly prohibited."
    }
  ],
  civil: [
    {
      num: "31-modda / Article 31",
      titleUz: "Bedarak yo‘qolgan deb topish",
      titleEn: "Missing Person Declaration",
      bodyUz: "Shaxs yashash joyida 1 yil davomida bo‘lmasa, sud uni bedarak yo‘qolgan deb topishi mumkin.",
      bodyEn: "A person whose whereabouts are unknown for 1 year may be judicially declared missing."
    },
    {
      num: "600-modda / Article 600",
      titleUz: "Ijara munosabatlari va depozit",
      titleEn: "Lease Rights and Security Deposits",
      bodyUz: "Ijarachining depoziti faqat haqiqiy moddiy zarar yetkazilgandagina ushlab qolinishi mumkin.",
      bodyEn: "Security deposits strictly indemnify proven property destruction."
    },
    {
      num: "1023-modda / Article 1023",
      titleUz: "Asossiz boylik orttirish",
      titleEn: "Unjust Enrichment",
      bodyUz: "Qonuniy asoslarsiz pulni saqlab qolgan shaxs uni darhol haqiqiy egasiga qaytarishi shart.",
      bodyEn: "Unjustly withheld funds must be immediately restored to the rightful party."
    }
  ],
  family: [
    {
      num: "96-modda / Article 96",
      titleUz: "Ota-onaning bolalarga ta'minot berish majburiyati",
      titleEn: "Parental Child Support Obligation",
      bodyUz: "Ota-ona voyaga yetmagan bolalariga aliment to‘lashi shart.",
      bodyEn: "Parents must provide financial maintenance for minor children."
    },
    {
      num: "99-modda / Article 99",
      titleUz: "Aliment miqdori",
      titleEn: "Statutory Child Support Scale",
      bodyUz: "1 bola uchun — daromadning 1/4 qismi, 2 bola uchun — 1/3 qismi, 3+ bola uchun — 1/2 qismi.",
      bodyEn: "1/4th for 1 child, 1/3rd for 2 children, 1/2 for 3 or more children."
    }
  ],
  crim: [
    {
      num: "31-modda / Article 31",
      titleUz: "Zaruriy mudofaa (O‘zini himoya qilish)",
      titleEn: "Lawful Self-Defense",
      bodyUz: "Noqonuniy hujumdan o‘zini himoya qilish chog‘ida tajovuzkorga yetkazilgan zarar jinoyat hisoblanmaydi.",
      bodyEn: "Harm inflicted during lawful defense against unlawful attack incurs no criminal guilt."
    },
    {
      num: "168-modda / Article 168",
      titleUz: "Firibgarlik va kiberjinoyat",
      titleEn: "Fraud and Digital Theft",
      bodyUz: "Bank kartalaridan pul o‘g‘irlash va aldov yo‘li bilan mulkni egallash og‘ir jinoyatdir.",
      bodyEn: "Misappropriation of funds via electronic cards is prosecuted as aggravated fraud."
    }
  ]
};

const langText = {
  uz: {
    banner: "O‘zbekiston qonunlari va BMT Inson Huquqlari asosida ishlovchi ochiq AI platformasi",
    subtitle: "AI Huquqiy Hamkor",
    navHome: "Bosh sahifa",
    navAdvisor: "Huquqiy Maslahatchi",
    navCodes: "Kodekslar & Inson Huquqlari",
    navAuditor: "Shartnoma Auditi",
    heroBadge: "O‘zbekiston Qonunchiligi & BMT Inson Huquqlari",
    heroTitle1: "Adolatli huquqiy yordam —",
    heroTitle2: "Har bir inson uchun erkin va ochiq.",
    heroDesc: "LegalMind — O‘zbekistonning barcha asosiy kodekslari, BMT Inson Huquqlari Umumjahon Deklaratsiyasi va shartnomalar tahlilini birlashtirgan sun'iy intellekt ekotizimi.",
    heroBtnAdvisor: "Maslahatchi bilan suhbat",
    heroBtnCodes: "Barcha Kodekslar & Inson Huquqlari",
    heroBtnAuditor: "Shartnomani tekshirish",
    advisorTitle: "Huquqiy Maslahatchi & Aniq Moddalar Tahlili",
    advisorDesc: "O‘zbekiston Kodekslari va xalqaro me'yorlar bo‘yicha istalgan savolingizga javob oling.",
    btnAsk: "So‘rash",
    chatPlaceholder: "Istalgan modda yoki savolingizni yozing (masalan: '31-modda', 'Inson huquqlari 1', 'Aliment')...",
    codesTitle: "Kodekslar Kutubxonasi & Inson Huquqlari",
    codesDesc: "BMT Umumjahon Deklaratsiyasi va O‘zbekiston Respublikasi barcha asosiy qonunchilik to‘plamlari.",
    auditorTitle: "Shartnomalar Auditi va Xavf Analizatori",
    auditorDesc: "Shartnoma bandlaridagi yashirin xavflarni bir soniyada fosh qiling.",
    sampleLabel: "Tayyor namunalar:",
    btnAnalyze: "Xavflarni Tahlil Qilish",
    topics: [
      { label: "🌍 Inson huquqlari 1-modda", q: "Inson huquqlari umumjahon deklaratsiyasining 1-moddasi nima?" },
      { label: "📜 31-modda barcha kodekslarda", q: "31-modda qaysi va nima haqida?" },
      { label: "💼 Ishdan bo'shatish (161-m)", q: "Mehnat kodeksining 161-moddasi ishdan bo'shatish" },
      { label: "👶 Aliment miqdori (99-m)", q: "Aliment miqdori qanday belgilanadi?" },
      { label: "🚗 50% GAI Jarima", q: "Jarima 50 foiz chegirma bilan to'lash tartibi" }
    ]
  },
  en: {
    banner: "Open AI ecosystem based on Uzbekistan Legislation and UN Human Rights",
    subtitle: "AI Legal Intelligence Partner",
    navHome: "Home",
    navAdvisor: "Legal Advisor",
    navCodes: "Codes & Human Rights",
    navAuditor: "Contract Audit",
    heroBadge: "Uzbekistan Legislation & UN Human Rights",
    heroTitle1: "Fair Legal Assistance —",
    heroTitle2: "Accessible and Free for Every Individual.",
    heroDesc: "LegalMind unites Uzbekistan's national codes, the UN Universal Declaration of Human Rights, and automated contract auditing into a transparent AI ecosystem.",
    heroBtnAdvisor: "Consult AI Advisor",
    heroBtnCodes: "Explore Codes & Human Rights",
    heroBtnAuditor: "Audit Contract",
    advisorTitle: "Legal Advisor & Statutory Article Explorer",
    advisorDesc: "Grounded guidance on national codes and international human rights treaties.",
    btnAsk: "Ask",
    chatPlaceholder: "Enter any article or query (e.g. 'Article 31', 'Human Rights 1', 'Child Support')...",
    codesTitle: "Legal Codes Library & Human Rights",
    codesDesc: "UN Universal Declaration of Human Rights and official Uzbekistan Legal Codes.",
    auditorTitle: "Contract Risk Analyzer & Clause Audit",
    auditorDesc: "Expose unilateral penalty traps and unfair clauses in seconds.",
    sampleLabel: "Sample Agreements:",
    btnAnalyze: "Analyze Risks",
    topics: [
      { label: "🌍 Human Rights Article 1", q: "What is Article 1 of the Universal Declaration of Human Rights?" },
      { label: "📜 Article 31 across codes", q: "What is Article 31 across Uzbek legal codes?" },
      { label: "💼 Labor Termination (Art 161)", q: "What are the rules under Article 161 of the Labor Code?" },
      { label: "🏠 Rental Deposit Rights", q: "Can a landlord arbitrarily forfeit my rental deposit in Tashkent?" }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  applyLanguage(state.lang);
  initChat();
  filterDesktopCode('hr');
});

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('legalmind_lang', lang);
  applyLanguage(lang);
  initChat();
  filterDesktopCode(state.activeCodeFilter);
}

function applyLanguage(lang) {
  const d = langText[lang];
  const bUz = document.getElementById('lang-btn-uz');
  const bEn = document.getElementById('lang-btn-en');
  if (bUz && bEn) {
    if (lang === 'uz') {
      bUz.className = "px-2.5 py-1 text-xs font-semibold rounded transition-all bg-blue-600 text-white";
      bEn.className = "px-2.5 py-1 text-xs font-semibold rounded transition-all text-slate-400 hover:text-slate-200";
    } else {
      bUz.className = "px-2.5 py-1 text-xs font-semibold rounded transition-all text-slate-400 hover:text-slate-200";
      bEn.className = "px-2.5 py-1 text-xs font-semibold rounded transition-all bg-blue-600 text-white";
    }
  }

  const map = {
    'banner-text': d.banner,
    'nav-subtitle': d.subtitle,
    'nav-home': d.navHome,
    'nav-advisor': d.navAdvisor,
    'nav-codes': d.navCodes,
    'nav-auditor': d.navAuditor,
    'hero-badge': d.heroBadge,
    'hero-title-1': d.heroTitle1,
    'hero-title-2': d.heroTitle2,
    'hero-desc': d.heroDesc,
    'hero-btn-advisor': d.heroBtnAdvisor,
    'hero-btn-codes': d.heroBtnCodes,
    'hero-btn-auditor': d.heroBtnAuditor,
    'advisor-header-title': d.advisorTitle,
    'advisor-header-desc': d.advisorDesc,
    'btn-send-label': d.btnAsk,
    'codes-header-title': d.codesTitle,
    'codes-header-desc': d.codesDesc,
    'auditor-header-title': d.auditorTitle,
    'auditor-header-desc': d.auditorDesc,
    'sample-contract-label': d.sampleLabel,
    'btn-analyze-label': d.btnAnalyze
  };

  for (const [id, text] of Object.entries(map)) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  const chatIn = document.getElementById('chat-input');
  if (chatIn) chatIn.placeholder = d.chatPlaceholder;

  // Topics
  const topCont = document.getElementById('desktop-topics-container');
  if (topCont) {
    topCont.innerHTML = `<span class="text-slate-500 self-center font-medium">${lang === 'uz' ? 'Mavzular:' : 'Topics:'}</span>` +
      d.topics.map(t => `<button onclick="setChatInput('${t.q.replace(/'/g, "\\'")}')" class="px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all">${t.label}</button>`).join('');
  }
}

function switchTab(tabId) {
  state.activeTab = tabId;
  ['home', 'advisor', 'codes', 'auditor'].forEach(tab => {
    const sec = document.getElementById(`tab-content-${tab}`);
    const btn = document.getElementById(`tab-btn-${tab}`);
    if (sec) {
      if (tab === tabId) sec.classList.remove('hidden');
      else sec.classList.add('hidden');
    }
    if (btn) {
      if (tab === tabId) btn.className = "nav-tab px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all text-blue-400 bg-blue-500/10";
      else btn.className = "nav-tab px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all text-slate-400 hover:text-slate-200";
    }
  });

  if (window.lucide) lucide.createIcons();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterDesktopCode(code) {
  state.activeCodeFilter = code;
  document.querySelectorAll('.code-pill-btn').forEach(btn => {
    if (btn.dataset.code === code) {
      btn.className = "px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold code-pill-btn";
    } else {
      btn.className = "px-3 py-1.5 rounded-lg text-slate-400 hover:text-white code-pill-btn";
    }
  });

  const cont = document.getElementById('desktop-articles-grid');
  if (!cont) return;

  const items = libraryData[code] || [];
  const isUz = state.lang === 'uz';

  cont.innerHTML = items.map(item => `
    <div class="glass-card rounded-2xl p-5 border border-slate-800 space-y-2">
      <div class="flex items-center justify-between">
        <span class="font-bold text-blue-400 text-sm">${item.num}</span>
        <span class="text-[11px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 font-semibold">${isUz ? item.titleUz : item.titleEn}</span>
      </div>
      <p class="text-xs text-slate-300 leading-relaxed">
        ${isUz ? item.bodyUz : item.bodyEn}
      </p>
    </div>
  `).join('');
}

function initChat() {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  const isUz = state.lang === 'uz';

  container.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
        <i data-lucide="scale" class="w-4 h-4"></i>
      </div>
      <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-slate-200 max-w-2xl leading-relaxed">
        ${isUz 
          ? "Assalomu alaykum! Men <strong>LegalMind</strong> — O‘zbekiston Kodekslari va BMT Inson Huquqlari bo‘yicha AI maslahatchiman. Istalgan savolingizni yoki modda raqamini yozing!"
          : "Hello! I am <strong>LegalMind</strong> — your legal advisor on Uzbekistan Law and UN Human Rights Treaties. Enter any statutory article or legal inquiry below!"}
      </div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

function setChatInput(text) {
  const input = document.getElementById('chat-input');
  if (input) {
    input.value = text;
    handleChatSubmit(new Event('submit'));
  }
}

function handleChatSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById('chat-input');
  const q = input.value.trim();
  if (!q) return;
  input.value = '';

  const container = document.getElementById('chat-messages');

  // User msg
  const u = document.createElement('div');
  u.className = "flex items-start justify-end gap-3";
  u.innerHTML = `
    <div class="p-3.5 rounded-2xl bg-blue-600 text-white text-sm max-w-xl leading-relaxed shadow-md">
      ${escapeHtml(q)}
    </div>
  `;
  container.appendChild(u);

  // AI response
  const reply = generateSmartAnswer(q);
  const a = document.createElement('div');
  a.className = "flex items-start gap-3";
  a.innerHTML = `
    <div class="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
      <i data-lucide="scale" class="w-4 h-4"></i>
    </div>
    <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-slate-200 max-w-2xl leading-relaxed space-y-2">
      ${reply.replace(/\n/g, '<br>')}
    </div>
  `;
  container.appendChild(a);
  container.scrollTop = container.scrollHeight;
  if (window.lucide) lucide.createIcons();
}

function generateSmartAnswer(q) {
  const s = q.toLowerCase();
  const isUz = state.lang === 'uz';

  if (s.includes('inson huquq') || s.includes('human right') || s.includes('deklaratsiya')) {
    return isUz
      ? "🌍 **BMT Inson Huquqlari Umumjahon Deklaratsiyasi:**\n\n" +
        "* **1-modda:** Barcha insonlar erkin, qadr-qimmat va huquqlarda teng bo‘lib tug‘iladilar.\n" +
        "* **3-modda:** Yashash, erkinlik va shaxsiy daxlsizlik huquqi.\n" +
        "* **5-modda:** Qiynoqlar va inson qadrini kamsituvchi muomalalar qat'iyan taqiqlanadi.\n" +
        "* **19-modda:** Fikr va so‘z erkinligi kafolatlangan.\n" +
        "* **23-modda:** Erkin mehnat qilish, adolatli mehnat sharoiti va teng haq olish."
      : "🌍 **Universal Declaration of Human Rights (UN):**\n\n" +
        "* **Article 1:** All human beings are born free and equal in dignity and rights.\n" +
        "* **Article 3:** Inherent right to life, liberty and security.\n" +
        "* **Article 5:** Strict prohibition of torture and degrading punishment.\n" +
        "* **Article 19:** Freedom of opinion and expression.\n" +
        "* **Article 23:** Right to work, fair compensation, and equal pay.";
  }

  if (s.includes('31')) {
    return isUz
      ? "📖 **31-modda bo‘yicha O‘zbekiston Qonunchiligidagi asosiy me'yorlar:**\n\n" +
        "1. 🏛️ **Konstitutsiya 31-modda:** Shaxsiy daxlsizlik, oilaviy sir va shaxsiy ma'lumotlar himoyasi kafolati.\n" +
        "2. 💼 **Mehnat Kodeksi 31-modda:** Jamoa shartnomalarining taraflari.\n" +
        "3. ⚖️ **Fuqarolik Kodeksi 31-modda:** Fuqaroni bedarak yo‘qolgan deb topish (1 yil ma'lumot bo‘lmasa).\n" +
        "4. 🛡️ **Jinoyat Kodeksi 31-modda:** Zaruriy mudofaa (o‘zini noqonuniy tajovuzdan himoya qilish)."
      : "📖 **Article 31 across Legal Frameworks:**\n\n" +
        "1. 🏛️ **Constitution Art. 31:** Inviolability of private life, honor, and personal data protection.\n" +
        "2. 💼 **Labor Code Art. 31:** Parties to collective bargaining agreements.\n" +
        "3. ⚖️ **Civil Code Art. 31:** Judicial declaration of a missing person.\n" +
        "4. 🛡️ **Criminal Code Art. 31:** Lawful necessary self-defense without penal liability.";
  }

  if (s.includes('161')) {
    return isUz
      ? "💼 **Mehnat Kodeksining 161-moddasi:** Ish beruvchi xodimni o‘z xohishicha bo‘shata olmaydi. Faqat qat'iy asoslar (korxona tugatilishi, shtat qisqarishi, intizom buzilishi) bilan va 2 oy oldin ogohlantirib bo‘shatishi shart."
      : "💼 **Labor Code Article 161:** Arbitrary termination is strictly unlawful. Requires statutory grounds and advance written notice with severance.";
  }

  if (s.includes('aliment')) {
    return isUz
      ? "**Oila Kodeksining 96–99-moddalari:**\n1 bola uchun — 1/4 qism, 2 bola uchun — 1/3 qism, 3+ bola uchun — 1/2 qism daromad aliment sifatida undiriladi."
      : "**Family Code Articles 96–99:**\n1/4th of net income for 1 child, 1/3rd for 2 children, 1/2 for 3 or more children.";
  }

  return isUz
    ? `**Huquqiy Maslahat:** Siz so‘ragan masala O‘zbekiston qonunlari va Inson Huquqlari me'yorlariga asosan tartibga solinadi. Nizoni yechish uchun avval 10 kunlik yozma Talabnoma (Pretenziya) berish tavsiya etiladi.`
    : `**Legal Guidance:** Regulated under Uzbekistan Legal Codes and International Human Rights Treaties. Serving a 10-day formal demand letter (Pretenziya) is customary before litigation.`;
}

function loadSampleContract(type) {
  const isUz = state.lang === 'uz';
  const c = {
    labor: isUz
      ? "1-band. Xodim haftasiga 50 soat ishlaydi.\n2-band. Ish beruvchi ogohlantirishsiz xodimni darhol ishdan bo‘shatish huquqiga ega.\n3-band. Kech qolgan har daqiqa uchun oylikdan 100 000 so‘m jarima ushlab qolinadi."
      : "Section 1. Mandatory 50-hour work week without overtime.\nSection 2. Immediate termination without notice or severance.\nSection 3. Deducting 100,000 UZS from salary for every minute of tardiness.",
    freelance: isUz
      ? "Band 4. Frilanserning barcha shaxsiy o‘tmishdagi va kelajakdagi kodlari buyurtmachining cheksiz mulkiga aylanadi.\nBand 7. Buyurtmachi hech qanday sababsiz to‘lovni to‘xtatish huquqiga ega."
      : "Clause 4. All background IP and future libraries created by Freelancer become exclusive property of Client.\nClause 7. Client may withhold 100% of payment at sole discretion.",
    rent: isUz
      ? "3.1. Kvartira egasi ogohlantirishsiz istalgan vaqtda xonadonga kirish huquqiga ega.\n3.4. Ijarachining depozit puli har qanday holatda ham qaytarilmaydi."
      : "3.1. Landlord may enter leased premises at any time without notice.\n3.4. Security deposit is non-refundable under all circumstances."
  };
  const inp = document.getElementById('contract-input');
  if (inp) {
    inp.value = c[type];
    analyzeContract();
  }
}

function analyzeContract() {
  const text = document.getElementById('contract-input').value;
  const isUz = state.lang === 'uz';
  if (!text.trim()) return;

  document.getElementById('audit-placeholder').classList.add('hidden');
  document.getElementById('audit-results').classList.remove('hidden');

  const container = document.getElementById('audit-clauses-container');
  container.innerHTML = `
    <div class="p-3 rounded-xl bg-slate-900/90 border border-rose-500/30 space-y-1">
      <strong class="text-rose-400 text-xs">${isUz ? "❌ Noqonuniy Ish Vaqti (50 soat)" : "❌ Unlawful 50-Hour Work Week"}</strong>
      <p class="text-[11px] text-slate-300">${isUz ? "Mehnat Kodeksining 181-moddasiga ko‘ra, haftalik norma 40 soatdan oshishi mumkin emas." : "Article 181: Standard work week cannot exceed 40 hours."}</p>
    </div>
    <div class="p-3 rounded-xl bg-slate-900/90 border border-rose-500/30 space-y-1">
      <strong class="text-rose-400 text-xs">${isUz ? "❌ Oylikdan jarima ushlash" : "❌ Illegal Salary Deductions"}</strong>
      <p class="text-[11px] text-slate-300">${isUz ? "Mehnat Kodeksining 269-moddasi ish beruvchiga pul jarimasi solishni taqiqlaydi." : "Article 269: Monetary fines on wages are strictly prohibited."}</p>
    </div>
  `;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
