$(document).ready(function(){
    //scroll 
  $(window).on("scroll",function(){
      var scroll=$(window).scrollTop();
      if(scroll >= 30){
          $('#nav-section').addClass('nav-fixed');
      } else{
          $('#nav-section').removeClass('nav-fixed');
      }
      if(scroll >= 300){
          $('.uptop .fa-arrow-up').css('display','block');
      } else{
        $('.uptop .fa-arrow-up').css('display','none');
      }
  });
  $('.uptop').on('click',function(){
    $(window).delay('fast').scrollTop(0);
  });

  //modal function
  $('.modal-section .modal-body input').keydown(function(){
    $('.modal-section .modal-body .fa-times').css('display','block');
  });
  $('.modal-section .modal-body .fa-times').click(function(){
    $('.modal-section .modal-body input').val('');
    $(this).css('display','none');
  });
  
  $('.top-movies input').keydown(function(){
    $('.top-movies .input-group .fa-times').css('display','block');
  });
  $('.top-movies .input-group .fa-times').click(function(){
    $('.top-movies input').val('');
    $(this).css('display','none');
  });
});