var refresh=document.getElementById('refresh');
function onload(){

fetch('https://icanhazdadjoke.com/slack')
.then(data=>data.json())
.then(jokeData=>{
    const jokeText=jokeData.attachments[0].text;
    const element=document.getElementById('element');

    element.innerHTML=jokeText;

})
}
refresh.addEventListener("click",function(){
    onload();
})
onload();