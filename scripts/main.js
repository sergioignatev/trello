document.querySelector('#test').addEventListener('mouseover',Send);
let json={}
function Send(){
    let place=document.getElementById('place').value;
    let date=document.getElementById('date').value;
    let time=document.getElementById('time').value;
    let name=document.getElementById('name').value;
    let textarea=document.getElementById('textarea').value;
    if(place!=='' && date!=='' && time!=="" && name!==''){
        document.getElementById('demo').innerHTML=place+' '+date+' '+time+" "+name+" "+textarea;

       json.name=name;
       json.place=place;
       json.time=time;
       json.textarea=textarea;
       json.date=date
       console.log(json)
    }
  
  
}