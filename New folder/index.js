var dark = true;
    var change = document.querySelector('.changeMode');
    change.addEventListener('click', function(){
        // if (dark){
        //     var body = document.querySelector('body');
        //     body.classList.remove('light');
        //     body.classList.add('dark');
        //     change.innerHTML = 'Light';
        //     dark = false;
        // }
        // else{
        //     var body = document.querySelector('body');
        //     body.classList.remove('dark');
        //     body.classList.add('light');
        //     change.innerHTML = 'Dark';
        //     dark = true;
        // }

        var body = document.querySelector('body');
        body.classList.toggle('dark');
    });
