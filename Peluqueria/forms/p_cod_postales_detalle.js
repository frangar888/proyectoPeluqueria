/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B6DD162-5885-4F70-A9F5-5A6CAA6C1658"}
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
 * @properties={typeid:24,uuid:"929DB154-4F70-40AB-BC35-12C990672E60"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B48019F4-C257-449B-9FAF-6F9213D794DC"}
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
 * @properties={typeid:24,uuid:"833B719D-6810-4BF9-818E-DC10B886A5CE"}
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
 * @properties={typeid:24,uuid:"DF02AE91-A156-4ED5-8F86-BC821217AF44"}
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
