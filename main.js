const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}


showMenu('nav-toggle','nav-menu')

/*Remove Menu*/
const navLink =  document.querySelectorAll('.nav__link'),
    navMenu = document.getElementById('nav-menu')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




let skylineBack = document.getElementById('skylineBack');
        let skylineMid = document.getElementById('skylineMid');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        let skylineFront = document.getElementById('skylineFront');
        let header = document.querySelector('header')

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            skylineBack.style.top = value * 0.25 + 'px';
            skylineMid.style.top = value * 0.1 + 'px';
            skylineFront.style.top = value * 0 + 'px';
            text.style.marginTop = value * 0.5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
           
        })