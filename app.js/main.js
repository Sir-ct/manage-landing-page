var email = document.pageform.email;

var errormsg = document.getElementById("errortext");

var regex = /^[\S]+@[\S]+\.[a-z]{2,5}$/;


function validate(){

    if(email.value.match(regex)){
        return true
    }else {
      errormsg.style = "display: block";
      return false
    }
}



function main(){
  let currentpos;
  var slide = document.getElementById("testimonyslide");
  let container = document.getElementById("slidercontainer")
  let getstyle = getComputedStyle(slide)
  let getcontstyle = getComputedStyle(container)

  
  let contright = container.getBoundingClientRect().right

  slide.addEventListener("mouseup", ()=>{
    slide.style.cursor = ""
    slide.removeEventListener("mousemove", drag)
  })
  
slide.addEventListener("mousedown", (e)=>{
  slide.style= "cursor:grabbing;"
  slide.style.left = currentpos
  

  slide.addEventListener("mousemove", drag)
  
})

function drag(e){

   
    let left = parseInt(getstyle.left)

    let right = slide.getBoundingClientRect().right + e.movementX
        
     currentpos = left + e.movementX+"px";

    slide.style.left = currentpos


    if(currentpos > 0+"px" ){
      stopright()
      
    }
    else if( right < contright){
      stopleft()
    }
    
    
}

function stopright(){
  slide.style.left = 0+"px"
}
function stopleft(){
  gswidth = -parseInt(getstyle.width)
  contwidth = parseInt(getcontstyle.width)
  
  slide.style.left = gswidth+contwidth+"px"
  console.log(gswidth, contwidth)

}

}
window.addEventListener("load", main)