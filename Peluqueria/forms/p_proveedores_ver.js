/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"631553BF-53C2-4F59-8A70-4602A7908078"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_proveedores.controller.getName()))
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C26E5C89-E021-4B98-9140-15C18177C63C"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A0F18F10-4177-4DAC-800F-2A391BC4752A"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.p_proveedores.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CBCDEE92-E0AF-4053-9CDB-2564D584F938"}
 */
function onActionGrabar(event) {
	if(ccp_proveedores_to_adn.adn_nombre == null || ccp_proveedores_to_adn.adn_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Debe ingresar un nombre de proveedor.','Info',controller.getName(),null,null)
		elements.adn_nombre.requestFocus()
		return
	}
	
	databaseManager.saveData()
	forms.p_proveedores.controller.show()
}
