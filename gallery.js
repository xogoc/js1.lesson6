function changeBigPicture(event) {
    var div = document.getElementById("big_picture");
    var newImage = new Image();
    currentImage = event.target;

    newImage.src = currentImage.src;

    newImage.onerror = function() {
        console.error("Невозможно загрузить картинку " + this.src);
        this.src = "img/error.png";
    };

    div.innerHTML = "";
    div.appendChild(newImage);
}

function nextImage() {
    var div = document.getElementById("big_picture");
    var newImage = new Image();
    var next;

    if(next = currentImage.nextElementSibling) {
        newImage.src = next.src;
        currentImage = next;
    } else {
        currentImage = currentImage.parentElement.firstElementChild;
        newImage.src = currentImage.src;
    }

    newImage.onerror = function() {
        console.error("Невозможно загрузить картинку " + this.src);
        this.src = "img/error.png";
    };
    div.innerHTML = "";
    div.appendChild(newImage);
}

function prevImage() {
    var div = document.getElementById("big_picture");
    var newImage = new Image();
    var prev;

    if(prev = currentImage.previousElementSibling) {
        newImage.src = prev.src;
        currentImage = prev;
    } else {
        currentImage = currentImage.parentElement.lastElementChild;
        newImage.src = currentImage.src;
    }

    newImage.onerror = function() {
        console.error("Невозможно загрузить картинку " + this.src);
        this.src = "img/error.png";
    };

    div.innerHTML = "";
    div.appendChild(newImage);
}

var currentImage;

document.getElementById("gallery").addEventListener("click", changeBigPicture);
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", prevImage);
