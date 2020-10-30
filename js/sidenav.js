var pfp = document.querySelector('.profile_image'),
canva = document.querySelector('canvas'),
change = document.getElementById('change'),
inChange = document.getElementById('inChange');


pfp.onmouseover = function(){
        change.style.visibility = 'visible';
        
    }
    
pfp.onmouseleave = function(){
        change.style.visibility = '';
        
    }


        
change.onmouseenter = function(){
     this.style.visibility = 'visible';
  
}

change.onmouseleave = function(){
    this.style.visibility = '';

}

change.onclick = function(){
    inChange.click()

}

inChange.onchange = function(){
    var file = this.files;

    if(file.length > 0 ){
        var reader = new FileReader();

        reader.onload =  function(event) {
            //console.log(event.target.result);
            source = pfp.setAttribute('src', event.target.result);
            att = pfp.getAttribute('src');
            
            
            
        }
        reader.readAsDataURL(file[0]);
    }
}


var save = document.getElementById('save'),
reset = document.getElementById('reset');
var fname = document.querySelector('.name');

//var del = document.querySelector('.close'),

save.onclick = function(){
    localStorage.setItem('pfp', att);
}

window.onload =function(){
 
      
    if(localStorage.getItem('pfp') != null){
       pfp.setAttribute('src', localStorage.getItem('pfp'));
    }
    else if(localStorage.getItem('names') != null){
        var names = JSON.parse(localStorage.getItem('names'))
        console.log(names[0])
        fname.innerText = fname.innerText = names[0]
        console.log(fname.innerText)
    }
    }



reset.onclick = function(){
    item = localStorage.removeItem('pfp');
    
}




//close.onclick = function (){
  //  modal.style.visibility = 'hidden';
//}
