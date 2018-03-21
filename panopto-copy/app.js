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
logo.addEventListener("click", function () { return console.log("hello"); });
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
        newVideo.getElementsByTagName("img")[0].src = videoContent.imageUrl;
        newVideo.getElementsByTagName("p")[0].innerText = videoContent.label;
        newVideo.getElementsByTagName("p")[1].innerHTML = (new Date()).toString();
        var learnMoreButton = newVideo.getElementsByClassName('learn-more')[0];
        learnMoreButton.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("I am Groot");
            console.log("this is ", this);
        });
        var container = document.getElementById('video-container');
        container.appendChild(newVideo);
    });
    //add onClick handler to buttons to append paragraph to DOM
    // let learnMoreButton: HTMLElement = document.getElementsByClassName('learn-more');
    // learnMoreButton.addEventListener("click", function(event){
    //     event.preventDefault();
    //     console.log(`I am Groot`);
    //     console.log(`this is `, this);
    // });
};
fillTemplate();
