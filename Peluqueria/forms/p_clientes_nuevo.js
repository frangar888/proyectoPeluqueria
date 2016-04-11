/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DAD9704C-EA2E-441D-8EE3-E47D768DD4AB"}
 */
var vl_email_2 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B64C5092-A0F1-41D2-AB84-E98AD8F90240"}
 */
var vl_email_1 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6D349DEC-EAC5-4FE2-9AFA-B37C9823EE26"}
 */
var vl_tel_2 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8C567064-69F6-4093-83D5-E25CDEF9AA6E"}
 */
var vl_tel_1 = null;

/**
 * @properties={typeid:35,uuid:"1EFDC81E-2221-4E82-9C31-C4ADA35F2F79",variableType:-4}
 */
var vl_adn_foto = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"94F04CED-01C6-4FB1-9E00-C58905B4785F",variableType:93}
 */
var vl_adn_fec_nac = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5C62E56E-3FFB-4CB4-9212-DA058EEFC61D"}
 */
var vl_adn_observa = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4077AC1C-6C95-4F06-B2BA-31803CE825B1",variableType:4}
 */
var vl_cod_postal_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"95287033-BCB5-4820-8DEF-6980B58D3E84",variableType:4}
 */
var vl_doc_nro = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2A81E5B3-E882-4D1D-B7BF-26DD62616E8E",variableType:4}
 */
var vl_doc_tipo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F8B3F2A7-00F0-4988-9510-8E358DFFAB90"}
 */
var vl_domicilio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ECE8FA5C-2FAA-4C32-B3DC-4ADAE6A3F70F"}
 */
var vl_nombre = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5F0A5D3E-4CBB-4C2D-8EB8-7C3F280F2407"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_clientes.controller.getName()))
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3E64E2B4-FBC0-4322-BEC4-38949ABD2B20"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	controller.newRecord()
	inicializarVariables()
}

/**
 * @properties={typeid:24,uuid:"6253DEA2-F3B1-4EB3-B20A-D5F0D00D9C77"}
 */
function inicializarVariables(){
	vl_adn_fec_nac = null
	vl_adn_foto = null
	vl_adn_observa = null
	vl_cod_postal_id = null
	vl_doc_nro = null
	vl_doc_tipo = 0
	vl_domicilio = null
	vl_email_1 = null
	vl_email_2 = null
	vl_nombre = null
	vl_tel_1 = null
	vl_tel_2 = null
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BDC7B677-D5CB-47CB-8060-E7D85D0747B4"}
 */
function onActionPrimeroLibre(event) {
	c_codigo = primeroLibre()
}

/**
 * @properties={typeid:24,uuid:"503ABB64-1697-411F-B6E2-A2B52779391E"}
 */
function primeroLibre(){
	/** @type {JSFoundset<db:/peluqueria/ccc_clientes>}*/
	var fs_ccc = databaseManager.getFoundSet('peluqueria','ccc_clientes')
	fs_ccc.loadAllRecords()
	fs_ccc.sort("c_codigo asc")
	
	var cant = databaseManager.getFoundSetCount(fs_ccc)
	var count = 1
	for (var index = 1; index <= cant; index++) {
		var record = fs_ccc.getRecord(index);
		if(record.c_codigo != count){
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
 * @properties={typeid:24,uuid:"0A7F7F71-0D6D-4C5E-B4C9-99D775D8EF7A"}
 */
function existeCodigo(lnk_cod){
	/** @type {JSFoundset<db:/peluqueria/ccc_clientes>}*/
	var fs_ccc = databaseManager.getFoundSet('peluqueria','ccc_clientes')
	fs_ccc.loadAllRecords()
	fs_ccc.find()
	fs_ccc.c_codigo = lnk_cod
	if(fs_ccc.search() != 0){
		return true
	}
	return false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E2B826E5-677C-41B0-A616-4331088F020C"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.p_clientes.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FEE7A3B6-106E-4B44-9422-54C1DB095E11"}
 */
function onActionGrabar(event) {
	if(c_codigo == null || c_codigo == 0){
		globals.lanzarVentanaEmergente(0,'Debe ingresar un código de cliente.','Info',controller.getName(),null,null)
		elements.c_codigo.requestFocus()
		return
	}
	if(vl_nombre == null || vl_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Debe ingresar un nombre de cliente.','Info',controller.getName(),null,null)
		elements.vl_nombre.requestFocus()
		return
	}
	if(existeCodigo(c_codigo)){
		globals.lanzarVentanaEmergente(0,'Ya existe un cliente con el código ingresado.','Info',controller.getName(),null,null)
		elements.c_codigo.requestFocus()
		return
	}
	
	/** @type {JSFoundset<db:/peluqueria/adn>}*/
	var fs_adn = databaseManager.getFoundSet('peluqueria','adn')
	fs_adn.newRecord()
	fs_adn.adn_doc_nro = vl_doc_nro
	fs_adn.adn_doc_tipo = vl_doc_tipo
	fs_adn.adn_domicilio = vl_domicilio
	fs_adn.adn_email_1 = vl_email_1
	fs_adn.adn_email_2 = vl_email_2
	fs_adn.adn_fecha_nac = vl_adn_fec_nac
	fs_adn.adn_nombre = vl_nombre
	fs_adn.adn_observa = vl_adn_observa
	fs_adn.adn_tel_1 = vl_tel_1
	fs_adn.adn_tel_2 = vl_tel_2
	databaseManager.saveData(fs_adn)
	
	adn_id = fs_adn.adn_id
	databaseManager.saveData()
	
	forms.p_clientes.controller.show()
}
