/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6CC23CB0-BB68-4618-8FE1-E6CEA2DE63F6"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	application.getWindow().hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"666E89D2-EE33-4041-BD1D-3A6EF4646276"}
 */
function onHide(event) {
	databaseManager.revertEditedRecords()
	application.getWindow().hide()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8AA2A6E7-79A1-4E7D-BB4D-6046B2420B1F"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B8CD2DC-01FE-436A-8907-DB979502C4C0"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_conceptos.controller.getName()))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"305E40A4-ABDB-46BF-B5A4-C740EB06A0E0"}
 */
function onActionGrabar(event) {
	if(conc_nombre == null || conc_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Ingrese nombre de concepto.','Info',controller.getName(),null,null)
		return
	}
	databaseManager.saveData()
	application.getWindow().hide()
}
