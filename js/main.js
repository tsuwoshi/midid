$(document).ready(function(){
  $('.gallery_sub').click(function(){
    var src = $(this).attr('src');
    $('#gallery_main').hide();
    $('#gallery_main').attr('src',src).fadeIn(1000);
    var sub = $('.gallery_sub').index(this);
    var now = $('.gallery_info_box');
    now.addClass('off');
    now.removeClass('gallery_info_box');
    switch (sub) {
      case 0:
      $('#info_1').removeClass('off');
      $('#info_1').addClass('gallery_info_box');
        break;
        case 1:
          $('#info_2').removeClass('off');
          $('#info_2').addClass('gallery_info_box');
          break;
          case 2:
          $('#info_3').removeClass('off');
          $('#info_3').addClass('gallery_info_box');
            break;
            case 3:
            $('#info_4').removeClass('off');
            $('#info_4').addClass('gallery_info_box');
              break;
              case 4:
              $('#info_5').removeClass('off');
              $('#info_5').addClass('gallery_info_box');
                break;
                case 5:
                $('#info_6').removeClass('off');
                $('#info_6').addClass('gallery_info_box');
                  break;
                  case 6:
                  $('#info_7').removeClass('off');
                  $('#info_7').addClass('gallery_info_box');
                    break;
      default:
    }
    return false;
  });
  $('#mv').fadeIn(4000);
  $('#gallery_nav').click(function(){
    var gallery_top = $('#gallery').offset().top;
    $('html,body').animate({
      'scrollTop': gallery_top
    },'slow');
  })
  $('#member_nav').click(function(){
    var member_top = $('#member').offset().top;
    $('html,body').animate({
      'scrollTop': member_top
    },'slow');
  })
  $('#contact_nav').click(function(){
    var contact_top = $('#contact').offset().top;
    $('html,body').animate({
      'scrollTop': contact_top
    },'slow');
  })
//
$('.sns_logo').click(function(){
  var urlList = ['https://www.instagram.com/mid_id_tokyo/','https://twitter.com/MIDiD_tokyo',
'https://www.pinterest.jp/mididtokyo/','https://www.facebook.com/midid.midid.96742'];
  var logoIndex = $('.sns_logo').index(this);
  window.open(urlList[logoIndex]);
})
$('.big_qr').click(function(){
  var urlList = ['https://twitter.com/MIDiD_tokyo','https://www.instagram.com/mid_id_tokyo/',
'https://www.pinterest.jp/mididtokyo/','https://www.facebook.com/midid.midid.96742'];
  var logoIndex = $('.big_qr').index(this);
  window.open(urlList[logoIndex]);
})
});
