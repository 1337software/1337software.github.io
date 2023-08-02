/*!
  * Sepetolog Bilişim (https://sepetolog.com.tr/)
  * Author Emir İbrahim KALAYCI (https://emiribrahimkalayci.com.tr) */

// SOCIAL ICONS ANIMATION

const socialWrapper = document.querySelector('.socialWrapper');
const social = document.querySelector('.social');
const socialBig = document.querySelector('.socialBig');
const facebook = document.querySelector('.facebook');
const tiktok = document.querySelector('.tiktok');
const instagram = document.querySelector('.instagram');
const map = document.querySelector('.map');
const whatsApp = document.querySelector('.whatsapp');
const facebookBig = document.querySelector('.facebookBig');
const tiktokBig = document.querySelector('.tiktokBig');
const instagramBig = document.querySelector('.instagramBig');
const mapBig = document.querySelector('.mapBig');
const whatsAppBig = document.querySelector('.whatsappBig');


socialWrapper.addEventListener("mouseover", socialOverAnimation);

function socialOverAnimation() {
  if (screen.width > 576) {
  social.style.display = "none";
  socialBig.style.display = "block";
  }
}

socialWrapper.addEventListener("mouseout", socialOutAnimation);

function socialOutAnimation() {
  if (screen.width > 576) {
  social.style.display = "block";
  socialBig.style.display = "none";
  }
}

//Facebook Link
facebookBig.addEventListener("click", facebookLink);
facebook.addEventListener("click", facebookLink);
function facebookLink() {
  window.open('https://www.facebook.com/balimasajspa', '_blank');
}

//Tiktok Link
tiktokBig.addEventListener("click", tiktokLink);
tiktok.addEventListener("click", tiktokLink);
function tiktokLink() {
  window.open('https://www.twitter.com/balimasajspa', '_blank');
}

//Instagram Link
instagramBig.addEventListener("click", instagramLink);
instagram.addEventListener("click", instagramLink);
function instagramLink() {
  window.open('https://www.instagram.com/balimasajspa', '_blank');
}

//Instagram Link
mapBig.addEventListener("click", mapLink);
map.addEventListener("click", mapLink);
function mapLink() {
  window.open('https://www.google.com/maps/place/Bali+Masaj+%26+Spa+Edirne/@41.6689684,26.5947319,17z/data=!4m14!1m7!3m6!1s0x14b32fa383bee1bf:0x5fa7832cd03c282f!2sBali+Masaj+%26+Spa+Edirne!8m2!3d41.6689644!4d26.5973068!16s%2Fg%2F11svt65qn3!3m5!1s0x14b32fa383bee1bf:0x5fa7832cd03c282f!8m2!3d41.6689644!4d26.5973068!16s%2Fg%2F11svt65qn3?hl=tr&entry=ttu', '_blank');
}

//WhatsApp Link
whatsAppBig.addEventListener("click", whatsAppLink);
whatsApp.addEventListener("click", whatsAppLink);
function whatsAppLink() {
  window.open('https://wa.me/9005321750924?text=Merhaba%20BaliSpa%20Sitesinden%20Yazd%C4%B1m,%20Randevu%20Almak%20%C4%B0stiyorum', '_blank');
}