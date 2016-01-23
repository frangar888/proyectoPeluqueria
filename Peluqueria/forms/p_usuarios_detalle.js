
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A0B0BF1A-228C-4965-B84E-68E372A75601"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.p_usuarios.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AFA624FC-37CA-4C1A-A1DE-F9DB4F15A830"}
 */
function onActionGrabar(event) {
	forms.p_usuarios_detalle_permisos.actualizarPermisos()
	forms.p_usuarios.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A20AD535-9E1C-43FB-AB95-27F0D7C84F03"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	if(globals.vg_user_id == user_id){
		elements.btn_baja.visible = false
	}else{
		elements.btn_baja.visible = true
	}
	if(user_estado == 0){
		elements.btn_baja.text = "Dar de Baja"
		elements.btn_baja.imageURL = "media:///icons/cross93.png"
	}else{
		elements.btn_baja.text = "Dar de Alta"
		elements.btn_baja.imageURL = "media:///icons/check67.png"
	}
		
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6619E1E0-BDF2-42DC-8BE6-F21D72908FCD"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_usuarios.controller.getName()))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F2710926-0774-42C4-B5A7-FD5BEE12B5B3"}
 */
function onActionBaja(event) {
	if(user_estado == 0){
		globals.lanzarVentanaEmergente(1,'¿Esta seguro de que desea dar de baja este usuario? No podra volver a ingresar al sistema con este usuario.','Atención',controller.getName(),'darBaja',null)
		
	}else{
		globals.lanzarVentanaEmergente(1,'¿Esta seguro de que desea dar de alta este usuario?','Atención',controller.getName(),'darAlta',null)

	}
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"F985D720-511D-4236-962A-46122D1AA543"}
 */
function darBaja(){
	/** @type {JSFoundset<db:/peluqueria/adn_usuarios>}*/
	var fs_adn_user = databaseManager.getFoundSet('peluqueria','adn_usuarios')
	fs_adn_user.find()
	fs_adn_user.user_id = user_id
	if(fs_adn_user.search() != 0){
		fs_adn_user.user_estado = 1
		databaseManager.saveData()
		application.getWindow().hide()
		forms.p_usuarios.controller.show()
	}
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"53ED1A7E-FBCE-4995-B363-9764862C091B"}
 */
function darAlta(){
	/** @type {JSFoundset<db:/peluqueria/adn_usuarios>}*/
	var fs_adn_user = databaseManager.getFoundSet('peluqueria','adn_usuarios')
	fs_adn_user.find()
	fs_adn_user.user_id = user_id
	if(fs_adn_user.search() != 0){
		fs_adn_user.user_estado = 0
		databaseManager.saveData()
		application.getWindow().hide()
		forms.p_usuarios.controller.show()
	}
}
