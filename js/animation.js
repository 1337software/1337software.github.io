/*!
  * Sepetolog Bilişim (https://sepetolog.com.tr/)
  * Author Emir İbrahim KALAYCI (https://emiribrahimkalayci.com.tr)
  */
 
const welcomeImg = document.querySelector('.welcomeImg')
const text = document.querySelector('.text');
const servicesItem1 = document.querySelector('.servicesItem1');
const servicesItem2 = document.querySelector('.servicesItem2');
const servicesItem3 = document.querySelector('.servicesItem3');
const servicesItem4 = document.querySelector('.servicesItem4');
const servicesItemText1 = document.querySelector('.servicesItemText1');
const servicesItemText2 = document.querySelector('.servicesItemText2');
const servicesItemText3 = document.querySelector('.servicesItemText3');
const servicesItemText4 = document.querySelector('.servicesItemText4');
const servicesh1 = document.querySelector('.servicesh1');
const servicesText = document.querySelector('.servicesText')

window.addEventListener("scroll", () => {
    const mesafe = window.scrollY;
    if (mesafe > 300) {
      welcomeImg.style.display = "block";
      text.style.display = "block"
    } if (mesafe > 1200) {
        servicesItem1.style.display = "block";
        servicesItem2.style.display = "block";
        servicesItem3.style.display = "block";
        servicesItem4.style.display = "block";
        servicesItemText1.style.display = "block";
        servicesItemText2.style.display = "block";
        servicesItemText3.style.display = "block";
        servicesItemText4.style.display = "block";
        servicesh1.style.display = "block";
        servicesText.style.display = "block";
      }
  });


var counter = 1;
const myInterval = setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter === 4){
    clearInterval(myInterval);
  }
}, 5000);