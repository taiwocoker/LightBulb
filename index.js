
function changeImage() {
   var image = document.getElementById('myImage')
   if (image.src.match("bulboff")) 
         image.src = "src/images/bulbon.jpg"; 
     else
         image.src = "src/images/bulboff.jpg"; 
    
}

function toggle(){
    var element = document.getElementById('lightSwitch')
    if (element.style.top === '50%') {
        element.style.top = '80%';
    } else {
        element.style.top = '50%';
    }
}