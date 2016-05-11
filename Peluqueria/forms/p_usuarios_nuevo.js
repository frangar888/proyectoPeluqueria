/**
 * @properties={typeid:35,uuid:"9C33119C-C82E-4A0E-A739-9B7DC66B1DFE",variableType:-4}
 */
var vl_foto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"16959B04-A3AF-439C-BD81-5EE697096FE1",variableType:4}
 */
var vl_user_tipo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5D18A6C0-0F82-4289-A39A-4C5F9CFB57CC"}
 */
var vl_email = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"40ED48FA-6C4D-4DF0-95F6-01F229FAB098"}
 */
var vl_password = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5780DECC-2792-4F43-AAA6-9473D4BD3F76"}
 */
var vl_user_name = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F1A09111-97A1-4EBF-B365-18857BDFD478"}
 */
var vl_adn_nombre = null;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"75993073-BF25-4D19-825A-AB1FBD8BF233"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.form_padre.controller.getName()))
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F8F5D77E-4B08-41B7-B826-D5AFAE92C370"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	vl_adn_nombre = null
	vl_email = null
	vl_password = null
	vl_user_name = null
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F79C3434-7525-4990-B6AF-070AE4052224"}
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
 * @properties={typeid:24,uuid:"12FA8A4C-F0EB-457F-AC83-EB50CE738759"}
 */
function onActionGrabar(event) {
	if(vl_adn_nombre == null || vl_adn_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Ingrese nombre y apellido del usuario','Info',controller.getName(),null,null)
		return
	}
	if(vl_email == null || vl_email == ''){
		globals.lanzarVentanaEmergente(0,'Ingrese email del usuario','Info',controller.getName(),null,null)
		return
	}
	if(vl_user_name == null || vl_user_name == ''){
		globals.lanzarVentanaEmergente(0,'Ingrese nombre de usuario','Info',controller.getName(),null,null)
		return
	}
	if(vl_password == null || vl_password == ''){
		globals.lanzarVentanaEmergente(0,'Ingrese una contraseña','Info',controller.getName(),null,null)
		return
	}
	
	/** @type {JSFoundset<db:/peluqueria/adn>}*/
	var fs_adn = databaseManager.getFoundSet('peluqueria','adn')
	fs_adn.newRecord()
	fs_adn.adn_nombre = vl_adn_nombre
	fs_adn.adn_email_1 = vl_email
	fs_adn.adn_foto = vl_foto
	databaseManager.saveData(fs_adn)
	
	controller.newRecord()
	adn_id = fs_adn.adn_id
	user_nombre = vl_user_name
	user_pass = vl_password
	user_estado = 0
	user_tipo = 2
	databaseManager.saveData()
	
	globals.grabarPermisosIniciales(user_id)
	forms.p_usuarios.controller.show()
	
}
