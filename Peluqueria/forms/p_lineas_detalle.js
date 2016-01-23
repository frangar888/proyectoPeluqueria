


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1348631B-D0F9-4E10-9CE8-6CD6946B13B4"}
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
 * @properties={typeid:24,uuid:"8F998060-7AD8-4F95-884A-0E2574DB5899"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"5E8A13AC-C1A3-4005-9F89-FF5BDACB8A1B"}
 */
function onHide(event) {
	databaseManager.revertEditedRecords()
	application.getWindow().hide()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BDE0A80A-B4CF-4D45-8F35-D69519063FA2"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	application.getWindow().hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8B9947BA-1CFD-488D-B73B-7DEDE9235C8C"}
 */
function onActionGrabar(event) {
	if(linea_nombre == null || linea_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Seleccione un nombre de línea.','Info',controller.getName(),null,null)
		return
	}
	if(rubro_id == null || rubro_id == 0){
		globals.lanzarVentanaEmergente(0,'Seleccione un rubro.','Info',controller.getName(),null,null)
		return
	}
	databaseManager.saveData()
	application.getWindow().hide()
}
