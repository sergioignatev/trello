document.querySelector('#service').addEventListener('click',myF)

let services=()=>{
    return `
    <select id="first" onchange='time()' >
    <option value=''>Выберите пункт</option>
    <option id='one' value="Борзова 58а">ТЕХОСМОТР Борзова 58а т. 92-13-46</option>
    <option  id='two'value="two">ТЕХОСМОТР Фридриха 15 т. 92-13-23</option>
    </select>
    `
}
document.querySelector("#demo").innerHTML=services()
let datetime=()=>{
    return `<input id='date' type='date'>
    <select id="datetime__time">
    <option>Выберите время</option>
    <option value="09:00">09:00</option>
    <option value="09:30">09:30</option>
    <option value="10:00">10:00</option>
    <option value="10:30">10:30</option>





    </select>
    `

}

function myF(){
    let h=document.getElementById('service')
    if(h.checked===true){
        document.getElementById('demo').innerHTML=services()
    }else{
        document.getElementById('demo').innerHTML=''
    }
}
document.querySelector('#time').addEventListener('click',time)
function time(){
let f=document.getElementById('first');

document.querySelector('#time').checked==true
if(f.value!==""){
    document.getElementById('demo').innerHTML=datetime()
}else if(f.value===""){
    document.getElementById('demo').innerHTML='ВЫберите услугу'
}

}
setTimeout(Check,1000)
function Check(){
    let first=document.getElementById('first');
    let secont=document.getElementById('date');
    
    document.querySelector('.place').innerHTML=first.value
    console.log(first.value)
}