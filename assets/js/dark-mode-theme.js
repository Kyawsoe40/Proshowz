/*** 
    $('.dark-mode').click(function(){
        $(this).toggleClass('fa-moon');
        $(this).toggleClass('fa-sun');
        $('.contact-form .form-control').toggleClass('light-form');
        $('.contact-form .form-control').toggleClass('dark-form');
        $('body').toggleClass('dark-mode-theme');
       
    });
    */
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
      
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
    
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            $('.mode-container .gg-moon').css('display','none');
            $('.mode-container .gg-sun').css('display','block');
        }
        else {        document.documentElement.setAttribute('data-theme', 'light');
              localStorage.setItem('theme', 'light');
              $('.mode-container .gg-sun').css('display','none');
            $('.mode-container .gg-moon').css('display','block');
        }    
    }
    
    toggleSwitch.addEventListener('change', switchTheme, false);

   $(document).ready(function(){
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
      
        if (currentTheme === 'dark') {
            $('.mode-container .gg-moon').css('display','none');
            $('.mode-container .gg-sun').css('display','block');
        }else{
            $('.mode-container .gg-sun').css('display','none');
            $('.mode-container .gg-moon').css('display','block');
        }
    }else{
        $('.mode-container .gg-sun').css('display','none');
        $('.mode-container .gg-moon').css('display','block');
    }
   })