/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"F6942245-C15C-48C7-96F1-DDD70CE89DA9",variableType:93}
 */
var vl_fecha_final = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"4649FC03-87F5-49D0-81EC-8C63B9BA9656",variableType:93}
 */
var vl_fecha_inicial = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C0FD90F1-7103-4F1B-A6EA-158A4A7DDBB3",variableType:8}
 */
var vl_saldo_periodo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7B298749-CECD-4C50-B27C-1013DA100A64",variableType:8}
 */
var vl_saldo_fin = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"746AA919-AFED-41E1-AF45-63A275A2E118",variableType:8}
 */
var vl_saldo_ini = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67C2EB3E-8232-4E49-BA30-A9113B2324EF"}
 */
function onActionVolver(event) {
	forms.form_inicio.controller.show()
}

/**
 * @properties={typeid:24,uuid:"60230241-A1C1-4FE4-BFF0-AA4E3624736F"}
 * @AllowToRunInFind
 */
function filtrar(){
	forms.p_caja_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"259EFC88-87F4-43AA-A3D9-2F35614C4D2B"}
 */
function onActionIngManual(event) {
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
 * @properties={typeid:24,uuid:"058AD4D8-7806-491E-83AA-929F922C5E3E"}
 */
function onActionEgrManual(event) {
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
 * @properties={typeid:24,uuid:"F54BAA04-32A6-4B95-8E26-2B2D4AE07F00"}
 */
function onActionPagoProv(event) {
	var win1 = application.createWindow("nuevoPago", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_caja_egr_pago_prov);
}
