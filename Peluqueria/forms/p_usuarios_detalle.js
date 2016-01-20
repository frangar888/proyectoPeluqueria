
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

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A20AD535-9E1C-43FB-AB95-27F0D7C84F03"}
 */
function onShow(firstShow, event) {
	if(!globals.checkearAdmin(globals.obtenerPermisos(globals.getFormID(controller.getName()),globals.vg_user_id),globals.getFormID(controller.getName()),[elements.btn_grabar.getName()],controller.getName())){
		if(globals.validarLeer(globals.obtenerPermisos(globals.getFormID(controller.getName()),globals.vg_user_id),globals.getFormID(controller.getName()))){
			globals.validarPermisos(globals.obtenerPermisos(globals.getFormID(controller.getName()),globals.vg_user_id),controller.getName(),1)
		}else{
			forms.p_usuarios.controller.show()
			globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
		}
	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6619E1E0-BDF2-42DC-8BE6-F21D72908FCD"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text)
}
