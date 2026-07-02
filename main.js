/* ===================================================
   ARIA BASPAR — Main JS v3
=================================================== */
const LANG_KEY = 'ab_lang';

const T = {
  'nav.home':     { fa:'خانه',        en:'Home' },
  'nav.products': { fa:'محصولات',     en:'Products' },
  'nav.about':    { fa:'درباره ما',   en:'About Us' },
  'nav.contact':  { fa:'تماس با ما',  en:'Contact' },
  'nav.cta':      { fa:'مشاوره رایگان', en:'Get a Quote' },

  'foot.copy':     { fa:'© ۱۴۰۴ آریا بسپار پویش پارتاک. تمامی حقوق محفوظ است.', en:'© 2025 Aria Baspar Pooyesh Partak. All rights reserved.' },
  'foot.tagline':  { fa:'یک بار بچسب، برای همیشه بمان.', en:'Stick once, last forever.' },
  'foot.products': { fa:'محصولات',    en:'Products' },
  'foot.company':  { fa:'شرکت',       en:'Company' },
  'foot.contact':  { fa:'تماس',       en:'Contact' },
  'foot.home':     { fa:'خانه',       en:'Home' },
  'foot.about':    { fa:'درباره ما',  en:'About Us' },
  'foot.book':     { fa:'صحافی',      en:'BookBinding' },
  'foot.pack':     { fa:'بسته‌بندی',  en:'Packaging' },
  'foot.tile':     { fa:'کاشی',       en:'Tile' },
  'foot.air':      { fa:'فیلتر هوا',  en:'Air Filter' },
  'foot.mat':      { fa:'تشک و موکت', en:'Mattress & Carpet' },
  'foot.asm':      { fa:'مونتاژ',     en:'Assembly' },

  /* table headers */
  'tbl.product':   { fa:'محصول',           en:'Product' },
  'tbl.viscosity': { fa:'ویسکوزیته @۱۸۰°C', en:'Viscosity @180°C' },
  'tbl.opentime':  { fa:'زمان باز @۱۸۰°C',  en:'Open Time @180°C' },
  'tbl.softening': { fa:'نقطه نرمی (°C)',    en:'Softening Point (°C)' },
  'tbl.color':     { fa:'رنگ',              en:'Color' },
  'tbl.spec':      { fa:'مشخصات',           en:'Specification' },

  /* ── HOME ── */
  'idx.eyebrow': { fa:'شرکت دانش‌بنیان · تولید چسب صنعتی از سال ۱۳۹۴', en:'Knowledge-based Company · Hot Melt Adhesive Producer since 2015' },
  'idx.h1':      { fa:'چسب‌های گرماذوب <em>آرامِلت</em><br>برای خطوط تولیدی که نمی‌توانند متوقف شوند', en:'<em>AraMelt</em> Hot Melt Adhesives<br>For production lines that cannot stop' },
  'idx.lead':    { fa:'آریا بسپار پویش پارتاک با تکیه بر دانش فنی و آزمایشگاه پیشرفته، طیف کاملی از چسب‌های هات‌ملت را برای صنایع مختلف تولید می‌کند.', en:'Aria Baspar Pooyesh Partak produces a complete range of hot melt adhesives for diverse industries, backed by technical expertise and advanced laboratory facilities.' },
  'idx.btn1':    { fa:'مشاهده محصولات',       en:'View Products' },
  'idx.btn2':    { fa:'تماس با کارشناسان',    en:'Contact Our Experts' },
  'idx.stat1':   { fa:'تأسیس',               en:'Founded' },
  'idx.stat2':   { fa:'گرید چسب',            en:'Adhesive Grades' },
  'idx.stat3':   { fa:'صنعت کاربردی',        en:'Industries Served' },
  'idx.stat4':   { fa:'تحقیق و توسعه',       en:'In-house R&D' },
  'idx.badge':   { fa:'چسب گرماذوب صنعتی',   en:'Industrial Hot Melt' },

  'idx.why.kicker': { fa:'مزیت‌های فنی',     en:'Technical Advantages' },
  'idx.why.h2':     { fa:'چرا چسب‌های آرامِلت؟', en:'Why AraMelt Adhesives?' },
  'idx.why.sub':    { fa:'عملکرد یکپارچه، چندمنظوره و باکیفیت برای تمام صنایع.', en:'Versatile, high-performance solutions for every industry sector.' },

  'idx.w1h': { fa:'عملکرد چندمنظوره',         en:'Versatile Performance' },
  'idx.w1p': { fa:'کاهش هزینه‌های انبارداری با کاربرد گسترده در فرآیندهای مختلف.', en:'Reduce inventory costs with broad applicability across processes.' },
  'idx.w2h': { fa:'پایداری حرارتی بالا',       en:'High Thermal Stability' },
  'idx.w2p': { fa:'کاهش هزینه‌های نگهداری و تعمیرات خطوط تولید.', en:'Lower maintenance and repair costs for production lines.' },
  'idx.w3h': { fa:'عملکرد تمیز',               en:'Clean Operation' },
  'idx.w3p': { fa:'بدون بخار، بدون بو، بدون آلایندگی.', en:'No steam, no smell, no pollution or contamination.' },
  'idx.w4h': { fa:'چسبندگی عالی',              en:'Excellent Adhesion' },
  'idx.w4p': { fa:'اتصال برتر روی طیف وسیعی از مواد و سطوح صنعتی.', en:'Superior bonding across a wide range of materials and surfaces.' },
  'idx.w5h': { fa:'انعطاف در دمای پایین',      en:'Low Temperature Flexibility' },
  'idx.w5p': { fa:'مقاومت حرارتی بالا همراه با انعطاف‌پذیری در سرما.', en:'High heat resistance combined with cold-weather flexibility.' },
  'idx.w6h': { fa:'بدون گرفتگی نازل',          en:'No Nozzle Blockage' },
  'idx.w6p': { fa:'بدون رسوب کربنی، بدون ژله‌ای‌شدن، بدون گرفتگی نازل دستگاه.', en:'No charcoal, no gel formation, no nozzle clogging.' },

  'idx.prod.kicker': { fa:'کاربردهای صنعتی',   en:'Industrial Applications' },
  'idx.prod.h2':     { fa:'دسته‌های محصولات آرامِلت', en:'AraMelt Product Categories' },
  'idx.prod.sub':    { fa:'هر صنعت نیاز چسبندگی خاص خود را دارد.', en:'Every industry has its own adhesive requirements.' },

  'idx.c1.num': { fa:'۰۱ / صحافی',         en:'01 / BookBinding' },
  'idx.c1.h':   { fa:'صحافی و کتاب‌سازی',  en:'BookBinding' },
  'idx.c1.p':   { fa:'چسب پشت‌بندی، کناربندی و ته‌بندی با استحکام برتر.', en:'Superior spine, side & end gluing adhesives.' },
  'idx.c1.go':  { fa:'اطلاعات بیشتر',       en:'Learn More' },
  'idx.c2.num': { fa:'۰۲ / بسته‌بندی',     en:'02 / Packaging' },
  'idx.c2.h':   { fa:'بسته‌بندی و نی‌چسبانی', en:'Packaging & Straw Attachment' },
  'idx.c2.p':   { fa:'مقاومت تا دمای منفی ۴۰° برای صنایع غذایی.', en:'Resistance down to -40°C for food & beverage industries.' },
  'idx.c2.go':  { fa:'اطلاعات بیشتر',       en:'Learn More' },
  'idx.c3.num': { fa:'۰۳ / کاشی',          en:'03 / Tile' },
  'idx.c3.h':   { fa:'بسته‌بندی کاشی',     en:'Tile Packaging' },
  'idx.c3.p':   { fa:'جداسازی و نگهداری ایمن کاشی در حمل‌ونقل.', en:'Safe tile separation & packaging during transport.' },
  'idx.c3.go':  { fa:'اطلاعات بیشتر',       en:'Learn More' },
  'idx.c4.num': { fa:'۰۴ / فیلتر هوا',     en:'04 / Air Filter' },
  'idx.c4.h':   { fa:'فیلتر هوا',           en:'Air Filters' },
  'idx.c4.p':   { fa:'چسبندگی بادوام برای فیلترهای خودرویی و صنعتی.', en:'Durable bonding for automotive & industrial filters.' },
  'idx.c4.go':  { fa:'اطلاعات بیشتر',       en:'Learn More' },
  'idx.c5.num': { fa:'۰۵ / تشک و موکت',    en:'05 / Mattress & Carpet' },
  'idx.c5.h':   { fa:'تشک و موکت',          en:'Mattress & Carpet' },
  'idx.c5.p':   { fa:'بدون سمیت و بدون بو برای فوم و پارچه.', en:'Non-toxic, odor-free bonding for foam & fabric.' },
  'idx.c5.go':  { fa:'اطلاعات بیشتر',       en:'Learn More' },
  'idx.c6.num': { fa:'۰۶ / مونتاژ',        en:'06 / Assembly' },
  'idx.c6.h':   { fa:'مونتاژ محصولات',     en:'Product Assembly' },
  'idx.c6.p':   { fa:'چسب تمیز و بادوام برای لوازم‌خانگی.', en:'Clean, long-lasting adhesion for home appliances.' },
  'idx.c6.go':  { fa:'اطلاعات بیشتر',       en:'Learn More' },

  'idx.cta.h':  { fa:'برای انتخاب گرید مناسب مشاوره بگیرید', en:'Get expert advice on the right grade' },
  'idx.cta.p':  { fa:'کارشناسان آریا بسپار، گرید بهینه را متناسب با ماشین‌آلات و محصول شما انتخاب می‌کنند.', en:'Our technical experts will recommend the optimal grade for your machinery and product.' },
  'idx.cta.b1': { fa:'تماس فوری',           en:'Call Now' },
  'idx.cta.b2': { fa:'ارسال ایمیل',         en:'Send Email' },

  /* ── PRODUCTS PAGE ── */
  'nav.products': { fa:'حوزه کاری', en:'Industries' },

  'pr.hero.h1':   { fa:'حوزه‌های کاری آرامِلت', en:'AraMelt Industry Solutions' },
  'pr.hero.p':    { fa:'راهکارهای تخصصی چسب گرماذوب برای ۶ صنعت اصلی', en:'Specialized hot melt adhesive solutions for 6 key industries' },
  'pr.book.tag':  { fa:'۰۱ — صحافی',     en:'01 — BookBinding' },
  'pr.book.h':    { fa:'چسب‌های گرماذوب صحافی', en:'BookBinding Hot Melt Adhesives' },
  'pr.book.f1': { fa:'<b>پشت‌بندی و ته‌بندی</b> — چسبندگی عالی روی انواع کاغذ برای صحافی اتوماتیک و دستی', en:'<b>Spine & Back Gluing</b> — Excellent adhesion on all paper types for automatic and manual binding' },
  'pr.book.f2': { fa:'<b>کناربندی ویژه</b> — زمان باز طولانی برای عملیات کناربندی با ماشین‌های پرسرعت', en:'<b>Special Side Gluing</b> — Long open time for side gluing operations with high-speed machines' },
  'pr.book.f3': { fa:'<b>انعطاف کامل</b> — مقاومت در برابر شکستگی در دمای پایین، مناسب صحافی کتاب‌های مرجع', en:'<b>Perfect Flexibility</b> — Cold crack resistance, ideal for reference book binding' },
  'pr.book.f4': { fa:'<b>زمان سخت‌شدن سریع</b> — برش ستون فقط ۲۰ ثانیه پس از صحافی برای افزایش سرعت خط تولید', en:'<b>Fast Set Time</b> — Spine can be trimmed just 20 seconds after binding to increase line speed' },

  'pr.pack.f1': { fa:'<b>بسته‌بندی کارتن خودکار</b> — سرعت بالا، زمان سخت‌شدن سریع، مناسب ماشین‌های بسته‌بندی اتوماتیک', en:'<b>Automatic Cardboard Packaging</b> — High speed, fast set time, compatible with automatic packaging machines' },
  'pr.pack.f2': { fa:'<b>تماس با مواد غذایی</b> — مقاوم در انجماد عمیق تا منفی ۴۰ درجه، تأییدیه تماس با غذا', en:'<b>Food Contact</b> — Deep freeze resistance down to -40°C, food contact compliant' },
  'pr.pack.f3': { fa:'<b>نی‌چسبانی</b> — چسبندگی عالی به PE، PP و سطوح متالیزه برای اتصال نی روی پاکت‌های نوشیدنی', en:'<b>Straw Attachment</b> — Excellent adhesion to PE, PP and metalized surfaces for straw attachment on beverage cartons' },
  'pr.pack.f4': { fa:'<b>دوخت حرارتی و صابون‌پیچی</b> — ویسکوزیته پایین، بدون بو، مناسب بسته‌بندی محصولات بهداشتی', en:'<b>Heat Seal & Soap Wrapping</b> — Low viscosity, low odor, suitable for hygienic product packaging' },

  'pr.tile.f1': { fa:'<b>جداکننده کاشی</b> — جداسازی ایمن کاشی‌های سنگین در حمل‌ونقل بدون آسیب به سطح', en:'<b>Tile Separator</b> — Safe separation of heavy tiles during transport without surface damage' },
  'pr.tile.f2': { fa:'<b>بسته‌بندی کارتن کاشی</b> — استحکام بالا برای نگهداری کاشی‌های سنگین در جعبه', en:'<b>Tile Box Packaging</b> — High strength adhesive for holding heavy tiles securely in their boxes' },
  'pr.tile.f3': { fa:'<b>بدون لکه</b> — جداشدن کامل از سطوح براق و صاف بدون باقی‌گذاشتن هیچ اثری', en:'<b>No Staining</b> — Removes cleanly from glossy and smooth surfaces without leaving any marks' },

  'pr.air.f1': { fa:'<b>فیلتر خودرو</b> — نقطه نرمی بالا، مقاوم در دماهای موتور، شفاف و بدون رنگ', en:'<b>Automotive Filter</b> — High softening point, resistant to engine temperatures, transparent' },
  'pr.air.f2': { fa:'<b>فیلتر صنعتی و پزشکی</b> — چسبندگی عالی به رسانه‌های فیلتر، انعطاف لازم برای پلیسه‌های فیلتر', en:'<b>Industrial & Medical Filter</b> — Excellent adhesion to filter media, required flexibility for filter pleats' },
  'pr.air.f3': { fa:'<b>پد سلولزی</b> — مخصوص فیلترهای تبخیری و هواکش‌های صنعتی و خانگی', en:'<b>Cellulosic Pad</b> — Specifically for evaporative cooler pads and industrial/residential air handlers' },

  'pr.mat.f1': { fa:'<b>فنر پاکتی</b> — چسبندگی فوم به پاکت فنر با انعطاف عالی، زمان سخت‌شدن تنظیم‌پذیر', en:'<b>Pocket Spring</b> — Foam to pocket spring bonding with excellent flexibility and adjustable set time' },
  'pr.mat.f2': { fa:'<b>لبه‌بندی موکت</b> — استحکام کامل در لبه‌های موکت، رنگ شفاف، نقطه نرمی بالا', en:'<b>Carpet Edge Bonding</b> — Perfect strength at carpet edges, transparent color, high softening point' },
  'pr.mat.f3': { fa:'<b>برچسب اتو پارچه‌ای</b> — ویژه تولید لیبل ابریشمی برای تشک و موکت با استحکام اتصال عالی', en:'<b>Iron Label</b> — Specially for silk iron label production for mattress and carpet with perfect adhesion strength' },

  'pr.asm.f1': { fa:'<b>مونتاژ یخچال</b> — آب‌بندی کابینت قبل از تزریق فوم عایق، چسبندگی عالی به ABS', en:'<b>Fridge Assembly</b> — Cabinet sealing prior to insulation foam injection, excellent adhesion to ABS' },
  'pr.asm.f2': { fa:'<b>لوازم خانگی</b> — مناسب ماشین لباسشویی، ظرفشویی و فیلتر جاروبرقی، عملکرد پایدار', en:'<b>Home Appliances</b> — Suitable for washing machines, dishwashers and vacuum cleaner filters, long lasting performance' },
  'pr.asm.f3': { fa:'<b>موکت خودرو</b> — نقطه نرمی بسیار بالا، مقاوم در برابر حرارت داخل خودرو', en:'<b>Car Carpeting</b> — Very high softening point, resistant to interior vehicle heat' },

  'pr.book.desc': { fa:'از اولین تا آخرین صفحه؛ چسب‌های آرامِلت عملکرد عالی در پشت‌بندی، کناربندی و ته‌بندی ارائه می‌دهند. استحکام کشش صفحه برتر و برش ستون کتاب تنها ۲۰ ثانیه پس از صحافی.', en:'Bound to last from the first page to the very last. AraMelt adhesives provide outstanding spine, side & end gluing with superior page pull strength. Spines can be trimmed just 20 seconds after binding.' },
  'pr.pack.tag':  { fa:'۰۲ — بسته‌بندی', en:'02 — Packaging & Straw' },
  'pr.pack.h':    { fa:'چسب‌های بسته‌بندی و نی‌چسبانی', en:'Packaging & Straw Attachment Adhesives' },
  'pr.pack.desc': { fa:'هزاران تولیدکننده‌ی برتر در صنایع غذایی، نوشیدنی، کاشی و دارویی برای بهبود ارائه محصول و شرایط خط تولید به آرامِلت تکیه می‌کنند. مقاومت تا دمای منفی ۴۰ درجه و اتصال قوی به سطوح کوتد.', en:'Thousands of top brand food, beverage, tile and pharmaceutical manufacturers rely on AraMelt. Exceptional versatility with resistance down to -40°C and strong bonding to coated surfaces.' },
  'pr.tile.tag':  { fa:'۰۳ — کاشی',     en:'03 — Tile Packaging' },
  'pr.tile.h':    { fa:'چسب‌های بسته‌بندی کاشی', en:'Tile Packaging Adhesives' },
  'pr.tile.desc': { fa:'گریدهای آرامِلت برای جداسازی کاشی‌های کف‌پوش، پرسلان و سرامیک؛ جداشدن بدون لکه از سطوح گران‌قیمت.', en:'AraMelt range for separating floor, porcelain and ceramic tiles. Removes without leaving any stains — critical for expensive tile surfaces.' },
  'pr.air.tag':   { fa:'۰۴ — فیلتر هوا', en:'04 — Air Filter' },
  'pr.air.h':     { fa:'چسب‌های فیلتر هوا', en:'Air Filter Adhesives' },
  'pr.air.desc':  { fa:'طیف جامع و اثبات‌شده برای صنایع تجاری، پزشکی، خودرویی و خانگی. غیرسایشی، کم‌کربن و بدون دردسر — کاهش هزینه‌های نگهداری و افزایش بهره‌وری.', en:'Comprehensive, market-proven range for commercial, medical, automotive & home filter manufacturing. Non-abrasive, low char and trouble-free — maximizing production efficiency.' },
  'pr.mat.tag':   { fa:'۰۵ — تشک و موکت', en:'05 — Mattress & Carpet' },
  'pr.mat.h':     { fa:'چسب‌های تشک و موکت', en:'Mattress & Carpet Adhesives' },
  'pr.mat.desc':  { fa:'مناسب اسمبل دستی و اتوماتیک برای انواع تشک شامل فنر باز، فنر پاکتی و فوم. غیرسمی، بدون دود و تقریباً بدون بو برای اتصال فوم و پارچه.', en:'Suitable for manual and automated assembly of all mattress types including open coil, pocket spring & solid foam. Non-toxic, non-fuming and almost odor free.' },
  'pr.asm.tag':   { fa:'۰۶ — مونتاژ',   en:'06 — Product Assembly' },
  'pr.asm.h':     { fa:'چسب‌های مونتاژ محصولات', en:'Product Assembly Adhesives' },
  'pr.asm.desc':  { fa:'چسب تمیز، کم‌حجم و بادوام برای ساخت لوازم‌خانگی: ماشین لباسشویی، ظرفشویی، یخچال و فریزر. گرید ویژه برای آب‌بندی کابینت یخچال پیش از تزریق فوم عایق.', en:'Clean, discreet, long-lasting adhesives for manufacturing washing machines, dishwashers, vacuum cleaners, fridges & freezers. Special grade for fridge cabinet sealing prior to foam injection.' },

  /* ── ABOUT ── */
  'ab.hero.h1':     { fa:'درباره آریا بسپار', en:'About Aria Baspar' },
  'ab.hero.p':      { fa:'شرکت دانش‌بنیان تولید چسب‌های گرماذوب آرامِلت', en:'Knowledge-based manufacturer of AraMelt hot melt adhesives' },
  'ab.kicker':      { fa:'داستان ما',         en:'Our Story' },
  'ab.h2':          { fa:'آریا بسپار پویش پارتاک', en:'Aria Baspar Pooyesh Partak' },
  'ab.p1':          { fa:'گروه آریا بسپار پویش پارتاک در سال ۱۳۹۴ تأسیس شد و به‌عنوان یک شرکت دانش‌بنیان، طیف گسترده‌ای از چسب‌های گرماذوب را تحت برند آرامِلت تولید می‌کند.', en:'Aria Baspar Pooyesh Partak Group was established in 2015 and as a knowledge-based company, has been producing a wide range of hot melt adhesives under the AraMelt brand.' },
  'ab.p2':          { fa:'با تکیه بر تجربه و دانش تیم تحقیق و توسعه، امکانات آزمایشگاهی پیشرفته، بهره‌گیری از فناوری‌های روز و استفاده از مواد اولیه باکیفیت، آریا بسپار توانسته پاسخ‌گوی نیازهای متنوع صنایع مختلف باشد.', en:'Relying on the experience and knowledge of the R&D team, advanced laboratory facilities, new production technologies and high-quality raw materials, Aria Baspar responds to a wide range of industrial requirements.' },
  'ab.p3':          { fa:'آنچه آریا بسپار را متمایز می‌کند، تکیه بر کیفیت، نوآوری‌های دانش‌بنیان و تنوع تولید بر اساس نیاز واقعی مشتریان است.', en:'What distinguishes Aria Baspar is relying on quality, knowledge-based innovations and variety in production based on customer needs.' },
  'ab.s1b':         { fa:'۱۳۹۴',              en:'2015' },
  'ab.s1s':         { fa:'سال تأسیس',         en:'Founded' },
  'ab.s2b':         { fa:'دانش‌بنیان',        en:'Knowledge-based' },
  'ab.s2s':         { fa:'شرکت',              en:'Company' },
  'ab.s3b':         { fa:'R&D',               en:'R&D' },
  'ab.s3s':         { fa:'آزمایشگاه داخلی',   en:'In-house Lab' },
  'ab.why.kicker':  { fa:'مزیت‌های فنی',      en:'Technical Advantages' },
  'ab.why.h2':      { fa:'چرا چسب‌های آرامِلت؟', en:'Why AraMelt Adhesives?' },

  /* ── CONTACT ── */
  'con.hero.h1': { fa:'تماس با ما',          en:'Contact Us' },
  'con.hero.p':  { fa:'برای استعلام قیمت، نمونه‌محصول یا مشاوره‌ی فنی آماده‌ایم', en:'Ready for price inquiries, product samples or technical consultation' },
  'con.kicker':  { fa:'ارتباط مستقیم',       en:'Get in Touch' },
  'con.h2':      { fa:'راه‌های ارتباطی با آریا بسپار', en:'Ways to Reach Aria Baspar' },
  'con.p':       { fa:'تیم کارشناسی ما در اسرع وقت پاسخگوی شما خواهد بود.', en:'Our expert team will respond to you as soon as possible.' },
  'con.c1h':     { fa:'آدرس کارخانه',        en:'Factory Address' },
  'con.c1p':     { fa:'اصفهان، شهرک صنعتی وزیرآباد، خیابان اول، پلاک ۱۹۷', en:'No.197, First St. Vazir Abad Industrial Zone, Isfahan, Iran' },
  'con.c2h':     { fa:'تلفن تماس',           en:'Phone Numbers' },
  'con.c3h':     { fa:'ایمیل و وب‌سایت',    en:'Email & Website' },
  'con.c4h':     { fa:'شبکه‌های اجتماعی',   en:'Social Media' },
  'con.cta.h':   { fa:'درخواست نمونه رایگان', en:'Request a Free Sample' },
  'con.cta.p':   { fa:'برای دریافت نمونه‌ی رایگان محصولات آرامِلت جهت تست در خط تولید خود تماس بگیرید.', en:'Contact us to receive free AraMelt product samples for testing in your production line.' },
  'con.cta.b':   { fa:'تماس تلفنی',          en:'Call Us' },
  'con.form.h':  { fa:'درخواست مشاوره یا استعلام قیمت', en:'Request a Consultation or Price Quote' },
  'con.form.p':  { fa:'فرم زیر را تکمیل کنید تا کارشناسان ما تماس بگیرند.', en:'Fill in the form below and our experts will get back to you.' },
  'con.form.name':    { fa:'نام و نام‌خانوادگی', en:'Full Name' },
  'con.form.company': { fa:'نام شرکت',           en:'Company Name' },
  'con.form.phone':   { fa:'شماره تماس',         en:'Phone Number' },
  'con.form.email':   { fa:'ایمیل',              en:'Email' },
  'con.form.industry':{ fa:'حوزه صنعتی',         en:'Industry Sector' },
  'con.form.msg':     { fa:'توضیحات و نیاز شما', en:'Your Message & Requirements' },
  'con.form.submit':  { fa:'ارسال درخواست',      en:'Send Request' },
  'con.form.note':    { fa:'کارشناسان ما معمولاً در کمتر از ۲۴ ساعت کاری پاسخ می‌دهند.', en:'Our team usually responds within 24 business hours.' },
  'con.map.link':     { fa:'مشاهده در گوگل مپ',  en:'View on Google Maps' },
};

