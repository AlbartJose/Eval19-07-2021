var productsAll = [
    {
        name: "Enticing Floral",
        image: "https://staticimg.titan.co.in/Tanishq/Catalog/511920SOCABA00_1.jpg?impolicy=pqmed&imwidth=640",
        imagehover: "https://staticimg.titan.co.in/Tanishq/Catalog/511920SOCABA00_2.jpg?impolicy=pqmed&imwidth=640",
        brand: "Tanishq",
        price: "42005",
        gender: "female",
        type: "earing",
    },
    {
        name: "Abstract Leaf",
        image: "https://staticimg.titan.co.in/Tanishq/Catalog/513220SDEABA00_1.jpg?impolicy=pqmed&imwidth=640",
        imagehover: "https://staticimg.titan.co.in/Tanishq/Catalog/513220SDEABA00_2.jpg?impolicy=pqmed&imwidth=640",
        brand: "Tanishq",
        price: "35000",
        gender: "female",
        type: "earing",
    },
    {
        name: "Petite Drop",
        image: "https://staticimg.titan.co.in/Tanishq/Catalog/504025HMTAAA00_1.jpg?impolicy=pqmed&imwidth=640",
        imagehover: "https://staticimg.titan.co.in/Tanishq/Catalog/504025HMTAAA00_2.jpg?impolicy=pqmed&imwidth=640",
        brand: "Tanishq",
        price: "21992",
        gender: "female",
        type: "earing",
    },
    {
        name: "Diamond Ring Pendant",
        image: "https://staticimg.titan.co.in/Tanishq/Catalog/503120PDOAAA09_1.jpg?impolicy=pqmed&imwidth=640",
        imagehover: "https://staticimg.titan.co.in/Tanishq/Catalog/503120PDOAAA09_2.jpg?impolicy=pqmed&imwidth=640",
        brand: "Tanishq",
        price: "33450",
        gender: "female",
        type: "pendant",
    },
    {
        name: "Floral Diamond Pendant",
        image: "https://staticimg.titan.co.in/Tanishq/Catalog/503120PDSAAA09_1.jpg?impolicy=pqmed&imwidth=640",
        imagehover: "https://staticimg.titan.co.in/Tanishq/Catalog/503120PDSAAA09_2.jpg?impolicy=pqmed&imwidth=640",
        brand: "Tanishq",
        price: "26865",
        gender: "female",
        type: "pendant",
    },
    {
        name: "Artsy Diamond Pendant",
        image: "https://staticimg.titan.co.in/Tanishq/Catalog/503119PQFAAA02_1.jpg?impolicy=pqmed&imwidth=640",
        imagehover: "https://staticimg.titan.co.in/Tanishq/Catalog/503119PQFAAA02_2.jpg?impolicy=pqmed&imwidth=640",
        brand: "Tanishq",
        price: "26699",
        gender: "female",
        type: "pendant",
    },
    {
        name: "Platinum Ring",
        image: "https://staticimg.titan.co.in/Tanishq/Catalog/740841FSAAA00_1.jpg?impolicy=pqmed&imwidth=640",
        imagehover: "https://staticimg.titan.co.in/Tanishq/Catalog/740841FSAAA00_2.jpg?impolicy=pqmed&imwidth=640",
        brand: "Tanishq",
        price: "29921",
        gender: "male",
        type: "ring",
    },
    {
        name: "Elegant Gold Ring",
        image: "https://staticimg.titan.co.in/Tanishq/Catalog/510120FQAAA00_1.jpg?impolicy=pqmed&imwidth=640",
        imagehover: "https://staticimg.titan.co.in/Tanishq/Catalog/510120FQAAA00_2.jpg?impolicy=pqmed&imwidth=640",
        brand: "Tanishq",
        price: "15854",
        gender: "male",
        type: "ring",
    },


];


if (localStorage.getItem('jwellProducts') == null) {
    localStorage.setItem('jwellProducts', JSON.stringify(productsAll));

};

function dispProducts(data) {
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

        div.append(img, div1, div2, div3, div4, div5, btn);
        div_disp.append(div);



    });


}



var data = JSON.parse(localStorage.getItem('jwellProducts'));
dispProducts(data);




function addToCart(el) {
    let cart;
    cart = localStorage.getItem('cartJwell');
    console.log(cart);
    if (cart == null) {
        cart = [];

    } else {
        cart = JSON.parse(localStorage.getItem('cartJwell'));
    }
    var ans = true;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == el.name) {
            ans = false;
            break;
        }

    }
    if (ans) cart.push(el);

    localStorage.setItem('cartJwell', JSON.stringify(cart));

}

function sortLH() {
    var dataNew = JSON.parse(localStorage.getItem('jwellProducts'));
    dataNew.sort(function (a, b) {
        return a.price - b.price;
    });
    dispProducts(dataNew);


}
function sortHL() {
    var dataNew = JSON.parse(localStorage.getItem('jwellProducts'));
    dataNew.sort(function (a, b) {
        return b.price - a.price;
    });
    dispProducts(dataNew);


}

function filterType() {
    var dataNew = JSON.parse(localStorage.getItem('jwellProducts'));
    var sel = document.getElementById("filterType").value;
    if (sel == "all") dispProducts(dataNew);
    else {
        var datax = dataNew.filter(function (el) {
            return el.type == sel;
        });

        dispProducts(datax);
    }



}
function filtergender() {
    var dataNew = JSON.parse(localStorage.getItem('jwellProducts'));
    var gen = document.getElementById("filtergender").value;
    if (gen == "all") dispProducts(dataNew);
    else {
        var datax = dataNew.filter(function (el) {
            return el.gender == gen;
        });
        dispProducts(datax);
    }

}



function goCart() {
    window.location.href = "cart.html"

}

