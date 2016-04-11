/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AAFB50D3-4C36-482C-8722-030C1401DD61",variableType:4}
 */
var vl_iva_cat = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F3F0A6D4-1CE1-4EC2-A884-98547F670A43"}
 */
var vl_email_2 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BAB0ED3D-E4AC-4EEF-AE10-408B9842F28D"}
 */
var vl_email_1 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9EB7A953-C7D0-4E43-8772-1541538CF514"}
 */
var vl_tel_2 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"51415A1B-3CE1-4EAA-A110-804F1FA2E991"}
 */
var vl_tel_1 = null;

/**
 * @properties={typeid:35,uuid:"B8C4446F-C35C-4D0A-9EF3-D87F41EF9A0A",variableType:-4}
 */
var vl_adn_foto = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"ACE56EC7-26BB-49F1-8ACE-21475DEF6EB4",variableType:93}
 */
var vl_adn_fec_nac = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BD44E423-8746-47FD-BE39-B284265B6E55"}
 */
var vl_adn_observa = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"59787D40-1D29-4937-B89C-299F97ED2B1C",variableType:4}
 */
var vl_cod_postal_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"802DA753-34C3-4EF7-AC87-4B4E08DBEF8D",variableType:4}
 */
var vl_doc_nro = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0E762D1C-89FF-4E4E-96EA-2B4E9DEF6283",variableType:4}
 */
var vl_doc_tipo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"27D257F3-A5F4-422F-8C1E-B71F0A06C0F8"}
 */
var vl_domicilio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"73058F46-43C1-4C01-A33A-DE5F63CEE7E4"}
 */
var vl_nombre = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"11DB4E43-8238-4D29-900C-492E4921EE8E"}
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
 * @properties={typeid:24,uuid:"75431E34-2181-4F54-A249-123EBA2459BD"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	controller.newRecord()
	inicializarVariables()
}

/**
 * @properties={typeid:24,uuid:"4C90E65F-EAF7-43DD-A205-7E8279705569"}
 */
function inicializarVariables(){
	vl_adn_fec_nac 		= null
	vl_adn_foto 		= null
	vl_adn_observa 		= null
	vl_cod_postal_id 	= null
	vl_doc_nro 			= null
	vl_doc_tipo 		= 0
	vl_domicilio 		= null
	vl_email_1 			= null
	vl_email_2 			= null
	vl_nombre 			= null
	vl_tel_1 			= null
	vl_tel_2 			= null
	vl_iva_cat 			= null
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E4BE17F9-04B8-40EE-BA1F-E6864574DE8F"}
 */
function onActionPrimeroLibre(event) {
	p_cod = primeroLibre()
}

/**
 * @properties={typeid:24,uuid:"F3201A95-C98A-445C-A753-C378FCC623B9"}
 */
function primeroLibre(){
	/** @type {JSFoundset<db:/peluqueria/ccp_proveedores>}*/
	var fs_ccp = databaseManager.getFoundSet('peluqueria','ccp_proveedores')
	fs_ccp.loadAllRecords()
	fs_ccp.sort("p_cod asc")
	
	var cant = databaseManager.getFoundSetCount(fs_ccp)
	var count = 1
	for (var index = 1; index <= cant; index++) {
		var record = fs_ccp.getRecord(index);
		if(record.p_cod != count){
			return count
		}
		count += 1
	}
	return count
}

/**
 * @AllowToRunInFind
 * 
 * 
 * @param lnk_cod
 *
 * @properties={typeid:24,uuid:"C93834DE-0BA7-4B01-A1BF-F1A21ED9BF6B"}
 */
function existeCodigo(lnk_cod){
	/** @type {JSFoundset<db:/peluqueria/ccp_proveedores>}*/
	var fs_ccp = databaseManager.getFoundSet('peluqueria','ccp_proveedores')
	fs_ccp.loadAllRecords()
	fs_ccp.find()
	fs_ccp.p_cod = lnk_cod
	if(fs_ccp.search() != 0){
		return true
	}
	return false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"99D4D921-A532-46B8-ADF3-565C8EB414B3"}
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
 * @properties={typeid:24,uuid:"C8E469C1-EDC9-41D2-AFE6-9703AD9C657B"}
 */
function onActionGrabar(event) {
	if(p_cod == null || p_cod == 0){
		globals.lanzarVentanaEmergente(0,'Debe ingresar un código de proveedor.','Info',controller.getName(),null,null)
		elements.c_codigo.requestFocus()
		return
	}
	if(vl_nombre == null || vl_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Debe ingresar un nombre de proveedor.','Info',controller.getName(),null,null)
		elements.vl_nombre.requestFocus()
		return
	}
	if(existeCodigo(p_cod)){
		globals.lanzarVentanaEmergente(0,'Ya existe un proveedor con el código ingresado.','Info',controller.getName(),null,null)
		elements.c_codigo.requestFocus()
		return
	}
	
	/** @type {JSFoundset<db:/peluqueria/adn>}*/
	var fs_adn = databaseManager.getFoundSet('peluqueria','adn')
	fs_adn.newRecord()
	fs_adn.adn_doc_nro 		= vl_doc_nro
	fs_adn.adn_doc_tipo 	= vl_doc_tipo
	fs_adn.adn_domicilio 	= vl_domicilio
	fs_adn.adn_email_1 		= vl_email_1
	fs_adn.adn_email_2 		= vl_email_2
	fs_adn.adn_fecha_nac 	= vl_adn_fec_nac
	fs_adn.adn_nombre 		= vl_nombre
	fs_adn.adn_observa 		= vl_adn_observa
	fs_adn.adn_tel_1 		= vl_tel_1
	fs_adn.adn_tel_2 		= vl_tel_2
	fs_adn.adn_cat_iva 		= vl_iva_cat
	databaseManager.saveData(fs_adn)
	
	adn_id = fs_adn.adn_id
	databaseManager.saveData()
	
	forms.p_proveedores.controller.show()
}
