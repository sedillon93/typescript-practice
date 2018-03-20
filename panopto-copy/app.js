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
    videoObjects.forEach(function (videoContent) {
        var newVideo = videoTemplateNode.cloneNode(true);
        newVideo.setAttribute('id', 'video');
        console.log(newVideo.getElementsByTagName("img")[0].src, 'src before assignment');
        newVideo.getElementsByTagName("img")[0].src = videoContent.imageUrl;
        console.log(newVideo.getElementsByTagName("img")[0].src, 'src after assignment');
        console.log(newVideo.getElementsByTagName("p")[0]);
        var container = document.getElementById('video-container');
        container.appendChild(newVideo);
    });
};
