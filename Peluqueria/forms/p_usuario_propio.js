


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

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9BE1337A-4C6D-4BC9-B8E0-22D97CA829F3"}
 */
function onActionDarDeBaja(event) {
	globals.lanzarVentanaEmergente(1,'¿Esta seguro de que desea dar de baja su propio usuario? No podra volver a ingresar al sistema con este usuario.','Atención',controller.getName(),'darBaja',null)
}

/**
 * @properties={typeid:24,uuid:"61146E67-B75B-4AEE-AD23-E3A89EED1A66"}
 * @AllowToRunInFind
 */
function darBaja(){
	/** @type {JSFoundset<db:/peluqueria/adn_usuarios>}*/
	var fs_adn_user = databaseManager.getFoundSet('peluqueria','adn_usuarios')
	fs_adn_user.find()
	fs_adn_user.user_id = globals.vg_user_id
	if(fs_adn_user.search() != 0){
		fs_adn_user.user_estado = 1
		databaseManager.saveData()
		application.getWindow().hide()
		security.logout('Peluqueria')
	}
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"180E1A5D-61C0-4F68-A6A1-A6C2EF8F5FD9"}
 */
function onShow(firstShow, event) {
	if(globals.esTipoAdmin()){
		elements.btn_baja.enabled  = false
	}else{
		elements.btn_baja.enabled = true
	}
}
