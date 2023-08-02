/*!
  * Sepetolog Bilişim (https://sepetolog.com.tr/)
  * Author Emir İbrahim KALAYCI (https://emiribrahimkalayci.com.tr)
*/

const textSpa = document.querySelector('#spa');
const headingSpa = document.querySelector('#spanSpa')
const textSauna = document.querySelector('#sauna');
const headingSauna = document.querySelector('#spanSauna')
const textMasaj = document.querySelector('#masaj');
const headingMasaj = document.querySelector('#spanMasaj')

window.addEventListener("scroll", () => {
    const mesafe = window.scrollY;
    if (mesafe > 10) {
        textMasaj.classList.remove('servicesPageTextMasaj');
        headingMasaj.classList.remove('servicesPageHeading2');
        textMasaj.classList.add('servicesPageTextMasajAnimation');
        headingMasaj.classList.add('servicesPageHeadingMasaj');
    } if (mesafe > 300) {
        textSpa.classList.remove('servicesPageTextSpa');
        headingSpa.classList.remove('servicesPageHeading2');
        textSpa.classList.add('servicesPageTextSpaAnimation');
        headingSpa.classList.add('servicesPageHeadingSpa');
    } if (mesafe > 1100) {
        textSauna.classList.remove('servicesPageTextSauna');
        headingSauna.classList.remove('servicesPageHeading2');
        textSauna.classList.add('servicesPageTextSaunaAnimation');
        headingSauna.classList.add('servicesPageHeadingSauna');
    } 
  });