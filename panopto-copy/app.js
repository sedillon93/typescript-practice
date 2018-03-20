'use strict';
var logo = document.getElementById('panopto-logo');
logo.addEventListener("click", function () {
    console.log('it worked');
});
var VideoInset = /** @class */ (function () {
    function VideoInset(image, label) {
        this.image = image;
        this.label = label;
    }
    return VideoInset;
}());
