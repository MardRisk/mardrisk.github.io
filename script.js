const loader = document.getElementById('loader');
window.addEventListener('load', () => {
  if (loader) setTimeout(() => loader.classList.add('hide'), 1200);
});

const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });

  mobileNav.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      if (window.innerWidth <= 760 && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        menuToggle.classList.remove('active');
      }
    });
  });
}

const translations = {
  hy: {
    nav_home: 'Գլխավոր',
    nav_roadmap: 'Roadmap',
    nav_materials: 'Ֆինանսական նյութեր',
    nav_premium: 'Premium',
    try_now: 'Փորձել հիմա',
    hero_title: 'Քո ֆինանսական ռիսկը՝ պարզ, արագ և հասկանալի',
    hero_text: 'MardRisk AI-ը օգնում է հասկանալ քո ֆինանսական վիճակը, վերահսկել ծախսերը և ստանալ AI խորհրդատվություն՝ ավելի խելացի որոշումների համար։',
    view_roadmap: 'Տեսնել Roadmap-ը',
    stat_1: 'AI աջակցություն',
    stat_2: 'լեզու',
    stat_3: 'հաշվետվություններ',
    benefits_label: 'Հիմնական հնարավորություններ',
    benefits_title: 'Գեղեցիկ ներկայացված, հասկանալի ֆունկցիաներ',
    f1_title: 'Risk Score',
    f1_text: 'Ստացիր քո ֆինանսական ռիսկի գնահատականը վայրկյանների ընթացքում։',
    f2_title: 'Expense Tracking',
    f2_text: 'Գրանցիր ծախսերդ և հասկացիր որտեղ է գնում քո գումարը։',
    f3_title: 'Goals',
    f3_text: 'Սահմանիր ֆինանսական նպատակներ և հետևիր ընթացքին։',
    f4_title: 'AI Advice',
    f4_text: 'Ստացիր անհատական խորհուրդներ՝ քո տվյալների հիման վրա։',
    f5_title: 'Purchase Check',
    f5_text: 'Ստուգիր՝ արդյոք այս պահին ճիշտ է որևէ գնում կատարել։',
    f6_title: 'Reports',
    f6_text: 'Ստացիր պարզ և գեղեցիկ PDF հաշվետվություններ։',
    premium_title: 'Ընտրիր քեզ հարմար տարբերակը',
    premium_text: 'Սկսիր անվճար, հետո ակտիվացրու ավելի խորը վերլուծություն և անսահմանափակ օգտագործում։',
    cta_title: 'Սկսիր ավելի խելացի կառավարել քո ֆինանսները',
    cta_text: 'Միացիր MardRisk AI-ին և տես քո Risk Score-ը Telegram-ում։',
    telegram_btn: 'Բացել Telegram-ում',
    footer_roadmap: 'Roadmap',
    footer_materials: 'Ֆինանսական նյութեր',
    roadmap_label: 'ԱՊՐԱՆՔԻ ՃԱՆԱՊԱՐՀԱՅԻՆ ՔԱՐՏԵԶ',
    roadmap_title: 'Roadmap',
    roadmap_text: 'Աճի իրական և մաքուր ճանապարհային քարտեզ MardRisk AI-ի համար։',
    rm_q1_title: 'Core Experience-ի մեկնարկ',
    rm_q1_text: 'Telegram bot, risk score, expense tracking և բազմալեզու onboarding։',
    rm_q2_title: 'Խելացի հաշվետվություններ',
    rm_q2_text: 'Ավելի ուժեղ PDF հաշվետվություններ, շաբաթական insights և պարզ ամփոփումներ։',
    rm_q3_title: 'AI Planning Layer',
    rm_q3_text: 'Խորը AI խորհուրդներ, planning flows և ավելի ճշգրիտ ֆինանսական որոշումներ։',
    rm_q4_title: 'Platform Expansion',
    rm_q4_text: 'Web dashboard, premium tools և ավելի մեծ մասշտաբի աճ։',
    materials_label: 'ՖԻՆԱՆՍԱԿԱՆ ՆՅՈՒԹԵՐ',
    materials_title: 'Ֆինանսական նյութեր',
    materials_text: 'Օգտակար թեմաներ, որոնք կարող են լրացնել MardRisk AI-ի փորձը։',
    m1_title: 'Ինչպես կազմել բյուջե',
    m1_text: 'Սովորիր բաժանել եկամուտը, ծախսերը և խնայողությունները պարզ մեթոդով։',
    m2_title: 'Ինչպես վերահսկել պարտքերը',
    m2_text: 'Տես առաջնահերթություններ սահմանելու և պարտքային ճնշումը նվազեցնելու մոտեցումներ։',
    m3_title: 'Խելացի գնումներ',
    m3_text: 'Իմացիր, թե երբ է գնումը տրամաբանական, իսկ երբ՝ վտանգավոր ֆինանսական որոշում։',
    m4_title: 'Արտակարգ ֆոնդ',
    m4_text: 'Ինչու է կարևոր ունենալ պահուստ և ինչպես սկսել նույնիսկ փոքր գումարներից։',
    m5_title: 'Ֆինանսական կարգապահություն',
    m5_text: 'Փոքր սովորություններ, որոնք երկարաժամկետ մեծ տարբերություն են ստեղծում։',
    m6_title: 'Risk Score-ի իմաստը',
    m6_text: 'Հասկացիր, թե ինչ է նշանակում քո սքորը և ինչպես այն բարելավել։'
  },
  en: {
    nav_home: 'Home',
    nav_roadmap: 'Roadmap',
    nav_materials: 'Financial Materials',
    nav_premium: 'Premium',
    try_now: 'Try Now',
    hero_title: 'Your financial risk, shown clearly and fast',
    hero_text: 'MardRisk AI helps you understand your financial condition, manage spending, and get AI guidance for smarter decisions.',
    view_roadmap: 'View Roadmap',
    stat_1: 'AI support',
    stat_2: 'languages',
    stat_3: 'reports',
    benefits_label: 'Core Features',
    benefits_title: 'Beautifully presented product capabilities',
    f1_title: 'Risk Score',
    f1_text: 'Get your financial risk score in seconds.',
    f2_title: 'Expense Tracking',
    f2_text: 'Track spending and see where your money goes.',
    f3_title: 'Goals',
    f3_text: 'Set financial goals and follow your progress.',
    f4_title: 'AI Advice',
    f4_text: 'Receive personalized recommendations based on your data.',
    f5_title: 'Purchase Check',
    f5_text: 'Check whether a purchase makes sense right now.',
    f6_title: 'Reports',
    f6_text: 'Get simple and polished PDF reports.',
    premium_title: 'Choose the plan that fits you',
    premium_text: 'Start free, then unlock deeper analysis and unlimited use.',
    cta_title: 'Start managing your finances smarter',
    cta_text: 'Join MardRisk AI and see your Risk Score in Telegram.',
    telegram_btn: 'Open in Telegram',
    footer_roadmap: 'Roadmap',
    footer_materials: 'Financial Materials',
    roadmap_label: 'PRODUCT ROADMAP',
    roadmap_title: 'Roadmap',
    roadmap_text: 'A clean and realistic growth path for MardRisk AI.',
    rm_q1_title: 'Launch Core Experience',
    rm_q1_text: 'Telegram bot, risk score, expense tracking, and multilingual onboarding.',
    rm_q2_title: 'Smart Reports',
    rm_q2_text: 'Improved PDF reports, weekly insights, and clearer financial summaries.',
    rm_q3_title: 'AI Planning Layer',
    rm_q3_text: 'Deeper AI advice, planning flows, and stronger financial decisions.',
    rm_q4_title: 'Platform Expansion',
    rm_q4_text: 'Web dashboard, premium tools, and broader product scale.',
    materials_label: 'FINANCIAL MATERIALS',
    materials_title: 'Financial Materials',
    materials_text: 'Useful topics that can strengthen the MardRisk AI experience.',
    m1_title: 'How to Build a Budget',
    m1_text: 'Learn to divide income, expenses, and savings with a simple method.',
    m2_title: 'How to Control Debt',
    m2_text: 'See practical ways to set priorities and reduce debt pressure.',
    m3_title: 'Smarter Purchases',
    m3_text: 'Understand when a purchase is logical and when it becomes financially risky.',
    m4_title: 'Emergency Fund',
    m4_text: 'Why a reserve matters and how to start even with small amounts.',
    m5_title: 'Financial Discipline',
    m5_text: 'Small habits that create a major difference over time.',
    m6_title: 'Meaning of Risk Score',
    m6_text: 'Understand what your score means and how to improve it.'
  },
  ru: {
    nav_home: 'Главная',
    nav_roadmap: 'Roadmap',
    nav_materials: 'Финансовые материалы',
    nav_premium: 'Premium',
    try_now: 'Попробовать',
    hero_title: 'Ваш финансовый риск — понятно, быстро и наглядно',
    hero_text: 'MardRisk AI помогает понять ваше финансовое состояние, контролировать расходы и получать AI-рекомендации для более умных решений.',
    view_roadmap: 'Смотреть Roadmap',
    stat_1: 'AI поддержка',
    stat_2: 'языка',
    stat_3: 'отчеты',
    benefits_label: 'Основные возможности',
    benefits_title: 'Красиво показанные и понятные функции',
    f1_title: 'Risk Score',
    f1_text: 'Получите оценку финансового риска за секунды.',
    f2_title: 'Expense Tracking',
    f2_text: 'Записывайте расходы и понимайте, куда уходят деньги.',
    f3_title: 'Goals',
    f3_text: 'Ставьте финансовые цели и следите за прогрессом.',
    f4_title: 'AI Advice',
    f4_text: 'Получайте персональные советы на основе ваших данных.',
    f5_title: 'Purchase Check',
    f5_text: 'Проверьте, разумна ли покупка прямо сейчас.',
    f6_title: 'Reports',
    f6_text: 'Получайте простые и красивые PDF-отчеты.',
    premium_title: 'Выберите подходящий вариант',
    premium_text: 'Начните бесплатно, затем откройте глубокую аналитику и безлимитное использование.',
    cta_title: 'Начните управлять финансами умнее',
    cta_text: 'Подключайтесь к MardRisk AI и смотрите свой Risk Score в Telegram.',
    telegram_btn: 'Открыть в Telegram',
    footer_roadmap: 'Roadmap',
    footer_materials: 'Финансовые материалы',
    roadmap_label: 'ДОРОЖНАЯ КАРТА ПРОДУКТА',
    roadmap_title: 'Roadmap',
    roadmap_text: 'Чистый и реалистичный путь роста для MardRisk AI.',
    rm_q1_title: 'Запуск основного опыта',
    rm_q1_text: 'Telegram bot, risk score, expense tracking и многоязычный onboarding.',
    rm_q2_title: 'Умные отчеты',
    rm_q2_text: 'Улучшенные PDF-отчеты, еженедельные insights и более понятные финансовые сводки.',
    rm_q3_title: 'AI Planning Layer',
    rm_q3_text: 'Более глубокие AI-рекомендации, planning flows и сильнее финансовые решения.',
    rm_q4_title: 'Расширение платформы',
    rm_q4_text: 'Web dashboard, premium tools и более широкий масштаб продукта.',
    materials_label: 'ФИНАНСОВЫЕ МАТЕРИАЛЫ',
    materials_title: 'Финансовые материалы',
    materials_text: 'Полезные темы, которые усиливают опыт использования MardRisk AI.',
    m1_title: 'Как составить бюджет',
    m1_text: 'Научитесь делить доход, расходы и сбережения простым методом.',
    m2_title: 'Как контролировать долги',
    m2_text: 'Посмотрите практичные способы расставить приоритеты и снизить долговое давление.',
    m3_title: 'Умные покупки',
    m3_text: 'Поймите, когда покупка логична, а когда становится финансово рискованной.',
    m4_title: 'Резервный фонд',
    m4_text: 'Почему важно иметь запас и как начать даже с небольших сумм.',
    m5_title: 'Финансовая дисциплина',
    m5_text: 'Небольшие привычки, которые со временем дают большой результат.',
    m6_title: 'Что значит Risk Score',
    m6_text: 'Поймите, что означает ваш показатель и как его улучшить.'
  }
};

const langButtons = document.querySelectorAll('.lang');
function applyLang(lang) {
  const dict = translations[lang] || translations.hy;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('mardrisk_lang', lang);
}

langButtons.forEach(btn => btn.addEventListener('click', () => applyLang(btn.dataset.lang)));
applyLang(localStorage.getItem('mardrisk_lang') || 'hy');
