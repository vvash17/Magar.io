window.onload = (event) => {
    document.getElementById("nextButtonBanners").addEventListener("click", function () {
        document.getElementById("banner").src = "https://img.freepik.com/free-psd/business-promotion-corporate-web-banner-template_120329-748.jpg?size=626&ext=jpg"
    }, true);
    document.getElementById("previousButtonBanners").addEventListener("click", function () {
        document.getElementById("banner").src = "https://magictoolbox.sirv.com/images/magicslideshow/places-01-1075.jpg"
    }, true);
    document.getElementById("navbarLogo").addEventListener("click", function () {
        document.location.href = "../Html/main.html"
    }, true);
    document.getElementById("navbarSignOut").addEventListener("click", function () {
        window.localStorage.removeItem("userName")
        document.location.href = "../Html/main.html"
    }, true);
    document.getElementById("navbarSignIn").addEventListener("click", function () {
        document.location.href = "../../Login/Html/login.html"
    }, true);
    document.getElementById("navbarSearchButton").addEventListener("click", function () {
        const text = document.getElementById("navbarSearchArea")["value"];
        console.log(text)
        if (text) {
            document.location.href = "../../ProductsBrowser/Html/productsBrowser.html"
        }
    }, true);
    const userName = window.localStorage.getItem("userName")
    if (userName) {
        document.getElementById("signedInProfile").innerText = "Signed As " + userName
        document.getElementById("signedInProfile").style.fontSize = "1.5vw"
        document.getElementById("navbarRegister").style.display = "none"
        document.getElementById("navbarSignIn").style.display = "none"
        document.getElementById("navbarSignOut").style.display = "block"
    }
};
