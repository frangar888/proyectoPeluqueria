
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5C7E5D94-B9AD-41FB-AA66-15DF1660FA0A"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	controller.find()
	form_tipo = 0
	controller.search()
	obtenerPermisos()
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"592630DD-FB6C-4CDA-90D7-54FE568C6029"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.titulo.text,1,globals.getFormID(forms.p_usuarios.controller.getName()))
}

/**
 * @properties={typeid:24,uuid:"9C8C7CF6-881C-4ADA-B7AA-81D70E7D5A84"}
 * @AllowToRunInFind
 */
function obtenerPermisos(){
	for (var index = 1; index <= foundset.getSize(); index++) {
		var record = foundset.getRecord(index);
		record.calc_admin = 0
		record.calc_borrar = 0
		record.calc_imprimir = 0
		record.calc_leer = 0
		record.calc_modificar = 0
		record.calc_nuevo = 0
		record.cfg_formularios_to_cfg_permisos_2.find()
		record.cfg_formularios_to_cfg_permisos_2.user_id = forms.p_usuarios_detalle.user_id
		if(record.cfg_formularios_to_cfg_permisos_2.search() != 0){
		if(record.cfg_formularios_to_cfg_permisos_2.cfg_perm_leer == 1){
			record.calc_leer = 1
		}
		if(record.cfg_formularios_to_cfg_permisos_2.cfg_perm_grabar == 1){
			record.calc_modificar = 1
		}
		if(record.cfg_formularios_to_cfg_permisos_2.cfg_perm_nuevo == 1){
			record.calc_nuevo = 1
		}
		if(record.cfg_formularios_to_cfg_permisos_2.cfg_perm_borrar == 1){
			record.calc_borrar = 1
		}
		if(record.cfg_formularios_to_cfg_permisos_2.cfg_perm_print == 1){
			record.calc_imprimir = 1
		}
		if(record.cfg_formularios_to_cfg_permisos_2.cfg_perm_admin == 1){
			record.calc_admin = 1
		}
	}
	}
	/*
	for (var index = 1; index <= foundset.getSize(); index++) {
		var record = foundset.getRecord(index);
		record.calc_admin = 0
		record.calc_borrar = 0
		record.calc_imprimir = 0
		record.calc_leer = 0
		record.calc_modificar = 0
		record.calc_nuevo = 0
		record.cfg_formularios_to_cfg_permisos.find()
		record.cfg_formularios_to_cfg_permisos.permiso_tipo = 0
		record.cfg_formularios_to_cfg_permisos.user_id = forms.p_usuarios_detalle.user_id
		if(record.cfg_formularios_to_cfg_permisos.search() != 0){
			record.calc_leer = 1
		}
		record.cfg_formularios_to_cfg_permisos.find()
		record.cfg_formularios_to_cfg_permisos.permiso_tipo = 1
		record.cfg_formularios_to_cfg_permisos.user_id = forms.p_usuarios_detalle.user_id
		if(record.cfg_formularios_to_cfg_permisos.search() != 0){
			record.calc_modificar = 1
		}
		record.cfg_formularios_to_cfg_permisos.find()
		record.cfg_formularios_to_cfg_permisos.permiso_tipo = 2
		record.cfg_formularios_to_cfg_permisos.user_id = forms.p_usuarios_detalle.user_id
		if(record.cfg_formularios_to_cfg_permisos.search() != 0){
			record.calc_nuevo = 1
		}
		record.cfg_formularios_to_cfg_permisos.find()
		record.cfg_formularios_to_cfg_permisos.permiso_tipo = 3
		record.cfg_formularios_to_cfg_permisos.user_id = forms.p_usuarios_detalle.user_id
		if(record.cfg_formularios_to_cfg_permisos.search() != 0){
			record.calc_borrar = 1
		}
		record.cfg_formularios_to_cfg_permisos.find()
		record.cfg_formularios_to_cfg_permisos.permiso_tipo = 4
		record.cfg_formularios_to_cfg_permisos.user_id = forms.p_usuarios_detalle.user_id
		if(record.cfg_formularios_to_cfg_permisos.search() != 0){
			record.calc_imprimir = 1
		}
		record.cfg_formularios_to_cfg_permisos.find()
		record.cfg_formularios_to_cfg_permisos.permiso_tipo = 5
		record.cfg_formularios_to_cfg_permisos.user_id = forms.p_usuarios_detalle.user_id
		if(record.cfg_formularios_to_cfg_permisos.search() != 0){
			record.calc_admin = 1
		}
	
	}
*/
}

