'use strict';
var videoObjects = [
    {
        imageUrl: "https://picsum.photos/200/300",
        label: "treehouse"
    },
    {
        imageUrl: "https://picsum.photos/200/300",
        label: "fishy"
    },
    {
        imageUrl: "https://picsum.photos/200/300",
        label: "waldo"
    },
    {
        imageUrl: "https://picsum.photos/200/300",
        label: "groot"
    }
];
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
    for (var _i = 0, videoObjects_1 = videoObjects; _i < videoObjects_1.length; _i++) {
        var i = videoObjects_1[_i];
        var newVideo = videoTemplateNode.cloneNode(true);
        newVideo.setAttribute('id', 'video');
        var container = document.getElementById('video-container');
        container.appendChild(newVideo);
    }
};
