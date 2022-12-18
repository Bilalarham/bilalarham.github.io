(function(){
let screen=document.querySelector('.screen')
let buttons=document.querySelectorAll('.btn')
let clear=document.querySelector('.btn-clear')
let equal=document.querySelector('.btn-equal')
let backSpace=document.querySelector('.btn-backspace')


buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.dataset.num==="√"){
            screen.value=Math.sqrt(screen.value)
        }
        let value =e.target.dataset.num
        screen.value+=value
    })
})
equal.addEventListener('click',function(e){
    if(screen.value===""){
        screen.value="Plz enter"
    }

    else{
        let answer=eval(screen.value)
        screen.value=answer
    }
})

backSpace.addEventListener('click',function(e){
    screen.value=screen.value.substring(0,screen.value.length-1)
})

clear.addEventListener('click',function(e){
    screen.value=""
})
})()
