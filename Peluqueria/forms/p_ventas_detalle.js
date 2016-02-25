/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B272B373-E0C3-4683-B932-B7702807621A"}
 */
var vl_form_padre = null;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"26CD256F-A3F4-42EF-9EEE-8D7ADFEB9F0D"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_ventas.controller.getName()))
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F2A35592-742B-4672-8809-4B7A09108916"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	forms.p_ventas_detalle_prd.calcularTotales()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AAA41420-7854-4908-ADD0-0368704725FA"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms[vl_form_padre].controller.show()
}
