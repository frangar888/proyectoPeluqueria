/**
 * 
 * @param lnk_form
 * 
 *
 * @properties={typeid:24,uuid:"B2DD8048-A8DA-4696-B5AB-FC944341C95E"}
 */
function validarPermisos(lnk_form){
	/** @type {JSFoundset<db:/peluqueria/cfg_permisos>}*/
	var fs_permisos = databaseManager.getFoundSet('peluqueria','cfg_permisos')
	fs_permisos.find()
	fs_permisos.user_id = globals.vg_user_id
	
	
}

/**
 * @properties={typeid:24,uuid:"C8A9CF6B-F8F9-4593-BFB3-D3D22F50A348"}
 * @AllowToRunInFind
 */
function grabarFormUUID(lnk_form, lnk_nombre_opcion){
	var ds = security.getElementUUIDs(lnk_form)
	var uuid = ds.getValue(1,2)
	/** @type {JSFoundset<db:/peluqueria/cfg_formularios>}*/
	var fs_forms = databaseManager.getFoundSet('peluqueria','cfg_formularios')
	fs_forms.find()
	fs_forms.form_uuid = uuid
	if(fs_forms.search() == 0){
		fs_forms.newRecord()
		fs_forms.form_nombre = lnk_form
		fs_forms.form_uuid = uuid
		fs_forms.opcion_nombre = lnk_nombre_opcion
		databaseManager.saveData(fs_forms)
	}else{
		fs_forms.opcion_nombre = lnk_nombre_opcion
		databaseManager.saveData(fs_forms)
	}
}



/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"C3D2B4F8-8CD1-4E07-9040-BD408AD95CFD"}
 */
function onSolutionOpen(arg, queryParams) {
	databaseManager.setAutoSave(false)
	globals.getUserId(globals.vg_user)
	forms.form_inicio.controller.show()
}
