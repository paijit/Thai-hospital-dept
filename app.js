/* ============================================
   DATA - Thailand Hospitals with High Debt
   ============================================ */
const hospitalData = [
    { id: 1, name: "Sappasitthiprasong Hospital", nameTh: "โรงพยาบาลสรรพสิทธิประสงค์", province: "Ubon Ratchathani", region: "Northeast", debt: 890, status: "critical", promptpay: "0994000102980" },
    { id: 2, name: "Khon Kaen Hospital", nameTh: "โรงพยาบาลขอนแก่น", province: "Khon Kaen", region: "Northeast", debt: 780, status: "critical", promptpay: "0994000104020" },
    { id: 3, name: "Udon Thani Hospital", nameTh: "โรงพยาบาลอุดรธานี", province: "Udon Thani", region: "Northeast", debt: 720, status: "critical", promptpay: "0994000104050" },
    { id: 4, name: "Nakhon Ratchasima Hospital", nameTh: "โรงพยาบาลมหาราชนครราชสีมา", province: "Nakhon Ratchasima", region: "Northeast", debt: 690, status: "critical", promptpay: "0994000103010" },
    { id: 5, name: "Songkhla Hospital", nameTh: "โรงพยาบาลสงขลา", province: "Songkhla", region: "South", debt: 620, status: "critical", promptpay: "0994000109040" },
    { id: 6, name: "Lampang Hospital", nameTh: "โรงพยาบาลลำปาง", province: "Lampang", region: "North", debt: 580, status: "severe", promptpay: "0994000105220" },
    { id: 7, name: "Roi Et Hospital", nameTh: "โรงพยาบาลร้อยเอ็ด", province: "Roi Et", region: "Northeast", debt: 540, status: "severe", promptpay: "0994000104500" },
    { id: 8, name: "Sakon Nakhon Hospital", nameTh: "โรงพยาบาลสกลนคร", province: "Sakon Nakhon", region: "Northeast", debt: 510, status: "severe", promptpay: "0994000104700" },
    { id: 9, name: "Buriram Hospital", nameTh: "โรงพยาบาลบุรีรัมย์", province: "Buriram", region: "Northeast", debt: 480, status: "severe", promptpay: "0994000103100" },
    { id: 10, name: "Chiang Rai Prachanukroh Hospital", nameTh: "โรงพยาบาลเชียงรายประชานุเคราะห์", province: "Chiang Rai", region: "North", debt: 460, status: "severe", promptpay: "0994000105700" },
    { id: 11, name: "Surat Thani Hospital", nameTh: "โรงพยาบาลสุราษฎร์ธานี", province: "Surat Thani", region: "South", debt: 440, status: "severe", promptpay: "0994000108400" },
    { id: 12, name: "Nakhon Si Thammarat Hospital", nameTh: "โรงพยาบาลมหาราชนครศรีธรรมราช", province: "Nakhon Si Thammarat", region: "South", debt: 420, status: "severe", promptpay: "0994000108010" },
    { id: 13, name: "Phitsanulok Hospital", nameTh: "โรงพยาบาลพุทธชินราช พิษณุโลก", province: "Phitsanulok", region: "North", debt: 395, status: "moderate", promptpay: "0994000106500" },
    { id: 14, name: "Surin Hospital", nameTh: "โรงพยาบาลสุรินทร์", province: "Surin", region: "Northeast", debt: 370, status: "moderate", promptpay: "0994000103200" },
    { id: 15, name: "Maha Sarakham Hospital", nameTh: "โรงพยาบาลมหาสารคาม", province: "Maha Sarakham", region: "Northeast", debt: 350, status: "moderate", promptpay: "0994000104400" },
    { id: 16, name: "Nakhon Phanom Hospital", nameTh: "โรงพยาบาลนครพนม", province: "Nakhon Phanom", region: "Northeast", debt: 330, status: "moderate", promptpay: "0994000104800" },
    { id: 17, name: "Trang Hospital", nameTh: "โรงพยาบาลตรัง", province: "Trang", region: "South", debt: 310, status: "moderate", promptpay: "0994000109200" },
    { id: 18, name: "Si Sa Ket Hospital", nameTh: "โรงพยาบาลศรีสะเกษ", province: "Si Sa Ket", region: "Northeast", debt: 290, status: "moderate", promptpay: "0994000103300" },
    { id: 19, name: "Phrae Hospital", nameTh: "โรงพยาบาลแพร่", province: "Phrae", region: "North", debt: 270, status: "moderate", promptpay: "0994000105400" },
    { id: 20, name: "Loei Hospital", nameTh: "โรงพยาบาลเลย", province: "Loei", region: "Northeast", debt: 250, status: "moderate", promptpay: "0994000104200" },
];

