// Controls DOM manipulation on button clicks

document.getElementById('to-about').addEventListener('click',function(){

    window.location.hash = '#about';
    route()
});

document.getElementById('to-summary').addEventListener('click',function(){

    window.location.hash = '#home'
    route()
});

let route = () => {
    hash = window.location.hash

    if (hash === '' || hash === '#' || hash === '#home') {
        document.getElementById('about').style.display = "none";
        document.getElementById('summary').style.display = "block"; 
    }
    else if (hash === '#about') {
        document.getElementById('summary').style.display = "none";
        document.getElementById('about').style.display = "block";
    }
}

route()