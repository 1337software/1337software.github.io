/*!
  * Sepetolog Bilişim (https://sepetolog.com.tr/)
  * Author Emir İbrahim KALAYCI (https://emiribrahimkalayci.com.tr)
  */

var servicesImg1 = document.querySelector('.servicesImg1');
var servicesImg2 = document.querySelector('.servicesImg2');
var servicesImg3 = document.querySelector('.servicesImg3');
var servicesImg4 = document.querySelector('.servicesImg4');

let w = window.innerWidth;

if (w > 1400) {
    servicesImg1.setAttribute('width', 300);
    servicesImg1.setAttribute('height', 300);
    servicesImg2.setAttribute('width', 300);
    servicesImg2.setAttribute('height', 300);
    servicesImg3.setAttribute('width', 300);
    servicesImg3.setAttribute('height', 300);
    servicesImg4.setAttribute('width', 300);
    servicesImg4.setAttribute('height', 300);
} if (w <= 1400) {
    servicesImg1.setAttribute('width', 265);
    servicesImg1.setAttribute('height', 265);
    servicesImg2.setAttribute('width', 265);
    servicesImg2.setAttribute('height', 265);
    servicesImg3.setAttribute('width', 265);
    servicesImg3.setAttribute('height', 265);
    servicesImg4.setAttribute('width', 265);
    servicesImg4.setAttribute('height', 265);
} if (w <= 1200) {
    servicesImg1.setAttribute('width', 230);
    servicesImg1.setAttribute('height', 230);
    servicesImg2.setAttribute('width', 230);
    servicesImg2.setAttribute('height', 230);
    servicesImg3.setAttribute('width', 230);
    servicesImg3.setAttribute('height', 230);
    servicesImg4.setAttribute('width', 230);
    servicesImg4.setAttribute('height', 230);
} if (w <= 992) {
    servicesImg1.setAttribute('width', 170);
    servicesImg1.setAttribute('height', 170);
    servicesImg2.setAttribute('width', 170);
    servicesImg2.setAttribute('height', 170);
    servicesImg3.setAttribute('width', 170);
    servicesImg3.setAttribute('height', 170);
    servicesImg4.setAttribute('width', 170);
    servicesImg4.setAttribute('height', 170);
} if (w <= 768) {
    servicesImg1.setAttribute('width', 230);
    servicesImg1.setAttribute('height', 230);
    servicesImg2.setAttribute('width', 230);
    servicesImg2.setAttribute('height', 230);
    servicesImg3.setAttribute('width', 230);
    servicesImg3.setAttribute('height', 230);
    servicesImg4.setAttribute('width', 230);
    servicesImg4.setAttribute('height', 230);
}

function screenSizeW() {
    if (window.innerWidth > 1400) {
        servicesImg1.setAttribute('width', 300);
        servicesImg1.setAttribute('height', 300);
        servicesImg2.setAttribute('width', 300);
        servicesImg2.setAttribute('height', 300);
        servicesImg3.setAttribute('width', 300);
        servicesImg3.setAttribute('height', 300);
        servicesImg4.setAttribute('width', 300);
        servicesImg4.setAttribute('height', 300);
    } if (window.innerWidth <= 1400 ) {
        servicesImg1.setAttribute('width', 265);
        servicesImg1.setAttribute('height', 265);
        servicesImg2.setAttribute('width', 265);
        servicesImg2.setAttribute('height', 265);
        servicesImg3.setAttribute('width', 265);
        servicesImg3.setAttribute('height', 265);
        servicesImg4.setAttribute('width', 265);
        servicesImg4.setAttribute('height', 265);
    } if (window.innerWidth <= 1200 ) {
        servicesImg1.setAttribute('width', 230);
        servicesImg1.setAttribute('height', 230);
        servicesImg2.setAttribute('width', 230);
        servicesImg2.setAttribute('height', 230);
        servicesImg3.setAttribute('width', 230);
        servicesImg3.setAttribute('height', 230);
        servicesImg4.setAttribute('width', 230);
        servicesImg4.setAttribute('height', 230);
    } if (window.innerWidth <= 992 ) {
        servicesImg1.setAttribute('width', 170);
        servicesImg1.setAttribute('height', 170);
        servicesImg2.setAttribute('width', 170);
        servicesImg2.setAttribute('height', 170);
        servicesImg3.setAttribute('width', 170);
        servicesImg3.setAttribute('height', 170);
        servicesImg4.setAttribute('width', 170);
        servicesImg4.setAttribute('height', 170);
    } if (window.innerWidth <= 768 ) {
        servicesImg1.setAttribute('width', 230);
        servicesImg1.setAttribute('height', 230);
        servicesImg2.setAttribute('width', 230);
        servicesImg2.setAttribute('height', 230);
        servicesImg3.setAttribute('width', 230);
        servicesImg3.setAttribute('height', 230);
        servicesImg4.setAttribute('width', 230);
        servicesImg4.setAttribute('height', 230);
    } 
}

window.addEventListener('resize', screenSizeW);