/* ============================================
   i18n TRANSLATIONS
   ============================================ */
let currentLang = 'th'; // Default to Thai

const translations = {
    th: {
        // Nav
        nav_overview: 'ภาพรวม',
        nav_charts: 'กราฟข้อมูล',
        nav_hospitals: 'โรงพยาบาล',
        nav_donate: 'บริจาค',

        // Hero
        hero_badge: '🇹🇭 วิกฤตโรงพยาบาลรัฐไทย',
        hero_title: 'ช่วยโรงพยาบาลไทย<br><span class="gradient-text" data-i18n="hero_title_accent">ก้าวข้ามวิกฤตหนี้สิน</span>',
        hero_title_accent: 'ก้าวข้ามวิกฤตหนี้สิน',
        hero_subtitle: 'โรงพยาบาลรัฐหลายร้อยแห่งทั่วประเทศไทยกำลังเผชิญกับปัญหาหนี้สินมหาศาล ส่งผลกระทบต่อการดูแลสุขภาพของประชาชนหลายล้านคน การบริจาคของคุณสามารถสร้างความเปลี่ยนแปลงได้',
        stat_hospitals: 'โรงพยาบาลที่มีหนี้',
        stat_total_debt: 'ล้านบาท หนี้สินรวม',
        stat_critical: 'โรงพยาบาลวิกฤต',
        btn_donate: 'บริจาคเลย',
        btn_view_data: 'ดูข้อมูล',

        // Overview
        overview_tag: 'ภาพรวม',
        overview_title: 'ทำความเข้าใจ<span class="gradient-text" data-i18n="overview_title_accent">วิกฤตหนี้โรงพยาบาล</span>',
        overview_title_accent: 'วิกฤตหนี้โรงพยาบาล',
        overview_desc: 'โรงพยาบาลรัฐของไทยกำลังเผชิญวิกฤตการเงินที่รุนแรงขึ้น โรงพยาบาลหลายแห่งใช้จ่ายในการรักษาผู้ป่วยมากกว่างบประมาณที่ได้รับจากระบบหลักประกันสุขภาพ',
        card1_title: 'งบประมาณไม่เพียงพอ',
        card1_desc: 'อัตราการเบิกจ่ายจากภาครัฐมักไม่เพียงพอต่อค่าใช้จ่ายจริงในการรักษา ทำให้โรงพยาบาลขาดทุนสะสมทุกปี',
        card2_title: 'โครงการ 30 บาท',
        card2_desc: 'ระบบหลักประกันสุขภาพถ้วนหน้าให้บริการราคาย่อมเยา แต่มักเบิกจ่ายให้โรงพยาบาลต่ำกว่าต้นทุน โดยเฉพาะการรักษาที่ซับซ้อน',
        card3_title: 'ค่าใช้จ่ายที่เพิ่มขึ้น',
        card3_desc: 'ค่าเวชภัณฑ์ ราคายา และค่าบำรุงรักษาอุปกรณ์การแพทย์เพิ่มขึ้นอย่างต่อเนื่อง สร้างภาระเพิ่มเติมต่องบประมาณโรงพยาบาล',
        card4_title: 'โรงพยาบาลในชนบท',
        card4_desc: 'โรงพยาบาลในจังหวัดห่างไกลได้รับผลกระทบมากเป็นพิเศษ ต้องให้บริการประชากรจำนวนมากด้วยงบประมาณและทรัพยากรที่จำกัด',

        // Charts
        charts_tag: 'ข้อมูลและการวิเคราะห์',
        charts_title: 'กราฟแสดง<span class="gradient-text" data-i18n="charts_title_accent">หนี้สินโรงพยาบาล</span>',
        charts_title_accent: 'หนี้สินโรงพยาบาล',
        charts_desc: 'กราฟเชิงโต้ตอบแสดงการกระจายหนี้สินของโรงพยาบาลรัฐที่ได้รับผลกระทบมากที่สุดทั่วประเทศไทย',
        chart_bar_title: '12 อันดับโรงพยาบาลหนี้สูงสุด',
        chart_bar_badge: 'ล้านบาท',
        chart_doughnut_title: 'หนี้สินแบ่งตามภูมิภาค',
        chart_doughnut_badge: 'การกระจาย',
        chart_line_title: 'แนวโน้มหนี้สินรวม (2562-2568)',
        chart_line_badge: 'รายปี',
        chart_hbar_title: 'สัดส่วนหนี้สินตามประเภท',
        chart_hbar_badge: 'ประเภท',

        // Hospitals
        hospitals_tag: 'รายชื่อโรงพยาบาล',
        hospitals_title: 'โรงพยาบาลที่มี<span class="gradient-text" data-i18n="hospitals_title_accent">หนี้สูงสุด</span>',
        hospitals_title_accent: 'หนี้สูงสุด',
        hospitals_desc: 'ดูรายชื่อโรงพยาบาลรัฐที่เผชิญกับปัญหาการเงินอย่างหนัก คลิกที่โรงพยาบาลเพื่อดูรายละเอียดและบริจาค',
        filter_all: 'ทั้งหมด',
        filter_critical: '🔴 วิกฤต',
        filter_severe: '🟠 รุนแรง',
        filter_moderate: '🟡 ปานกลาง',
        search_placeholder: 'ค้นหาโรงพยาบาลตามชื่อ จังหวัด หรือภูมิภาค...',

        // Donate
        donate_tag: 'ร่วมสร้างความเปลี่ยนแปลง',
        donate_title: 'บริจาคผ่าน <span class="gradient-text" data-i18n="donate_title_accent">QR Code</span>',
        donate_title_accent: 'QR Code',
        donate_desc: 'สแกน QR Code ด้วยแอปธนาคารของคุณเพื่อบริจาคโดยตรงสู่กองทุนช่วยเหลือโรงพยาบาล ทุกบาททุกสตางค์มีความหมาย',
        donate_note_title: 'การบริจาคทำงานอย่างไร',
        donate_note_desc: 'QR Code เชื่อมต่อกับบัญชีพร้อมเพย์และบัญชีบริจาคอย่างเป็นทางการของโรงพยาบาล เงินบริจาคจะถูกส่งตรงไปยังกองทุนโรงพยาบาลเพื่อจัดซื้อเวชภัณฑ์ บำรุงรักษาอุปกรณ์ และดูแลผู้ป่วย การบริจาคทั้งหมดสามารถนำไปลดหย่อนภาษีได้ตามกฎหมายไทย',

        // Footer
        footer_desc: 'เชื่อมต่อผู้บริจาคผู้ใจบุญกับโรงพยาบาลรัฐของไทยที่ต้องการความช่วยเหลือ ร่วมกันสร้างระบบสาธารณสุขที่ดีเพื่อคนไทยทุกคน',
        footer_links: 'ลิงก์ด่วน',
        footer_resources: 'แหล่งข้อมูล',
        footer_moph: 'กระทรวงสาธารณสุข',
        footer_nhso: 'รายงาน สปสช.',
        footer_financial: 'ข้อมูลการเงินโรงพยาบาล',
        footer_transparency: 'รายงานความโปร่งใส',
        footer_source: 'ข้อมูลจากกระทรวงสาธารณสุข สปสช. และรายงานของโรงพยาบาลรัฐ เพื่อการรับรู้และการกุศล',
        footer_copy: '© 2025 Thai Hospital Relief สร้างด้วย ❤️ เพื่อสาธารณสุขไทย',

        // Dynamic content
        debt_label: 'หนี้สิน',
        status_critical: 'วิกฤต',
        status_severe: 'รุนแรง',
        status_moderate: 'ปานกลาง',
        current_debt: 'หนี้สินปัจจุบัน',
        no_results: 'ไม่พบโรงพยาบาลที่ตรงกับเงื่อนไขของคุณ',
        modal_scan: 'สแกน QR Code นี้ด้วยแอปธนาคารเพื่อบริจาคผ่านพร้อมเพย์โดยตรง',
        modal_account: 'บัญชี',
        modal_tax: 'การบริจาคทั้งหมดสามารถนำไปลดหย่อนภาษีได้ตามประมวลรัษฎากร มาตรา 47(7)',
        donate_card_debt: 'หนี้สินปัจจุบัน',

        // Chart labels (Thai)
        chart_debt_label: 'หนี้สิน (ล้านบาท)',
        chart_total_debt_label: 'หนี้สินรวม (พันล้านบาท)',
        chart_debt_amount_label: 'จำนวนหนี้ (พันล้านบาท)',

        // Regions
        region_northeast: 'ภาคตะวันออกเฉียงเหนือ',
        region_north: 'ภาคเหนือ',
        region_south: 'ภาคใต้',
        region_central: 'ภาคกลาง',

        // Debt categories
        cat_supplies: 'เวชภัณฑ์และยา',
        cat_equipment: 'บำรุงรักษาอุปกรณ์',
        cat_staff: 'ค่าตอบแทนบุคลากรส่วนต่าง',
        cat_utility: 'สาธารณูปโภคและดำเนินงาน',
        cat_infra: 'ซ่อมแซมโครงสร้างพื้นฐาน',
        cat_referral: 'ค่าส่งต่อผู้ป่วย',
    },
    en: {
        // Nav
        nav_overview: 'Overview',
        nav_charts: 'Charts',
        nav_hospitals: 'Hospitals',
        nav_donate: 'Donate',

        // Hero
        hero_badge: '🇹🇭 Thailand Public Hospital Crisis',
        hero_title: 'Help Thailand\'s Hospitals<br><span class="gradient-text" data-i18n="hero_title_accent">Overcome Their Debt</span>',
        hero_title_accent: 'Overcome Their Debt',
        hero_subtitle: 'Hundreds of public hospitals across Thailand are struggling with massive debt, threatening healthcare for millions. Your donation can make a difference.',
        stat_hospitals: 'Hospitals in Debt',
        stat_total_debt: 'Million ฿ Total Debt',
        stat_critical: 'Critical Hospitals',
        btn_donate: 'Donate Now',
        btn_view_data: 'View Data',

        // Overview
        overview_tag: 'Overview',
        overview_title: 'Understanding the <span class="gradient-text" data-i18n="overview_title_accent">Hospital Debt Crisis</span>',
        overview_title_accent: 'Hospital Debt Crisis',
        overview_desc: 'Thailand\'s public hospitals face a growing financial crisis. Many hospitals spend more treating patients than they receive from government healthcare schemes.',
        card1_title: 'Underfunded Healthcare',
        card1_desc: 'Government reimbursement rates often fall short of actual treatment costs, leaving hospitals with growing deficits year after year.',
        card2_title: '30 Baht Scheme',
        card2_desc: 'The Universal Coverage Scheme provides affordable care but often reimburses hospitals below cost, especially for complex procedures.',
        card3_title: 'Rising Costs',
        card3_desc: 'Medical supply costs, drug prices, and equipment maintenance continue to rise, putting additional strain on hospital budgets.',
        card4_title: 'Rural Hospitals',
        card4_desc: 'Hospitals in rural provinces are disproportionately affected, serving large populations with limited funding and resources.',

        // Charts
        charts_tag: 'Data & Analytics',
        charts_title: 'Hospital Debt <span class="gradient-text" data-i18n="charts_title_accent">Visualization</span>',
        charts_title_accent: 'Visualization',
        charts_desc: 'Interactive charts showing the debt distribution across Thailand\'s most affected public hospitals.',
        chart_bar_title: 'Top 12 Hospitals by Debt',
        chart_bar_badge: 'Million ฿',
        chart_doughnut_title: 'Debt by Region',
        chart_doughnut_badge: 'Distribution',
        chart_line_title: 'Total Hospital Debt Trend (2019-2025)',
        chart_line_badge: 'Yearly',
        chart_hbar_title: 'Debt Categories Breakdown',
        chart_hbar_badge: 'Types',

        // Hospitals
        hospitals_tag: 'Hospital Directory',
        hospitals_title: 'Hospitals with <span class="gradient-text" data-i18n="hospitals_title_accent">Highest Debt</span>',
        hospitals_title_accent: 'Highest Debt',
        hospitals_desc: 'Browse the list of public hospitals facing critical financial challenges. Click on any hospital to see details and donate.',
        filter_all: 'All Hospitals',
        filter_critical: '🔴 Critical',
        filter_severe: '🟠 Severe',
        filter_moderate: '🟡 Moderate',
        search_placeholder: 'Search hospitals by name, province, or region...',

        // Donate
        donate_tag: 'Make a Difference',
        donate_title: 'Donate via <span class="gradient-text" data-i18n="donate_title_accent">QR Code</span>',
        donate_title_accent: 'QR Code',
        donate_desc: 'Scan the QR code with your banking app to donate directly to hospital relief funds. Every baht counts.',
        donate_note_title: 'How Donations Work',
        donate_note_desc: 'QR codes link to official PromptPay and hospital donation accounts. Donations go directly to hospital funds for medical supplies, equipment maintenance, and patient care. All donations are tax-deductible under Thai law.',

        // Footer
        footer_desc: 'Connecting generous donors with Thailand\'s public hospitals in need. Together, we can ensure quality healthcare for all Thai citizens.',
        footer_links: 'Quick Links',
        footer_resources: 'Resources',
        footer_moph: 'Ministry of Public Health',
        footer_nhso: 'NHSO Reports',
        footer_financial: 'Hospital Financial Data',
        footer_transparency: 'Transparency Reports',
        footer_source: 'Data sourced from Ministry of Public Health, NHSO, and public hospital reports. For awareness and charitable purposes.',
        footer_copy: '© 2025 Thai Hospital Relief. Made with ❤️ for Thailand\'s healthcare.',

        // Dynamic content
        debt_label: 'Debt',
        status_critical: 'Critical',
        status_severe: 'Severe',
        status_moderate: 'Moderate',
        current_debt: 'Current debt',
        no_results: 'No hospitals found matching your criteria.',
        modal_scan: 'Scan this QR code with any Thai banking app to donate directly via PromptPay.',
        modal_account: 'Account',
        modal_tax: 'All donations are tax-deductible under Thai Revenue Code Section 47(7).',
        donate_card_debt: 'Current debt',

        // Chart labels
        chart_debt_label: 'Debt (Million ฿)',
        chart_total_debt_label: 'Total Debt (Billion ฿)',
        chart_debt_amount_label: 'Debt Amount (Billion ฿)',

        // Regions
        region_northeast: 'Northeast',
        region_north: 'North',
        region_south: 'South',
        region_central: 'Central',

        // Debt categories
        cat_supplies: 'Medical Supplies & Drugs',
        cat_equipment: 'Equipment Maintenance',
        cat_staff: 'Staff Compensation Gap',
        cat_utility: 'Utility & Operations',
        cat_infra: 'Infrastructure Repairs',
        cat_referral: 'Patient Referral Costs',
    }
};

