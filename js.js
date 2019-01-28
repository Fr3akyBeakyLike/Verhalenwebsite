/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

console.log("test");


//TEST---------------------------------------------------------

//var like = document.getElementsByClassName('like');
//
//for (var i = 0; i < like.length; i++) {
//    like[i].addEventListener("click", toggleclass);
//}
//
//function toggleclass(){
//    if(this.classList.contains('like')){
//        this.classList.remove('like');
//        profile[0].remove('profile');
//    }
//    else{
//        this.classList.add('like');
//        profile[0].add('profile');
//    }
//}


//TEST---------------------------------------------------------

//Variabelen creeëren behorend bij de classes
var like = document.getElementsByClassName('like');
var profile = document.getElementsByClassName('profile');

//Loop creeëren die ervoor zorgt dat de function wordt uitgevoerd
for (var i = 0; i < like.length; i++) {
    like[i].addEventListener("click", toggleclass);
}

//for (var i = 0; i < profile.length; i++) {
//    profile[i].addEventListener("click", toggleclassprofile);
//}

////Function voor togglen van like background img / class
//function toggleclass(){
//    if(this.classList.contains('like')){
//        this.classList.remove('like');
//    }
//    else{
//        this.classList.add('like');
//    }
//}
//
////Function voor togglen van profile background img / class
//function toggleclassprofile(){
//    if(this.classList.contains('profile')){
//        this.classList.remove('profile');
//    }
//    else{
//        this.classList.add('profile');
//    }
//}

function toggleclass(){
    if(this.classList.contains('like')){
        this.classList.remove('like');
        profile[0].remove('profile');
    }
    else{
        this.classList.add('like');
        profile[0].add('profile');
    }
}



//Test-----------------------------------------------------

//function toggleclass(){
//    if(this.classList.contains('like','profile')){
//        this.classList.remove('like');
//        this.classList.remove('profile');
//    }
//    else{
//        this.classList.add('like');
//        this.classList.add('profile');
//    }
//}

