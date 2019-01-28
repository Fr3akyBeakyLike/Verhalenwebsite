/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

console.log("test");

var likeButton = document.getElementsByClassName('like');

for (var i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener('click', toggleLike);
}

function toggleLike() {
    if (this.classList.contains("likeclick")) {
        this.className = "like";
    } else {
        this.className = "likeclick";
    }
    document.getElementById("profile").className = "profileclick";
}