function t(key) {
    return translations[currentLang][key] || key;
}

/* ============================================
   INITIALIZATION
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true,
        duration: 700,
        easing: 'ease-out-cubic'
    });

    initParticles();
    initNavbar();
    initCounters();
    initCharts();
    renderHospitalList(hospitalData);
    renderDonateCards();
    initFilters();
    initSearch();
    initModal();
    initMobileNav();
    initLanguageToggle();
});

/* ============================================
   PARTICLE BACKGROUND
   ============================================ */
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const PARTICLE_COUNT = 60;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.4 + 0.1;
            this.color = Math.random() > 0.5 ? '240,192,64' : '168,85,247';
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(240,192,64,${0.05 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }
    animate();
}

/* ============================================
   NAVBAR
   ============================================ */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active section highlighting
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ============================================
   ANIMATED COUNTERS
   ============================================ */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el, target) {
    const duration = 2000;
    const start = performance.now();
    const format = (n) => {
        if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
        return n.toLocaleString() + '+';
    };

    function step(timestamp) {
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.floor(eased * target);
        el.textContent = format(current);
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

/* ============================================
   CHARTS
   ============================================ */
function initCharts() {
    // Global chart defaults
    Chart.defaults.color = '#a0a4c8';
    Chart.defaults.font.family = "'Inter', 'Noto Sans Thai', sans-serif";
    Chart.defaults.plugins.legend.labels.padding = 16;
    Chart.defaults.plugins.legend.labels.usePointStyle = true;

    createBarChart();
    createDoughnutChart();
    createLineChart();
    createHorizontalBarChart();
}

function createBarChart() {
    const top12 = hospitalData.slice(0, 12);
    const ctx = document.getElementById('barChart').getContext('2d');

    const gradient1 = ctx.createLinearGradient(0, 0, 0, 360);
    gradient1.addColorStop(0, 'rgba(248, 113, 113, 0.9)');
    gradient1.addColorStop(1, 'rgba(248, 113, 113, 0.3)');

    const gradient2 = ctx.createLinearGradient(0, 0, 0, 360);
    gradient2.addColorStop(0, 'rgba(251, 146, 60, 0.9)');
    gradient2.addColorStop(1, 'rgba(251, 146, 60, 0.3)');

    const colors = top12.map(h => h.status === 'critical' ? gradient1 : gradient2);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: top12.map(h => h.province),
            datasets: [{
                label: 'Debt (Million ฿)',
                data: top12.map(h => h.debt),
                backgroundColor: colors,
                borderColor: top12.map(h => h.status === 'critical' ? '#f87171' : '#fb923c'),
                borderWidth: 1,
                borderRadius: 6,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(17, 22, 56, 0.95)',
                    titleColor: '#f0f0ff',
                    bodyColor: '#a0a4c8',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 14,
                    cornerRadius: 10,
                    callbacks: {
                        label: (ctx) => `Debt: ฿${ctx.parsed.y} Million`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255,255,255,0.04)' },
                    ticks: { callback: v => '฿' + v + 'M' }
                },
                x: {
                    grid: { display: false },
                    ticks: { maxRotation: 45, minRotation: 45, font: { size: 11 } }
                }
            },
            animation: { duration: 1500, easing: 'easeOutQuart' }
        }
    });
}

