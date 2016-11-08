var Skills = Vue.extend({
    template: '#core-skills',

    props: ['skillsets'],

    data: function() {
        return {
            myskillsets: []
        }
    },

    created() {
        this.fetchTasks();
    },

    methods: {
        fetchTasks() {
            this.$http.get('api/skillset.json').then((response) => {
                var skillsets = response.body;
                this.myskillsets = skillsets;
            });
        }
    }
});

var Works = Vue.extend({
    template: '#latest-works',

    props: ['works'],

    data: function() {
        return {
            myworks: [],
            showmore: false
        }
    },

    created() {
        this.fetchTasks();
    },

    methods: {
        fetchTasks() {
            this.$http.get('api/projects.json').then((response) => {
                var works = response.body;
                this.myworks = works;
            });
        },

        showMoreWorks() {
            this.myworks.forEach(function(project) {
                project.hidden = false;
            });
            this.showmore = true;
        }
    }
});

Vue.component('coreskills', Skills);
Vue.component('latestworks', Works);

new Vue ({
	el: '#portfolio',
	data: {
        myskillsets: [],
        myworks:[]
	}
});

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
        var scroll = $(window).scrollTop();
        var bg_top = parseFloat($('.Body__progressbg').css('top'));
        var bg_height = parseFloat($('.Body__progressbg').css('height'));

        if ( lastScrollTop == 0 && scroll > 60 ) {
            bg_top = 0;
            new_top = 0;
        }

        // Check if scrolled down or up
        if ( scroll > 60 ) {
            if ( bg_top > 0 )
                new_top = parseFloat(scroll) - parseFloat(60);

            new_height = parseFloat(328);
        } else {
            new_height = parseFloat(bg_height) - parseFloat(6);
            if ( bg_top < 0 && scroll > 5 )
                new_top = parseFloat(scroll) - parseFloat(2);
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
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    });

    // Show modal to view project's more details
    $('.Project').on('click','.Project__showmodal', function(e){
        e.preventDefault();
        var this_ = $(this);
        var content = this_.find('.modal_content').html();
        show_project_modal(content);
    });

    $('.Project').on('click','.Project__image', function(e){
        e.preventDefault();
        var this_ = $(this);
        var content = this_.next('.Project__description').find('.modal_content').html();
        show_project_modal(content);
    });

    // Close the modal
    $('.Modal .close-btn, .bg-overlay').on('click', function(e){
        e.preventDefault();
        hide_project_modal();
    });

    function show_project_modal(content){
        var offset = $(window).scrollTop();
        var viewportHeight = $(window).height();
        var viewportWidth = $(window).width();
        var top = (offset  + (viewportHeight/2)) - 280;
        var doc_height = $(document).outerHeight();
        $('.Modal').find('.Modal__content').html(content);
        $('.bg-overlay').css('height',doc_height+'px').fadeIn(300);
        $('.Modal').css('top', top).fadeIn(400);
        if ( viewportWidth < 680 ) {
            var modal_width = $('.Modal').outerWidth();
            top = (offset  + (viewportHeight/2)) - 250;
            $('.Modal').css('top', top);
            $('.Modal').css('marginLeft', '-' + (modal_width/2) + 'px');
        }
    }

    function hide_project_modal() {
        $('.bg-overlay').fadeOut(300);
        $('.Modal').fadeOut(400);
        setTimeout(function(){
            $('.Modal').find('.Modal__content').html('');
        },500);
    }

});
