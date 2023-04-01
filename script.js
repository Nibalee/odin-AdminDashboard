const hearts = document.querySelectorAll('.love');

hearts.forEach(heart =>{
  heart.onclick = () =>{
    if(heart.style.color==='red'){
        heart.style.color = '';
    }
    else{
        heart.style.color = 'red';
    }
  };    
});




