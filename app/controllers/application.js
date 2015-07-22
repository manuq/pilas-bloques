import Ember from 'ember';


export default Ember.Controller.extend({
  url: '',
  queryParams: ['layout'],
  layout: true,
  environment: Ember.inject.service(),

  mostrar_url: function() {
    var controller = this;

    var actualizar = function(){
      controller.set('url', window.location.href);
    };

    setInterval(actualizar, 100);

    this.set('layout', this.get('environment').get('showLayout'));

  }.on('init'),

    myModalButtons: [
        Ember.Object.create({title: 'Cerrar', dismiss: 'modal'})
    ],

    actions: {
      mostrar_devtools: function() {
        window.requireNode('nw.gui').Window.get().showDevTools();
      },
      actualizar: function() {
        location.reload(true);
      },
      redimensionar: function() {
        alert("tengo que redimensionar!");
      }
    }

});
