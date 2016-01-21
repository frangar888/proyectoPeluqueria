


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"11177B2A-E4D5-4395-8325-BD01270CB8F1"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.form_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7DCF32C6-4302-452D-A822-6A2DC1B651B7"}
 */
function onActionGrabar(event) {
	if(adn_usuarios_to_adn.adn_nombre == null || adn_usuarios_to_adn.adn_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Ingrese nombre y apellido del usuario','Info',controller.getName(),null,null)
		return
	}
	if(adn_usuarios_to_adn.adn_email_1 == null || adn_usuarios_to_adn.adn_email_1 == ''){
		globals.lanzarVentanaEmergente(0,'Ingrese email del usuario','Info',controller.getName(),null,null)
		return
	}
	if(user_nombre == null || user_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Ingrese nombre de usuario','Info',controller.getName(),null,null)
		return
	}
	if(user_pass == null || user_pass == ''){
		globals.lanzarVentanaEmergente(0,'Ingrese una contraseña','Info',controller.getName(),null,null)
		return
	}
	databaseManager.saveData()
	forms.form_inicio.controller.show()
}
