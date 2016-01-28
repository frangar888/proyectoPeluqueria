/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2BFB22BD-4590-4D24-AE1B-8D5046B19FDC",variableType:8}
 */
var vl_saldo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"84C79B0F-B53F-43DC-96F9-FD968467407C",variableType:8}
 */
var vl_pago = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"847BBB30-C0CD-41DB-BA96-2FEF7897900B",variableType:8}
 */
var vl_total_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"45FA96B7-3650-4433-A44B-53AE734F36FF",variableType:8}
 */
var vl_descuento = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"51414F9E-B10B-44AF-8416-8175ACBA79AC",variableType:8}
 */
var vl_total_vta = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0FC04AE8-8EF5-45B4-BF4E-934675B2654B"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	inicializarVariables()
	elements.vl_pago.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"F04CBE12-CE22-401B-922B-18C1CDEA968F"}
 */
function inicializarVariables(){
	vl_total_vta = forms.p_ventas_nuevo_prd.vl_total
	vl_total_total = forms.p_ventas_nuevo_prd.vl_total
	vl_descuento = null
	vl_pago = 0
	vl_saldo = vl_total_total - vl_pago
	if(vl_saldo != 0){
		elements.vl_resta.bgcolor = '#ff3c3c'
	}else{
		elements.vl_resta.bgcolor = '#80ff80'
	}
}
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"839EE888-E8D3-437B-97A0-E24DE5C3FF4E"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_ventas.controller.getName()))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B0223F9E-2E73-4EBE-867F-2FBC5EF0F3CD"}
 */
function onActionVolver(event) {
	application.getWindow("cerrarVta").hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"38618D5F-7AD2-4001-A227-DA0F0AF67E14"}
 */
function onHide(event) {
	application.getWindow("cerrarVta").hide()
	return true
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"DBCFEE1B-49A3-4512-81BA-82E8BFF297D7"}
 */
function onDataChangeDto(oldValue, newValue, event) {
	cambiaDescuento()
	return true
}

/**
 * @properties={typeid:24,uuid:"C0507645-AD26-446A-A792-E50F0BFDF20B"}
 */
function cambiaDescuento(){
	var descuento_porc = vl_descuento/100
	var descuento_imp = vl_total_vta * descuento_porc
	vl_total_total = vl_total_vta - descuento_imp
	vl_saldo = vl_total_total - vl_pago
	if(vl_saldo != 0){
		elements.vl_resta.bgcolor = '#ff3c3c'
	}else{
		elements.vl_resta.bgcolor = '#80ff80'
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"33CEC8A7-78CE-4218-BD19-D17049FFBB63"}
 */
function onDataChangePago(oldValue, newValue, event) {
	vl_saldo = vl_total_total - vl_pago
	if(vl_saldo != 0){
		elements.vl_resta.bgcolor = '#ff3c3c'
	}else{
		elements.vl_resta.bgcolor = '#80ff80'
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67931346-D686-4842-B629-A4C07459CEF6"}
 */
function onActionCancelar(event) {
	vl_pago = vl_total_total
	vl_saldo = vl_total_total - vl_pago
	if(vl_saldo != 0){
		elements.vl_resta.bgcolor = '#ff3c3c'
	}else{
		elements.vl_resta.bgcolor = '#80ff80'
	}
}
