/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"21EB264A-4C33-4651-A47D-2744B082144C"}
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
 * @properties={typeid:24,uuid:"FB59DDA0-BEB3-4814-9C00-42050F21217E"}
 */
function onHide(event) {
	databaseManager.revertEditedRecords()
	application.getWindow().hide()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8C3FF349-345F-4FD6-8C0C-CCEA2C8E5A26"}
 */
function onShow(firstShow, event) {
	controller.newRecord()
	cj_egr_fecha = application.getServerTimeStamp()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F51FBF50-A095-444F-9FDF-00348F0E544D"}
 */
function onActionGrabar(event) {
	if(cj_egr_fecha == null){
		globals.lanzarVentanaEmergente(0,'Ingrese fecha del ingreso.','Info',controller.getName(),null,null)
		return
	}
	if(proveedor_adn_id == null) {
		globals.lanzarVentanaEmergente(0,'Seleccione un proveedor.','Info',controller.getName(),null,null)
		return
	}
	if(cj_egr_importe == 0 || cj_egr_importe == null){
		globals.lanzarVentanaEmergente(0,'Ingrese importe del ingreso.','Info',controller.getName(),null,null)
		return
	}
	conc_cod = 3
	conc_nombre = cj_ingresos_to_cj_conceptos.conc_nombre
	databaseManager.saveData()
	forms.p_caja_inicio.controller.show()
	application.getWindow().hide()
}
