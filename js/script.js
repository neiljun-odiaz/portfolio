// const Child = require('./components/skill.vue')

// Vue.component('child', Child)

// new Vue ({
// 	el: '#portfolio',
// 	data: {
// 		myname: 'Neiljun I. Odiaz'
// 	}
// })

jQuery('document').ready(function(){
    var lastScrollTop = 0;
    var new_top = 60;
    var new_height = 228;

    timeline_progress();

    $(document).on( 'scroll', function(){
        timeline_progress();
    });

    // function get timeline progress by scroll top
    function timeline_progress() {
        var scroll = $(document).scrollTop();
        var bg_top = parseFloat($('.Body__progressbg').css('top'));
        var bg_height = parseFloat($('.Body__progressbg').css('height'));

        if ( lastScrollTop == 0 && scroll > 60 ) {
            console.log(scroll);
            bg_top = 0;
            new_top = 0;
        }

        // Check if scrolled down or up
        if ( lastScrollTop < scroll ) { // Scroll down
            if ( scroll > 60 ) {
                if ( bg_top > 0 )
                    new_top = parseFloat(bg_top) - parseFloat(5);

                if ( bg_height < 328 )
                    new_height = parseFloat(bg_height) + parseFloat(1.2);
            }
        } else { // Scroll up
            if ( scroll < 70  && bg_top < 70 )
                new_top = parseFloat(bg_top) + parseFloat(15);

            if ( scroll < 184 )
                new_height = parseFloat(bg_height) - parseFloat(1.3);

            console.log(bg_top);
        }

        $('.Body__progressbg').css('top',new_top+'px');
        $('.Body__progressbg').css('height',new_height+'px');
        lastScrollTop = scroll;
    }


    // Show menu
    $('.toggle_menu .btn').on('click', function(e){
        e.preventDefault();
        toggle_menu();
    });

    // Hide Menu
    $('.close_btn').on('click', function(e){
        e.preventDefault();
        toggle_menu();
    });

    // Toggle Menu
    function toggle_menu() {
        $('.Header').toggleClass('active');
        $('.Body__content').toggleClass('moveleft');
    }

    // Scroll to section when an item in menu is clicked
    $('.Header__navlink').on('click', function(e){
        e.preventDefault();
        var this_ = $(this);
        var target = $( '#' + this_.data('section') );
        console.log(target);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    });

});