/* ── color translations ── */
const COLOR_FA = {
  'Light Yellow':'زرد روشن', 'Yellow':'زرد', 'Yellowish':'مایل به زرد',
  'White':'سفید', 'Matte White':'سفید مات'
};

/* ── spec translations ── */
const SPEC_FA = {
  /* BookBinding */
  'General Purpose / Spine & Back Gluing':'چند منظوره / پشت‌بندی و ته‌بندی',
  'Fast Set Time / Spine & Side Gluing / High Speed Machine':'زمان سخت‌شدن سریع / پشت‌بندی و کناربندی / ماشین پرسرعت',
  'Spine & Side Gluing / Perfect Hot Tack / Medium Set Time':'پشت‌بندی و کناربندی / چسبندگی گرم عالی / زمان سخت‌شدن متوسط',
  'Excellent Adhesion / Special Side Gluing / Long Open Time':'چسبندگی عالی / کناربندی ویژه / زمان باز طولانی',
  'Excellent Adhesion / Perfect Flexibility / Spine & Side Gluing':'چسبندگی عالی / انعطاف کامل / پشت‌بندی و کناربندی',
  'General Purpose / Economical Grade / Excellent Hot Tack':'چند منظوره / گرید اقتصادی / چسبندگی گرم عالی',
  /* Packaging */
  'Automatic Cardboard Packaging / Low Viscosity / High Speed':'بسته‌بندی کارتن خودکار / ویسکوزیته پایین / پرسرعت',
  'Automatic Cardboard / Very Fast Set Time / High Speed':'بسته‌بندی کارتن خودکار / زمان سخت‌شدن بسیار سریع / پرسرعت',
  'Automatic Cardboard Packaging /Very Fast Set Time / High Speed':'بسته‌بندی کارتن خودکار / زمان سخت‌شدن بسیار سریع / پرسرعت',
  'Automatic Cardboard / General Purpose / Good Flexibility':'بسته‌بندی کارتن خودکار / چند منظوره / انعطاف خوب',
  'Automatic Cardboard Packaging / General Purpose / Good flexibility':'بسته‌بندی کارتن خودکار / چند منظوره / انعطاف خوب',
  'Packaging / Small Case & Carton / Low Viscosity':'بسته‌بندی / جعبه کوچک و کارتن / ویسکوزیته پایین',
  'Fast Setting / Low Viscosity / Low Odor':'سخت‌شدن سریع / ویسکوزیته پایین / بوی کم',
  'Packaging & Straw Attachment / Thermal Stable':'بسته‌بندی و نی‌چسبانی / پایداری حرارتی',
  'Deep Freeze / Food Contact / Cold Resistance':'انجماد عمیق / تماس با مواد غذایی / مقاوم در سرما',
  'Soap Wrapping / Heat Seal':'بسته‌بندی صابون / دوخت حرارتی',
  'Difficult Substrate Bonding / PE, PP, OPP & Metalized Surface':'چسبندگی روی سطوح دشوار / PE، PP، OPP و سطوح متالیزه',
  'Cap Fixing / Excellent Adhesion to PE & PP / Perfect Adhesion Strength':'نصب درپوش / چسبندگی عالی به PE و PP / استحکام اتصال کامل',
  'Cap Fixing / Excellent Adhesion to PE & PP':'نصب درپوش / چسبندگی عالی به PE و PP',
  /* Tile */
  'Separator / Good Flexibility':'جداکننده / انعطاف خوب',
  'Separator / Very Fast Setting / General Purpose':'جداکننده / سخت‌شدن بسیار سریع / چند منظوره',
  'Separator / Very Fast Setting / Good Rigidity':'جداکننده / سخت‌شدن بسیار سریع / سختی خوب',
  /* Air Filter */
  'Air Filter / Automotive / High Softening Point / Transparent Yellow':'فیلتر هوا / خودرویی / نقطه نرمی بالا / زرد شفاف',
  'Air Filter / Automotive / High Softening Point / Economical Grade':'فیلتر هوا / خودرویی / نقطه نرمی بالا / گرید اقتصادی',
  'Filter Bonding / Industrial Filter / Transparent / Low Viscosity':'اتصال فیلتر / فیلتر صنعتی / شفاف / ویسکوزیته پایین',
  'Filter Bonding / Industrial Filter / Transparent / Long Open Time':'اتصال فیلتر / فیلتر صنعتی / شفاف / زمان باز طولانی',
  'Filter Bonding / Industrial / Transparent / Low Viscosity':'اتصال فیلتر / صنعتی / شفاف / ویسکوزیته پایین',
  'Filter Bonding / Industrial / Transparent / Long Open Time':'اتصال فیلتر / صنعتی / شفاف / زمان باز طولانی',
  'Filter Bonding / Industrial Filter / Excellent Adhesion & Flexibility':'اتصال فیلتر / فیلتر صنعتی / چسبندگی و انعطاف عالی',
  'Filter Bonding / Industrial / Excellent Adhesion & Flexibility':'اتصال فیلتر / صنعتی / چسبندگی و انعطاف عالی',
  'Cellulosic Pad / Good Adhesion / Long Open Time':'پد سلولزی / چسبندگی خوب / زمان باز طولانی',
  'Cellulosic Pad / Good Adhesion / Fast Setting Time':'پد سلولزی / چسبندگی خوب / زمان سخت‌شدن سریع',
  /* Mattress */
  'Fast Setting / Pocket Spring / Perfect Flexibility':'سخت‌شدن سریع / فنر پاکتی / انعطاف کامل',
  'Fast Setting Time / Pocket Spring / Perfect Flexibility':'سخت‌شدن سریع / فنر پاکتی / انعطاف کامل',
  'Pocket Spring / High Flexibility / Long Open Time / Excellent Adhesion':'فنر پاکتی / انعطاف بالا / زمان باز طولانی / چسبندگی عالی',
  'Short Open Time / Pocket Spring / Foam to Pocket Spring':'زمان باز کوتاه / فنر پاکتی / فوم به فنر پاکتی',
  'Carpet Edge Bonding / Perfect Strength / High Softening Point':'اتصال لبه موکت / استحکام کامل / نقطه نرمی بالا',
  'Carpet Edge Bonding / Perfect Strength / Transparent Color':'اتصال لبه موکت / استحکام کامل / رنگ شفاف',
  'Iron Label / Mattress & Carpet / Perfect Adhesion Strength':'برچسب اتو / تشک و موکت / استحکام اتصال کامل',
  'Iron Label / Mattress & Carpet / Perfect Adhesion Strength & Flexibility':'برچسب اتو / تشک و موکت / استحکام اتصال کامل و انعطاف',
  /* Assembly */
  'Fridge Assembly / Fast Setting Time / Good Adhesion':'مونتاژ یخچال / زمان سخت‌شدن سریع / چسبندگی خوب',
  'Fridge Assembly / Perfect Flexibility / Excellent Adhesion to ABS':'مونتاژ یخچال / انعطاف کامل / چسبندگی عالی به ABS',
  'Home Appliances Assembly / Perfect Adhesion / Long Lasting Performance':'مونتاژ لوازم خانگی / چسبندگی کامل / عملکرد پایدار',
  'Home Appliances Assembly / Perfect Adhesion / long lasting performance':'مونتاژ لوازم خانگی / چسبندگی کامل / عملکرد پایدار',
  'Car Carpeting / Perfect Adhesion / High Softening Temperature':'موکت خودرو / چسبندگی کامل / دمای نرمی بالا',
  'Car Carpeting / Perfect Adhesion / High Softening Point':'موکت خودرو / چسبندگی کامل / نقطه نرمی بالا',
};

