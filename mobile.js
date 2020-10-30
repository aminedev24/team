
var query = window.matchMedia('(max-width: 550px)');

if(query.matches){
    document.querySelector(".search-icon").addEventListener("click", function(){
        document.querySelector(".search").classList.toggle("active");
        switch(counter){
            case 1:
                document.querySelector('.search').style.visibility = 'visible';
                document.querySelector('.search').style.width = '100%';
                break;
            default:
                document.querySelector('.search').style.visibility = '';
                document.querySelector('.search').style.width = '';
                counter = 0;
        }
        counter++;
    });
    
}

