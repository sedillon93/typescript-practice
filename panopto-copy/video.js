'use strict';
var Video;
(function (Video) {
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
    Video.handleLearnMoreClick = function (event) {
        event.preventDefault();
        var parentNode = this.parentNode;
        var learnMoreParagraph = document.createElement("p");
        learnMoreParagraph.innerText = "I am some example test for what things might say when you click a button";
        parentNode.appendChild(learnMoreParagraph);
        this.removeEventListener("click", Video.handleLearnMoreClick);
    };
    // function to fill template and append to page using vanilla TypeScript
    Video.fillTemplate = function () {
        var videoTemplateNode = document.getElementById('video-template');
        videoObjects.forEach(function (videoContent) {
            var newVideo = videoTemplateNode.cloneNode(true);
            newVideo.setAttribute('class', 'video');
            newVideo.getElementsByTagName("img")[0].src = videoContent.imageUrl;
            newVideo.getElementsByTagName("p")[0].innerText = videoContent.label;
            newVideo.getElementsByTagName("p")[1].innerHTML = (new Date()).toString();
            var learnMoreButton = newVideo.getElementsByClassName('learn-more')[0];
            learnMoreButton.addEventListener("click", Video.handleLearnMoreClick);
            var container = document.getElementById('video-container');
            container.appendChild(newVideo);
        });
    };
})(Video || (Video = {}));
Video.fillTemplate();
module.exports = Video;
