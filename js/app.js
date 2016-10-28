$(function() {
    //BEGIN SLIDE
    var beginBtn = $('.beginBtn');
    var begin = $('.begin');

    beginBtn.on('click', function() {
        begin.hide("slide", {
            direction: "right"
        }, 1200);
        beginBtn.css("visibility", "hidden");
    });
    //RECIPE SHOW
    var choose = $('.choose');
    var recipe = $('.recipe');

    choose.on('click', function() {
        recipe.show("slide", {
            direction: "down"
        }, 1200);
        choose.hide("explode");
        $('.bottle').on('click', function() {
            console.log('To: 1');
            if ($(this).attr('id') == 'vodka' || $(this).attr('id') == 'kahlua' || $(this).attr('id') == 'milk') {
                console.log('MA ID');
            } else {
                $(".error").css("display", "block");
            }
            console.log('To: 2');




            $('.closedshaker, .icebox').on('click', function() {
              $(this).data('clicked', true);
              if ($('.closedshaker').data('clicked') && !$('.icebox').data('clicked')) {
                    $(".forgetIce").css("display", "block");
                };
            });
        });
    });









    //BACARDI ANIMATION
    var bacardi = $('#bacardi');


    bacardi.one('click', function() {
        $(this).animate({
            'top': '-=20'
        }, 1000);
        $(this).animate({
            'left': '+=230'
        }, 3000);
        $(this).animate({
            'top': '+=120'
        }, 4000);
        $(this).addClass('rotate');
        $(this).animate({
            'top': '-=120'
        }, 3000);
        $(this).delay(1000).animate({
            'left': '-=230'
        }, 3000);
        $(this).animate({
            'top': '+=20'
        }, 1000);
    });
    //VODKA ANIMATION
    var vodka = $('#vodka');

    vodka.one('click', function() {
        $(this).animate({
            'top': '-=20'
        }, 500);
        $(this).animate({
            'left': '+=100'
        }, 2000);
        $(this).animate({
            'top': '+=120'
        }, 3000);
        $(this).addClass('rotate');
        $(this).animate({
            'top': '-=120'
        }, 3000);
        $(this).delay(1000).animate({
            'left': '-=100'
        }, 2000);
        $(this).animate({
            'top': '+=20'
        }, 1000);
    });
    //KAHLUA ANIMATION
    var kahlua = $('#kahlua');

    kahlua.one('click', function() {
        $(this).animate({
            'top': '-=20'
        }, 500);
        $(this).animate({
            'left': '+=300'
        }, 2000);
        $(this).animate({
            'top': '+=120'
        }, 4000);
        $(this).addClass('rotate');
        $(this).animate({
            'top': '-=120'
        }, 3000);
        $(this).delay(1000).animate({
            'left': '-=300'
        }, 2000);
        $(this).animate({
            'top': '+=20'
        }, 1000);
    });
    //MILK ANIMATION
    var milk = $('#milk');

    milk.one('click', function() {
        $(this).animate({
                'top': '-=100'
            }, 1000)
            .animate({
                'left': '-=450'
            }, 3000)
            .animate({
                'top': '+=70'
            }, 4000);
        $(this).addClass('rotateLeft');
        $(this).animate({
            'top': '-=100'
        }, 1000);
        $(this).delay(1000).animate({
            'left': '+=450'
        }, 1000);
        $(this).animate({
            'top': '+=19'
        }, 1000);
    });
    //ICE ANIMATION
    var ice = $('.ice');
    var icebox = $('.icebox');


    icebox.one('click', function() {
        ice.animate({
            'top': '-=80'
        }, 300);
        ice.animate({
            'left': '+=300'
        }, 1000);
        ice.animate({
            'top': '+=90'
        }, 100);


    });
    //SHAKE ANIMATION
    var closedshaker = $('.closedshaker');
    var openshaker = $('.openshaker');
    var pour = $('.pour');
    var girl = $('.girl');

    openshaker.one('click', function() {
        ice.css("visibility", "hidden");
        openshaker.css("visibility", "hidden");
        closedshaker.css("visibility", "visible");
    });
    closedshaker.on('click', function() {
        closedshaker.animate({
            'top': '-=100'
        }, 800);
        closedshaker.effect("shake")
        closedshaker.animate({
            'top': '-=100'
        }, 800).addClass('shakeRote').animate({
            'top': '+=100'
        }, 800);
        closedshaker.effect("shake");
        closedshaker.animate({
            'top': '+=100'
        }, 800);
        pour.css("display", "block");
    });
    pour.one('click', function() {
        pour.css("display", "none");
        closedshaker.css("visibility", "hidden");
        girl.css("visibility", "visible");
    });









});
