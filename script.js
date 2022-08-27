var theme = document.getElementById('theme-btn') 
var icon = document.querySelector('theme-image')


theme.onclick = function(){
    document.body.classList.toggle('light-theme')
    
    
    if(document.body.classList.contains('light-theme')){
        theme.innerText = 'Light';
        // icon.src = 'images/sunny.png';
    } else {
        theme.innerText = 'Dark';
        // icon.src = 'images/moon.png';
    }
    
}

function changeIimage(){
    document.getElementById('theme-icon').src="images/sunny.png"
}




// function imageChange(){
//     let mySrc = icon.getAttribute('src')
// if(mySrc === 'images/moon.png'){
//     icon.setAttribute('src', 'images/sunny.png')
// } else{
//     icon.setAttribute('src', 'images/moon.png')
// }
// }
// imageChange();









