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
    var new_top = 0;
    var new_height = 0;
    $(document).on( 'scroll', function(){
        var scroll = $(document).scrollTop();
        var bg_top = parseFloat($('.Body__progressbg').css('top'));
        var bg_height = parseFloat($('.Body__progressbg').css('height'));
        // if ( scroll > 50 ) {
        //     $('.Body__progressbg').css('top', '0px' );
        // } else {
        //     $('.Body__progressbg').css('top', '50px' );
        // }
        
        // if ( scroll > 50 ) {
        //     $('.Body__progressbg').css('height', '450px');
        // } else {
        //     $('.Body__progressbg').css('height', '246px');
        // }
        // Check if scrolled down or up
        if ( lastScrollTop < scroll ) { // Scroll down
            if ( bg_top > 0 )
                new_top = parseFloat(bg_top) - parseFloat(1.3);

            if ( bg_height < 380 )
                new_height = parseFloat(bg_height) + parseFloat(1.2);
        } else { // Scroll up
            if ( scroll < 350 )
                new_top = parseFloat(bg_top) + parseFloat(1.8);

            if ( bg_height > 246 )
                new_height = parseFloat(bg_height) - parseFloat(1.5);
        }

        // console.log( lastScrollTop - scroll );
        // console.log(scroll);

        $('.Body__progressbg').css('top',new_top+'px');
        $('.Body__progressbg').css('height',new_height+'px');

        lastScrollTop = scroll;
    });

    $('.toggle_menu .btn').on('click', function(e){
        e.preventDefault();
        $('.Header').toggleClass('active');
        $('.Body__content').toggleClass('moveleft');
    });

    $('.close_btn').on('click', function(e){
        e.preventDefault();
        $('.Header').removeClass('active');
        $('.Body__content').removeClass('moveleft');
    });
});