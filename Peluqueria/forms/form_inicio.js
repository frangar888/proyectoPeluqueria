
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89C649D5-F7E4-4B8E-9772-ADE815FF8ED7"}
 */
function onShow(firstShow, event) {
/*	var ancho = application.getScreenWidth()

	elements.grp_botones.setLocation(ancho/2 - ancho/4,341)
	elements.logo.setLocation(ancho/2 - ancho/16,14)
	elements.btn_salir.setLocation(ancho - ancho/15,15)
	elements.btn_usuario.setLocation(ancho - ancho/9,15)*/
	CentrarCampos()
	
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
