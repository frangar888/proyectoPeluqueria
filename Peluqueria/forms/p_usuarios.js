
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3F5699EC-6612-4214-8FCC-F355C9797FB0"}
 */
function onActionVolver(event) {
	forms.p_config.controller.show()
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"311E5484-303D-4BFA-82B9-2D003DED4482"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,0,0)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7A5D4151-F379-44B7-B7FA-57CA3660B57C"}
 */
function onActionDetalle(event) {
	forms.p_usuarios_detalle.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D78FC9E4-E4B9-4880-BAF5-45B887392E69"}
 */
function onShow(firstShow, event) {
	if(!globals.checkearAdmin(globals.vg_user_id,globals.getFormID(controller.getName()),[elements.btn_nuevo.getName()],controller.getName())){
		if(globals.validarLeer(globals.vg_user_id,globals.getFormID(controller.getName()))){
			globals.validarPermisos(globals.vg_user_id,globals.getFormID(controller.getName()),2,null)
		}else{
			forms.p_config.controller.show()
			globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"36C1A64C-46B9-49FF-8CF7-DC97236E502F"}
 */
function onActionNuevo(event) {
	forms.p_usuarios_nuevo.controller.show()
}



