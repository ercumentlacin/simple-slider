const data = [
    {
        "id": 0,
        "url": "https://images.financialexpress.com/2018/07/winnie-the-pooh1200-IE660.jpg"
    },
    {
        "id": 1,
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9eM6nwTHtg-4edliB5mMAdpKoqiHC2jv3g&usqp=CAU"
    },
    {
        "id": 2,
        "url": "https://filmreviewonline.com/wp-content/uploads/2011/07/winnie-the-pooh-024.jpg"
    }
];
var j = 0;
document.querySelector('.images').innerHTML = `<img class="images" src="${data[0].url}">`;
function arttır() {
    if (j < data.length - 1) {
        j++;
        document.querySelector('.images').innerHTML = `<img class="images" src="${data[j].url}">`;
    }
    else {
        j = 0
        document.querySelector('.images').innerHTML = `<img class="images" src="${data[j].url}">`;
    }
}
function azalt() {
    if (j >= 1) {
        j--;
        document.querySelector('.images').innerHTML = `<img class="images" src="${data[j].url}">`;
    }
    else {
        j = 2
        document.querySelector('.images').innerHTML = `<img class="images" src="${data[j].url}">`;
    }
}
