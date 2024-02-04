// Controls DOM manipulation on button clicks

document.getElementById('to-about').addEventListener('click',function(){

    document.getElementById('summary').style.display = "none";
    document.getElementById('about').style.display = "block";
});

document.getElementById('to-summary').addEventListener('click',function(){

    document.getElementById('about').style.display = "none";
    document.getElementById('summary').style.display = "block"; 
});