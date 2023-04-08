const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");


btn1.addEventListener('click', function(){
    var content = document.getElementById("left-content");
    if(content.classList.contains("open")){
        content.classList.remove("open")
    }else{
        content.classList.add("open")
    }
})

btn2.addEventListener('click', function(){
    var nav = document.getElementById("nav");
    if(nav.classList.contains("open")){
        nav.classList.remove("open")
    }else{
        nav.classList.add("open")
    }
})
