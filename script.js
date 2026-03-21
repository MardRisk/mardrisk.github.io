// ── CURSOR ──
const cur=document.getElementById('cursor'),curR=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
function animRing(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;curR.style.left=rx+'px';curR.style.top=ry+'px';requestAnimationFrame(animRing);}animRing();
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='22px';cur.style.height='22px';curR.style.width='60px';curR.style.height='60px';});
  el.addEventListener('mouseleave',()=>{cur.style.width='10px';cur.style.height='10px';curR.style.width='40px';curR.style.height='40px';});
});
// hide cursor on mobile
if('ontouchstart' in window){cur.style.display='none';curR.style.display='none';document.body.style.cursor='auto';document.querySelectorAll('*').forEach(el=>el.style.cursor='');}

// ── NAV SCROLL ──
window.addEventListener('scroll',()=>{
  document.getElementById('mainNav').classList.toggle('scrolled',window.scrollY>20);
});

// ── MOBILE MENU ──
const ham=document.getElementById('hamBtn'),mob=document.getElementById('mobMenu');
ham.addEventListener('click',()=>{mob.classList.toggle('open');ham.textContent=mob.classList.contains('open')?'✕':'☰';});
function cM(){mob.classList.remove('open');ham.textContent='☰';}

// ── REVEAL ──
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');}),{threshold:.1});
document.querySelectorAll('.r0').forEach(el=>ro.observe(el));

