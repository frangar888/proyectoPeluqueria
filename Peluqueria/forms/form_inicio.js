
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89C649D5-F7E4-4B8E-9772-ADE815FF8ED7"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	CentrarCampos()
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
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"330DF65B-53DE-474C-A794-4FC86400BBFE"}
 */
function onActionSalir(event) {
	security.logout('Peluqueria')
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DC9CCE76-83B6-4FDD-B5B4-51A30B444FF3"}
 */
function onActionConfig(event) {
	forms.p_config.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0BE1A03F-F241-4523-8FB3-DC3C55106DF9"}
 */
function onActionUser(event) {
	forms.p_usuario_propio.controller.loadRecords(globals.vg_user_id)
	forms.p_usuario_propio.controller.show()
}

/**
 * @properties={typeid:24,uuid:"901A96C7-98A3-43D9-ADCE-33108E16903D"}
 */
function CentrarCampos() {
	
	var ancho = application.getWindow().getWidth()
	elements.grp_botones.setLocation((ancho - elements.grp_botones.getWidth()) / 2,100)
	elements.grp_user.setLocation(ancho - elements.grp_user.getWidth()/0.9,15)


	
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"49CE2DFA-6190-4AE0-9798-93950D3EC7BC"}
 */
function onActionVentas(event) {
	forms.p_ventas.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"17B0FE72-5A7A-45B7-82FF-E4CFAEF5AB23"}
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
 * @properties={typeid:24,uuid:"5369E49D-6119-4B45-8638-CD289A57E0BF"}
 */
function onActionClientes(event) {
	forms.p_clientes.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B4B6A12E-FA75-443D-B867-FFE5158C189E"}
 */
function onActionProductos(event) {
	forms.p_menu_productos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E6F62407-5021-4A5E-96AB-CCD139CFE4FF"}
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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"21E7C64D-D0EA-4540-9F02-A71EBB10F2D1"}
 */
function onActionEmpleados(event) {
	forms.p_menu_empleados.controller.show()
}
