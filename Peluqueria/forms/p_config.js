
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B77F41C-D1BF-409F-B47C-6A6196BC19C7"}
 */
function onActionVolver(event) {
	forms.form_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4ACBA187-91D3-4E6D-8905-119E8A3F86EB"}
 */
function onActionRubros(event) {
	elements.btn_rubros.getDataProviderID()
	forms.p_rubros.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AD56A300-9E65-4896-8ADE-A43EA23EB788"}
 */
function onActionUsuarios(event) {
	forms.p_usuarios.controller.show()
}





/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"09A49535-B580-4700-AF10-CFB0E5BF36A5"}
 */
function onShow(firstShow, event) {
	if(esTipoAdmin()){
		elements.btn_us.visible = true
	}else{
		elements.btn_us.visible = false
	}
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"9DDA55C2-0E1C-4EC2-8942-C0A41C285F0C"}
 */
function esTipoAdmin(){
	/** @type {JSFoundset<db:/peluqueria/adn_usuarios>}*/
	var fs_user = databaseManager.getFoundSet('peluqueria','adn_usuarios')
	fs_user.find()
	fs_user.user_id = globals.vg_user_id
	if(fs_user.search() != 0){
		if(fs_user.user_tipo == 1){
			return true
		}
	}
	return false
}
