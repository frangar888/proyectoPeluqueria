
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9A5F7E47-6455-4327-9783-747F892C7D6B"}
 */
function onActionVolver(event) {
	forms.p_config.controller.show()
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FAB8B034-3AAE-4957-B685-4ACB61EBB07B"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,0,0)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8E83123E-DEBC-4A38-BE65-D9534697B6F3"}
 */
function onShow(firstShow, event) {
	if(!globals.checkearAdmin(globals.vg_user_id,globals.getFormID(controller.getName()),[elements.btn_nuevo.getName()],controller.getName())){
		if(globals.validarLeer(globals.vg_user_id,globals.getFormID(controller.getName()))){
			globals.validarPermisos(globals.vg_user_id,globals.getFormID(controller.getName()),2)
		}else{
			forms.p_config.controller.show()
			globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
		}
	}
}
