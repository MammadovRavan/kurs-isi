// script.js

document.addEventListener("DOMContentLoaded", function() {
    const barsIcon = document.getElementById("bars-icon");
    const crossIcon = document.querySelector("#cross-icon");
    const blackScreen = document.querySelector(".black-screen");
    const body = document.body;

    barsIcon.addEventListener("click", function() {
        // "bars-icon" tıklandığında "black-screen" in genişliği 100% olacak
        blackScreen.style.width = "100%";
        // Ana sayfanın kaydırmasını devre dışı bırak
        body.style.overflow = "hidden";
    });

    crossIcon.addEventListener("click", function() {
        // "cross-icon" tıklandığında "black-screen" in genişliği yeniden 0 olacak
        blackScreen.style.width = "0";
        // Ana sayfanın kaydırmasını etkinleştir
        body.style.overflow = "auto";
    });
});


// Kaydırma işlemi için bir event listener ekleyelim
window.addEventListener('DOMContentLoaded', function() {
    const antonSection = document.querySelector('.anton-section-text'); // "rooms-section" bölümünü seçelim

    // "ABOUT" linkine tıklandığında
    const aboutLink = document.querySelector('.navbar a[href="#about"]');
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault(); // Sayfa yenilenmesini engelleyelim

        // Hedef bölümün üst kenarının yüksekliğini bulalım
        const targetOffset = antonSection.offsetTop;

        // Sayfayı kaydıralım
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth' // Kaydırma işlemi yumuşak olacak şekilde (smooth)
        });
    });
});

// Kaydırma işlemi için bir event listener ekleyelim
window.addEventListener('DOMContentLoaded', function() {
    const servicesSection = document.querySelector('.services-section'); // "rooms-section" bölümünü seçelim

    // "ABOUT" linkine tıklandığında
    const aboutLink = document.querySelector('.navbar a[href="#services"]');
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault(); // Sayfa yenilenmesini engelleyelim

        // Hedef bölümün üst kenarının yüksekliğini bulalım
        const targetOffset = servicesSection.offsetTop;

        // Sayfayı kaydıralım
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth' // Kaydırma işlemi yumuşak olacak şekilde (smooth)
        });
    });
});

// Kaydırma işlemi için bir event listener ekleyelim
window.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.querySelector('.contact-section'); // "rooms-section" bölümünü seçelim

    // "ABOUT" linkine tıklandığında
    const aboutLink = document.querySelector('.navbar a[href="#contact"]');
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault(); // Sayfa yenilenmesini engelleyelim

        // Hedef bölümün üst kenarının yüksekliğini bulalım
        const targetOffset = contactSection.offsetTop;

        // Sayfayı kaydıralım
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth' // Kaydırma işlemi yumuşak olacak şekilde (smooth)
        });
    });
});


window.addEventListener('DOMContentLoaded', function() {
    const locationSection = document.querySelector('.location-section'); // "rooms-section" bölümünü seçelim

    // "ABOUT" linkine tıklandığında
    const aboutLink = document.querySelector('.navbar a[href="#location"]');
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault(); // Sayfa yenilenmesini engelleyelim

        // Hedef bölümün üst kenarının yüksekliğini bulalım
        const targetOffset = locationSection.offsetTop;

        // Sayfayı kaydıralım
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth' // Kaydırma işlemi yumuşak olacak şekilde (smooth)
        });
    });
});

function validateForm() {
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var subject = document.getElementById("subjectInput").value;
    var message = document.getElementById("messageInput").value;
    var emailRegex = /\S+@\S+\.\S+/;

    if (name === "" || email === "" || subject === "" || message === "") {
        if (name === "") document.getElementById("nameInput").style.border = "2px solid red";
        if (email === "") document.getElementById("emailInput").style.border = "2px solid red";
        if (subject === "") document.getElementById("subjectInput").style.border = "2px solid red";
        if (message === "") document.getElementById("messageInput").style.border = "2px solid red";
        return false;
    }

    document.getElementById("responseMessage").innerHTML = "Form submitted successfully!";
    document.getElementById("responseMessage").style.color = "green";

    // Reset form inputs
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("subjectInput").value = "";
    document.getElementById("messageInput").value = "";

    // Reset input borders
    document.getElementById("nameInput").style.border = "";
    document.getElementById("emailInput").style.border = "";
    document.getElementById("subjectInput").style.border = "";
    document.getElementById("messageInput").style.border = "";

    return false; // Prevent form submission for this example
}


