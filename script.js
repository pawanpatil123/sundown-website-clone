function page4aniamtion()
{
var elemc = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter",function(){
fixed.style.display="block";
})
elemc.addEventListener("mouseleave",function(){
fixed.style.display ="none";
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
});

}

function menuanimation(){
var line1=document.querySelector("#line1")
var line2=document.querySelector("#line2")
var line3=document.querySelector("#line3")
var menu=document.querySelector("#menu")
var full=document.querySelector("#fullscr")
var navimg = document.querySelector("nav img")
var flag=0
menu.addEventListener("click",function(){
if(flag==0){
    full.style.top=0
    navimg.style.opacity =0
    line1.style.rotate = "60deg"
    line2.style.display = "none"
    line3.style.rotate = "-50deg"
    flag=1
}else{
    full.style.top= "-100%";
    navimg.style.opacity =1
    line1.style.rotate = "0deg"
    line2.style.display = "block"
    line3.style.rotate = "0deg"
    flag=0
}

})
}
page4aniamtion();
menuanimation();

var loader = document.querySelector("#loader");
setTimeout(function(){
    loader.style.top="-100%";
},4000)


