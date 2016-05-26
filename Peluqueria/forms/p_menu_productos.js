/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9B9CCD32-60DF-4770-BE13-488E42524389"}
 */
function onActionVolver(event) {
	forms.form_inicio.controller.show()
}





/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"33C14F5C-FFE1-4696-B6AF-1E9451B17A13"}
 */
function onActionListadoPrd(event) {
	forms.p_productos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B1211CB4-F5B2-4C17-95E6-144E3CF6D00E"}
 */
function onActionPrdMovim(event) {
	forms.p_movimientos.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7152014-ED62-4B39-941A-6D8D3D0B0F3E"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	var ancho = application.getWindow().getWidth()
	elements.grp_accesos.setLocation(ancho - elements.grp_accesos.getWidth()/0.9,15)
	/** @type {JSFoundset<db:/peluqueria/cfg_permisos_2>}*/
	var fs_permisos = databaseManager.getFoundSet('peluqueria','cfg_permisos_2')
/*	fs_permisos.find()
	fs_permisos.form_id = globals.getFormID(forms.p_ventas.controller.getName())
	fs_permisos.user_id = globals.vg_user_id
	fs_permisos.cfg_perm_nuevo = 1
	if(fs_permisos.search() != 0){
		elements.btn_nueva_vta.enabled = true
	}else{
		elements.btn_nueva_vta.enabled = false
	}*/
	
	fs_permisos.find()
	fs_permisos.form_id = globals.getFormID(forms.p_movimientos.controller.getName())
	fs_permisos.user_id = globals.vg_user_id
	fs_permisos.cfg_perm_nuevo = 1
	if(fs_permisos.search() != 0){
		elements.btn_nuevo_ing.enabled = true
	}else{
		elements.btn_nuevo_ing.enabled = false
	}
	
	fs_permisos.find()
	fs_permisos.form_id = globals.getFormID(forms.p_caja_alt_1.controller.getName())
	fs_permisos.user_id = globals.vg_user_id
	fs_permisos.cfg_perm_nuevo = 1
	if(fs_permisos.search() != 0){
		elements.btn_nuevo_egr.enabled = true
	}else{
		elements.btn_nuevo_egr.enabled = false
	}
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"9EB60ADC-5AC8-440B-B1EC-DD64CCB3D5A9"}
 */
function onActionNuevoIng(event) {
	forms.p_productos_ing_egr.vl_form_padre = "Ingreso"
	var win1 = application.createWindow("nuevoIng", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_productos_ing_egr);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"7FE1710B-586C-436A-B6DF-FCCA1AA90023"}
 */
function onActionNuevaVenta(event) {
	forms.p_ventas_new.vl_form_padre = controller.getName()
	forms.p_ventas_new.controller.show()
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"93BC6E38-13E3-4182-AB65-3D6A6866E2D3"}
 */
function onActionPrecios(event) {
	application.showForm(forms.p_precios)
}
