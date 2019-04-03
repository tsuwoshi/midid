$(document).ready(function(){
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

$('.sns_logo').click(function(){
  var urlList = ['https://www.pinterest.jp/mididtokyo/','https://www.facebook.com/midid.midid.96742',
  'https://www.instagram.com/mid_id_tokyo/','https://twitter.com/MIDiD_tokyo'];
  var logoIndex = $('.sns_logo').index(this);
  window.open(urlList[logoIndex]);
})

$('#gallery_main_container').flickity({
    prevNextButtons: false
  });


  $(function() {
    $('#gallery_main_container').on('touchstart', onTouchStart); //指が触れたか検知
    $('#gallery_main_container').on('touchmove', onTouchMove); //指が動いたか検知
    $('#gallery_main_container').on('touchend', onTouchEnd); //指が離れたか検知
    var direction, position;

    //スワイプ開始時の横方向の座標を格納
    function onTouchStart(event) {
      position = getPosition(event);
      direction = ''; //一度リセットする
    }

    //スワイプの方向（left／right）を取得
    function onTouchMove(event) {
      if (position - getPosition(event) > 70) { // 70px以上移動しなければスワイプと判断しない
        direction = 'left'; //左と検知
      } else if (position - getPosition(event) < -70){  // 70px以上移動しなければスワイプと判断しない
        direction = 'right'; //右と検知
      }
    }

    function aaa(e){
      var selected = $('.is-selected').attr('alt');
      var now = $('.gallery_info_box');
      now.addClass('off');
      now.removeClass('gallery_info_box');
      switch (selected) {
        case 'gallery1':
        $('#info_1').removeClass('off');
        $('#info_1').addClass('gallery_info_box');
          break;
          case 'gallery2':
            $('#info_2').removeClass('off');
            $('#info_2').addClass('gallery_info_box');
            break;
            case 'gallery3':
            $('#info_3').removeClass('off');
            $('#info_3').addClass('gallery_info_box');
              break;
              case 'gallery4':
              $('#info_4').removeClass('off');
              $('#info_4').addClass('gallery_info_box');
                break;
                case 'gallery5':
                $('#info_5').removeClass('off');
                $('#info_5').addClass('gallery_info_box');
                  break;
                  case 'gallery6':
                  $('#info_6').removeClass('off');
                  $('#info_6').addClass('gallery_info_box');
                    break;
                    case 'gallery7':
                    $('#info_7').removeClass('off');
                    $('#info_7').addClass('gallery_info_box');
                      break;
        default:
      }
    };


    function onTouchEnd(event) {
      function flick(){
        var selected = $('.is-selected').attr('alt');
        var now = $('.gallery_info_box');
        now.addClass('off');
        now.removeClass('gallery_info_box');
        switch (selected) {
          case 'gallery1':
          $('#info_1').removeClass('off');
          $('#info_1').addClass('gallery_info_box');
            break;
            case 'gallery2':
              $('#info_2').removeClass('off');
              $('#info_2').addClass('gallery_info_box');
              break;
              case 'gallery3':
              $('#info_3').removeClass('off');
              $('#info_3').addClass('gallery_info_box');
                break;
                case 'gallery4':
                $('#info_4').removeClass('off');
                $('#info_4').addClass('gallery_info_box');
                  break;
                  case 'gallery5':
                  $('#info_5').removeClass('off');
                  $('#info_5').addClass('gallery_info_box');
                    break;
                    case 'gallery6':
                    $('#info_6').removeClass('off');
                    $('#info_6').addClass('gallery_info_box');
                      break;
                      case 'gallery7':
                      $('#info_7').removeClass('off');
                      $('#info_7').addClass('gallery_info_box');
                        break;
          default:
        }
      };

      if (direction == 'right'){
  setTimeout(flick,500);
      } else if (direction == 'left'){
      setTimeout(flick,500);
      }
    }

    //横方向の座標を取得
    function getPosition(event) {
      return event.originalEvent.touches[0].pageX;
    }
  });
$('.profile_image').click(function(){
  $(this).next('.togglebox').slideToggle(500);
})
});
