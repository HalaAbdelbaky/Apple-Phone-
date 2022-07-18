let img=document.querySelector(".img");
let container=document.querySelector(".container");
let colours=document.querySelectorAll("#color");
let divImg=document.querySelectorAll(" .icons img");
let titles=document.querySelector("h2");
 let imgphone=document.querySelector(".content .image");
 let btn=document.querySelector(".text a");

function phones(phone){
    img.src=phone;
    titles.innerHTML=this.dataset.title
}
function colors(colors){
    
}
// function colors(color){
 
//     container .style.backgroundColor=color;
// }

var headers=[
    {title:"iPhone 13 Pro Max.",
    color:"yellow",},
    {title:"iPhone 13 mini",
    color:"green"},
    {title:"iPhone 12 Pro Max",
    color:"blue"},
    {title:"Phone 12",
    color:"gold"},
    {title:"iPhone 3G	",
    color:"silver"},
]

colours.forEach(function(colour,index){
    colour.addEventListener("click",function(){
        console.log(headers[index].title)
        container.style.backgroundColor=this.dataset.color;
        titles.innerHTML=headers[index].title;
        imgphone.style.borderColor=headers[index].color;
        btn.style.backgroundColor=headers[index].color;
      
    //    titles.innerHTML=this.dataset.title;
    })
})

