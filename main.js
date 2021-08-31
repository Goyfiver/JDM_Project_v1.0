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


/* Scroll Sections Active Link*/
const Sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    Sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

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