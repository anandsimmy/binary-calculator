const buttons= document.getElementsByTagName('button')
const screen= document.getElementById('res')
for(let i=0;i<buttons.length;i++){
    if(buttons[i].innerHTML==='='){
        buttons[i].addEventListener('click',(event)=>{
            let exp= screen.innerHTML
            exp = exp.replace(/(\d+)/g, function(match) {
                return parseInt(match, 2);
            })
            screen.innerHTML= eval(exp).toString(2)
        })
    }
    else if(buttons[i].innerHTML==='C'){
        buttons[i].addEventListener('click',(event)=>{
            screen.innerHTML= ''
        })
    }
    else{
        buttons[i].addEventListener('click',(event)=>{
            screen.innerHTML+= buttons[i].innerHTML
        })
    }
}