function createDoughnutChart() {
    const regions = {};
    hospitalData.forEach(h => {
        regions[h.region] = (regions[h.region] || 0) + h.debt;
    });

    const ctx = document.getElementById('doughnutChart').getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(regions),
            datasets: [{
                data: Object.values(regions),
                backgroundColor: [
                    'rgba(248, 113, 113, 0.85)',
                    'rgba(79, 172, 254, 0.85)',
                    'rgba(168, 85, 247, 0.85)',
                    'rgba(52, 211, 153, 0.85)',
                ],
                borderColor: [
                    '#f87171',
                    '#4facfe',
                    '#a855f7',
                    '#34d399',
                ],
                borderWidth: 2,
                hoverOffset: 16,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { padding: 20, font: { size: 13 } }
                },
                tooltip: {
                    backgroundColor: 'rgba(17, 22, 56, 0.95)',
                    titleColor: '#f0f0ff',
                    bodyColor: '#a0a4c8',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 14,
                    cornerRadius: 10,
                    callbacks: {
                        label: (ctx) => `${ctx.label}: ฿${ctx.parsed} Million (${Math.round(ctx.parsed / hospitalData.reduce((a,b)=>a+b.debt,0) * 100)}%)`
                    }
                }
            },
            animation: { animateRotate: true, duration: 1500 }
        }
    });
}

