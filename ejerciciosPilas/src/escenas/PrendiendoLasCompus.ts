/// <reference path = "EscenaActividad.ts" />

class PrendiendoLasCompus extends EscenaActividad {
    cuadricula;
    buzo;
    cantidadMaxColumnas;
    cantidadMaxFilas;
    cantidadMinColumnas;
    cantidadMinFilas;
    cantidadFilas;
    cantidadColumnas;
    iniciar() {
        this.cantidadMaxColumnas=12;
        this.cantidadMinColumnas=5;
        this.cantidadMaxFilas=7;
        this.cantidadMinFilas=4;

        this.cantidadFilas=Math.floor( Math.random() * this.cantidadMaxFilas+this.cantidadMinFilas );
        this.cantidadColumnas=Math.floor( Math.random() * this.cantidadMaxColumnas+this.cantidadMinColumnas );
        this.cuadricula = new Cuadricula(0,0,this.cantidadFilas,this.cantidadColumnas,
            {alto: 300,ancho:300},
            {grilla: 'casillas.violeta.png'})
        this.buzo = new Tito(0, 0);
        this.cuadricula.agregarActor(this.buzo,0, 0);
        this.completarConCompusEnLaterales();

    }

    private completarConCompusEnLaterales(){
        //Completo la primer y ultima fila
        for(var i=1;i<this.cantidadColumnas-1;++i){
          this.cuadricula.agregarActor(new CompuAnimada(0,0),0,i);
          this.cuadricula.agregarActor(new CompuAnimada(0,0),this.cantidadFilas-1,i);
        }
        //Completo la primer y ultima columna
        for(var i=1;i<this.cantidadFilas-1;++i){
          this.cuadricula.agregarActor(new CompuAnimada(0,0),i,0);
          this.cuadricula.agregarActor(new CompuAnimada(0,0),i,this.cantidadColumnas-1);
        }

    }

}
