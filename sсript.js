// Мундариҷа ва тарҷумаҳо барои забонҳои гуногун
const translations = {
    tj: {
        modalWelcome: "Хуш омадед",
        modalSelectLang: "Забони худро интихоб кунед",
        heroTitle: "Расонидани бехатар ва тез ба тамоми гӯшаҳо!",
        heroDesc: "Фармоиши худро сабт кунед ва система онро ба таври автоматикӣ ба курьер мерасонад.",
        heroBtn: "Заказ кардан",
        orderTitle: "Фармоиши нав",
        lblName: "Ном ва насаб:",
        lblPhone: "Рақами телефон:",
        lblFrom: "Суроғаи гирифтан (Откуда):",
        lblTo: "Суроғаи расонидан (Куда):",
        lblDetails: "Навъи бор (Хӯрок, Техника, Либос...):",
        btnSubmit: "Фиристодан ба курьер",
        servicesTitle: "Чӣ чизҳоро расонида метавонем?",
        s1Title: "1. Хӯрокворӣ",
        s1Desc: "Хӯрок метавонед заказ карда, мо мерасонем.",
        s2Title: "2. Техникаҳо",
        s2Desc: "Фармоиши ҳама гуна таҷҳизот ва техника.",
        s3Title: "3. Либос ва пойафзол",
        s3Desc: "Либосу пойафзол ва дигар чизҳоро фармоиш диҳед, мо мерасонем.",
        supportTitle: "Ба мушкилӣ дучор шудед?",
        supportDesc: "Агар ҳангоми сабти фармоиш ё расонидани бор ба ягон мушкилӣ дучор шудед, фавран бо маркази дастгирии Kabut Express дар тамос шавед.",
        btnCallText: "Занг: 100-126-826",
        footerText: "© 2026 Kabut Express. Ҳамаи ҳуқуқҳо ҳифз шудаанд."
    },
    ru: {
        modalWelcome: "Добро пожаловать",
        modalSelectLang: "Выберите ваш язык",
        heroTitle: "Безопасная и быстрая доставка во все уголки!",
        heroDesc: "Оформите заказ, и система автоматически передаст его курьеру.",
        heroBtn: "Заказать",
        orderTitle: "Новый заказ",
        lblName: "Имя и фамилия:",
        lblPhone: "Номер телефона:",
        lblFrom: "Адрес забора (Откуда):",
        lblTo: "Адрес доставки (Куда):",
        lblDetails: "Тип груза (Еда, Техника, Одежда...):",
        btnSubmit: "Отправить курьеру",
        servicesTitle: "Что мы можем доставить?",
        s1Title: "1. Продукты и Еда",
        s1Desc: "Вы можете заказать еду, и мы ее доставим.",
        s2Title: "2. Техника",
        s2Desc: "Заказ любого оборудования и техники.",
        s3Title: "3. Одежда и обувь",
        s3Desc: "Заказывайте одежду, обувь и другие вещи, мы доставим.",
        supportTitle: "Возникли проблемы?",
        supportDesc: "Если у вас возникли проблемы при оформлении заказа или доставке, немедленно свяжитесь с центром поддержки Kabut Express.",
        btnCallText: "Звонок: 100-126-826",
        footerText: "© 2026 Kabut Express. Все права защищены."
    },
    en: {
        modalWelcome: "Welcome",
        modalSelectLang: "Select your language",
        heroTitle: "Safe and fast delivery everywhere!",
        heroDesc: "Place your order, and the system will automatically dispatch it to a courier.",
        heroBtn: "Order Now",
        orderTitle: "New Order",
        lblName: "Full Name:",
        lblPhone: "Phone Number:",
        lblFrom: "Pickup Address (From):",
        lblTo: "Delivery Address (To):",
        lblDetails: "Cargo Details (Food, Tech, Clothes...):",
        btnSubmit: "Send to Courier",
        servicesTitle: "What can we deliver?",
        s1Title: "1. Food & Groceries",
        s1Desc: "You can order food and we will deliver it.",
        s2Title: "2. Electronics",
        s2Desc: "Order any equipment and technology.",
        s3Title: "3. Clothes & Shoes",
        s3Desc: "Order clothes, shoes and other items, we will deliver.",
        supportTitle: "Having trouble?",
        supportDesc: "If you encounter any problems during ordering or delivery, immediately contact the Kabut Express support center.",
        btnCallText: "Call: 100-126-826",
        footerText: "© 2026 Kabut Express. All rights reserved."
    }
};

