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