
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"743AEDD1-0CD9-406B-A242-2F64E786FF53"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_rubros.controller.getName()))
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E3B338A-934E-42A0-8E98-C8DEEF8E0A0F"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9BD28338-5C5E-48CA-B96A-3FBFAD096546"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.p_rubros.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7A2BC56-F421-449F-BCCA-64D01AD3EDD1"}
 */
function onActionGrabar(event) {
	if(rubro_nombre == null || rubro_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Seleccione un nombre de rubro.','Info',controller.getName(),null,null)
		return
	}
	databaseManager.saveData()
	forms.p_rubros.controller.show()
}
