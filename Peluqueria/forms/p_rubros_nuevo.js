
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0FA0C926-2697-4782-8893-3B704F2D0B80"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_rubros.controller.getName()))
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F8F8474F-1D36-4687-AD6E-371779892BAF"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	controller.newRecord()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BC8949A8-540B-4831-B936-996D3EA008FC"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()	
	application.getWindow().hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"49098974-B947-4CBC-A228-70436F975F26"}
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
 * @properties={typeid:24,uuid:"5FD7E94C-B463-462E-97DC-F731D70A4C83"}
 */
function onActionGrabar(event) {
	if(rubro_cod == null || rubro_cod == ''){
		globals.lanzarVentanaEmergente(0,'Seleccione un código de rubro.','Info',controller.getName(),null,null)
		return
	}
	if(rubro_nombre == null || rubro_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Seleccione un nombre de rubro.','Info',controller.getName(),null,null)
		return
	}
	if(existeCodigo(rubro_cod)){
		globals.lanzarVentanaEmergente(0,'Ya existe un rubro con ese código!','Info',controller.getName(),null,null)
		return
	}
	databaseManager.saveData()
	application.getWindow().hide()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event th
 * 
 * at triggered the action
 *
 * @properties={typeid:24,uuid:"043AD5DC-527B-4FEE-B3EB-9F9E7F9265EA"}
 */
function onActionUltCod(event) {
	var ultimo = buscarUltCodigo()
	rubro_cod = ultimo + 1
}

/**
 * @properties={typeid:24,uuid:"308EDD8A-3233-4359-8CDA-DED598392B31"}
 */
function buscarUltCodigo(){
	/** @type {JSFoundset<db:/peluqueria/prd_rubros>}*/
	var fs_rubros = databaseManager.getFoundSet('peluqueria','prd_rubros')
	fs_rubros.loadAllRecords()
	if(databaseManager.getFoundSetCount(fs_rubros) != 0){
		fs_rubros.sort('desc rubro_cod')
		var record = fs_rubros.getRecord(databaseManager.getFoundSetCount(fs_rubros))
		return record.rubro_cod
	}else{
		return 0
	}
}

/**
 * @AllowToRunInFind
 * 
 * 
 * @param lnk_codigo
 *
 * @properties={typeid:24,uuid:"5AB11EDF-8A07-4B14-B602-F847851817AD"}
 */
function existeCodigo(lnk_codigo){
	/** @type {JSFoundset<db:/peluqueria/prd_rubros>}*/
	var fs_rubros = databaseManager.getFoundSet('peluqueria','prd_rubros')
	fs_rubros.loadAllRecords()
	fs_rubros.find()
	fs_rubros.rubro_cod = lnk_codigo
	if(fs_rubros.search() != 0){
		return true
	}
	return false
}