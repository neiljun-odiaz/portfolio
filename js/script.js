// const Child = require('./components/skill.vue')

// Vue.component('child', Child)

// new Vue ({
// 	el: '#portfolio',
// 	data: {
// 		myname: 'Neiljun I. Odiaz'
// 	}
// })

jQuery('document').ready(function(){
    $(document).on( 'scroll', function(){
        var scroll = $(document).scrollTop();

        if ( scroll > 30 ) {
            $('.Body__progressbg').css('top', '0px' );
        } else {
            $('.Body__progressbg').css('top', '30px' );
        }
        
        if ( scroll > 30 ) {
            $('.Body__progressbg').css('height', '450px');
        } else {
            $('.Body__progressbg').css('height', '246px');
        }
    });
});