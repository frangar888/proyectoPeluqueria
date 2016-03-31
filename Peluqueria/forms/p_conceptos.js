/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CA4E198A-5CB0-426D-A2FE-FDB66D332296",variableType:4}
 */
var vl_tipo_conc = null;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8FE466E9-E752-4712-9158-502371188C29"}
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
 * @properties={typeid:24,uuid:"99173819-A6CC-4DF2-AF1B-CB42140D70D8"}
 */
function onShow(firstShow, event) {
	if(globals.validarLeer(globals.vg_user_id,globals.getFormID(controller.getName()))){
		globals.validarPermisos(globals.vg_user_id,globals.getFormID(controller.getName()),2,null)
	}else{
		forms.p_config.controller.show()
		globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
	}
	if(firstShow){
		vl_tipo_conc = null
		filtrar()
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D4B3E5ED-FAED-44F1-A541-FD7738B0BF21"}
 */
function onActionVolver(event) {
	forms.p_config.controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"DABF44A9-2D13-4799-A4BD-6C9169BD74B1"}
 */
function filtrar(){
	controller.find()
	if(vl_tipo_conc != null){
		conc_tipo = vl_tipo_conc
	}
	controller.search()
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7FB4E21-BEFD-4851-8B46-C7B952EBD5BF"}
 */
function onActionNuevo(event) {
	var win1 = application.createWindow("nuevoConcepto", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_conceptos_nuevo);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"88519B47-7A67-45E3-9F67-A0738ED7048C"}
 */
function onActionDetalle(event) {
	var win1 = application.createWindow("detalleConcepto", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_conceptos_detalle);
}
