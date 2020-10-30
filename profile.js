var btnCvr = document.getElementById("btnCvr"),
coverInput = document.getElementById("coverInpt"),
coverImg = document.getElementById("coverImg");

btnCvr.addEventListener("click", function(){
    coverInput.click();
})

coverInput.onchange = function(){
    var file = this.files;
    if(file.length >0){
        var fileReader = new FileReader()

        fileReader.onload = (e)=>{
            coverImg.setAttribute('src', e.target.result);
        }
    
        fileReader.readAsDataURL(file[0]);
    }else {
        coverImg.setAttribute('src', '')
    }
}