window.onload = (event) => {
    document.getElementById("navbarLogo").addEventListener("click", function () {
        document.location.href = "../Html/main.html"
    }, true);
    document.getElementById("navbarSearchButton").addEventListener("click", function () {
        var text = document.getElementById("navbarSearchArea")["value"]
        console.log(text)
        if (text) {
            document.location.href = "../../ProductsBrowser/Html/productsBrowser.html"
        }
    }, true);
};