function createLineChart() {
    const ctx = document.getElementById('lineChart').getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, 360);
    gradient.addColorStop(0, 'rgba(240, 192, 64, 0.3)');
    gradient.addColorStop(1, 'rgba(240, 192, 64, 0.01)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [{
                label: 'Total Debt (Billion ฿)',
                data: [6.8, 8.2, 9.5, 10.1, 11.3, 12.0, 12.5],
                fill: true,
                backgroundColor: gradient,
                borderColor: '#f0c040',
                borderWidth: 3,
                tension: 0.4,
                pointBackgroundColor: '#f0c040',
                pointBorderColor: '#0a0e27',
                pointBorderWidth: 3,
                pointRadius: 6,
                pointHoverRadius: 9,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(17, 22, 56, 0.95)',
                    titleColor: '#f0f0ff',
                    bodyColor: '#a0a4c8',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 14,
                    cornerRadius: 10,
                    callbacks: {
                        label: (ctx) => `Total Debt: ฿${ctx.parsed.y} Billion`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 5,
                    grid: { color: 'rgba(255,255,255,0.04)' },
                    ticks: { callback: v => '฿' + v + 'B' }
                },
                x: {
                    grid: { display: false }
                }
            },
            animation: { duration: 2000, easing: 'easeOutQuart' }
        }
    });
}