// ── TRANSLATIONS ──
const T={
  en:{
    eyebrowTxt:'Live on Telegram · @MardRiskAI_bot',
    heroH:'Most people lose money<br/>without <em>realizing it.</em>',
    heroSub:'Check your financial risk before it\'s too late. MardRisk AI gives you a personal risk score in under 5 seconds — so you know exactly what every decision costs you.',
    hc1:'Check My Risk Score',hc2:'Try Voice Demo',
    trustRow:'Free forever · No sign-up · Results in 5 seconds',
    spBarTxt:'<strong>1,000+</strong> people have already checked their Risk Score',
    shockStat:'⚠️ 87% of people make bad financial decisions weekly',
    shockQ:'Are you <em>one of them?</em>',
    shockCtaTxt:'Check My Risk Score — Free',
    fc1l:'Risk Score',fc1s:'⚠️ Moderate',fc2s:'Your data is safe',
    phOnline:'● online',phMsg1:'👋 Hi! Tell me your monthly income and usual spending — I\'ll show you what\'s at risk.',
    phMsg2:'Salary $2,000. I spend $400 food, $200 subscriptions, eating out often.',phMsg3:'⚠️ Analysis complete',
    phRiskLabel:'🔴 High Risk',phRiskSub:'out of 100',
    phBar1L:'Overspending',phBar2L:'Subscriptions',phBar3L:'Savings',
    phTip:'💸 At this rate you will lose $400 in 2 months.',
    phInpPh:'Describe your finances…',
    proofTag:'Trusted by smart money minds',
    ps1:'People already checked their Risk Score',ps2:'Languages: English, Armenian, Russian',ps3:'Apps to install. Works in Telegram.',ps4:'To start. No credit card needed.',
    featLabel:'Features',featH:'Six tools.<br/><em>One bot.</em>',featS:'Everything you need to make confident financial decisions — without spreadsheets, advisors, or complicated apps.',
    bc1tag:'Core Feature',bc1h:'Personal Risk Score',bc1p:'A real-time risk score from 0 to 100 that analyses your income, spending habits, debt exposure, and savings rate — giving you a single, clear verdict on any financial decision.',
    msTag:'⚠️ Moderate Risk',msSub:'out of 100 · Higher = Riskier',msb1:'Affordability',msb2:'Necessity',msb3:'Savings Buffer',
    bc2h:'Purchase Risk Check',bc2p:'Before any purchase, ask the bot. Describe the item and price — get a green, yellow, or red signal in seconds.',
    lfGo:'Safe Buy',lfWarn:'Risky',lfNo:'Avoid',
    newBadge:'New',bc3h:'Voice AI Advisor',bc3p:'Speak your question, hear the answer. Hands-free financial analysis in your language.',
    bc4h:'3-Language AI',bc4p:'Full fluency in English, Armenian, and Russian. Switch mid-conversation — the AI never loses context.',
    bc5h:'Private by Design',bc5p:'Your financial data stays inside your Telegram conversation. Zero data collection, zero accounts, zero tracking.',
    csCh:'Coming Soon',bc6h:'Web App',bc6p:'A full browser dashboard is coming — track history, view analytics, manage budget. No Telegram needed.',wpScreen:'🚧 In Development',
    howH:'From question<br/>to <em>answer</em> in 30s',howS:'Zero setup. No installation. Start inside Telegram and get your first analysis in under 30 seconds.',
    st1t:'Open the Bot',st1d:'Find @MardRiskAI_bot on Telegram. Tap Start — no registration, no email needed.',
    st2t:'Choose Language',st2d:'Pick English, Armenian, or Russian. Switch anytime — even mid-conversation.',
    st3t:'Describe Finances',st3d:'Type or speak naturally — income, a purchase, a budget question. No forms, no fields.',
    st4t:'AI Analyses',st4d:'Advanced financial intelligence processes your input using real risk models.',
    st5t:'Get Score + Advice',st5d:'Clear 0–100 risk score, category breakdown, and specific actionable next steps.',
    voiceLabel:'Voice AI',voiceH:'Speak your question.<br/><em>Hear your answer.</em>',voiceP:'MardRisk AI includes a full voice advisor inside the Telegram bot. Ask your financial question out loud and get your risk score spoken back to you. The demo below shows exactly how it works — press play to hear it.',
    vf1t:'Talk Like It\'s a Friend',vf1d:'"Should I buy this?" — just say it. The AI understands natural language and responds with a full risk breakdown.',
    vf2t:'Score Read Back to You',vf2d:'Your risk score and personalised advice are spoken aloud — perfect for when you\'re on the go.',
    vf3t:'Under 3 Seconds',vf3d:'Voice query to spoken analysis in real time. No waiting, no typing.',
    tryVoiceBtn:'Try Voice AI on Telegram',
    vBtnT:'▶  Listen to MardRisk AI',voiceTrans:'Press play — hear how MardRisk AI introduces itself and what it does.',
    prLabel:'Pricing',prH:'Simple,<br/><em>honest</em> pricing',prS:'Start for free. Upgrade when you need more. No hidden fees, no surprises.',
    p1n:'Free',p1d:'Everything to get started today',p1p:'Forever free · No card required',
    pf1:'Personal Risk Score',pf2:'Purchase Risk Check',pf3:'AI Financial Advice',pf4:'3 Language Support',pf5:'No Registration Required',pf6:'Advanced Analytics',pf7:'Voice AI Access',pf8:'Monthly Reports',
    p2n:'Pro',p2d:'For serious financial decisions',p2p:'Billed monthly · Cancel anytime',
    pp1:'Everything in Free',pp2:'Unlimited Queries',pp3:'Advanced Analytics',pp4:'Monthly Financial Report',pp5:'Budget Planning Assistant',pp6:'Risk History Tracking',pp7:'🎙️ Voice AI Access',pp8:'Priority Support',
    popLabel:'Most Popular',freeBtn:'Check My Risk Score — Free →',proBtn:'Get Pro →',
    waLabel:'Coming Soon',waH:'Your finances,<br/>now on the <em>web</em>',waS:'The full MardRisk AI experience is coming to your browser. No Telegram required — track, analyse, and plan from any device.',
    waCard1L:'Risk Score',waCard2L:'Saved This Month',waCard3L:'Trend',waBadge:'In Development',waDevTxt:'Full web experience launching soon',
    waf1t:'Financial Dashboard',waf1d:'Full overview of your risk history, spending patterns, and financial health score over time.',
    waf2t:'Monthly Reports',waf2d:'Detailed monthly breakdowns with insights, trends, and personalised improvement tips.',
    waf3t:'Budget Planner',waf3d:'Set financial goals and get AI-powered guidance on how to reach them.',
    waf4t:'Any Device',waf4d:'Works on desktop, tablet, and mobile — no app store, no download.',
    trustLabel:'Testimonials',trustH:'What people<br/>are <em>saying</em>',
    q1t:'"Saved me from a <em>terrible purchase</em>. I was about to spend $800 I didn\'t really have. The bot said red. I listened."',q1n:'Armen K.',q1r:'Yerevan, Armenia',
    q2t:'"Finally an AI tool that speaks <em>Armenian</em>. And actually gives useful financial advice. Incredible."',q2n:'Ani M.',q2r:'Yerevan, Armenia',
    q3t:'"The risk score is <em>shockingly accurate</em>. It knows my financial habits better than I do."',q3n:'Dmitri V.',q3r:'Moscow, Russia',
    ctaLabel:'Start Today — It\'s Free',ctaH:'Make your next<br/><em>financial decision</em><br/>with confidence.',ctaP:'No sign-up. No app. No credit card. Just open Telegram, start the bot, and get your personal risk score in under 30 seconds.',
    cb1:'Check My Risk Score',cb2:'Try Voice Demo',
    contLabel:'Contact',contH:'Let\'s <em>talk</em>',contS:'Questions, partnerships, press — we respond within 24 hours.',
    rtL:'Response Time',rtV:'Within 24 hours',cfFn:'First Name',cfLn:'Last Name',cfEm:'Email',cfSb:'Subject',cfMs:'Message',cfSnd:'Send Message →',
    footD:'Your AI-powered financial risk advisor on Telegram. Know before you spend.',footN:'Navigate',footC:'Connect',
    tk1:'Personal Risk Score',tk2:'Purchase Risk Check',tk3:'AI Financial Advice',tk4:'Voice AI Advisor',tk5:'3 Languages',tk6:'Zero Data Storage',tk7:'Instant Results',tk8:'Free to Start',
    mNavCta:'Open Telegram Bot',
    vpScript:"Hi. I'm MardRisk AI — your personal AI financial risk advisor, inside Telegram.\n\nEvery day, people make financial decisions that quietly destroy their budget — without realizing it.\n\nI analyse your income, spending habits, and financial behaviour, then produce a real-time risk score from zero to one hundred — in under 5 seconds.\n\nPlanning a big purchase? Considering a loan? Just want to know if you're on track? I'm here.\n\nNo app to download. No account to create. Just Telegram.\n\nFree. Instant. Private."
  },
  hy:{
    eyebrowTxt:'Հասանելի է · @MardRiskAI_bot',
    heroH:'Մարդկանց մեծ մասը<br/>փող է կորցնում <em>առանց գիտակցելու:</em><br/><span style="font-size:.62em;color:rgba(7,10,18,.45);font-style:normal;">Ստուգե՛ք Ձեր ֆինանսական<br/>ռիսկը մինչ ուշ կլինի:</span>',
    heroSub:'MardRisk AI-ն 5 վայրկյանում տալիս է Ձեր անձնական ռիսկի միավորը — որպեսզի Դուք ճշգրիտ իմանաք, թե յուրաքանչյուր որոշումն ինչ արժե ձեզ, մինչ այն կայացնելը:',
    hc1:'Ստուգե՛ք իմ Ռիսկի Միավորը',hc2:'Փորձե՛ք Ձայնային Demo',
    trustRow:'Մշտապես անվճար · Գրանցում չի պահանջվում · Արդյունք 5 վայրկյանում',
    spBarTxt:'<strong>1,000+</strong> մարդ արդեն ստուգել է իր Ռիսկի Միավորը',
    shockStat:'⚠️ Մարդկանց 87%-ը շաբաթական վատ ֆինանսական որոշում է կայացնում',
    shockQ:'Դուք <em>նրանցից մե՞կն</em> եք:',
    shockCtaTxt:'Ստուգե՛ք Ռիսկի Միավորս — Անվճար',
    fc1l:'Ռիսկի Միավոր',fc1s:'⚠️ Չափավոր',fc2s:'Ձեր տվյալները ապահով են',
    phOnline:'● ակտիվ',phMsg1:'👋 Բարև! Նկարագրե՛ք Ձեր ֆինանսները, ես ակնթարթորեն կտամ Ձեր անձնական ռիսկի միավորը:',
    phMsg2:'Ուզում եմ iPhone գնել $1,200-ով: Աշխատավարձ $2,000/ամիս:',phMsg3:'Վերլուծում եմ…',
    phRiskLabel:'⚠️ Չափավոր ռիսկ',phRiskSub:'100-ից',
    phBar1L:'Մատչելիություն',phBar2L:'Անհրաժեշտություն',phBar3L:'Խնայողություններ',
    phTip:'💡 Ամսական աշխատավարձի 60%-ն է: Նախ 2-3 ամիս խնայե՛ք:',phInpPh:'Ֆինանսական հարց տվե՛ք…',
    proofTag:'Խելացի ֆինանսական որոշումների գործիք',
    ps1:'Ռիսկի միավոր վայրկյանների ընթացքում',ps2:'Լեզուներ: Հայերեն, Անգլերեն, Ռուսերեն',ps3:'Ծրագիր պետք չէ: Աշխատում է Telegram-ում:',ps4:'Սկսելու համար: Քարտ պետք չէ:',
    featLabel:'Հնարավորություններ',featH:'Վեց գործիք.<br/><em>Մեկ bot:</em>',featS:'Ամեն ինչ, ինչ Ձեզ հարկավոր է ֆինանսական վստահ որոշումներ կայացնելու համար:',
    bc1tag:'Հիմնական',bc1h:'Անձնական Ռիսկի Միավոր',bc1p:'Ռեալ ժամանակի ռիսկի միավոր 0-ից 100-ի, որը վերլուծում է Ձեր եկամուտը, ծախսերը, պարտքը և խնայողությունները:',
    msTag:'⚠️ Չափավոր Ռիսկ',msSub:'100-ից · Ավելի բարձր = ավելի ռիսկային',msb1:'Մատչելիություն',msb2:'Անհրաժեշտություն',msb3:'Խնայողական բուֆեր',
    bc2h:'Գնման Ռիսկի Ստուգում',bc2p:'Ցանկացած գնումից առաջ հարցրե՛ք bot-ին: Ստացե՛ք կանաչ, դեղին կամ կարմիր ազդանշան:',
    lfGo:'Անվտանգ',lfWarn:'Ռիսկային',lfNo:'Խուսափե՛ք',
    newBadge:'Նոր',bc3h:'Ձայնային AI Խորհրդատու',bc3p:'Ասե՛ք Ձեր հարցը, լսե՛ք պատասխանը: Ձեռքերից ազատ ֆինանսական վերլուծություն:',
    bc4h:'3-Լեզվու AI',bc4p:'Լիարժեք հայերեն, ռուսերեն և անգլերեն: Փոխե՛ք լեզուն զրույցի ընթացքում:',
    bc5h:'Անձնական Կողմից',bc5p:'Ձեր ֆինանսական տվյալները մնում են Telegram-ի զրույցում: Ոչ հավաքում, ոչ հետևում:',
    csCh:'Շուտով',bc6h:'Վեբ Հավելված',bc6p:'Լրիվ բրաուզերային dashboard-ը գալիս է — հետևե՛ք պատմությանը, տեսե՛ք վերլուծությունը:',wpScreen:'🚧 Մշակման փուլում',
    howH:'Հարցից<br/><em>պատասխան</em> 30 վայրկյանում',howS:'Կարգավորում չի պահանջվում: Ստացե՛ք առաջին վերլուծությունը 30 վայրկյանում:',
    st1t:'Բացե՛ք bot-ը',st1d:'Գտե՛ք @MardRiskAI_bot-ը Telegram-ում: Սեղմե՛ք Start:',
    st2t:'Ընտրե՛ք Լեզուն',st2d:'Ընտրե՛ք հայերեն, ռուսերեն կամ անգլերեն:',
    st3t:'Նկարագրե՛ք Ֆինանսները',st3d:'Գրե՛ք կամ ասե՛ք — եկամուտ, գնում կամ ֆինանսական հարց:',
    st4t:'AI-ն Վերլուծում է',st4d:'Ռիսկի մոդելների վրա հիմնված AI-ն գնահատում է Ձեր իրավիճակը:',
    st5t:'Ստացե՛ք Միավոր + Խորհուրդ',st5d:'Հստակ ռիսկի միավոր 0–100-ից, բաժանումով և գործնական քայլերով:',
    voiceLabel:'Ձայնային AI',voiceH:'Ասե՛ք Ձեր հարցը.<br/><em>Լսե՛ք Ձեր պատասխանը.</em>',voiceP:'MardRisk AI-ն Telegram bot-ի ներսում ներառում է ձայնային խորհրդատու: Բարձրաձայն հարցե՛ք ֆինանսական հարցը — ստացե՛ք Ձեր ռիսկի միավորը կարդացված Ձեզ: Ստորև demo-ն ցույց է տալիս, թե ինչպես է այն աշխատում:',
    vf1t:'Խոսե՛ք Բնականաբար',vf1d:'«Արժե՞ գնել սա» — պարզապես ասե՛ք: AI-ն հասկանում է բնական լեզուն և պատասխանում է ամբողջական ռիսկի վերլուծությամբ:',
    vf2t:'Ռիսկի Միավոր Ձայնով',vf2d:'Ձեր ռիսկի միավորն ու անձնական խորհուրդները կարդացվում են Ձեզ — կատարյալ ճամփորդելիս:',
    vf3t:'3 Վայրկյանից Պակաս',vf3d:'Ձայնային հարցումից մինչ ձայնային պատասխան ռեալ ժամանակում:',
    tryVoiceBtn:'Փորձե՛ք Ձայնային AI-ն Telegram-ում',
    vBtnT:'▶  Լսե՛ք MardRisk AI-ն',voiceTrans:'Սեղմե՛ք play — լսե՛ք, թե ինչպես MardRisk AI-ն ներկայանում է:',
    prLabel:'Գներ',prH:'Պարզ,<br/><em>ազնիվ</em> գներ',prS:'Սկսե՛ք անվճար: Բարելավե՛ք, երբ ավելի շատ է պետք:',
    p1n:'Անվճար',p1d:'Ամեն ինչ այսօր սկսելու համար',p1p:'Մշտապես անվճար · Քարտ չի պահանջվում',
    pf1:'Անձնական Ռիսկի Միավոր',pf2:'Գնման Ռիսկի Ստուգում',pf3:'AI Ֆինանսական Խորհուրդ',pf4:'3 Լեզվի Աջակցություն',pf5:'Գրանցում Չի Պահանջվում',pf6:'Ընդլայնված Վերլուծություն',pf7:'Ձայնային AI Հասանելիություն',pf8:'Ամսական Հաշվետվություններ',
    p2n:'Pro',p2d:'Լուրջ ֆինանսական որոշումների համար',p2p:'Ամսական · Ցանկացած ժամ չեղարկե՛ք',
    pp1:'Ամեն ինչ Անվճարից',pp2:'Անսահմանափակ Հարցումներ',pp3:'Ընդլայնված Վերլուծություն',pp4:'Ամսական Ֆինանսական Հաշվետվություն',pp5:'Բյուջեի Պլանավորող',pp6:'Ռիսկի Պատմություն',pp7:'🎙️ Ձայնային AI',pp8:'Առաջնային Աջակցություն',
    popLabel:'Ամենատարածված',freeBtn:'Ստուգե՛ք Ռիսկի Միավորս — Անվճար →',proBtn:'Ստացե՛ք Pro →',
    waLabel:'Շուտով',waH:'Ձեր ֆինանսները,<br/>այժմ <em>վեբ-ում</em>',waS:'MardRisk AI-ի լրիվ փորձը գալիս է Ձեր բրաուզեր: Telegram-ի կարիք չկա:',
    waCard1L:'Ռիսկի Միավոր',waCard2L:'Ամսվա Խնայողություն',waCard3L:'Միտում',waBadge:'Մշակման Մեջ',waDevTxt:'Լրիվ վեբ փորձը շուտով',
    waf1t:'Ֆինանսական Dashboard',waf1d:'Ռիսկի պատմություն, ծախսերի ձևաչափ, ֆինանսական առողջության միավոր:',
    waf2t:'Ամսական Հաշվետվություններ',waf2d:'Մանրամասն ամսական վերլուծություն՝ պատկերացումներով:',
    waf3t:'Բյուջեի Պլանավորող',waf3d:'Դրե՛ք ֆինանսական նպատակներ և ստացե՛ք AI-ի ուղղորդում:',
    waf4t:'Ցանկացած Սարք',waf4d:'Desktop, tablet, mobile — app store-ի կարիք չկա:',
    trustLabel:'Կարծիքներ',trustH:'Ինչ են ասում<br/><em>մարդիկ</em>',
    q1t:'"Փրկեց ինձ <em>սարսափելի գնումից</em>: Պատրաստ էի $800 ծախսել: Bot-ն ասաց կարմիր: Ես լսեցի:"',q1n:'Արմեն Կ.',q1r:'Երևան, Հայաստան',
    q2t:'"Վերջապես AI գործիք, որը խոսում է <em>հայերեն</em>: Եվ իրոք օգտակար ֆինանսական խորհուրդ է տալիս:"',q2n:'Անի Մ.',q2r:'Երևան, Հայաստան',
    q3t:'"Ռիսկի միավորը <em>զարմանալիորեն ճշգրիտ</em> է: Ավելի լավ գիտի իմ ֆինանսական սովորությունները, քան ես:"',q3n:'Դիմիտրի Վ.',q3r:'Մոսկվա, Ռուսաստան',
    ctaLabel:'Սկսե՛ք Այսօր — Անվճար',ctaH:'Կայացրե՛ք Ձեր հաջորդ<br/><em>ֆինանսական որոշումը</em><br/>վստահությամբ:',ctaP:'Գրանցում չի պահանջվում: Ծրագիր պետք չէ: Ոչ մի վճար: Բացե՛ք Telegram-ը, գտե՛ք bot-ը:',
    cb1:'Բացե՛ք @MardRiskAI_bot',cb2:'Փորձե՛ք Ձայնային Demo',
    contLabel:'Կապ',contH:'Եկե՛ք <em>խոսենք</em>',contS:'Հարցեր, գործընկերություն, մամուլ — պատասխանում ենք 24 ժամում:',
    rtL:'Պատասխանի Ժամ',rtV:'24 ժամում',cfFn:'Անուն',cfLn:'Ազգանուն',cfEm:'Էլ. հասցե',cfSb:'Թեմա',cfMs:'Հաղորդագրություն',cfSnd:'Ուղարկել →',
    footD:'Ձեր AI ֆինանսական ռիսկերի խորհրդատուն Telegram-ում:',footN:'Նավիգացիա',footC:'Կապ',
    tk1:'Անձնական Ռիսկի Միավոր',tk2:'Գնման Ռիսկի Ստուգում',tk3:'AI Ֆինանսական Խորհուրդ',tk4:'Ձայնային AI',tk5:'3 Լեզու',tk6:'Տվյալ Պահպանում Չկա',tk7:'Ակնթարթային Արդյունք',tk8:'Անվճար Սկսել',
    mNavCta:'Բացե՛ք Telegram Bot-ը',
    vpScript:'Բարև ձեզ: Ես MardRisk AI-ն եմ — ձեր անձնական AI ֆինանսական ռիսկերի խորհրդատուն Telegram-ում:\n\nՅուրաքանչյուր օր մարդիկ կատարում են ֆինանսական որոշումներ, որոնք կործանում են իրենց բյուջեն — առանց գիտակցելու:\n\nԵս վերլուծում եմ ձեր եկամուտը, ծախսերը և ֆինանսական պահվածքը, ապա 5 վայրկյանի ընթացքում տրամադրում ռիսկի միավոր 0-ից 100-ի սանդղակով:\n\nՄեծ գնո՞ւմ, վա՞րկ, թե՞ ուղղակի ուզում եք հասկանալ ձեր ֆինանսական վիճակը — ես այստեղ եմ:\n\nՈչ ծրագիր: Ոչ գրանցում: Միայն Telegram:\n\nԱնվճար: Ակնթարթային: Անձնական:'
  },
  ru:{
    eyebrowTxt:'Доступно в Telegram · @MardRiskAI_bot',
    heroH:'Большинство людей<br/>теряют деньги <em>не замечая.</em><br/><span style="font-size:.62em;color:rgba(7,10,18,.45);font-style:normal;">Проверьте финансовый риск<br/>пока не стало слишком поздно.</span>',
    heroSub:'MardRisk AI даёт личную оценку риска за 5 секунд — чтобы вы точно знали, что стоит каждое финансовое решение, ещё до того, как его принять.',
    hc1:'Проверить мой Risk Score',hc2:'Попробовать голосовое демо',
    trustRow:'Бесплатно навсегда · Без регистрации · Результат за 5 секунд',
    spBarTxt:'<strong>1,000+</strong> человек уже проверили свой Risk Score',
    shockStat:'⚠️ 87% людей принимают плохие финансовые решения еженедельно',
    shockQ:'Вы <em>один из них?</em>',
    shockCtaTxt:'Проверить мой Risk Score — Бесплатно',
    fc1l:'Оценка Риска',fc1s:'⚠️ Умеренный',fc2s:'Ваши данные в безопасности',
    phOnline:'● онлайн',phMsg1:'👋 Привет! Опишите ваши финансы — я мгновенно дам личную оценку риска.',
    phMsg2:'Хочу купить iPhone за $1,200. Зарплата $2,000/месяц.',phMsg3:'Анализирую…',
    phRiskLabel:'⚠️ Умеренный риск',phRiskSub:'из 100',
    phBar1L:'Доступность',phBar2L:'Необходимость',phBar3L:'Сбережения',
    phTip:'💡 Равно 60% вашей зарплаты. Сначала накопите 2–3 месяца.',phInpPh:'Задайте финансовый вопрос…',
    proofTag:'Доверяют умные финансовые умы',
    ps1:'Оценка риска за секунды',ps2:'Языка: Русский, Армянский, Английский',ps3:'Приложений устанавливать. Работает в Telegram.',ps4:'Для старта. Карта не нужна.',
    featLabel:'Возможности',featH:'Шесть инструментов.<br/><em>Один бот.</em>',featS:'Всё необходимое для уверенных финансовых решений — без таблиц, советников и сложных приложений.',
    bc1tag:'Основная функция',bc1h:'Личная Оценка Риска',bc1p:'Оценка риска в реальном времени от 0 до 100, анализирующая доход, расходы, долги и сбережения — одно чёткое заключение.',
    msTag:'⚠️ Умеренный риск',msSub:'из 100 · Выше = рискованнее',msb1:'Доступность',msb2:'Необходимость',msb3:'Буфер сбережений',
    bc2h:'Проверка Риска Покупки',bc2p:'Перед любой покупкой спросите бота. Опишите товар и цену — зелёный, жёлтый или красный сигнал.',
    lfGo:'Безопасно',lfWarn:'Рискованно',lfNo:'Избегать',
    newBadge:'Новое',bc3h:'Голосовой ИИ Советник',bc3p:'Задайте вопрос голосом, получите ответ. Финансовый анализ без рук.',
    bc4h:'ИИ на 3 Языках',bc4p:'Полное владение русским, армянским и английским. Меняйте язык в середине разговора.',
    bc5h:'Приватность по Умолчанию',bc5p:'Данные остаются в вашем чате Telegram. Никакого сбора данных, никакой слежки.',
    csCh:'Скоро',bc6h:'Веб-приложение',bc6p:'Полноценный браузерный дашборд — история, аналитика, бюджет. Без Telegram.',wpScreen:'🚧 В разработке',
    howH:'От вопроса<br/>к <em>ответу</em> за 30 сек',howS:'Никакой настройки. Никакой установки. Первый анализ за 30 секунд.',
    st1t:'Откройте бота',st1d:'Найдите @MardRiskAI_bot в Telegram. Нажмите Start.',
    st2t:'Выберите язык',st2d:'Выберите русский, армянский или английский.',
    st3t:'Опишите финансы',st3d:'Пишите или говорите — доход, покупку или вопрос.',
    st4t:'ИИ анализирует',st4d:'Продвинутый ИИ оценивает ситуацию по реальным моделям риска.',
    st5t:'Оценка + Совет',st5d:'Чёткая оценка 0–100 с разбивкой и конкретными шагами.',
    voiceLabel:'Голосовой ИИ',voiceH:'Задайте вопрос.<br/><em>Услышьте ответ.</em>',voiceP:'MardRisk AI включает голосового советника прямо внутри Telegram бота. Задайте финансовый вопрос вслух и получите оценку риска голосом. Демо ниже показывает, как это работает.',
    vf1t:'Говорите Естественно',vf1d:'"Стоит ли купить это?" — просто скажите. ИИ понимает намерение и отвечает полным анализом риска.',
    vf2t:'Ответ Голосом',vf2d:'Оценка риска и персональные советы зачитываются вам — идеально на ходу.',
    vf3t:'Менее 3 секунд',vf3d:'Голосовой запрос — голосовой анализ в реальном времени.',
    tryVoiceBtn:'Попробовать голосовой ИИ в Telegram',
    vBtnT:'▶  Послушать MardRisk AI',voiceTrans:'Нажмите play — услышьте, как MardRisk AI представляется и объясняет, что умеет.',
    prLabel:'Цены',prH:'Простые,<br/><em>честные</em> цены',prS:'Начните бесплатно. Обновитесь, когда нужно больше.',
    p1n:'Бесплатно',p1d:'Всё для начала прямо сейчас',p1p:'Всегда бесплатно · Карта не нужна',
    pf1:'Личная Оценка Риска',pf2:'Проверка Риска Покупки',pf3:'ИИ Финансовый Совет',pf4:'3 Языка',pf5:'Регистрация не нужна',pf6:'Расширенная Аналитика',pf7:'Голосовой ИИ',pf8:'Ежемесячные Отчёты',
    p2n:'Pro',p2d:'Для серьёзных финансовых решений',p2p:'Ежемесячно · Отмена в любой момент',
    pp1:'Всё из Бесплатного',pp2:'Безлимитные Запросы',pp3:'Расширенная Аналитика',pp4:'Ежемесячный Финансовый Отчёт',pp5:'Помощник по Бюджету',pp6:'История Рисков',pp7:'🎙️ Голосовой ИИ',pp8:'Приоритетная Поддержка',
    popLabel:'Популярно',freeBtn:'Проверить мой Risk Score — Бесплатно →',proBtn:'Получить Pro →',
    waLabel:'Скоро',waH:'Ваши финансы,<br/>теперь в <em>браузере</em>',waS:'Полный опыт MardRisk AI приходит в ваш браузер. Telegram не нужен.',
    waCard1L:'Оценка риска',waCard2L:'Сэкономлено в месяц',waCard3L:'Тренд',waBadge:'В разработке',waDevTxt:'Полный веб-опыт скоро',
    waf1t:'Финансовый Дашборд',waf1d:'Полный обзор истории рисков, паттернов расходов и финансового здоровья.',
    waf2t:'Ежемесячные Отчёты',waf2d:'Подробный ежемесячный анализ с инсайтами и советами.',
    waf3t:'Планировщик Бюджета',waf3d:'Ставьте финансовые цели и получайте ИИ-руководство.',
    waf4t:'Любое Устройство',waf4d:'Desktop, планшет, телефон — без app store, без загрузки.',
    trustLabel:'Отзывы',trustH:'Что говорят<br/><em>люди</em>',
    q1t:'"Спас меня от <em>ужасной покупки</em>. Я собирался потратить $800. Бот сказал красный. Я послушал."',q1n:'Армен К.',q1r:'Ереван, Армения',
    q2t:'"Наконец ИИ-инструмент, который говорит по-<em>армянски</em>. И даёт реально полезные советы."',q2n:'Ани М.',q2r:'Ереван, Армения',
    q3t:'"Оценка риска <em>поразительно точная</em>. Знает мои финансовые привычки лучше меня."',q3n:'Дмитрий В.',q3r:'Москва, Россия',
    ctaLabel:'Начните Сегодня — Бесплатно',ctaH:'Примите следующее<br/><em>финансовое решение</em><br/>с уверенностью.',ctaP:'Никакой регистрации. Никакого приложения. Просто откройте Telegram.',
    cb1:'Открыть @MardRiskAI_bot',cb2:'Попробовать голосовое демо',
    contLabel:'Контакт',contH:'Давайте <em>поговорим</em>',contS:'Вопросы, партнёрство, пресса — отвечаем за 24 часа.',
    rtL:'Время ответа',rtV:'В течение 24 часов',cfFn:'Имя',cfLn:'Фамилия',cfEm:'Эл. почта',cfSb:'Тема',cfMs:'Сообщение',cfSnd:'Отправить →',
    footD:'Ваш ИИ-советник по финансовым рискам в Telegram.',footN:'Навигация',footC:'Связь',
    tk1:'Личная Оценка Риска',tk2:'Проверка Покупки',tk3:'ИИ Финансовый Совет',tk4:'Голосовой ИИ',tk5:'3 Языка',tk6:'Нулевое Хранение Данных',tk7:'Мгновенный Результат',tk8:'Бесплатный Старт',
    mNavCta:'Открыть Telegram Бота',
    vpScript:'Привет. Я MardRisk AI — ваш личный ИИ-советник по финансовым рискам в Telegram.\n\nКаждый день люди принимают финансовые решения, которые разрушают их бюджет — даже не осознавая этого.\n\nЯ анализирую ваш доход, расходы и финансовое поведение, затем за 5 секунд выдаю оценку риска от нуля до ста.\n\nПланируете крупную покупку? Думаете о кредите? Хотите понять своё финансовое здоровье? Я здесь.\n\nНикакого приложения. Никакой регистрации. Только Telegram.\n\nБесплатно. Мгновенно. Приватно.'
  }
};

