
window.onload = (event) => {
    let sampleElement = "<div style=\"width: 20vw;height: 46vh;background: white;float:left\">\n" +
        "        <img class=\"navbarLogo\" id=\"navbarLogo\" src=\"image\" style=\"width: inherit;height: inherit\" alt=\"Magar.io\">\n" +
        "        <div style=\"text-align: center\">productName</div>\n" +
        "        <div style=\"text-align: center\">productPrice</div>\n" +
        "    </div>"
    const trending = [{"image": "https://static.vecteezy.com/system/resources/previews/000/688/908/original/flash-sale-banner-template-with-shopping-bags-vector.jpg"},{"image": "https://static.vecteezy.com/system/resources/previews/000/688/908/original/flash-sale-banner-template-with-shopping-bags-vector.jpg"},{"image": "https://static.vecteezy.com/system/resources/previews/000/688/908/original/flash-sale-banner-template-with-shopping-bags-vector.jpg"}, {"image": "https://static.vecteezy.com/system/resources/previews/000/688/908/original/flash-sale-banner-template-with-shopping-bags-vector.jpg"}, {"image": "https://static.vecteezy.com/system/resources/previews/000/688/908/original/flash-sale-banner-template-with-shopping-bags-vector.jpg"}]

    let result = ""
    for(let i = 0; i<4; i++){
        result += sampleElement.replace("image",trending[i]["image"]).replace("productName","product").replace("productPrice","1 Gel")
    }
    console.log(result)
    document.getElementById("productsWrapper").innerHTML = result

    const banners = ["https://static.vecteezy.com/system/resources/previews/000/688/908/original/flash-sale-banner-template-with-shopping-bags-vector.jpg"
        , "https://3c5239fcccdc41677a03-1135555c8dfc8b32dc5b4bc9765d8ae5.ssl.cf1.rackcdn.com/Black-Friday-Sale-Red-4x8in-300dpi-KB-compressor.jpg"
        , "https://previews.123rf.com/images/pattarasin/pattarasin1709/pattarasin170900006/85482183-sale-banner-template-design-big-sale-special-offer-end-of-season-special-offer-banner-vector-illustr.jpg"
        , "https://images.creativemarket.com/0.1.0/ps/4248991/1820/1214/m1/fpnw/wm1/sale-yellow-boards-cm-.jpg?1530520612&s=80cde0be5f234f2441e652082ae4a2dc"]
    var currentBannerPos = 0;
    var currentTrendingPos = 0;
    document.getElementById("nextButtonTrending").addEventListener("click", function () {
        if (currentTrendingPos < trending.length - 1) {
            let result = ""
            for(let i = 0; i<2; i++){
                result += sampleElement.replace("image",trending[i]["image"])
            }
            document.getElementById("productsWrapper").innerHTML = result
        }
    }, true);
    document.getElementById("nextButtonBanners").addEventListener("click", function () {
        if (currentBannerPos < banners.length - 1) {
            currentBannerPos++
            document.getElementById("banner").src = banners[currentBannerPos]
        }
    }, true);
    document.getElementById("previousButtonBanners").addEventListener("click", function () {
        if (currentBannerPos > 0) {
            currentBannerPos--
            document.getElementById("banner").src = banners[currentBannerPos]
        }
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
