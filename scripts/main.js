document.querySelector('#service').addEventListener('click',myF)

let services=()=>{
    return `
    <select id="first" onchange='time()' >
    <option value=''>Выберите пункт</option>
    <option id='one' value="one">ТЕХОСМОТР Борзова 58а т. 92-13-46</option>
    <option  id='two'value="two">ТЕХОСМОТР Фридриха 15 т. 92-13-23</option>
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
    document.getElementById('demo').innerHTML='<input type="date">'
}else if(f.value===""){
    document.getElementById('demo').innerHTML='ВЫберите услугу'
}

}