let lang='en';
const htmlKeys=['heroH','featH','howH','waH','voiceH','trustH','ctaH','contH','prH'];

function applyLang(l){
  lang=l;
  const d=T[l];
  Object.keys(d).forEach(k=>{
    if(k==='vpScript')return;
    const el=document.getElementById(k);
    if(!el)return;
    if(htmlKeys.includes(k))el.innerHTML=d[k];
    else el.textContent=d[k];
  });
  document.querySelectorAll('[data-l]').forEach(b=>b.classList.toggle('on',b.dataset.l===l));
  resetVoice();
  // update ticker
  const tks=['tk1','tk2','tk3','tk4','tk5','tk6','tk7','tk8'];
  tks.forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=d[id];});
}
document.querySelectorAll('[data-l]').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.l)));

// ── VOICE ENGINE ──
// Armenian (hy) has NO native TTS in browsers — we use typewriter-only for hy,
// and real TTS for en/ru when available. Both show animated transcript.
let synth=window.speechSynthesis,utt=null,playing=false,vs=[];
function loadVoices(){vs=synth?synth.getVoices():[];}
if(synth){
  loadVoices();
  if(synth.onvoiceschanged!==undefined)synth.onvoiceschanged=loadVoices;
  setTimeout(loadVoices,600);setTimeout(loadVoices,1500);
}

