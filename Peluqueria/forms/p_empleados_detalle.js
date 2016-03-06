
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA966F4B-9D05-42F4-B540-EDFC80035671"}
 */
function onActionVolver(event) {
	forms.p_empleados.controller.show()
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2ED375E7-33E5-42D4-A9EA-FB74D377B1FD"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_empleados.controller.getName()))
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FA83CB78-B3E1-463E-B703-0D1B2A14AB3B"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A27787BC-A8D5-461C-BF87-BDACEF20476B"}
 */
function onActionGrabar(event) {
	if(adn_vendedores_to_adn.adn_nombre == null || adn_vendedores_to_adn.adn_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Debe ingresar un nombre de empleado.','Info',controller.getName(),null,null)
		elements.adn_nombre.requestFocus()
		return
	}
	databaseManager.saveData()
	forms.p_empleados.controller.show()
}
