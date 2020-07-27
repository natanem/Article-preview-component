user = document.querySelector('.user');
share = document.querySelector('.share');
share_option =  document.querySelector('.share__options');
share_option_mobile = document.querySelector('.share__options--mobile');
share_option_mobile_icon = document.querySelector('.share__options--mobile a');


    share.addEventListener('click', ()=> {
        console.log(window.innerWidth)
        if(window.innerWidth > 600){
            share_option_mobile.classList.add('hide')
        if(share_option.classList.contains('hide')){
            share_option.classList.add('show')
            share_option.classList.remove('hide')
        }else{
            share_option.classList.remove('show')
           share_option.classList.add('hide')
    
        }
    }else{
        console.log('clickedd..');
        user.style.display = 'none'
        if(share_option_mobile.classList.contains('hide')){
            share_option_mobile.classList.add('show')
            share_option_mobile.classList.remove('hide')
        }else{
            share_option_mobile.classList.remove('show')
            share_option_mobile.classList.add('hide')
        }
    }
    })
    share_option_mobile_icon.addEventListener('click', ()=>{
        console.log('mob clicked')
        share_option_mobile.classList.remove('show')
        share_option_mobile.classList.add('hide')
        user.style.display = 'grid'
    })
