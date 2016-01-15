
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5C7E5D94-B9AD-41FB-AA66-15DF1660FA0A"}
 */
function onShow(firstShow, event) {
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
	globals.grabarFormUUID(controller.getName(),elements.titulo.text)
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
		record.cfg_formularios_to_cfg_permisos.find()
		record.cfg_formularios_to_cfg_permisos.permiso_tipo = 0
		if(record.cfg_formularios_to_cfg_permisos.search() != 0){
			record.calc_leer = 1
		}
		record.cfg_formularios_to_cfg_permisos.find()
		record.cfg_formularios_to_cfg_permisos.permiso_tipo = 1
		if(record.cfg_formularios_to_cfg_permisos.search() != 0){
			record.calc_modificar = 1
		}
		record.cfg_formularios_to_cfg_permisos.find()
		record.cfg_formularios_to_cfg_permisos.permiso_tipo = 2
		if(record.cfg_formularios_to_cfg_permisos.search() != 0){
			record.calc_nuevo = 1
		}
		record.cfg_formularios_to_cfg_permisos.find()
		record.cfg_formularios_to_cfg_permisos.permiso_tipo = 3
		if(record.cfg_formularios_to_cfg_permisos.search() != 0){
			record.calc_borrar = 1
		}
		record.cfg_formularios_to_cfg_permisos.find()
		record.cfg_formularios_to_cfg_permisos.permiso_tipo = 4
		if(record.cfg_formularios_to_cfg_permisos.search() != 0){
			record.calc_imprimir = 1
		}
		record.cfg_formularios_to_cfg_permisos.find()
		record.cfg_formularios_to_cfg_permisos.permiso_tipo = 5
		if(record.cfg_formularios_to_cfg_permisos.search() != 0){
			record.calc_admin = 1
		}
	}

}

/**
 * @properties={typeid:24,uuid:"AB0999FD-A567-4AFB-B1F1-7F152F5A8E1E"}
 */
function actualizarPermisos(){
	for (var index = 1; index <= foundset.getSize(); index++) {
		var record = foundset.getRecord(index);
		record.cfg_formularios_to_cfg_permisos.loadAllRecords()
		if(utils.hasRecords(record.cfg_formularios_to_cfg_permisos)){
		//	var cant = record.cfg_formularios_to_cfg_permisos.getSize()
		//	for (var index2 = 1; index2 <= cant ; index2++) {
				record.cfg_formularios_to_cfg_permisos.deleteAllRecords();
		//	}
		}
	}
	databaseManager.saveData()
	for (var index3 = 1; index3 <= foundset.getSize(); index3++) {
		var record3 = foundset.getRecord(index3);
		if(record3.calc_leer == 1){
			record3.cfg_formularios_to_cfg_permisos.newRecord()
			record3.cfg_formularios_to_cfg_permisos.form_id = record3.form_id
			record3.cfg_formularios_to_cfg_permisos.nombre_form = record3.form_nombre
			record3.cfg_formularios_to_cfg_permisos.permiso_tipo = 0
		}
		if(record3.calc_modificar == 1){
			record3.cfg_formularios_to_cfg_permisos.newRecord()
			record3.cfg_formularios_to_cfg_permisos.form_id = record3.form_id
			record3.cfg_formularios_to_cfg_permisos.nombre_form = record3.form_nombre
			record3.cfg_formularios_to_cfg_permisos.permiso_tipo = 1
		}
		if(record3.calc_nuevo == 1){
			record3.cfg_formularios_to_cfg_permisos.newRecord()
			record3.cfg_formularios_to_cfg_permisos.form_id = record3.form_id
			record3.cfg_formularios_to_cfg_permisos.nombre_form = record3.form_nombre
			record3.cfg_formularios_to_cfg_permisos.permiso_tipo = 2
		}
		if(record3.calc_borrar == 1){
			record3.cfg_formularios_to_cfg_permisos.newRecord()
			record3.cfg_formularios_to_cfg_permisos.form_id = record3.form_id
			record3.cfg_formularios_to_cfg_permisos.nombre_form = record3.form_nombre
			record3.cfg_formularios_to_cfg_permisos.permiso_tipo = 3
		}
		if(record3.calc_imprimir == 1){
			record3.cfg_formularios_to_cfg_permisos.newRecord()
			record3.cfg_formularios_to_cfg_permisos.form_id = record3.form_id
			record3.cfg_formularios_to_cfg_permisos.nombre_form = record3.form_nombre
			record3.cfg_formularios_to_cfg_permisos.permiso_tipo = 4
		}
		if(record3.calc_admin == 1){
			record3.cfg_formularios_to_cfg_permisos.newRecord()
			record3.cfg_formularios_to_cfg_permisos.form_id = record3.form_id
			record3.cfg_formularios_to_cfg_permisos.nombre_form = record3.form_nombre
			record3.cfg_formularios_to_cfg_permisos.permiso_tipo = 5
		}
	}
	databaseManager.saveData()
}
