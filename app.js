const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    
}

//Photo Booth section
// navigator.getUserMedia || 
//     (navigator.getUserMedia = navigator.mozGetUserMedia ||
//         navigator.webkitGetUserMedia || navigator.msGetUserMedia);

// if (navigator.getUserMedia) {
//     navigator.getUserMedia({video:true,audio:false}, onSuccess, onError);
// } else {
//     alert("Your Browser isn't supported");
// }

// function onSuccess(stream) {
//     alert("Connection Successful");
//     vidContainer = document.getElementById('webcam');
//     var vidStream;
//     if(window.webkitURl) {
//         vidStream = window.webkitURL.createObjectURL(stream);
//     } else {
//         vidStream = stream;
//     }

//     vidContainer.autoplay = true;
//     vidContainer.src = vidStream;
// }

// function onError() {
//     alert("We have a bit of problem here");
// }

// const video = document.getElementById('video');
// const canvas = document.getElementById('canvas');
// const snap = document.getElementById('snap');
// const errorMessage = document.getElementById('span#ErrorMessage');

// const constraint = {
//     audio:true,
//     video:{
//         width:1280, height: 720
//     }
// };

// async function init(){
//     try{
//         const stream = await navigator.mediaDevices.getUserMedia(constraint)
//         handleSuccess(stream);
//     } catch(e) {
//         errorMessageElement.innerHTML = 'navigator.getUserMedia.error:${e.toString()}';
//     }
// }

// function handleSuccess(stream) {
//     window.stream = stream;
//     video.srcObject = stream;
// }

// init();
// var context = canvas.getContext('2d');
// snap.addEventListener("click",function(){
//     context.drawImage(video,0,0,640,480);
// })