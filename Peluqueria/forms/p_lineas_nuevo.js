/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F0630434-0795-4C99-B5EE-A148F6C09EF9"}
 */
var vl_form_padre = null;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6C4F3142-3855-4CEB-A527-8A0E711E7EE6"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_lineas.controller.getName()))
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CF07D4B2-49D3-48DD-A869-BC90F3A252D2"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	if(vl_form_padre != 'p_rubros_detalle_lineas'){
		controller.newRecord()
		elements.rubro_id.editable = true
	}else{
		elements.rubro_id.editable = false
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"E54E4CA8-0AA2-4D47-BED5-70F8EFC606D4"}
 */
function onHide(event) {
	databaseManager.revertEditedRecords()
	application.getWindow().hide()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A2D9C1E2-F94D-440D-BCB0-57F87F677622"}
 */
function onAction(event) {
	databaseManager.revertEditedRecords()
	application.getWindow().hide()
}

/**
 * @properties={typeid:24,uuid:"BBA61051-994F-49A5-BCFA-4A1ACDB38FAF"}
 */
function buscarUltCodigo(){
	/** @type {JSFoundset<db:/peluqueria/prd_lineas>}*/
	var fs_lineas = databaseManager.getFoundSet('peluqueria','prd_lineas')
	fs_lineas.loadAllRecords()
	if(databaseManager.getFoundSetCount(fs_lineas) != 0){
		fs_lineas.sort('desc linea_cod')
		var record = fs_lineas.getRecord(databaseManager.getFoundSetCount(fs_lineas))
		return record.linea_cod
	}else{
		return 0
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D4F377C-BBDF-41F2-8109-6530CBBB3D73"}
 */
function onActionUltimoCod(event) {
	var ultimo = buscarUltCodigo()
	linea_cod = ultimo + 1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3839BB4A-9D5D-4682-9E46-925CCB574371"}
 */
function onActionGrabar(event) {
	if(linea_cod == null || linea_cod == ''){
		globals.lanzarVentanaEmergente(0,'Seleccione un código de línea.','Info',controller.getName(),null,null)
		return
	}
	if(linea_nombre == null || linea_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Seleccione un nombre de línea.','Info',controller.getName(),null,null)
		return
	}
	if(rubro_id == null || rubro_id == 0){
		globals.lanzarVentanaEmergente(0,'Seleccione un rubro.','Info',controller.getName(),null,null)
		return
	}
	if(existeCodigo(linea_cod)){
		globals.lanzarVentanaEmergente(0,'Ya existe una línea con ese código!','Info',controller.getName(),null,null)
		return
	}
	databaseManager.saveData()
	application.getWindow().hide()
}

/**
 * 
 * @param lnk_codigo
 *
 * @properties={typeid:24,uuid:"46011F6F-A999-44D9-9683-A1E1CD6FA0D7"}
 * @AllowToRunInFind
 */
function existeCodigo(lnk_codigo){
	/** @type {JSFoundset<db:/peluqueria/prd_lineas>}*/
	var fs_lineas = databaseManager.getFoundSet('peluqueria','prd_lineas')
	fs_lineas.loadAllRecords()
	fs_lineas.find()
	fs_lineas.linea_cod = lnk_codigo
	if(fs_lineas.search() != 0){
		return true
	}
	return false
}
