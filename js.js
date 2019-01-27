/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

console.log("test");

var divArray = document.getElementsByClassName('like');

for (i = 0; i < divArray.length; i++ ) {
    divArray[i].classList.add('like')
}

for (i = 0; i < divArray.length; i++ ) {
    divArray[i].classList.add('profile')
}

function veranderClass() {
    this.classList.toggle('like');
    this.classList.toggle('likeclick');
}

function veranderClassprofile() {
    this.classList.toggle('profile');
    this.classList.toggle('profileclick');
}

for (i = 0; i < divArray.length; i++ ) {
    divArray[i].addEventListener('click',veranderClass, veranderClassprofile);
}

//---------------------------------------------------------