function pickVoice(l){
  // Only attempt TTS for en and ru; hy falls back to typewriter-only
  if(l==='hy')return null;
  const map={en:['en-US','en-GB','en-AU','en'],ru:['ru-RU','ru']};
  const prefs=map[l]||['en-US'];
  for(const p of prefs){
    const v=vs.find(v=>v.lang.toLowerCase().startsWith(p.toLowerCase()));
    if(v)return v;
  }
  return null;
}

const bigOrb=document.getElementById('bigOrb'),
  bigWave=document.getElementById('bigWave'),
  voiceTransEl=document.getElementById('voiceTrans'),
  voiceTxtEl=document.getElementById('voiceTxt'),
  voiceCurEl=document.getElementById('voiceCur'),
  vBtnTEl=document.getElementById('vBtnT'),
  vBtnIEl=document.getElementById('vBtnI'),
  voicePlayBtn=document.getElementById('voicePlayBtn');

function resetVoice(){
  if(synth)try{synth.cancel();}catch(e){}
  playing=false;
  if(bigOrb)bigOrb.classList.remove('active');
  if(bigWave)bigWave.classList.remove('pl');
  if(vBtnIEl)vBtnIEl.textContent='▶';
  if(vBtnTEl)vBtnTEl.textContent=T[lang].vBtnT||'▶  Listen to MardRisk AI';
  const defTxt=T[lang].voiceTrans||'Press play — hear how MardRisk AI introduces itself.';
  if(voiceTxtEl)voiceTxtEl.textContent=defTxt;
  if(voiceCurEl)voiceCurEl.style.display='none';
  if(voiceTransEl)voiceTransEl.classList.remove('sp');
  // reset bento too
  const bw=document.getElementById('bentWave');if(bw)bw.classList.remove('pl');
  const bo=document.getElementById('bentOrbBtn');if(bo){bo.style.background='';bo.textContent='🎙️';}
}

