let fname=document.querySelector("#fname")
let lname=document.querySelector("#lname")
let country=document.querySelector("#country")
let score=document.querySelector("#score")
let btn=document.querySelector(".btn");
let box=document.querySelector(".container");
let data=[];
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(fname.value===""||lname.value===""||score.value===""||country.value===""){
        alert("please enter all the details")
    }
    else{
        let player={
            pfname:fname.value,
            plname:lname.value,
            pcountry:country.value,
            pscore:score.value
        }
        data.push(player);
    }
    display();
    fname.value="";
    lname.value="";
    score.value="";
    country.value="";
})

function display(){
    sortplayer();
    box.innerHTML="";
    data.forEach((item)=>{
        let playercontainer=document.createElement("div");
         playercontainer.innerHTML=`
        <div class=players>
        <span>${item.pfname}</span>
        <span>${item.plname}</span>
        <span>${item.pcountry}</span>
        <span>${item.pscore}</span>
        <button class="b1">+5</button>
        <button class="b2">-5</button>
        <button class="b3">x</button>
        `;
      box.appendChild(playercontainer); 
    })
    buttons();
    

}

function sortplayer(){
    data.sort((a,b)=>{
        return b.pscore-a.pscore;
    })
}

function buttons() {
    document.querySelectorAll(".players").forEach((play, index) => {
        play.querySelector(".b1").addEventListener("click", () => {
            let points = parseInt(data[index].pscore);
            points += 5;
            data[index].pscore = points;
            display();
        });

        play.querySelector(".b2").addEventListener("click", () => {
            let points = parseInt(data[index].pscore);
            points -= 5;
            data[index].pscore = points;
            display();
        });

        play.querySelector(".b3").addEventListener("click", () => {
            data.splice(index, 1);
            if (data.length === 0) {
                box.innerHTML = "";
            } else {
                display();
            }
        });
    });
}
