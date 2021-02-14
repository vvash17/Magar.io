window.onload = (event) => {
    document.getElementById("navbarLogo").addEventListener("click", function () {
        document.location.href = "../../Main/Html/main.html"
    }, true);
    document.getElementById("navbarSignIn").addEventListener("click", function () {
        document.location.href = "../../Login/Html/login.html"
    }, true);
    document.getElementById("navbarSignOut").addEventListener("click", function () {
        window.localStorage.removeItem("userName")
        document.location.href = "../../Main/Html/main.html"
    }, true);
    const userName = window.localStorage.getItem("userName")
    if (userName) {
        document.getElementById("signedInProfile").innerText = "Signed As " + userName
        document.getElementById("navbarRegister").style.display = "none"
        document.getElementById("navbarSignIn").style.display = "none"
        document.getElementById("navbarSignOut").style.display = "block"
    }
};
