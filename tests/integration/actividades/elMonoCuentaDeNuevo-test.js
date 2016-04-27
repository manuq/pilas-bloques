import {moduloActividad, actividadTest} from '../../helpers/actividadTest';
import actividad from 'pilas-engine-bloques/actividades/actividadElMonoCuentaDeNuevo';

moduloActividad(actividad);

actividadTest(actividad, {
	solucion: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="al_empezar_a_ejecutar" id="10" deletable="false" movable="false" editable="false" x="0" y="0"><statement name="program"><block type="repetir" id="11" inline="true"><value name="count"><block type="math_number" id="12"><field name="NUM">4</field></block></value><statement name="block"><block type="procedures_callnoreturn" id="13"><mutation name="Contar frutas de columna"></mutation><next><block type="procedures_callnoreturn" id="76"><mutation name="Volver al inicio"></mutation><next><block type="SiguienteColumna" id="14"></block></next></block></next></block></statement></block></statement></block><block type="procedures_defnoreturn" id="15" x="280" y="35"><mutation></mutation><field name="NAME">Volver al inicio</field><statement name="STACK"><block type="hasta" id="16" inline="true"><value name="condition"><block type="estoyInicio" id="35"></block></value><statement name="block"><block type="MoverACasillaArriba" id="52"></block></statement></block></statement></block><block type="procedures_defnoreturn" id="17" x="51" y="163"><mutation></mutation><field name="NAME">Contar frutas de columna</field><statement name="STACK"><block type="repetir" id="18" inline="true"><value name="count"><block type="LargoColumnaActual" id="19"></block></value><statement name="block"><block type="MoverACasillaAbajo" id="20"><next><block type="procedures_callnoreturn" id="21"><mutation name="Contar banana si hay"></mutation><next><block type="procedures_callnoreturn" id="22"><mutation name="Contar manzana si hay"></mutation></block></next></block></next></block></statement></block></statement></block><block type="procedures_defnoreturn" id="23" x="319" y="281"><mutation></mutation><field name="NAME">Contar manzana si hay</field><statement name="STACK"><block type="si" id="24" inline="true"><value name="condition"><block type="tocandoBanana" id="25"></block></value><statement name="block"><block type="Contarbanana" id="26"></block></statement></block></statement></block><block type="procedures_defnoreturn" id="27" x="47" y="393"><mutation></mutation><field name="NAME">Contar banana si hay</field><statement name="STACK"><block type="si" id="28" inline="true"><value name="condition"><block type="tocandoManzana" id="29"></block></value><statement name="block"><block type="Contarmanzana" id="30"></block></statement></block></statement></block></xml>',
});
