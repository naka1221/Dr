

 window.addEventListener('scroll',  function(){
    const scrollTopfix = document.documentElement.scrollTop
    if(window.innerWidth > 991){
        if(scrollTopfix>180) {
            document.querySelector('.down-nav').classList.add('fixed');

        }
        else{
            document.querySelector('.down-nav').classList.remove('fixed');
  
        }
    }
  })

/////////////////


  ////////////////////////


const linebar=document.querySelector(".line-nav")
const sidemenu = document.querySelector(".nav-side")
const linenav = document.querySelector(".line-min_nav")
const overlay =document.querySelector(".overlay")

const mobile=document.querySelector(".mobile-nav")


linebar.addEventListener("click" , function(){
  sidemenu.classList.toggle("hide")
  linenav.classList.toggle("closeBtn")
  overlay.classList.toggle("active")
  // mobile.classList.toggle("hidden")

})
///////////////////////////////////////////////////////////////////////

//   let swipertow = new Swiper(".mySwiper", {
//     direction: 'vertical',
//   pagination: {
//     el: ".swiper-pagination",
//     type: "progressbar",
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });









//   const dark = document.querySelector(".dark-mode")
// const logoRight= document.querySelector(".top-nav_right-logo")
// const  light= document.querySelector(".light-mode")
// var rootbee = document.querySelector(':root');


// // //// dark moode Handel
// let flags = 1;
// logoRight.addEventListener("click", function(){
//     dark.classList.toggle("show")
//     light.classList.toggle("show")
//     if(flags == 1){
//         rootbee.style.setProperty('--bs-light',"#333");
//         rootbee.style.setProperty('--white-color',"#666");
//         rootbee.style.setProperty('--second-color',"#999")
//         flags =0;
//     }
//      else if(flags == 0){
//         rootbee.style.setProperty('--bs-light',"#FFF");
//         rootbee.style.setProperty('--white-color',"#fff");
//         rootbee.style.setProperty('--second-color',"#d3c137ef")

//         flags=1;
//      }

//})


// ///////   show active pages in  navbar-item
// const link =document.querySelectorAll(".main-nav_listItem")
// console.log(link.item)
// link.forEach(elem => {
// elem.addEventListener("click" , function() {

//     link.forEach(se => {
//       se.classList.remove("active")
//     })
//      elem.classList.add("active")
//   })
// })

// //////    hamberger menu fore nav-side



// //////  inpute fore mobile size

// const minSearch = document.querySelector(".min-search")
// const inputsearch =document.querySelector(".min-nav_input")

// minSearch.addEventListener("click" , function(){
//   inputsearch.classList.toggle('hide-inputt')
//   console.log("mmmmm")
//  })



//  /////// fixed navbar when scroll
//  window.addEventListener('scroll',  function(){
//   const scrollTopfix = document.documentElement.scrollTop
//   if(window.innerWidth > 991){
//       if(scrollTopfix>180) {
//           document.querySelector('.down-nav').classList.add('fixed');
//       }
//       else{
//           document.querySelector('.down-nav').classList.remove('fixed');

//       }
//   }
// })


// ////// slider for main (index.html) page
// const swiperSliderr= new Swiper('.swiper' , {
//   loop: true,

//   navigation : {
//     nextEl: 'swiper-button-next',
//     prevEl: 'swiper-button-prev',
//   },

//   pagination:{
//     el:'.swiper-pagination'
//   },
//   autoplay: {
//     delay: 6500,
//     disableOnInteraction: false,
//   },
// })





 





const palett = document.querySelectorAll(".palet-color__box")
palett.forEach(items => {
    items.addEventListener("click" ,function(e){
        for(let j=0; j<palett.length ; j++){
            palett[j].classList.remove("small")
        }
        items.classList.add("small")
        const valpaletColor = e.target
        const pColor=valpaletColor.getAttribute("data-id")
        const second=valpaletColor.getAttribute("data")
        console.log(pColor)
        var root = document.querySelector(':root');
        root.style.setProperty('--primary-color',pColor);
        root.style.setProperty('--secondary-color', second)
    })
})

const paletIcon= document.querySelector(".palet-icon")
const palet =document.querySelector(".palet")
let flag =0
        const boddy=document.querySelector("body")
let fla
paletIcon.addEventListener("click" , function(){
    if(flag == 0){
        palet.style.right="0%"
    flag=1;
    fla=1
    }
    else if(flag ==1){


        palet.style.right="-200px"
        flag=0
    }
    
})

// const boddy=document.querySelector("body")

boddy.addEventListener("click" , function(){
    // if(fla == 0){
    //     palet.style.right="0%"
    // fla=1;
    // }

//     if(fla ==0){
//         palet.style.right="-200px"
//         fla=0
//     }
    
})


//////////////   Handel  Pallet Default /////////////
const palletDefault = document.querySelector(".pallet-default")
var root = document.querySelector(':root');

palletDefault.addEventListener("click" , function(){
  root.style.setProperty('--primary-color',"#17a2b8");
  root.style.setProperty('--secondary-color', '#17a3b83d');
})


const toggleBtn = document.querySelector(".nav-btn__toggle")
const menuList = document.querySelector(".menu-list")
const childtoggleBtn = toggleBtn.children
toggleBtn.addEventListener("click" , function(){
   menuList.classList.toggle("activemenu")
   for(let i=0 ; i<childtoggleBtn.length ; i++){
       childtoggleBtn[i].classList.toggle("show")
   }

})
    


// /////////////
// const sidbar =document.querySelectorAll('.sidbar-list__item')
// const topitem =document.querySelector('.top')

// for(let i=0; i<sidbar.length ; i++){
//     sidbar[i].addEventListener('click' , function(){
//     console.log('mmm')
// topitem.style.height=100+"vh"
// })
// }


// work//////////////

// const Elitemss =document.querySelectorAll('.list-item')
// const item =document.querySelectorAll('.work__photo-box')
// const wrapperwork =document.querySelector('.work__photo-wrapper')

// for(let i=0; i<Elitemss.length ; i++){
//     Elitemss[i].addEventListener('click' , function(){
//         for(let j=0; j<Elitemss.length; j++){
//             Elitemss[j].classList.remove('active')
//         }
//         this.classList.add('active');
//         const target= this.getAttribute('data-target')


        
//         for(let k=0; k<item.length; k++){
//             item[k].style.display='none';
//             if(target == item[k].getAttribute('data-content')){
//                 item[k].style.display ='block'
//             }
//             if(target == "all"){
//                 item[k].style.display ='block'

//             }
//         }

//     })
// }


// const listItemSide= document.querySelectorAll(".linklist")


// listItemSide.forEach(itemlist => {
//     itemlist.addEventListener("click" , function(){
//         for(let i=0 ; i<listItemSide.length ; i++){
//             listItemSide[i].classList.remove("activeColor")
//         }
//         itemlist.classList.add("activeColor")
//     })
// })



