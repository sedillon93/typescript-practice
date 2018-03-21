'use strict';
let videoObjects: Array<any> = [
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
]

let logo: HTMLElement = document.getElementById('panopto-logo');
logo.addEventListener("click", () => console.log("hello"))

class VideoInset {
    image: string;
    label: string;
    datePublished: string;
    constructor(image: string, label: string, datePublished: string){
        this.image = image;
        this.label = label;
        this.datePublished = datePublished;
    }
}

// function to fill template and append to page using vanilla TypeScript
const fillTemplate = () => {
    let videoTemplateNode: HTMLElement = document.getElementById('video-template');
    videoObjects.forEach(videoContent => {
        let newVideo: HTMLElement = videoTemplateNode.cloneNode(true) as HTMLElement;
        newVideo.setAttribute('id', 'video');
        newVideo.getElementsByTagName("img")[0].src = videoContent.imageUrl;
        newVideo.getElementsByTagName("p")[0].innerText = videoContent.label;
        newVideo.getElementsByTagName("p")[1].innerHTML = (new Date()).toString();

        let learnMoreButton: Element = newVideo.getElementsByClassName('learn-more')[0];
        learnMoreButton.addEventListener("click", function(event){
            event.preventDefault();
            let parentNode: Node = this.parentNode;
            let learnMoreParagraph: HTMLElement = document.createElement("p");
            learnMoreParagraph.innerText = "I am some example test for what things might say when you click a button"
            parentNode.appendChild(learnMoreParagraph);
        });
        let container = document.getElementById('video-container');
        container.appendChild(newVideo);
    })
}

fillTemplate();