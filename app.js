let isCollapsed=true;
let closeBtn=document.querySelector("#close-btn");
let expandBtn=document.querySelector("#expand-btn");

closeBtn.addEventListener("click",()=>{
    console.log("clicked");
    if(!isCollapsed){
        document.querySelector("#sidebar").style.display="none";
        isCollapsed=true;
    }
}); // close the sidebar

expandBtn.addEventListener("click",()=>{
    console.log("clicked");
    if(isCollapsed){
        document.querySelector("#sidebar").style.display="flex";
        isCollapsed=false;
    }
}); // expand the sidebar