/* =========================================
   LANGUAGE ENGINE
========================================= */
let currentLang = localStorage.getItem(LANG_KEY) || 'fa';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  const isFA = lang === 'fa';

  document.documentElement.lang = isFA ? 'fa' : 'en';
  document.documentElement.dir  = isFA ? 'rtl' : 'ltr';

  /* logo swap */
  document.querySelectorAll('.brand-logo').forEach(img => {
    img.src = isFA ? 'images/logo.png' : 'images/logo-en.png';
  });
  document.querySelectorAll('.foot-logo').forEach(img => {
    img.src = isFA ? 'images/logo.png' : 'images/logo-en.png';
  });

  /* brand text */
  document.querySelectorAll('.brand-fa').forEach(el => {
    el.style.fontSize    = isFA ? '15px' : '10px';
    el.style.color       = isFA ? '#fff'  : '#67BD4A';
    el.style.fontWeight  = isFA ? '800'   : '600';
    el.style.letterSpacing = isFA ? '0'   : '.08em';
  });
  document.querySelectorAll('.brand-en').forEach(el => {
    el.style.fontSize    = isFA ? '10px'  : '13px';
    el.style.color       = isFA ? '#67BD4A' : '#fff';
    el.style.fontWeight  = isFA ? '600'   : '800';
    el.style.letterSpacing = isFA ? '.12em' : '0';
  });

  /* data-i18n */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[key]) el.innerHTML = T[key][lang];
  });

  /* data-fa / data-en on table cells */
  document.querySelectorAll('[data-fa]').forEach(el => {
    el.textContent = isFA ? el.getAttribute('data-fa') : el.getAttribute('data-en');
  });

  /* lang button label */
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.textContent = isFA ? 'EN' : 'FA';
    btn.classList.add('lang-pop');
    setTimeout(() => btn.classList.remove('lang-pop'), 400);
  });
}

