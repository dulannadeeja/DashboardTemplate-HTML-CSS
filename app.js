let isCollapsed=true;
const closeBtn=document.querySelector("#close-btn");
const expandBtn=document.querySelector("#expand-btn");
const themeToggler=document.querySelector("#theme-toggler");

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

themeToggler.addEventListener("click",()=>{
    console.log("clicked");
    document.querySelector("body").classList.toggle("dark-theme-variables");
    document.querySelector("#lightMode").classList.toggle("active");
    document.querySelector("#darkMode").classList.toggle("active");
}); // toggle the theme


