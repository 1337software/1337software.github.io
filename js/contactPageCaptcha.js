/*!
  * Sepetolog Bilişim (https://sepetolog.com.tr/)
  * Author Emir İbrahim KALAYCI (https://emiribrahimkalayci.com.tr)
  */
 
const captchaTextBox = document.querySelector('.contactCaptcha input');
const captchaInputBox = document.querySelector('.contactCaptchaEnter input');
const refreshButton = document.querySelector('.refreshButton');
const submitButton = document.querySelector('.formButton');
const checkButton = document.querySelector('.checkButton');

let captchaText = null

const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("")
    const changeString = randomStringArray.map(char => Math.random() > 0.5? char.toLocaleUpperCase() : char)
    captchaText = changeString.join("");
    captchaTextBox.value = captchaText;
};

const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
};



const captchaKeyUpValidate = () => {
    //Toggle submit button disable class based on captcha input field.
    if (captchaInputBox.value === captchaText) {
        submitButton.removeAttribute("disabled");
        captchaInputBox.setAttribute("disabled", "");
        checkButton.style.display = "block";
        refreshButton.style.display = "none";
    }
  };


refreshButton.addEventListener('click', refreshBtnClick);
captchaInputBox.addEventListener('keyup', captchaKeyUpValidate);

generateCaptcha();