// Функцияи табдили забон ва ивази парчам
function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);

    const flagImg = document.getElementById('current-flag');
    if (flagImg) {
        if (lang === 'tj') flagImg.src = 'https://flagcdn.com/w40/tj.png';
        if (lang === 'ru') flagImg.src = 'https://flagcdn.com/w40/ru.png';
        if (lang === 'en') flagImg.src = 'https://flagcdn.com/w40/gb.png';
    }

    const switcher = document.getElementById('lang-switcher');
    if (switcher) {
        switcher.value = lang;
    }

    const t = translations[lang] || translations.tj;

    if (document.getElementById('modal-welcome')) document.getElementById('modal-welcome').innerText = t.modalWelcome;
    if (document.getElementById('modal-select-lang')) document.getElementById('modal-select-lang').innerText = t.modalSelectLang;

    if (document.getElementById('hero-title')) document.getElementById('hero-title').innerText = t.heroTitle;
    if (document.getElementById('hero-desc')) document.getElementById('hero-desc').innerText = t.heroDesc;
    if (document.getElementById('btn-hero-order')) document.getElementById('btn-hero-order').innerText = t.heroBtn;

    if (document.getElementById('order-title')) document.getElementById('order-title').innerText = t.orderTitle;
    if (document.getElementById('lbl-name')) document.getElementById('lbl-name').innerText = t.lblName;
    if (document.getElementById('lbl-phone')) document.getElementById('lbl-phone').innerText = t.lblPhone;
    if (document.getElementById('lbl-address-from')) document.getElementById('lbl-address-from').innerText = t.lblFrom;
    if (document.getElementById('lbl-address-to')) document.getElementById('lbl-address-to').innerText = t.lblTo;
    if (document.getElementById('lbl-details')) document.getElementById('lbl-details').innerText = t.lblDetails;
    if (document.getElementById('btn-submit')) document.getElementById('btn-submit').innerText = t.btnSubmit;

    if (document.getElementById('services-title')) document.getElementById('services-title').innerText = t.servicesTitle;
    if (document.getElementById('s1-title')) document.getElementById('s1-title').innerText = t.s1Title;
    if (document.getElementById('s1-desc')) document.getElementById('s1-desc').innerText = t.s1Desc;
    if (document.getElementById('s2-title')) document.getElementById('s2-title').innerText = t.s2Title;
    if (document.getElementById('s2-desc')) document.getElementById('s2-desc').innerText = t.s2Desc;
    if (document.getElementById('s3-title')) document.getElementById('s3-title').innerText = t.s3Title;
    if (document.getElementById('s3-desc')) document.getElementById('s3-desc').innerText = t.s3Desc;

    if (document.getElementById('support-title')) document.getElementById('support-title').innerText = t.supportTitle;
    if (document.getElementById('support-desc')) document.getElementById('support-desc').innerText = t.supportDesc;
    if (document.getElementById('btn-call-text')) document.getElementById('btn-call-text').innerText = t.btnCallText;
    if (document.getElementById('footer-text')) document.getElementById('footer-text').innerText = t.footerText;
}

// Пӯшидани модали интихоби забон
function closeLanguageModal(lang) {
    changeLanguage(lang);
    const modal = document.getElementById('language-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Кушодан ва пӯшидани модали фармоиш
function openOrderModal() {
    const modal = document.getElementById('order-modal');
    if (modal) modal.style.display = 'flex';
}

function closeOrderModal() {
    const modal = document.getElementById('order-modal');
    if (modal) modal.style.display = 'none';
}

// Санҷиши забони сабтшуда ҳангоми кушодани сайт
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    
    if (!savedLanguage) {
        const modal = document.getElementById('language-modal');
        if (modal) modal.style.display = 'flex';
        changeLanguage('tj');
    } else {
        const modal = document.getElementById('language-modal');
        if (modal) modal.style.display = 'none';
        changeLanguage(savedLanguage);
    }
});

// Функцияи қабули фармоиш
function handleOrder(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const from = document.getElementById('address-from').value;
    const to = document.getElementById('address-to').value;

    alert(`Фармоиши шумо қабул шуд!\n\nНом: ${name}\nТелефон: ${phone}\nАз: ${from}\nБа: ${to}`);

    document.getElementById('order-form').reset();
    closeOrderModal();
}

// Регистратсияи Google
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function handleCredentialResponse(response) {
    const responsePayload = parseJwt(response.credential);

    const userProfile = document.getElementById('user-profile');
    if (userProfile) {
        document.getElementById('user-name').innerText = responsePayload.name;
        document.getElementById('user-avatar').src = responsePayload.picture;
        userProfile.style.display = 'flex';
    }

    const nameInput = document.getElementById('name');
    if (nameInput) {
        nameInput.value = responsePayload.name;
    }

    const googleBtn = document.querySelector('.g_id_signin');
    if (googleBtn) googleBtn.style.display = 'none';

    alert(`Хуш омадед, ${responsePayload.name}! Шумо бо муваффақият ворид шудед.`);
}