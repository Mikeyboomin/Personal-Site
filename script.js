const theme = document.getElementById('theme-btn') 
const icon = document.querySelector('.theme-image')
const btnText = document.querySelector('.button-text')

theme.onclick = function(){
    document.body.classList.toggle('light-theme');

    var theme;

    if(document.body.classList.contains('light-theme')){
        btnText.innerText = 'Light';
        icon.src = 'images/sunny.png';
        theme = 'LIGHT';
    }else{
        btnText.innerText = 'Dark';
        icon.src = 'images/moon.png';
        theme = 'Dark';
    }

    //saving to local storage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
    //converting to JSON
}

let GetTheme = JSON.parse(localStorage.getItem('PageTheme'));
    console.log(GetTheme);

    if(GetTheme === 'LIGHT'){
        document.body.classList = 'light-theme';
    }









