const swiper = new Swiper('.popular_slider', {
    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
    slidesPerView: 4,

    spaceBetween: 15,
    // Navigation arrows
    navigation: {
        nextEl: '.slider_navigation_right',
        prevEl: '.slider_navigation_left',
    },

    breakpoints: {
        0:{
            slidesPerView: 1.3,
            slidesPerGroup: 1.3
        },
        425:{
            slidesPerView: 1.5,
            slidesPerGroup: 1.5
        },
        550:{
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        648:{
            slidesPerView: 2.4,
            slidesPerGroup: 2.4
        },
        768:{
            slidesPerView: 3,
            slidesPerGroup: 3
        },
        1024:{
            slidesPerView: 4,
            slidesPerGroup: 4
        }
    },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const swipe_tags = new Swiper('.popular_tags_slider', {
    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
    slidesPerView: 4,

    spaceBetween: 15,
    // Navigation arrows
    navigation: {
        nextEl: '.slider_navigation_right',
        prevEl: '.slider_navigation_left',
    },

    breakpoints: {
        0:{
            slidesPerView: 1.3,
            slidesPerGroup: 1
        },
        425:{
            slidesPerView: 1.5,
            slidesPerGroup: 1
        },
        550:{
            slidesPerView: 2,
            slidesPerGroup: 1
        },
        648:{
            slidesPerView: 2.4,
            slidesPerGroup: 2.4
        },
        768:{
            slidesPerView: 3,
            slidesPerGroup: 1
        },
        1024:{
            slidesPerView: 3.9,
            slidesPerGroup: 4
        }
    },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

$('document').ready(() => {
    var menuItems = $('.menu_items'),
        logo = $('nav .container > svg'),
	    scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        if(scrolled < 100){
            menuItems.addClass('notVision');
            logo.removeClass('notVision');
        }else if ( scrolled > 0 && scrolled > scrollPrev ) {
            menuItems.addClass('notVision');
            logo.removeClass('notVision');
        }else {
            menuItems.removeClass('notVision');
            logo.addClass('notVision');
        }
        scrollPrev = scrolled;
    });

    /* Menu Window */
    let items = $('.window_column:first-child ul li'),
        subItems = $('.menu_items .menu_item'),
        windowTitle = $('.window_content h2'),
        windowContent = $('.window_content_column ul'),
        subTitle = $('.window_content_title > a'),
        windowSubItems = $('.window_subItems');
    function clickToItem(event){
        let targetNumber = $(event.target).attr('number'),
            targetItem = $('.menu_items .menu_item[number*="'+ targetNumber +'"]'),
            forSubTitle = targetItem.children('.dropdown_menu_item').children('ul').children('li')[0],
            forSubItems = targetItem.children('.dropdown_menu_item').children('ul').children('li').clone();

        $(items).css({"background" : "none"})
        $(event.target).css({"background" : "#fff102"})
        $(items).children('svg').css({"display" : "block"})
        $(event.target).children('svg').css({"display" : "none"})
        if(targetNumber == 0){
            windowTitle.html('Explore');
            $(subTitle).html('');
            $('.window_content_column .explore_items').remove()
            $('.window_content_column:last-child').css({'display': 'none'})
            $('.window_content_column:first-child').css({'width': '100%'})
            windowSubItems.css({'display':'none'})
            $('.window_content_column:first-child').append($('body > .explore_items').clone());
            $('.window_column:last-child').removeClass('notVision')
            return;
        }
        $('.window_column:last-child').removeClass('notVision')
        windowSubItems.css({'display':'flex'})
        $('.window_content_column:first-child').children('.explore_items').css({'display':'none'});
        $('.window_content_column:first-child').attr('style','')
        windowTitle.html($(event.target).text());
        $(subTitle).html('See ' + $(forSubTitle).children('a').text());
        $(subTitle).attr('href',$(forSubTitle).children('a').attr('href'));
        windowSubItems.html(forSubItems)
        if($(event.target).text() == 'Entertainment'){
            $('.content_featured').children('.featured_img').children('img').attr('src', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F03%2F08%2Fjeopardy-guest-hosts.jpg&w=1200&h=1200&c=sc&poi=%5B750%2C380%5D&q=85')
            $('.content_featured').children('.feature_title').children('h3').html('<a href="https://people.com/tv/jeopardy-celebrity-hosts-best-and-worst-moments/">The Best (& Worst) <em>Jeopardy!</em> Celebrity Guest Host Show Moments So Far</a>')
            $('.window_content_column:last-child').css({'display': 'flex'})
        }else if($(event.target).text() == 'News'){
            $('.content_featured').children('.featured_img').children('img').attr('src', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F06%2F03%2Fdemi-lovato.jpg&w=1200&h=1200&c=sc&poi=face&q=85')
            $('.content_featured').children('.feature_title').children('h3').html('<a href="https://people.com/celebrity/stars-who-came-out-in-2021/">Stars Who Opened Up About Their Sexuality and Gender Identity in 2021</a>')
            $('.window_content_column:last-child').css({'display': 'flex'})
        }else if($(event.target).text() == 'Lifestyle'){
            $('.content_featured').children('.featured_img').children('img').attr('src', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F06%2F09%2Ffathers-day-tout.jpg&w=1200&h=1200&c=sc&poi=face&q=85')
            $('.content_featured').children('.feature_title').children('h3').html("<a href='https://people.com/lifestyle/fathers-day-gift-guide-2021-editors-picks/'>Father's Day Gift Guide 2021: Editors' Picks</a>")
            $('.window_content_column:last-child').css({'display': 'flex'})
        }else if($(event.target).text() == 'Shopping'){
            $('.window_content_column:last-child').css({'display': 'none'})
        }
    }
    items.click((event) => {
        clickToItem(event)
    })

    $('.to_back').click(() => {
        $('.window_column:last-child').addClass('notVision')
    })

    $('.close_window').click(() => {
        $('.menu_window_container').addClass('notVision')
    })
    $('.menu_toggler_container').click(() => {
        windowTitle.html('Explore');
            $(subTitle).html('');
            $('.window_content_column .explore_items').remove()
            $('.window_content_column:last-child').css({'display': 'none'})
            $('.window_content_column:first-child').css({'width': '100%'})
            windowSubItems.css({'display':'none'})
            $('.window_content_column:first-child').append($('body > .explore_items').clone());
            $('.window_column:last-child').removeClass('notVision')
            $('.menu_window_container').removeClass('notVision')
            $(items).css({"background" : "none"})
            $(items[0]).css({"background" : "#fff102"})
            $(items).children('svg').css({"display" : "block"})
            $(items[0]).children('svg').css({"display" : "none"})
    })
    jQuery(function($){
        $(document).mouseup(function (e){
            var div = $(".menu_window"); 
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                $('.menu_window_container').addClass('notVision')
                $('.social_modal_container').addClass('notVision')

            }
        });
    });
    $('.left_sidebar li:last-child').click(() => {
        $('.social_modal_container').removeClass('notVision')
    })

    jQuery(function($){
        if($('.join_now_dropdown').hasClass('notVision')){
            $(document).mouseup(function (e){
                var div = $(".join_now_dropdown"); 
                if (!div.is(e.target)
                    && div.has(e.target).length === 0) {
                    $('.join_now_dropdown').addClass('notVision')
                }
            });
        }
    });

    $('.join_now').click(() => {
        $('.join_now_dropdown').removeClass('notVision')
    })
})