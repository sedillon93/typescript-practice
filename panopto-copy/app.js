'use strict';
var logo = document.getElementById('panopto-logo');
logo.addEventListener("click", function () {
    console.log('hello');
});
var VideoInset = /** @class */ (function () {
    function VideoInset(image, label, datePublished) {
        this.image = image;
        this.label = label;
        this.datePublished = datePublished;
    }
    return VideoInset;
}());
// function to fill template and append to page using vanilla TypeScript
var fillTemplate = function () {
    var videoTemplateNode = document.getElementById('video-template');
    var newVideo = videoTemplateNode.cloneNode(true);
    newVideo.setAttribute('id', 'video');
    console.log(newVideo);
};
