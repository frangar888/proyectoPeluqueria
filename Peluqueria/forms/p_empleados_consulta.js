/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B2E5C37F-B48B-4AAF-93B9-2993B51CBB06",variableType:4}
 */
var vl_cod_postal_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1EDD134F-2AD3-4CDD-9D81-87DAAA0CF545"}
 */
var vl_dni = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CD8E3BD2-4573-4262-A425-0C5B55636E67"}
 */
var vl_domicilio = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D4514E72-66FC-4A72-ACB4-3302C50AAE42",variableType:4}
 */
var vl_ven_adn_id = null;


/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"1F605B54-E65A-4116-92D5-8A4B4583CD32"}
 */
function onDataChangeEmpleado(oldValue, newValue, event) {
	cambiaEmpleado()
	return true
}

/**
 * @properties={typeid:24,uuid:"F075FE67-DAC0-4C0F-8935-A1747A2A3FAF"}
 * @AllowToRunInFind
 */
function cambiaEmpleado(){
	if(vl_ven_adn_id != null && vl_ven_adn_id != 0){
		/** @type {JSFoundset<db:/peluqueria/adn>}*/
		var fs_adn = databaseManager.getFoundSet('peluqueria','adn')
		fs_adn.find()
		fs_adn.adn_id = vl_ven_adn_id
		if(fs_adn.search() != 0){
			vl_cod_postal_id = fs_adn.cod_postal_id
			vl_dni = fs_adn.adn_doc_nro
			vl_domicilio = fs_adn.adn_domicilio
			elements.btn_grabar.requestFocus()
		}else{
			globals.lanzarVentanaEmergente(0,'Vendedor Inexistente. Verifique','Info',controller.getName(),null,null)
		}
	}else{
		vl_cod_postal_id = null
		vl_dni = null
		vl_domicilio = null
		vl_ven_adn_id = null
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F9C95AF7-BA35-4AD3-A6D4-483F37B7F1C8"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	/** @type {JSFoundset<db:/peluqueria/cfg_permisos_2>}*/
	var fs_perm = databaseManager.getFoundSet('peluqueria','cfg_permisos_2')
	fs_perm.find()
	fs_perm.user_id = globals.vg_user_id
	fs_perm.form_id = globals.getFormID(controller.getName())
	fs_perm.cfg_perm_leer = 1
	if(fs_perm.search() != 0){
		globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
		vl_cod_postal_id = null
		vl_dni = null
		vl_domicilio = null
		vl_ven_adn_id = null
		elements.vl_ven_adn_id.requestFocus()
	}else{
		forms.p_menu_empleados.controller.show()
		globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
	}


}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1FF5E716-170C-4439-8D21-0284D16AF813"}
 */
function onActionVolver(event) {
	forms.p_menu_empleados.controller.show()
}

/**
 * @properties={typeid:24,uuid:"7CBDD9CC-E380-426F-9177-D51EFCCE09CD"}
 */
function onActionAceptar(){
	forms.p_empleados_consulta_com.vl_vendedor_adn_id = vl_ven_adn_id
	forms.p_empleados_consulta_com.controller.show()
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"356F7778-7381-4799-96AF-EFF807F3A002"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,0,globals.getFormID(controller.getName()))
}
