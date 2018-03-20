'use strict';

let logo = document.getElementById('panopto-logo');
logo.addEventListener("click", function(){
    console.log('it worked');
})

class VideoInset {
    image: string;
    label: string;
    constructor(image: string, label: string){
        this.image = image;
        this.label = label;
    }
}