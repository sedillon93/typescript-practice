'use strict';
let videoObjects: Array<object> = [
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
logo.addEventListener("click", function(){
    console.log('hello');
})

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
    for(let i of videoObjects){
        let newVideo: HTMLElement = videoTemplateNode.cloneNode(true) as HTMLElement;
        newVideo.setAttribute('id', 'video');
        let container = document.getElementById('video-container');
        container.appendChild(newVideo);
    }
}