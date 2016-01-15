
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A0B0BF1A-228C-4965-B84E-68E372A75601"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.p_usuarios.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AFA624FC-37CA-4C1A-A1DE-F9DB4F15A830"}
 */
function onActionGrabar(event) {
	forms.p_usuarios_detalle_permisos.actualizarPermisos()
	forms.p_usuarios.controller.show()
}
