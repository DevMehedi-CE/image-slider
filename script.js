let slides = document.querySelectorAll(".slide")

let slidesArray = Array.from(slides)

let prev = document.querySelector(".prev")
let next = document.querySelector(".next")


function prevnext(){
    let activeSlide = document.querySelector(".active")
    let currentIndex = slidesArray.indexOf(activeSlide)
    console.log(currentIndex)

    let prev;
    let next;

    if(currentIndex == 0){
        prev = slidesArray[slidesArray.length-1]
    }else{
        prev = slidesArray[currentIndex-1]

    }

    if(currentIndex == slidesArray.length-1){
        next = slidesArray[0]
    }else{
        next = slidesArray[currentIndex+1]
    }
  return[next,prev]
}


function place(){
    let activeSlide = document.querySelector(".active")
    let currentIndex = slidesArray.indexOf(activeSlide)

    let[next,prev]= prevnext()

    slidesArray.map((slide,index)=>{
        if(currentIndex == index){
            slide.style.transform = "translateX(0)"
        }else if(slide == prev){
            slide.style.transform = "translateX(-100%)"
        }else if(slide==next){
            slide.style.transform = "translateX(100%)"
        }
    })
}


next.addEventListener("click",function(){
    let activeSlide = document.querySelector(".active")
    let [next]= prevnext()
    activeSlide.classList.remove("active")
    activeSlide.style.transform = "translateX(-100%)"
    next.classList.add("active")
    next.style.transform = "translateX(0)"
    place()
})