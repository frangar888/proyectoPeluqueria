/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"35487696-CCA0-4676-BF01-02E44B540054",variableType:93}
 */
var vl_fecha_final = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"0D4DD4CD-A863-47B4-9DEF-4365C56611DD",variableType:93}
 */
var vl_fecha_inicial = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"83679169-BAA6-4FDC-A84A-9D7624F899AA",variableType:8}
 */
var vl_saldo_periodo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5720CBAE-61BE-44C0-B5DB-7047F028ABBF",variableType:8}
 */
var vl_saldo_fin = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D0502F7E-2F19-47F4-ADF2-03128D2E7901",variableType:8}
 */
var vl_saldo_ini = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7951442D-329F-48D3-8D58-6F525506525C"}
 */
function onActionVolver(event) {
	application.showForm(forms.form_inicio)
}

/**
 * @properties={typeid:24,uuid:"7A4F1176-E2DE-49BA-9C14-22326B88A2DD"}
 * @AllowToRunInFind
 */
function filtrar(){
	forms.p_caja_egresos_alt_1.filtrar()
	forms.p_caja_ingresos_alt_1.filtrar()
	calcularTotales()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F342EEB6-5880-4FE9-BE56-330408FD08CA"}
 */
function onActionIngManual(event) {
	forms.p_caja_ing_manual.vl_form_padre = controller.getName()
	var win1 = application.createWindow("nuevoIngManual", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_caja_ing_manual);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3790A717-7700-4B33-9535-ADAEE5C275B2"}
 */
function onActionEgrManual(event) {
	forms.p_caja_egr_manual.vl_form_padre = controller.getName()
	var win1 = application.createWindow("nuevoEgrManual", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_caja_egr_manual);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FF321193-DAAF-4176-AA2E-6A35623BB8BE"}
 */
function onActionPagoProv(event) {
	forms.p_caja_egr_pago_prov.vl_form_padre = controller.getName()
	var win1 = application.createWindow("nuevoPago", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_caja_egr_pago_prov);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"103EE29A-891F-4F18-8237-821F509629FA"}
 */
function onShow(firstShow, event) {
	var posUltCampo = forms.p_caja_ingresos_alt_1.elements.conc_nombre.getLocationX()
	elements.split.dividerLocation = posUltCampo + 170
	if(firstShow){
		globals.vg_fecha_inicial = application.getServerTimeStamp()
		globals.vg_fecha_final = application.getServerTimeStamp()
	}
	
	//if(!globals.checkearAdmin(globals.vg_user_id,globals.getFormID(controller.getName()),[elements.btn_nuevo.getName()],controller.getName())){
	if(globals.validarLeer(globals.vg_user_id,globals.getFormID(controller.getName()))){
		globals.validarPermisos(globals.vg_user_id,globals.getFormID(controller.getName()),2,null)
	}else{
		application.showForm('form_inicio')
		globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
	}
//}
	filtrar()
	calcularTotales()
}

/**
 * @properties={typeid:24,uuid:"761C3921-2DE0-4800-B807-033914F74EBF"}
 */
function calcularTotales(){
	vl_saldo_periodo = forms.p_caja_ingresos_alt_1.aggr_ing_imp_total - forms.p_caja_egresos_alt_1.aggr_egr_imp_total
	vl_saldo_ini = globals.obtenerSaldoIni(globals.vg_fecha_inicial)
	vl_saldo_fin = vl_saldo_ini + vl_saldo_periodo
	if(vl_saldo_fin < 0){
		elements.vl_saldo_fin.bgcolor = '#ff4242'
	}else{
		elements.vl_saldo_fin.bgcolor = '#00ff80'
	}
	
	if(vl_saldo_periodo < 0){
		elements.vl_saldo_periodo.bgcolor = '#ff4242'
	}else{
		elements.vl_saldo_periodo.bgcolor = '#00ff80'
	}
	
	if(vl_saldo_ini < 0){
		elements.vl_saldo_ini.bgcolor = '#ff4242'
	}else{
		elements.vl_saldo_ini.bgcolor = '#00ff80'
	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"648633BE-F223-4758-B439-AA5ADDC0B469"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,0,0)
}
