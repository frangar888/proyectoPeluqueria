/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B2717ADD-E7D0-444D-A199-71F1E88A76B8"}
 */
var vl_form_padre = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1E67F2A3-C986-4F13-B53F-9FC95B0F414E"}
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
 * @properties={typeid:24,uuid:"19DFDF10-86B3-4148-A3C6-99EE191B66B6"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	controller.newRecord()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"02DA8414-5BD7-44F0-B7EF-A2D1949C6CEE"}
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
 * @properties={typeid:24,uuid:"24FD78FB-FE6D-46B2-8A93-9F5A982AD27E"}
 */
function onAction(event) {
	databaseManager.revertEditedRecords()
	application.getWindow().hide()
}

/**
 * @properties={typeid:24,uuid:"934881A2-233A-495C-A2F1-A17D678131D9"}
 */
function ultLibre(){
	/** @type {JSFoundset<db:/peluqueria/prd_marcas>}*/
	var fs_marcas = databaseManager.getFoundSet('peluqueria','prd_marcas')
	fs_marcas.loadAllRecords()
	fs_marcas.sort("marca_cod asc")
	
	var cant = databaseManager.getFoundSetCount(fs_marcas)
	var count = 1
	for (var index = 1; index <= cant; index++) {
		var record = fs_marcas.getRecord(index);
		if(record.marca_cod != count){
			return count
		}
		count += 1
	}
	if(count != null){
		return count
	}
	return 1
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"442DAFF3-14FB-4D15-98E1-775869AC39DA"}
 */
function onActionUltimoCod(event) {
	marca_cod = ultLibre()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1A6CA509-3A83-4B6F-B485-69C50D1845EF"}
 */
function onActionGrabar(event) {
	if(marca_cod == null || marca_cod == ''){
		globals.lanzarVentanaEmergente(0,'Seleccione un código de marca.','Info',controller.getName(),null,null)
		return
	}
	if(marca_nombre == null || marca_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Seleccione un nombre de marca.','Info',controller.getName(),null,null)
		return
	}
	if(existeCodigo(marca_cod)){
		globals.lanzarVentanaEmergente(0,'Ya existe una marca con ese código!','Info',controller.getName(),null,null)
		return
	}
	databaseManager.saveData()
	application.getWindow().hide()
}

/**
 * 
 * @param lnk_codigo
 *
 * @properties={typeid:24,uuid:"D617C6A3-2B80-4574-AE56-DAD113279917"}
 * @AllowToRunInFind
 */
function existeCodigo(lnk_codigo){
	/** @type {JSFoundset<db:/peluqueria/prd_marcas>}*/
	var fs_marcas = databaseManager.getFoundSet('peluqueria','prd_marcas')
	fs_marcas.loadAllRecords()
	fs_marcas.find()
	fs_marcas.marca_cod = lnk_codigo
	if(fs_marcas.search() != 0){
		return true
	}
	return false
}
