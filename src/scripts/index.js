import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import Toggle from './components/Toggle';
import '../styles/index.scss';

jQuery(function() {
    jQuery('.JS-Toggle').each(function() {
      let options = jQuery(this).data('toggle');
      options = eval("("+options+")");
      new Toggle(this, options);
    });

    if(jQuery('.logo-fixed').length) {
      let height = jQuery('header').outerHeight();

      jQuery(window).on('scroll', function() {
        let scroll = jQuery(window).scrollTop();
        if (scroll > height) {
          jQuery('.logo-fixed').addClass('logo-fixed_visible');
        } else {
          jQuery('.logo-fixed').removeClass('logo-fixed_visible');
        }
      });
    }

});
