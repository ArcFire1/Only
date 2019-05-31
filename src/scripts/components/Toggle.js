import jQuery from 'jquery';

export default class Toggle {
  constructor(elem, params = {}) {
    this.$element = jQuery(elem);
    this.cssTogglerActive = params.cssTogglerActive || '';
    this.$target = jQuery(params.target) || '';
    this.cssTargetActive = params.cssTargetActive || '';

    this.init();
  }

  init() {
    this.$element.addClass('JS-Toggle-Ready');

    this.$element.on('click', () => {
      this.toggleElem();
    });
  }

  toggleElem() {
    this.$element.toggleClass(this.cssTogglerActive);
    this.$target.toggleClass(this.cssTargetActive);
  }
}