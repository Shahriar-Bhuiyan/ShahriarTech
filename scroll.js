const links = document.querySelectorAll(".nav-link");
const navBar = document.querySelector(".navbar");  
const navHeight = navBar.getBoundingClientRect().height;
 
links.forEach((link)=>{  
    
    
    link.addEventListener("click",(e)=>{  
    e.preventDefault();
   const id =  e.currentTarget.getAttribute("href").slice(1);    
   const element = document.getElementById(id); 
   const elementHeight = element.getBoundingClientRect().height;  
   let position = element.offsetTop - navHeight; 
   
    if(element.id == "testimonials"){ 
        position = position + (navHeight*2);
    }
     
   window.scrollTo({ 
       left:0, 
       top:position
   })
    
    }) 
    
})  
 
window.addEventListener("scroll",()=>{ 
    const scrollHeight = window.pageYOffset; 
    const TopBtn = document.querySelector(".back-to-top");  
    
     
    if(scrollHeight == 0){ 
        TopBtn.style.display = "none";
    }else if(scrollHeight > 700){ 
        TopBtn.style.display = "block";
    }
})
 
