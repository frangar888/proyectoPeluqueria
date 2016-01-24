
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AC41C5F8-31B6-47F1-A3D9-787DC067133A"}
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
 * @properties={typeid:24,uuid:"F3269BE9-2591-4DFD-8D21-84AD955D69BD"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	controller.newRecord()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3632146C-66E4-40DA-B1E6-8CD802CA80D5"}
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
 * @properties={typeid:24,uuid:"C6C43DFA-C1A7-4BFA-9779-0C8B795DD2A3"}
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
 * @properties={typeid:24,uuid:"19D51802-8D90-4136-8ED1-DC9854FB6688"}
 */
function onActionGrabar(event) {
	if(cpos_codigo == null || cpos_codigo == ''){
		globals.lanzarVentanaEmergente(0,'Debe completar el CP.','Info',controller.getName(),null,null)
		return
	}
	if(cpos_nombre == null || cpos_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Debe completar la Localidad.','Info',controller.getName(),null,null)
		return
	}
	if(provincia_id == null || provincia_id == 0){
		globals.lanzarVentanaEmergente(0,'Debe seleccionar una provincia.','Info',controller.getName(),null,null)
		return
	}
	databaseManager.saveData()
	application.getWindow().hide()
}
