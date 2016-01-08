
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89C649D5-F7E4-4B8E-9772-ADE815FF8ED7"}
 */
function onShow(firstShow, event) {
	var ancho = application.getScreenWidth()

	elements.grp_botones.setLocation(ancho/2 - ancho/4,341)
	elements.logo.setLocation(ancho/2 - ancho/16,14)
	elements.btn_salir.setLocation(ancho - ancho/20,15)
	
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"330DF65B-53DE-474C-A794-4FC86400BBFE"}
 */
function onActionSalir(event) {
	application.closeSolution()
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
