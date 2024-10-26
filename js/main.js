function displayToggle(){
    var x = document.getElementById('template-left');
    if(x.style.display === 'none'){
        x.style.display = 'block';
    }
    else{
        x.style.display = 'none';
    }
}