let images = [ 
    'jack_look.png',
    'mando_bett.png',
    'spike_chill.png',
    'jack_sleep.png', 
    'mando_garten.png',
    'spaziergang.png',
    'jack_sweet.png',
    'mando_sweet.png',
    'spike_hut.png',
    'jack.png',
    'spike_meer.png',
    'jack2.png',
    'spike_party.png',
    'Spike_schnee.png',
    'spike_rhein.png',
]

let currentImageIndex = -1;

function render() {
    const imgContainer = document.getElementById('img_container');
    imgContainer.innerHTML = '';
    hide();
    for (let i = 0; i < images.length; i++) {
        imgContainer.innerHTML += templatePictures(i);
    } 
}


function templatePictures(i) {
    return /*html*/`
    <div class="img_box" onclick="openImg(${i})">
        <img src="./img/${images[i]}">
     </div>
    `;
}


function openImg(i) {
    currentImageIndex = i;
    const openImageBox = document.getElementById('open_image_box');
    openImageBox.innerHTML = '';
    show();

    openImageBox.innerHTML = 
    `<div class="button_container">
        <button onclick="ClosedImg()" class="button_close_img">X</button>
    </div>
    <div class="opened_Image">
        <img class="back" src="./img/pfeilLinks.png" onclick="showPreviousImage(${i - 1})">
        <img class="main_pic" src="./img/${images[i]}">
        <img class="next" src="./img/pfeilRechts.png" onclick="showNextImage(${i + 1})">
    </div>
    `;
}


function showPreviousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        openImg(currentImageIndex);
    }
}


function showNextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        openImg(currentImageIndex);
    }
}


function ClosedImg() {
    const openImageBox = document.getElementById('open_image_box');
    openImageBox.innerHTML = '';
    hide();
}

function hide() {
    document.getElementById('open_image_box').classList.add('d-none');
}


function show() {
    document.getElementById('open_image_box').classList.remove('d-none');
}
