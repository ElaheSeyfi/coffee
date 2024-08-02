const navbar_toggle=document.querySelector('.navbar-toggle')
const nav_moblie=document.querySelector('.nav-moblie')
const number_count=document.querySelectorAll('.count_number')
const inp=document.querySelector('#inp')
const btn=document.querySelector('button')
console.log(btn)
const container_numbers=document.querySelector('.container-number')
const numbers=[10,6,250,132]
let item=0
// const index=[0,0,0,0]
console.log(number_count)
//nav
navbar_toggle.addEventListener('click',()=>{
    nav_moblie.classList.toggle('mobilehide')
})
//nav

// submit
btn.addEventListener('click',()=>{
    let temp=inp.value
    console.log(temp)
    console.log(inp)
    if(temp==''|| temp==null || temp.search(/<script>/)){
        inp.style.borderBottom = "2px solid gray";
    }
    else if(temp.length<=10|| temp.search(/@/)<3|| temp.search(/@/g)>=temp.length || temp.lastIndexOf('.'+2)>temp.length){
        inp.style.borderBottom="1px solid gray" 
    }
    else{
        console.log(temp)
        inp.style.borderBottom = "2px solid pink";
    }
})
// submit

// number
console.log(container_numbers)

let scrolloffsettop= container_numbers.offsetTop
console.log(scrolloffsettop)
let flag=false
window.addEventListener('scroll',()=>{
    let winscroll=window.scrollY
    console.log(winscroll)
    if(!flag &&winscroll>scrolloffsettop/2){
        console.log("bexhmar")
        number_count.forEach((val,i)=>{
            let curentnumber=0
            let numberarray=numbers[i]
            const interval=setInterval(() => {          
                if(curentnumber<=numberarray){
                    val.innerHTML=curentnumber
                    curentnumber++
                }else{
                    clearInterval(interval)
                }
            }, 10);
        })
        flag=true
    }
})
// number