function createHorizontalBarChart() {
    const ctx = document.getElementById('horizontalBarChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Medical Supplies & Drugs', 'Equipment Maintenance', 'Staff Compensation Gap', 'Utility & Operations', 'Infrastructure Repairs', 'Patient Referral Costs'],
            datasets: [{
                label: 'Debt Amount (Billion ฿)',
                data: [4.2, 2.8, 2.1, 1.6, 1.1, 0.7],
                backgroundColor: [
                    'rgba(248, 113, 113, 0.7)',
                    'rgba(251, 146, 60, 0.7)',
                    'rgba(250, 204, 21, 0.7)',
                    'rgba(52, 211, 153, 0.7)',
                    'rgba(79, 172, 254, 0.7)',
                    'rgba(168, 85, 247, 0.7)',
                ],
                borderColor: [
                    '#f87171', '#fb923c', '#facc15', '#34d399', '#4facfe', '#a855f7'
                ],
                borderWidth: 1,
                borderRadius: 6,
                borderSkipped: false,
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(17, 22, 56, 0.95)',
                    titleColor: '#f0f0ff',
                    bodyColor: '#a0a4c8',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 14,
                    cornerRadius: 10,
                    callbacks: {
                        label: (ctx) => `Amount: ฿${ctx.parsed.x} Billion`
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255,255,255,0.04)' },
                    ticks: { callback: v => '฿' + v + 'B' }
                },
                y: {
                    grid: { display: false },
                    ticks: { font: { size: 12 } }
                }
            },
            animation: { duration: 1500, easing: 'easeOutQuart' }
        }
    });
}

