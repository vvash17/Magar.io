window.onload = (event) => {
    document.getElementById("loginLogo").addEventListener("click", function () {
        document.location.href = "../../Main/Html/main.html"
    }, true);
    document.getElementById("loginUserNameInput")["Value"] = ""
    document.getElementById("loginPasswordInput")["Value"] = ""
    const userName = window.localStorage.getItem("userName")
    if(userName){
        window.history.back()
    }
};

function login() {
    const userName = document.getElementById("loginUserNameInput")["value"]
    const password = document.getElementById("loginPasswordInput")["value"]
    if (userName !== "" && password !== "") {
        window.localStorage.setItem("userName", userName)
        window.localStorage.setItem("password", password)
        window.location.reload()
    }
}