function toggleLang() {
  applyLang(currentLang === 'fa' ? 'en' : 'fa');
}

/* =========================================
   HEADER SCROLL
========================================= */
function initHeader() {
  const h = document.getElementById('siteHeader');
  if (!h) return;
  const fn = () => h.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', fn, { passive:true });
  fn();
}

/* =========================================
   HAMBURGER
========================================= */
function initHamburger() {
  const btn    = document.getElementById('hamBtn');
  const drawer = document.getElementById('mobileNav');
  if (!btn || !drawer) return;
  btn.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    drawer.classList.remove('open');
    btn.classList.remove('open');
  }));
}

/* =========================================
   SCROLL REVEAL
========================================= */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.rv').forEach(el => io.observe(el));
}

/* =========================================
   ACTIVE NAV
========================================= */
function initActiveLink() {
  const path = window.location.pathname;
  document.querySelectorAll('nav.links a, .mobile-nav a').forEach(a => {
    const h = a.getAttribute('href') || '';
    if (
      (path.endsWith('/') || path.includes('index')) && (h.includes('index') || h === '/') ||
      path.includes('products') && h.includes('products') ||
      path.includes('about')    && h.includes('about')    ||
      path.includes('contact')  && h.includes('contact')
    ) a.classList.add('active');
  });
}

/* =========================================
   INIT
========================================= */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHamburger();
  initReveal();
  initActiveLink();
  applyLang(currentLang);
  document.querySelectorAll('[data-lang-btn]').forEach(b => b.addEventListener('click', toggleLang));
});
