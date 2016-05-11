/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3788D24C-922C-4190-9BBC-60BBB83E1760"}
 */
function onActionVolver(event) {
	forms.form_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0EEECA24-B24A-4C85-9183-FF24A8046F18"}
 */
function onActionListadoEmp(event) {
	forms.p_empleados.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D258BF38-B81E-43D5-9729-C6347D1F1A1F"}
 */
function onActionComPorEmpleado(event) {
	forms.p_empleados_consulta.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5ECFC141-59FC-42AC-A5B2-8EE27F0F7F30"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	var ancho = application.getWindow().getWidth()
	elements.grp_accesos.setLocation(ancho - elements.grp_accesos.getWidth()/0.9,15)
	/** @type {JSFoundset<db:/peluqueria/cfg_permisos_2>}*/
	var fs_permisos = databaseManager.getFoundSet('peluqueria','cfg_permisos_2')
	fs_permisos.find()
	fs_permisos.form_id = globals.getFormID(forms.p_ventas.controller.getName())
	fs_permisos.user_id = globals.vg_user_id
	fs_permisos.cfg_perm_nuevo = 1
	if(fs_permisos.search() != 0){
		elements.btn_nueva_vta.enabled = true
	}else{
		elements.btn_nueva_vta.enabled = false
	}
	
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
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"627DAED4-160B-4593-9E5C-4F41D1D37C5E"}
 */
function onActionNuevaVenta(event) {
	forms.p_ventas_new.vl_form_padre = controller.getName()
	forms.p_ventas_new.controller.show()
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"63D523BE-0ACD-47FC-8570-60FA0D9EDECB"}
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
