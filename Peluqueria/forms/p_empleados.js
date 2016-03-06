/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7B3DEE50-AC17-404D-93F8-BF11D543C52A",variableType:4}
 */
var vl_adn_id = null;




/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1BB254AD-9A8D-41D0-8700-A7073B5C4C7C"}
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
 * @properties={typeid:24,uuid:"EC424688-BFDC-4DAE-A0A5-E1C1C6494F3B"}
 */
function onShow(firstShow, event) {
	//if(!globals.checkearAdmin(globals.vg_user_id,globals.getFormID(controller.getName()),[elements.btn_nuevo.getName()],controller.getName())){
	if(globals.validarLeer(globals.vg_user_id,globals.getFormID(controller.getName()))){
		globals.validarPermisos(globals.vg_user_id,globals.getFormID(controller.getName()),2,null)
	}else{
		forms.p_config.controller.show()
		globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
	}
//}
}

/**
 * @properties={typeid:24,uuid:"73C53CE4-9590-41AF-AE72-985B416D8197"}
 * @AllowToRunInFind
 */
function filtrar(){
	controller.find()
	
	if(vl_adn_id != null){
		adn_id = vl_adn_id
	}
	
	controller.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"70F34015-A681-4F14-95AC-805DDF15078F"}
 */
function onActionNuevo(event) {
	forms.p_empleados_nuevo.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CAEFFCD9-100A-45E4-AA34-A1516D6B7A68"}
 */
function onActionVolver(event) {
	forms.p_menu_empleados.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2A83E7F0-29E3-4E51-B31C-D84AD815F2DE"}
 */
function onActionDetalle(event) {
	forms.p_empleados_detalle.controller.show()
}
