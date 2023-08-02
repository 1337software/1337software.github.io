// CODED BY NEPIX SOFTWARE - https://nepix.com.tr/

function submitForm(event) {
    event.preventDefault();
    const tarih = document.getElementById("session-date").value;
    const adSoyad = document.getElementById("adsoyad").value;
    const telefon = document.getElementById("phone").value;

    const baseURL = "https://wa.me/"; // coded by nepix software
    const phoneNumber = "9005321750924"; // coded by nepix software
    const message = `Randevu Talebi\nTarih: ${tarih}\nAd Soyad: ${adSoyad}\nTelefon: ${telefon} randevu almak istiyorum`;

    const encodedMessage = encodeURIComponent(message);
    const fullURL = `${baseURL}${phoneNumber}/?text=${encodedMessage}`;

    window.location.href = fullURL;
}