let typeTimer=null;
function runTypewriter(text,onDone){
  let i=0;
  if(voiceTxtEl)voiceTxtEl.textContent='';
  if(voiceCurEl)voiceCurEl.style.display='inline-block';
  clearInterval(typeTimer);
  typeTimer=setInterval(()=>{
    if(!playing){clearInterval(typeTimer);return;}
    if(i<text.length){
      if(voiceTxtEl)voiceTxtEl.textContent=text.slice(0,++i);
    } else {
      clearInterval(typeTimer);
      if(voiceCurEl)voiceCurEl.style.display='none';
      if(onDone)onDone();
    }
  },16);
}

function startVoice(){
  if(playing){resetVoice();return;}
  const sc=T[lang].vpScript;
  if(!sc)return;

  playing=true;
  if(bigOrb)bigOrb.classList.add('active');
  if(bigWave)bigWave.classList.add('pl');
  if(vBtnIEl)vBtnIEl.textContent='■';
  const stopLabels={en:'■  Stop',hy:'■  Կանգ',ru:'■  Стоп'};
  if(vBtnTEl)vBtnTEl.textContent=stopLabels[lang]||'■  Stop';
  if(voiceTransEl)voiceTransEl.classList.add('sp');

  // Always run typewriter
  runTypewriter(sc,()=>{
    // auto-reset after a pause
    setTimeout(resetVoice,2000);
  });

  // Attempt TTS for en/ru (skip hy — no Armenian TTS in browsers)
  if(synth && lang!=='hy'){
    try{
      synth.cancel();
      utt=new SpeechSynthesisUtterance(sc);
      if(vs.length===0)loadVoices();
      const v=pickVoice(lang);
      if(v)utt.voice=v;
      utt.rate=0.98;utt.pitch=1;utt.volume=1;
      utt.lang=lang==='ru'?'ru-RU':'en-US';
      utt.onend=()=>{};  // typewriter handles UI
      utt.onerror=()=>{}; // silent — typewriter is already showing
      synth.speak(utt);
    }catch(e){/* silent */}
  }
  // For hy: typewriter runs, TTS skipped — professional silence
}

