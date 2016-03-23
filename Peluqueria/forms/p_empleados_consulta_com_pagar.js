/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"C4A822E2-1D3A-47BD-9B16-4EFDD479DAEB",variableType:93}
 */
var vl_fecha_pago = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8E2F891B-4261-4AF8-A085-B690D2D3C03D",variableType:4}
 */
var vl_empleado_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"958F235A-3EC4-418F-AF35-C91DB3487925",variableType:8}
 */
var vl_total = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"39FB25BE-BA16-47B1-9344-9DECB7E8E6F2"}
 */
function onActionVolver(event) {
	application.getWindow().hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"FCE7AF24-D4C0-41DB-A930-50E468EF5AAB"}
 */
function onHide(event) {
	application.getWindow().hide()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A1228D00-C834-4D9F-A1B4-AD8CC7129307"}
 */
function onActionGrabar(event) {
	if(vl_fecha_pago == null){
		globals.lanzarVentanaEmergente(0,'Debe ingresar la fecha de pago.','Info',controller.getName(),null,null)
		return
	}
	forms.p_empleados_consulta_com.pagarComisiones()
	application.getWindow().hide()
}