document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.querySelector('.screen-links a[href="#about"]'); // #about linkini seç

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Sayfa yenilenmesini engelle

        const antonSection = document.querySelector('.anton-section'); // Anton section'ı seç
        const targetOffset = antonSection.offsetTop; // Anton section'ın sayfa üzerindeki konumunu bul

        // Sayfayı kaydır
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth' // Yumuşak bir kaydırma efekti ekleyin
        });

        // Menüyü kapatabilirsiniz (isteğe bağlı)
        const blackScreen = document.querySelector('.black-screen');
        blackScreen.style.width = "0";
        document.body.style.overflow = "auto";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const servicesLink = document.querySelector('.screen-links a[href="#services"]'); // #services linkini seç

    servicesLink.addEventListener('click', function(event) {
        event.preventDefault(); // Sayfa yenilenmesini engelle

        const servicesSection = document.querySelector('.services-section'); // Services section'ı seç
        const targetOffset = servicesSection.offsetTop; // Services section'ın sayfa üzerindeki konumunu bul

        // Sayfayı kaydır
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth' // Yumuşak bir kaydırma efekti ekleyin
        });

        // Menüyü kapatabilirsiniz (isteğe bağlı)
        const blackScreen = document.querySelector('.black-screen');
        blackScreen.style.width = "0";
        document.body.style.overflow = "auto";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.querySelector('.screen-links a[href="#contact"]'); // #contact linkini seç

    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); // Sayfa yenilenmesini engelle

        const contactSection = document.querySelector('.contact-section'); // Contact section'ı seç
        const targetOffset = contactSection.offsetTop; // Contact section'ın sayfa üzerindeki konumunu bul

        // Sayfayı kaydır
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth' // Yumuşak bir kaydırma efekti ekleyin
        });

        // Menüyü kapatabilirsiniz (isteğe bağlı)
        const blackScreen = document.querySelector('.black-screen');
        blackScreen.style.width = "0";
        document.body.style.overflow = "auto";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const locationLink = document.querySelector('.screen-links a[href="#location"]'); // #location linkini seç

    locationLink.addEventListener('click', function(event) {
        event.preventDefault(); // Sayfa yenilenmesini engelle

        const locationSection = document.querySelector('.location-section'); // Location section'ı seç
        const targetOffset = locationSection.offsetTop; // Location section'ın sayfa üzerindeki konumunu bul

        // Sayfayı kaydır
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth' // Yumuşak bir kaydırma efekti ekleyin
        });

        // Menüyü kapatabilirsiniz (isteğe bağlı)
        const blackScreen = document.querySelector('.black-screen');
        blackScreen.style.width = "0";
        document.body.style.overflow = "auto";
    });
});


// Animasyonu tetiklemek için bir fonksiyon oluştur
function triggerAnimation() {
    // Tüm section'ları al
    const sections = document.querySelectorAll('.rooms-section, .anton-section, .services-section, .contact-section, .location-section');

    // Her bir section için kontrol et
    sections.forEach(section => {
        // Section'un üst ve alt sınırlarını al
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Ekranda tamamen görünüyorsa veya kısmen görünüyorsa animasyonu başlat
        if ((sectionTop < window.innerHeight && sectionBottom >= 0) || 
            (sectionTop >= 0 && sectionTop <= window.innerHeight)) {
            section.classList.add('animate');
        } else {
            section.classList.remove('animate');
        }
    });
}

// Scroll olayını dinle
window.addEventListener('scroll', triggerAnimation);

// Sayfa yüklendiğinde de animasyonları tetikle
window.addEventListener('DOMContentLoaded', triggerAnimation);


