// joao.junior
lwCupons = (function() {
  'use strict';

  var lwCupons = {

    container: '#coupons',

    events : {
      '#button-toggle-upload : click' : 'toggleUploadArea',
      '#button-close-upload : click' : 'toggleUploadArea'
    },

    init: function(){
      this.utils.loadEvents();
    },

    toggleUploadArea: function(evt, $el){
      evt.preventDefault();
      $('#button-toggle-upload').toggleClass('btn-primary');
      $('#form-cupons-upload-area').slideToggle();
    },

    utils: {

      loadEvents: function(){
        $.each( lwCupons.events, function(elemEvent, eventAction){
          var elemEvtSplit =  elemEvent.split(' : ');
          $(lwCupons.container).delegate(elemEvtSplit[0], elemEvtSplit[1], function(evt){
            lwCupons[eventAction](evt, $(this));
          });
        });
      }, // loadEvents

      renderTemplate: function (template, data) {
        return lwCupons.template[template].replace(/\{\{(.+?)\}\}/g, function replacer(match, param, offset, string) {
          return data[param] ? data[param] : '';
        });
      } // renderTemplate

    } //  utils
  }

  return lwCupons;
}());

$(function(){
  lwCupons.init();
});
