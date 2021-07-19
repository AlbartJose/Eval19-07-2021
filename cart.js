

var price = 0;


function dispProducts(data) {
    price = 0;
    var div_disp = document.getElementById("display");
    div_disp.innerHTML = null;
    data.forEach(function (el) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
        var div5 = document.createElement("div");
        var btn = document.createElement("button");
        img.addEventListener('mouseover', function () {
            img.src = el.imagehover;
        })
        img.addEventListener('mouseout', function () {
            img.src = el.image;
        })
        btn.addEventListener('click', function () {
            addToCart(el);

        });

        img.src = el.image;
        div1.innerHTML = el.name;
        div2.innerHTML = el.brand;
        div3.innerHTML = el.price;
        div4.innerHTML = el.gender;
        div5.innerHTML = el.type;
        btn.innerHTML = "Add to Cart";


        price = price + Number(el.price);


        div.append(img, div1, div2, div3, div4, div5, btn);
        div_disp.append(div);



    });

}

var data = JSON.parse(localStorage.getItem('cartJwell'));
dispProducts(data);


function priceDisp() {
    var divp = document.getElementById("price");
    divp.innerHTML = null;
    divp.append(price);
}

priceDisp();


function ApplyPromo() {
    var inp = document.getElementById("promo").value;
    document.getElementById("promo").value = null;
    console.log(inp);


    if (inp == "masai30") {
        price = .7 * price;
        price = Math.floor(price);
        priceDisp();
    }
}
function checkOut() {
    window.location.href = "address.html"

}

