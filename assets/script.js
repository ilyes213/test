    $(document).ready(function() {
        $(".-button").click(function() {
            $('html, body').animate({
                scrollTop: $("#ads-form").offset().top
            }, 1000);
        });
    });


    /* Scroll Top/

                $(window).bind('scroll', function() {
                  if ($(window).scrollTop() > 800) {
                    $('.to-top').addClass('-visible');
                  } else {
                    $('.to-top').removeClass('-visible');
                  }


        $(".to-top").click(function (){
                    $('html, body').animate({
                        scrollTop: $("#top").offset().top
                    }, 1000);
                });
                });


    / FORM SEND*/

    function sendConatcts() {
        //FORM SUBMIT


        document.getElementById('ads-contacts-form').style.visibility = "hidden";
        document.getElementById('ads-contacts-form').style.position = "absolute";
        document.getElementById('form-result').style.display = "block";

        document.getElementById('form-result').innerHTML = '<img src="https://ci.jumia.is/cms/1_JG/predict-and-win/icon-done-v1.gif" alt=""/><br/><div class="-costumer-request"><h1 >تم تاكيد طلبك بنجاح</h1><br/><a href="https://www.facebook.com/YouCan.Stor" style="color:white;">شكرا لك لزيارت موقعنا</a></div>';
        document.getElementById('ads-contacts-form').submit();



    }