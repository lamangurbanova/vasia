let login = document.getElementsByClassName("rt-tabs")[0];
let register = document.getElementsByClassName("rt-tabs")[1];
let form_register = document.getElementsByClassName("form-regist")[0];
let form_login = document.getElementsByClassName("form-login")[0];



register.addEventListener("click",()=>{
    register.classList.add("tabs-active");
    login.classList.remove("tabs-active");
    form_login.style.display="none";
    form_register.style.display="block";

})

login.addEventListener("click",()=>{
    register.classList.remove("tabs-active");
    login.classList.add("tabs-active");
    form_register.style.display="none";
    form_login.style.display="block";
})


let main_header = document.querySelector(".main-header");
let back_to_top = document.querySelector(".back-to-top");
let summary = document.querySelector(".summary");



window.addEventListener("scroll",()=>{
    let distance = window.scrollY;
    console.log(distance);

    if(distance >=100){
        main_header.style.position ="fixed";
        main_header.style.top="0";
        main_header.style.left="0";
        main_header.style.zIndex="100";
        back_to_top.classList.add("active-top-btn");
        // summary.style.position ="fixed";
        // summary.style.top="17px";
        // summary.style.right="0px";
    }
    else{
        // summary.style.position="static"
        main_header.style.position ="static";
        main_header.style.top="0";
        main_header.style.left="0";
        main_header.style.zIndex="100";
        back_to_top.classList.remove("active-top-btn");
    }
    // if(distance >=1200){
    //     summary.style.position ="absolute";
    //     summary.style.bottom="0px";
    //     summary.style.top="auto";
    // }
    
})

let additional_tab = document.querySelector("#additional_tab");
let pi_pdpmainbody = document.querySelector(".pi-pdpmainbody");
let delivery_cont = document.querySelector("#delivery");
let description = document.getElementsByClassName("tabs-item")[0];
let additional = document.getElementsByClassName("tabs-item")[1];
let reviews = document.getElementsByClassName("tabs-item")[2];
let delivery = document.getElementsByClassName("tabs-item")[3];

additional.addEventListener("click",()=>{
    description.classList.remove("current");
    reviews.classList.remove("current");
    delivery.classList.remove("current");
    additional.classList.add("current");
    additional_tab.style.display="block";
    pi_pdpmainbody.style.display="none";
    delivery_cont.style.display="none";
    

});

description.addEventListener("click",()=>{
    description.classList.add("current");
    additional.classList.remove("current");
    reviews.classList.remove("current");
    delivery.classList.remove("current");
    additional_tab.style.display="none";
    pi_pdpmainbody.style.display="block";

});

delivery.addEventListener("click",()=>{
    delivery.classList.add("current");
    additional.classList.remove("current");
    reviews.classList.remove("current");
    description.classList.remove("current");
    additional_tab.style.display="none";
    pi_pdpmainbody.style.display="none";
    delivery_cont.style.display="block"

});







