import Ember from 'ember';

export default Ember.Controller.extend({
  desafiosOrdenados: Ember.computed.sort('desafios', function(desafioA,desafioB){
    if(desafioA.get('orden') === 'Primero' && desafioB.get('orden') !== 'Primero'){return -1;}
    if(desafioA.get('orden') === 'Ultimo' && desafioB.get('orden') !== 'Ultimo') {return 1;}
    if(desafioB.get('orden') === 'Primero' && desafioA.get('orden') !== 'Primero') {return 1;}
    if(desafioB.get('orden') === 'Ultimo' && desafioA.get('orden') !== 'Ultimo') {return -1;}
    return desafioA.get('id') - desafioB.get('id');
  }),
});
