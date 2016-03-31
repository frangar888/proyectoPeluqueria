
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"03DE707C-AB42-4E34-A3D8-F165A683F572"}
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
 * @properties={typeid:24,uuid:"CE11753C-0CAA-4319-AA35-A266BD37EBD8"}
 */
function onHide(event) {
	databaseManager.revertEditedRecords()
	application.getWindow().hide()
	return true
}

/**
 * @properties={typeid:24,uuid:"1E0B2D67-1C1D-47B1-873C-99A2A0FE91D2"}
 */
function primeroLibre(){
	/** @type {JSFoundset<db:/peluqueria/cj_conceptos>}*/
	var fs_cj_conc = databaseManager.getFoundSet('peluqueria','cj_conceptos')
	fs_cj_conc.loadAllRecords()
	fs_cj_conc.sort("conc_cod asc")
	
	var cant = databaseManager.getFoundSetCount(fs_cj_conc)
	var count = 1
	for (var index = 1; index <= cant; index++) {
		var record = fs_cj_conc.getRecord(index);
		if(record.conc_cod != count){
			return count
		}
		count += 1
	}
	return count
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"45555ACB-F237-4A68-95F7-71D4262A1638"}
 */
function onActionPrimeroLibre(event) {
	conc_cod = primeroLibre()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"28E22F10-A624-49CF-A5F9-CADA5E5625D3"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	controller.newRecord()
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C2E67AC0-7AA8-46A0-A5DB-B7DA5A991CA4"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_conceptos.controller.getName()))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9116AA81-0BF4-4709-8D60-9E4F68F4C66B"}
 */
function onActionGrabar(event) {
	if(conc_cod == 0 || conc_cod == null){
		globals.lanzarVentanaEmergente(0,'Ingrese código de concepto.','Info',controller.getName(),null,null)
		return
	}else{
		if(existeCodigo(conc_cod)){
			globals.lanzarVentanaEmergente(0,'Ya existe un concepto con el código ingresado.','Info',controller.getName(),null,null)
			return
		}
	}
	if(conc_nombre == null || conc_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Ingrese nombre de concepto.','Info',controller.getName(),null,null)
		return
	}
	if(conc_tipo == null){
		globals.lanzarVentanaEmergente(0,'Seleccione tipo de concepto.','Info',controller.getName(),null,null)
		return
	}
	databaseManager.saveData()
	application.getWindow().hide()
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param lnk_cod
 *
 * @properties={typeid:24,uuid:"71CFDEE5-291F-4CA6-8737-2EE63EAD0CDD"}
 */
function existeCodigo(lnk_cod){
	/** @type {JSFoundset<db:/peluqueria/cj_conceptos>}*/
	var fs_cj_conc = databaseManager.getFoundSet('peluqueria','cj_conceptos')
	fs_cj_conc.loadAllRecords()
	fs_cj_conc.find()
	fs_cj_conc.conc_cod = lnk_cod
	if(fs_cj_conc.search() != 0){
		return true
	}
	return false
}
