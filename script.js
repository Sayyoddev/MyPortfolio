window.addEventListener('DOMContentLoaded', function(){
    this.window.addEventListener('scroll', function(){
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0)
    })

    const menuBtn = document.querySelector('.menu-btn')
    const navigation = document.querySelector('.navigation')
    const navigationItem = document.querySelector('.navigation a')

    menuBtn.addEventListener('click', ()=>{
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })

    navigationItem.forEach(navItem =>{
        navItem.addEventListener('click', ()=>{
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
        })
    })

    const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll', ()=>{
        scrollBtn.classList.toggle("active", window.scrollY > 500)
    })
    scrollBtn.addEventListener('click', () =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})

let valueDisplays = document.querySelectorAll(".num");
let interval=5000;

valueDisplays.forEach((valueDisplays)=>{
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval) / endValue;
    let counter = setInterval(function(){
        startValue +=1;
        valueDisplays.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration)
})