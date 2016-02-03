/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"61EE6F05-82B3-4BF5-9447-CA014083F2F2",variableType:8}
 */
var vl_total = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D777D546-A247-4738-A7A6-1BE57EF1C0DE"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.p_ventas.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F745C4A1-466C-4913-A74C-A6D2B698F7F4"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	controller.newRecord()
	forms.p_ventas_nuevo_prd.foundset.clear()
	forms.p_ventas_nuevo_prd.vl_cant_prd = 0
	forms.p_ventas_nuevo_prd.vl_total = 0
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"47F7618C-E632-41F0-8D85-E8C14A9650CE"}
 */
function onActionNuevoProducto(event) {
	var win1 = application.createWindow("nuevoPrd", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_ventas_nuevo_add_prd);

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1EDA3919-4009-4989-83C6-00444E6D0605"}
 */
function onActionGrabar(event) {
	if(adn_id == null || adn_id == 0){
		globals.lanzarVentanaEmergente(0,'Seleccione un Cliente.','Info',controller.getName(),null,null)
		return
	}
	if(forms.p_ventas_nuevo_prd.foundset.getSize() == 0){
		globals.lanzarVentanaEmergente(0,'La Venta no tiene ningún producto.','Info',controller.getName(),null,null)
		return
	}
	var win1 = application.createWindow("cerrarVta", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_ventas_nuevo_cerrar);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F9E9183-F88D-45AC-BF7C-263B17966A54"}
 */
function onActionNuevoNoProducto(event) {
	var win1 = application.createWindow("nuevoNoPrd", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_ventas_nuevo_add_no_prd);
}