/**
 * @properties={typeid:24,uuid:"AB0999FD-A567-4AFB-B1F1-7F152F5A8E1E"}
 * @AllowToRunInFind
 */
function actualizarPermisos(){

	var cantReg = databaseManager.getFoundSetCount(foundset)
	/** @type {JSFoundset<db:/peluqueria/cfg_permisos_2>}*/
	var fs_permisos = databaseManager.getFoundSet('peluqueria','cfg_permisos_2')
	fs_permisos.loadAllRecords()
	fs_permisos.find()
	fs_permisos.user_id = forms.p_usuarios_detalle.user_id
	if(fs_permisos.search() != 0){
		fs_permisos.deleteAllRecords()
		databaseManager.saveData(fs_permisos)
	}
	for (var index = 1; index <= cantReg; index++) {
		var record = foundset.getRecord(index);

		fs_permisos.loadAllRecords()
			fs_permisos.newRecord()
			fs_permisos.form_id = record.form_id
			fs_permisos.user_id = forms.p_usuarios_detalle.user_id
			if(record.form_uuid == 'DA6E1FF1-8287-45B2-8A26-DE2809660D12' || record.form_uuid == 'FF14C89E-CF24-48DF-8D0E-B29F86A2BF8E' || record.form_uuid == '219184CF-FC76-4440-919C-A3C5E0421079'){
				record.calc_leer = 1
			}
			if(record.calc_admin == 0){
				if(record.calc_leer == 1){
					fs_permisos.cfg_perm_leer = 1
				}
				if(record.calc_modificar == 1){
					fs_permisos.cfg_perm_grabar = 1
				}
				if(record.calc_nuevo == 1){
					fs_permisos.cfg_perm_nuevo = 1
				}
				if(record.calc_borrar == 1){
					fs_permisos.cfg_perm_borrar = 1
				}
				if(record.calc_imprimir == 1){
					fs_permisos.cfg_perm_print = 1
				}
			}else{
				fs_permisos.cfg_perm_print = 1
				fs_permisos.cfg_perm_borrar = 1
				fs_permisos.cfg_perm_nuevo = 1
				fs_permisos.cfg_perm_grabar = 1
				fs_permisos.cfg_perm_admin = 1
				fs_permisos.cfg_perm_leer = 1
			}
			databaseManager.saveData(fs_permisos)
		
	}
	
	
/*	for (var index = 1; index <= cantReg; index++) {
		var record = foundset.getRecord(index);
		fs_permisos.find()
		fs_permisos.user_id = forms.p_usuarios_detalle.user_id
		fs_permisos.form_id = record.form_id
		fs_permisos.search()
		if(utils.hasRecords(fs_permisos)){
			fs_permisos.deleteAllRecords()
		}
	}
	

	
	databaseManager.saveData()
	for (var index3 = 1; index3 <= foundset.getSize(); index3++) {
		var record3 = foundset.getRecord(index3);
		if(record3.form_uuid == 'DA6E1FF1-8287-45B2-8A26-DE2809660D12' || record3.form_uuid == 'FF14C89E-CF24-48DF-8D0E-B29F86A2BF8E' || record3.form_uuid == '219184CF-FC76-4440-919C-A3C5E0421079'){
			record3.calc_leer = 1
		}
		if(record3.calc_admin == 0){
			if(record3.calc_leer == 1){
				record3.cfg_formularios_to_cfg_permisos.newRecord()
				record3.cfg_formularios_to_cfg_permisos.form_id = record3.form_id
				record3.cfg_formularios_to_cfg_permisos.nombre_form = record3.form_nombre
				record3.cfg_formularios_to_cfg_permisos.permiso_tipo = 0
				record3.cfg_formularios_to_cfg_permisos.user_id = forms.p_usuarios_detalle.user_id
			}
			if(record3.calc_modificar == 1){
				record3.cfg_formularios_to_cfg_permisos.newRecord()
				record3.cfg_formularios_to_cfg_permisos.form_id = record3.form_id
				record3.cfg_formularios_to_cfg_permisos.nombre_form = record3.form_nombre
				record3.cfg_formularios_to_cfg_permisos.permiso_tipo = 1
				record3.cfg_formularios_to_cfg_permisos.user_id = forms.p_usuarios_detalle.user_id
			}
			if(record3.calc_nuevo == 1){
				record3.cfg_formularios_to_cfg_permisos.newRecord()
				record3.cfg_formularios_to_cfg_permisos.form_id = record3.form_id
				record3.cfg_formularios_to_cfg_permisos.nombre_form = record3.form_nombre
				record3.cfg_formularios_to_cfg_permisos.permiso_tipo = 2
				record3.cfg_formularios_to_cfg_permisos.user_id = forms.p_usuarios_detalle.user_id
			}
			if(record3.calc_borrar == 1){
				record3.cfg_formularios_to_cfg_permisos.newRecord()
				record3.cfg_formularios_to_cfg_permisos.form_id = record3.form_id
				record3.cfg_formularios_to_cfg_permisos.nombre_form = record3.form_nombre
				record3.cfg_formularios_to_cfg_permisos.permiso_tipo = 3
				record3.cfg_formularios_to_cfg_permisos.user_id = forms.p_usuarios_detalle.user_id
			}
			if(record3.calc_imprimir == 1){
				record3.cfg_formularios_to_cfg_permisos.newRecord()
				record3.cfg_formularios_to_cfg_permisos.form_id = record3.form_id
				record3.cfg_formularios_to_cfg_permisos.nombre_form = record3.form_nombre
				record3.cfg_formularios_to_cfg_permisos.permiso_tipo = 4
				record3.cfg_formularios_to_cfg_permisos.user_id = forms.p_usuarios_detalle.user_id
			}
		}else{
			record3.cfg_formularios_to_cfg_permisos.newRecord()
			record3.cfg_formularios_to_cfg_permisos.form_id = record3.form_id
			record3.cfg_formularios_to_cfg_permisos.nombre_form = record3.form_nombre
			record3.cfg_formularios_to_cfg_permisos.permiso_tipo = 5
			record3.cfg_formularios_to_cfg_permisos.user_id = forms.p_usuarios_detalle.user_id
			
			record3.cfg_formularios_to_cfg_permisos.newRecord()
			record3.cfg_formularios_to_cfg_permisos.form_id = record3.form_id
			record3.cfg_formularios_to_cfg_permisos.nombre_form = record3.form_nombre
			record3.cfg_formularios_to_cfg_permisos.permiso_tipo = 0
			record3.cfg_formularios_to_cfg_permisos.user_id = forms.p_usuarios_detalle.user_id
		}
	
	}*/
	//databaseManager.saveData()
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"8EEB27E2-18B4-4AA6-86D0-5B7917DF69AA"}
 */
function onDataChangeAdmin(oldValue, newValue, event) {
	if(calc_admin == 1){
		calc_borrar = 1
		calc_imprimir = 1
		calc_leer = 1
		calc_modificar = 1
		calc_nuevo = 1
	}
	return true
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"E48F924B-3217-4800-9387-CD98F47CC6FF"}
 */
function onDataChangeLeer(oldValue, newValue, event) {
	if(calc_leer == 0){
		calc_borrar = 0
		calc_imprimir = 0
		calc_modificar = 0
		calc_nuevo = 0
		calc_admin = 0
	}
	return true
}




/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"8F48FF2C-05D9-4D6D-9B9D-5FCAC15B22C6"}
 */
function onDataChangeOtrosPermisos(oldValue, newValue, event) {
	if(calc_modificar == 1 || calc_borrar == 1 || calc_imprimir == 1 || calc_nuevo == 1){
		calc_leer = 1
	}
	if(calc_modificar == 0 || calc_borrar == 0 || calc_imprimir == 0 || calc_nuevo == 0){
		calc_admin = 0
	}
	return true
}