if(bigOrb)bigOrb.addEventListener('click',startVoice);
if(voicePlayBtn)voicePlayBtn.addEventListener('click',startVoice);

// ── BENTO ORB DEMO (typewriter only, no TTS) ──
let bentPlaying=false;
const bentOrb=document.getElementById('bentOrbBtn');
const bentDemoTexts={
  en:'MardRisk AI: "Risk Score 84/100 — High Risk. At your current rate, you will lose $400 in the next 2 months. Cut subscriptions by $120 and avoid eating out more than twice a week."',
  hy:'MardRisk AI: «Ռիսկի միավոր՝ 84/100 — Բարձր ռիսկ: Ներկայիս տեմպով Դուք 2 ամսում կկորցնեք $400: Կրճատե՛ք բաժանորդագրությունները $120-ով:»',
  ru:'MardRisk AI: "Оценка риска 84/100 — Высокий риск. При текущем темпе трат вы потеряете $400 за 2 месяца. Сократите подписки на $120."'
};
if(bentOrb){
  bentOrb.addEventListener('click',()=>{
    if(bentPlaying){
      bentPlaying=false;
      document.getElementById('bentWave').classList.remove('pl');
      bentOrb.style.background='';bentOrb.textContent='🎙️';
      const el=document.getElementById('bentTxt');
      if(el)el.textContent=lang==='hy'?'Սեղմե՛ք՝ demo լսելու համար…':lang==='ru'?'Нажмите для демо…':'Tap the mic to hear a demo…';
      return;
    }
    bentPlaying=true;
    document.getElementById('bentWave').classList.add('pl');
    bentOrb.style.background='var(--g)';bentOrb.textContent='⏹';
    const sc=bentDemoTexts[lang]||bentDemoTexts['en'];
    const el=document.getElementById('bentTxt');
    let i=0;el.textContent='';
    function t(){
      if(!bentPlaying)return;
      if(i<sc.length){el.textContent=sc.slice(0,++i);setTimeout(t,20);}
      else{
        bentPlaying=false;
        document.getElementById('bentWave').classList.remove('pl');
        bentOrb.style.background='';bentOrb.textContent='🎙️';
      }
    }
    t();
  });
}