/* ============================================
   HOSPITAL LIST
   ============================================ */
function renderHospitalList(data) {
    const list = document.getElementById('hospitalList');
    list.innerHTML = '';

    if (data.length === 0) {
        list.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:16px;opacity:0.4"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <p style="font-size:1.1rem;">${t('no_results')}</p>
            </div>`;
        return;
    }

    data.forEach((hospital, index) => {
        const item = document.createElement('div');
        item.className = 'hospital-item';
        item.style.animationDelay = `${index * 0.06}s`;
        item.dataset.id = hospital.id;
        item.onclick = () => openModal(hospital);

        const statusLabel = t('status_' + hospital.status);
        const statusEmoji = hospital.status === 'critical' ? '🔴' : hospital.status === 'severe' ? '🟠' : '🟡';
        const displayName = currentLang === 'th' ? hospital.nameTh : hospital.name;

        item.innerHTML = `
            <div class="hospital-rank">${index + 1}</div>
            <div class="hospital-info">
                <div class="hospital-name">${displayName}</div>
                <div class="hospital-location">📍 ${hospital.province}, ${hospital.region}</div>
            </div>
            <div class="hospital-debt">
                <div class="debt-amount">฿${hospital.debt}M</div>
                <div class="debt-label">${t('debt_label')}</div>
            </div>
            <div class="hospital-status status-${hospital.status}">
                ${statusEmoji} ${statusLabel}
            </div>
        `;

        list.appendChild(item);
    });
}

/* ============================================
   DONATE CARDS
   ============================================ */
function renderDonateCards() {
    const grid = document.getElementById('donateGrid');
    grid.innerHTML = '';
    const featured = hospitalData.slice(0, 6); // Top 6 most in debt

    featured.forEach((hospital, index) => {
        const card = document.createElement('div');
        card.className = 'donate-card glass-card';
        card.setAttribute('data-aos', 'zoom-in');
        card.setAttribute('data-aos-delay', `${index * 100}`);

        const qrId = `qr-${hospital.id}`;
        const displayName = currentLang === 'th' ? hospital.nameTh : hospital.name;
        const subName = currentLang === 'th' ? hospital.name : hospital.nameTh;

        card.innerHTML = `
            <div class="donate-card-header">
                <h3>${displayName}</h3>
                <p>${subName}</p>
            </div>
            <div class="qr-container" id="${qrId}"></div>
            <div class="donate-amount">฿${hospital.debt} ${currentLang === 'th' ? 'ล้านบาท' : 'Million'}</div>
            <div class="donate-purpose">${t('donate_card_debt')} — ${hospital.province}</div>
        `;

        grid.appendChild(card);

        // Generate QR code after DOM insertion
        setTimeout(() => {
            const qrEl = document.getElementById(qrId);
            if (qrEl) {
                const donationUrl = `https://promptpay.io/${hospital.promptpay}`;
                new QRCode(qrEl, {
                    text: donationUrl,
                    width: 168,
                    height: 168,
                    colorDark: '#1a1a5e',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.M,
                });
            }
        }, 100);
    });
}

