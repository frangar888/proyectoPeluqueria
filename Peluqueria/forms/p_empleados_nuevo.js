/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A8FD2621-03E6-4B36-A343-E693CEFF736B"}
 */
var vl_email_2 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9BDE5156-5CBB-42E5-A3FF-DABFD44D87A6"}
 */
var vl_email_1 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"47BFB477-5EC8-49D3-BB8C-71143CDF1A2F"}
 */
var vl_tel_2 = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8B827F06-9941-4530-8D84-D452EC321D00"}
 */
var vl_tel_1 = null;

/**
 * @properties={typeid:35,uuid:"22BA20DE-B8BB-4C6F-8450-D53982411CDA",variableType:-4}
 */
var vl_adn_foto = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"38DF7C9E-E1AE-43F0-BB5D-38A34255B3BE",variableType:93}
 */
var vl_adn_fec_nac = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EDB79BBE-226C-4D96-9DB4-D3EFDCD58C03"}
 */
var vl_adn_observa = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C382A9CD-B32A-4D00-BD7C-1DE4FD3BE7C6",variableType:4}
 */
var vl_cod_postal_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"47E12423-064F-4F31-9417-AAEAFC37F782",variableType:4}
 */
var vl_doc_nro = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"53A2B53F-BB4F-4062-BFCF-77F5B535DCEF",variableType:4}
 */
var vl_doc_tipo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3BDEBA7C-777E-4E89-AB09-FEEF45D87B4D"}
 */
var vl_domicilio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EA9FB0AD-ECE3-4D57-AB18-80E9F4FA3736"}
 */
var vl_nombre = null;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B4CBF847-15A6-4838-8F70-A8443225640C"}
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
 * @properties={typeid:24,uuid:"CB671D23-7C1F-47A4-861E-E86F8DCEB4ED"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	controller.newRecord()
	inicializarVariables()
}

/**
 * @properties={typeid:24,uuid:"1D5C00ED-2089-4145-A1B3-5276D4F12CF2"}
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
 * @properties={typeid:24,uuid:"27B10A67-E22F-41AB-89C3-0F56FF4C8368"}
 */
function onActionPrimeroLibre(event) {
	ven_codigo = primeroLibre()
}

/**
 * @properties={typeid:24,uuid:"4B074F1A-C94D-477F-86DF-7470D8202A08"}
 */
function primeroLibre(){
	/** @type {JSFoundset<db:/peluqueria/adn_vendedores>}*/
	var fs_ven = databaseManager.getFoundSet('peluqueria','adn_vendedores')
	fs_ven.loadAllRecords()
	fs_ven.sort("ven_codigo asc")
	
	var cant = databaseManager.getFoundSetCount(fs_ven)
	var count = 1
	for (var index = 1; index <= cant; index++) {
		var record = fs_ven.getRecord(index);
		if(record.ven_codigo != count){
			return count
		}
		count += 1
	}
	return count
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param lnk_cod
 *
 * @properties={typeid:24,uuid:"96F335C4-EA56-494E-BF16-40473058763E"}
 */
function existeCodigo(lnk_cod){
	/** @type {JSFoundset<db:/peluqueria/adn_vendedores>}*/
	var fs_ven = databaseManager.getFoundSet('peluqueria','adn_vendedores')
	fs_ven.loadAllRecords()
	fs_ven.find()
	fs_ven.ven_codigo = lnk_cod
	if(fs_ven.search() != 0){
		return true
	}
	return false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B435E187-E542-490D-8C0F-2223C9BB4CA9"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.p_empleados.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BDCD02D5-A103-4642-9E85-78C575C3E291"}
 */
function onActionGrabar(event) {
	if(ven_codigo == null || ven_codigo == 0){
		globals.lanzarVentanaEmergente(0,'Debe ingresar un código de empleado.','Info',controller.getName(),null,null)
		elements.ven_codigo.requestFocus()
		return
	}
	if(vl_nombre == null || vl_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Debe ingresar un nombre de empleado.','Info',controller.getName(),null,null)
		elements.vl_nombre.requestFocus()
		return
	}
	if(existeCodigo(ven_codigo)){
		globals.lanzarVentanaEmergente(0,'Ya existe un empleado con el código ingresado.','Info',controller.getName(),null,null)
		elements.ven_codigo.requestFocus()
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
	
	forms.p_empleados.controller.show()
}
