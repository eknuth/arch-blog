jQuery(document).ready( function() {

    $(".the-content").fitVids();

    jQuery('#search-input').on('focus', function() {
        jQuery('.show-results-count').addClass('active');
    });

    jQuery('.share').on('click', function() {
        $(this).addClass('active');
    });

    jQuery(document).on('click focus', function(e) {
        if (jQuery(e.target).closest('.share').length === 0 && jQuery(e.target).closest('#search-input').length === 0) {
            jQuery('.show-results-count').removeClass('active');
            jQuery('.results-container').hide();
            jQuery('.share').removeClass('active');
        }
    });

    var firstImg = jQuery('.post.single').find('img:first-of-type');
    var firstImgSrc = firstImg.attr('src');
    if (typeof firstImgSrc !== 'undefined') {
        jQuery('meta[property="og:image"]').attr('content', firstImgSrc);
        jQuery('meta[name="twitter:image"]').attr('content', firstImgSrc);
    }
});
