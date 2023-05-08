
const div1=document.querySelector(".btn-container")
const btn1=document.createElement("button")
const btn2=document.createElement("button")
const btn3=document.createElement("button")
const btn4=document.createElement("button")
btn1.className="btn-item btn btn-outline-dark"
btn2.className="btn-item btn btn-outline-dark "
btn3.className="btn-item btn btn-outline-dark"
btn4.className="btn-item btn btn-outline-dark"
btn1.innerHTML="All"
div1.appendChild(btn1)
btn2.innerHTML="Korea"
div1.appendChild(btn2)
btn3.innerHTML="Japan"
div1.appendChild(btn3)
btn4.innerHTML="China"
div1.appendChild(btn4)


const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const menuitem=document.querySelector(".section-center")

for( {title, category,price,img,desc} of menu ){
  const menucol=document.createElement('div')
  menucol.className="col-xl-6 col-sm-12  menu-items "
  menucol.innerHTML =` 
  <img src="${img}" class="photo " alt="">
  <div class="menu-info">
  <div class=" menu-title ">  
  <h4>${title}</h4>
  <h4>${price}</h4>
  </div>
 <div class=" menu-text"> ${desc} </div> 
 </div>
 `
  menuitem.appendChild(menucol)

}

  
btn1.addEventListener('click',function(){
  let counter= localStorage.getItem('All') ? Number(localStorage.getItem('All'))  : 0
  counter+=1
  localStorage.setItem('All',counter)
  console.log('All')
  menuitem.innerHTML=""
  for( {title, category,price,img,desc} of menu ){
  const menucol=document.createElement('div')
  menucol.className="col-xl-6 col-sm-12  menu-items "
  menucol.innerHTML =` 
  <img src="${img}" class="photo " alt="">
  <div class="menu-info">
  <div class=" menu-title ">  
  <h4>${title}</h4>
  <h4>${price}</h4>
  </div>
 <div class=" menu-text"> ${desc} </div> 
 </div>
 `
  menuitem.appendChild(menucol)

}

})


const Korean=menu.map(item => {
  if(item.category==="Korea"){
    return item;
  }
}).filter(item => item !== undefined);

btn2.addEventListener('click', function(event){
  let counter= localStorage.getItem('Korea') ? Number(localStorage.getItem('Korea'))  : 0
  counter+=1
  localStorage.setItem('Korea',counter)
  console.log('Korea')
  event.preventDefault()
  menuitem.innerHTML=""
             for({title,category,price,img,desc} of Korean){
            
          
                const menucol=document.createElement('div')
                menucol.className="col-xl-6 col-sm-12  menu-items "
                menucol.innerHTML =` 
                <img src="${img}" class="photo " alt="">
                <div class="menu-info">
                <div class=" menu-title ">  
                <h4>${title}</h4>
                <h4>${price}</h4>
                </div>
                <div class=" menu-text"> ${desc} </div> 
                </div>
                          `
                
                menuitem.appendChild(menucol)
            }
      
     
})


const Japan=menu.map(item => {
      if( item.category==="Japan"){
        return item;
      }
}).filter(item => item !== undefined);
btn3.addEventListener('click',function(){
  let counter= localStorage.getItem('Japan') ? Number(localStorage.getItem('Japan'))  : 0
  counter+=1
  localStorage.setItem('Japan',counter)
  console.log('Japan')
  menuitem.innerHTML=""
             for({title,category,price,img,desc} of Japan){
            
          
                const menucol=document.createElement('div')
                menucol.className="col-xl-6 col-sm-12  menu-items "
                menucol.innerHTML =` 
                <img src="${img}" class="photo " alt="">
                <div class="menu-info">
                <div class=" menu-title ">  
                <h4>${title}</h4>
                <h4>${price}</h4>
                </div>
                <div class=" menu-text"> ${desc} </div> 
                </div>
                          `
                
                menuitem.appendChild(menucol)
            }
      
})


const China=menu.map(item => {
  if( item.category==="China"){
    return item;
  }
}).filter(item => item !== undefined);

btn4.addEventListener('click',function(){
  let counter= localStorage.getItem('China') ? Number(localStorage.getItem('China'))  : 0
  counter+=1
  localStorage.setItem('China',counter)
  console.log('China')
  menuitem.innerHTML=""
             for({title,category,price,img,desc} of China){
            
          
                const menucol=document.createElement('div')
                menucol.className="col-xl-6 col-sm-12  menu-items "
                menucol.innerHTML =` 
                <img src="${img}" class="photo " alt="">
                <div class="menu-info">
                <div class=" menu-title ">  
                <h4>${title}</h4>
                <h4>${price}</h4>
                </div>
                <div class=" menu-text"> ${desc} </div> 
                </div>
                          `
                
                menuitem.appendChild(menucol)
            }
      
})