// ── CONTACT FORM ──
document.getElementById('cfSnd').addEventListener('click',function(){
  const orig=T[lang].cfSnd||'Send Message →';
  this.textContent='✅ Sent!';this.style.background='#009B52';
  setTimeout(()=>{this.textContent=orig;this.style.background='';},2500);
});

// ── SHOCK BLOCK KEYS (HTML-capable) ──
const shockHtmlKeys=['shockQ','spBarTxt'];

// Override applyLang to handle shock/spBar HTML keys
const _origApply=applyLang;
function applyLang(l){
  lang=l;
  const d=T[l];
  Object.keys(d).forEach(k=>{
    if(k==='vpScript')return;
    const el=document.getElementById(k);
    if(!el)return;
    const isHtml=[...htmlKeys,'shockQ','spBarTxt'].includes(k);
    if(isHtml)el.innerHTML=d[k];
    else el.textContent=d[k];
  });
  document.querySelectorAll('[data-l]').forEach(b=>b.classList.toggle('on',b.dataset.l===l));
  resetVoice();
  const tks=['tk1','tk2','tk3','tk4','tk5','tk6','tk7','tk8'];
  tks.forEach(id=>{const el=document.getElementById(id);if(el&&d[id])el.textContent=d[id];});
}
document.querySelectorAll('[data-l]').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.l)));