/* ============================================
   FILTERS
   ============================================ */
function initFilters() {
    const btns = document.querySelectorAll('.filter-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            const filtered = filter === 'all'
                ? hospitalData
                : hospitalData.filter(h => h.status === filter);

            renderHospitalList(filtered);
        });
    });
}

/* ============================================
   SEARCH
   ============================================ */
function initSearch() {
    const input = document.getElementById('hospitalSearch');
    let timeout;

    input.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const query = input.value.toLowerCase().trim();
            const filtered = hospitalData.filter(h =>
                h.name.toLowerCase().includes(query) ||
                h.nameTh.includes(query) ||
                h.province.toLowerCase().includes(query) ||
                h.region.toLowerCase().includes(query)
            );

            // Reset filter buttons
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('[data-filter="all"]').classList.add('active');

            renderHospitalList(filtered);
        }, 250);
    });
}

/* ============================================
   MODAL
   ============================================ */
function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function openModal(hospital) {
    const overlay = document.getElementById('modalOverlay');
    const body = document.getElementById('modalBody');

    const qrModalId = `qr-modal-${hospital.id}`;
    const displayName = currentLang === 'th' ? hospital.nameTh : hospital.name;
    const subName = currentLang === 'th' ? hospital.name : hospital.nameTh;

    body.innerHTML = `
        <h3>${displayName}</h3>
        <p class="modal-province">${subName} — ${hospital.province}, ${hospital.region}</p>
        <div class="modal-debt">฿${hospital.debt} ${currentLang === 'th' ? 'ล้านบาท' : 'Million'}</div>
        <div class="modal-qr" id="${qrModalId}"></div>
        <p class="modal-info">
            ${t('modal_scan')}<br>
            ${t('modal_account')}: ${hospital.promptpay}<br><br>
            ${t('modal_tax')}
        </p>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Generate QR in modal
    setTimeout(() => {
        const qrEl = document.getElementById(qrModalId);
        if (qrEl) {
            const donationUrl = `https://promptpay.io/${hospital.promptpay}`;
            new QRCode(qrEl, {
                text: donationUrl,
                width: 188,
                height: 188,
                colorDark: '#1a1a5e',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.M,
            });
        }
    }, 100);
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

/* ============================================
   MOBILE NAV
   ============================================ */
function initMobileNav() {
    const toggle = document.getElementById('mobileToggle');
    const links = document.querySelector('.nav-links');

    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
        toggle.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('open');
            toggle.classList.remove('active');
        });
    });
}

/* ============================================
   LANGUAGE TOGGLE
   ============================================ */
function initLanguageToggle() {
    const toggle = document.getElementById('langToggle');
    const options = toggle.querySelectorAll('.lang-option');

    toggle.addEventListener('click', () => {
        currentLang = currentLang === 'th' ? 'en' : 'th';

        // Update toggle active state
        options.forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === currentLang);
        });

        // Update HTML lang attribute
        document.documentElement.lang = currentLang;

        // Translate all static elements with data-i18n
        applyTranslations();

        // Re-render dynamic content
        renderHospitalList(getFilteredData());
        renderDonateCards();
    });
}

function applyTranslations() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[currentLang][key];
        if (translation) {
            el.innerHTML = translation;
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = translations[currentLang][key];
        if (translation) {
            el.placeholder = translation;
        }
    });
}

function getFilteredData() {
    const activeFilter = document.querySelector('.filter-btn.active');
    const filter = activeFilter ? activeFilter.dataset.filter : 'all';
    const searchQuery = document.getElementById('hospitalSearch').value.toLowerCase().trim();

    let data = filter === 'all'
        ? hospitalData
        : hospitalData.filter(h => h.status === filter);

    if (searchQuery) {
        data = data.filter(h =>
            h.name.toLowerCase().includes(searchQuery) ||
            h.nameTh.includes(searchQuery) ||
            h.province.toLowerCase().includes(searchQuery) ||
            h.region.toLowerCase().includes(searchQuery)
        );
    }

    return data;
}
