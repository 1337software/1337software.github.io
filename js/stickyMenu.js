/*!
  * Sepetolog Bilişim (https://sepetolog.com.tr/)
  * Author Emir İbrahim KALAYCI (https://emiribrahimkalayci.com.tr)
  */

const navbar = document.querySelector(".headerWrapper");

window.addEventListener("scroll", () => {
  const mesafe = window.scrollY;
  if (mesafe > 10) {
    navbar.classList.add("navBack");
  } else {
    navbar.classList.remove("navBack");
  }
});

const toggleIcon = document.querySelector('.mobileIcon');
const mobileMenu = document.querySelector('.mobileMenu');
const toggleCloseButton = document.querySelector('#toggleCloseButton');

toggleIcon.addEventListener("click", toggleMobile);
function toggleMobile() {
    mobileMenu.style.display = "block";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

toggleCloseButton.addEventListener("click", toggleClose);
function toggleClose() {
    mobileMenu.style.display = "none";
}
