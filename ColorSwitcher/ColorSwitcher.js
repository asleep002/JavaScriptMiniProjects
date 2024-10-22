const buttons=document.querySelectorAll(".button")
// console.log(button)
 const body=document.querySelector("body")
//  console.log(body)
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
      
        if(e.target.id=="blue"){
            body.style.backgroundColor="#2596be";
        }
        if(e.target.id=="red"){
            body.style.backgroundColor="#b4543a"
        }

        if(e.target.id=="olive"){
            body.style.backgroundColor="#3f6c46"
        }
        if(e.target.id=="orange"){
            body.style.backgroundColor="#d17e1c"
        }
        if(e.target.id=="white"){
            body.style.backgroundColor="white"
        }

        
    })
})