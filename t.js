let btns=document.querySelectorAll(".chote");
let newbtn=document.querySelector("#new-btn");
let reset=document.querySelector("#reset-btn");

let mess=document.querySelector("#msg");
let toggle="X";
let winner
let win=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7],]


btns.forEach((btn)=>{

    btn.addEventListener("click",()=>{
        btn.textContent=toggle;
        if(toggle=="X"){
            toggle="O";
        }
        else{
            toggle="X";
        }
        btn.disabled=true
        isdraw();
        iswinner();
        

    })

})

 let iswinner=()=>{
    win.forEach(ele => {
        let x=btns[ele[0]-1].textContent;
        let y=btns[ele[1]-1].textContent;
        let z=btns[ele[2]-1].textContent;

        if(x!="" && y!="" && z!=""){
            if(x== y && z==y){
                showWinner(x);
            }

        }
    });
}

let isdraw=()=>{
    let check=true;
    btns.forEach((btn)=>{
        if(btn.textContent==="")
            check=false;
        
    })
    if(check){
        mess.textContent=`match draw`;
        disablebtn();
    }
}

let showWinner=(neta)=>{
    mess.textContent=`congratulation ${neta} is winner`;
    disablebtn();
}

let disablebtn=()=>{
    btns.forEach(ele => {
        ele.disabled=true;  
        
    });
}

newbtn.addEventListener("click",()=>{
    btns.forEach((btn)=>{
        btn.textContent="";
        btn.disabled=false;
    })
    mess.textContent="TIC-TAC-TOE";
``})

reset.addEventListener("click",()=>{
    btns.forEach((btn)=>{
        btn.textContent="";
        btn.disabled=false;
    })
    mess.textContent="TIC-TAC-TOE";


})


