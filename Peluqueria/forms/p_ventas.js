
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"627FE22E-7EF7-464F-A0B3-C6CD8C66BE60"}
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
 * @properties={typeid:24,uuid:"B135202F-55D9-44A0-91E4-C6E0A1F8A982"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		globals.vg_fecha_final = application.getServerTimeStamp()
		globals.vg_fecha_inicial = application.getServerTimeStamp()
		filtrar()
	}
	if(!globals.checkearAdmin(globals.vg_user_id,globals.getFormID(controller.getName()),[elements.btn_nuevo.getName()],controller.getName())){
		if(globals.validarLeer(globals.vg_user_id,globals.getFormID(controller.getName()))){
			globals.validarPermisos(globals.vg_user_id,globals.getFormID(controller.getName()),2,null)
		}else{
			forms.form_inicio.controller.show()
			globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
		}
	}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"34EA425E-FE13-4F18-ADDB-24F4F1C42586"}
 */
function onActionVolver(event) {
	forms.form_inicio.controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"4DF731C5-1681-457E-909D-4A80D1D3F2C4"}
 */
function filtrar(){
	controller.find()
	vta_fecha_emision = utils.dateFormat(globals.vg_fecha_inicial,'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(globals.vg_fecha_final,'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	controller.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8C0F6E70-BF97-468E-96A7-5338D3F55E76"}
 */
function onActionNuevaVenta(event) {
	forms.p_ventas_nuevo.controller.show()
}
