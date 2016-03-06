/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9B9CCD32-60DF-4770-BE13-488E42524389"}
 */
function onActionVolver(event) {
	forms.form_inicio.controller.show()
}





/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"33C14F5C-FFE1-4696-B6AF-1E9451B17A13"}
 */
function onActionListadoPrd(event) {
	forms.p_productos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B1211CB4-F5B2-4C17-95E6-144E3CF6D00E"}
 */
function onActionPrdMovim(event) {
	forms.p_movimientos.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7152014-ED62-4B39-941A-6D8D3D0B0F3E"}
 */
function onShow(firstShow, event) {
	var ancho = application.getWindow().getWidth()
	elements.grp_accesos.setLocation(ancho - elements.grp_accesos.getWidth()/0.9,15)
}
