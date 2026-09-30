let body = document.querySelector("body");


                //  =========================
                //      ABOUT OUR PUJA
                // ========================= 

        let hamariYtrabtn = body.querySelector("#hamariytra-btn");
        let aboutContent = body.querySelector(".about-content p")

        hamariYtrabtn.addEventListener("click", (e)=>{
            console.dir()
             e.preventDefault();
           let active = aboutContent.classList.toggle("active");
           hamariYtrabtn.classList.toggle("active",active)
          
        })



        //  Committee Section 

//    let committeeSection = body.querySelector(".committee-section");
//    let committeeMembersAria = committeeSection.querySelector(".committee-grid");
//    let committeeBtn = committeeSection.querySelector("#commettee-btn");


//    committeeBtn.addEventListener("click", (dtl)=>{
    
//     let active=committeeMembersAria.classList.toggle("active");

//     if (active ===false) {

//         committeeMembersAria.scrollTop = 0;
       
//     }
//    })


        //    Gallery Section


 let gallerySection = body.querySelector(".gallery-section");
 let galleryItem = gallerySection.querySelectorAll(".gallery-item");
 let lightbox = gallerySection.querySelector(".lightbox");
 let lightboxClosebtn = lightbox.querySelector(".lightbox-close");
 let lightboxPrevbtn = lightbox.querySelector(".lightbox-prev");
 let lightboxNxtbtn = lightbox.querySelector(".lightbox-next");
 let lightboxImage = lightbox.querySelector(".lightbox-image");


  let correntOpenimage=0;

 gallerySection.addEventListener("click",(dtl)=>{
   
    let clickImage = dtl.target.closest(".gallery-item");
    if(clickImage){
        correntOpenimage = Array.from(galleryItem).indexOf(clickImage);
        let imgPath=clickImage.dataset.original;
        lightboxImage.setAttribute("src", imgPath);
        lightbox.classList.add("active");
    }

 })

 function updateLightboxImage() {

    let imagePath = galleryItem[correntOpenimage].dataset.original;

    lightboxImage.setAttribute("src", imagePath);
}

lightboxNxtbtn.addEventListener("click", () => {
     correntOpenimage=(correntOpenimage+1)%galleryItem.length;
   updateLightboxImage();
});
lightboxPrevbtn.addEventListener("click", () => {
    let prevImagepath;
    if(correntOpenimage===0){
        console.log(correntOpenimage)
        correntOpenimage = galleryItem.length-1;
      
    }
    else{
        console.log(correntOpenimage)
   correntOpenimage =correntOpenimage-1;
     
    }
    updateLightboxImage();
});

 lightboxClosebtn.addEventListener("click", () => {
     lightbox.classList.remove("active")
});