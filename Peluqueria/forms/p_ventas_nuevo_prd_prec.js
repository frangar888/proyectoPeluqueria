/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B86F35D2-437D-48DE-9279-5FEABE835B3C",variableType:8}
 */
var vl_precio_nuevo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"95D21670-C04C-4EE5-8FB0-1160BAEEE55F",variableType:8}
 */
var vl_precio_actual = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7F1ABB9F-42ED-4D31-9092-80C24005AA31"}
 */
function onShow(firstShow, event) {
	vl_precio_actual = forms.p_ventas_nuevo_add_prd.vl_precio
	vl_precio_nuevo = forms.p_ventas_nuevo_add_prd.vl_precio
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"97F6DE9D-F647-405E-9C7E-FF826F38490E"}
 */
function onActionVolver(event) {
	application.getWindow("cambioPrec").hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"682E8080-E7BE-4241-B047-CD34F0CB3468"}
 */
function onHide(event) {
	application.getWindow("cambioPrec").hide()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DCF50A49-DD1A-4E0F-ABD5-4CA4AF0036CA"}
 */
function onActionGrabar(event) {
	if(vl_precio_nuevo != null){
		forms.p_ventas_nuevo_add_prd.vl_precio = vl_precio_nuevo
		forms.p_ventas_nuevo_add_prd.cambiaDescuento()
		forms.p_ventas_nuevo_add_prd.onDataChangeCantidad(null,null,null)
		application.getWindow("cambioPrec").hide()
	}
}
