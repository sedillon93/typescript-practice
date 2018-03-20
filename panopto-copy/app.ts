'use strict';

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
    let newVideo: HTMLElement = videoTemplateNode.cloneNode(true) as HTMLElement;
    newVideo.setAttribute('id', 'video');
    console.log(newVideo);
    
}