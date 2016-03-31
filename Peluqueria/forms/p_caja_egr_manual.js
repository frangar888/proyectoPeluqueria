/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9374757D-4C3E-420C-9DD3-E72EE2C603EC"}
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
 * @properties={typeid:24,uuid:"AC6E9D95-105B-4725-9344-742EACB8CCCD"}
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
 * @properties={typeid:24,uuid:"B81F9A05-17FD-417A-8373-98447286DD78"}
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
 * @properties={typeid:24,uuid:"EC8648D0-9573-4C75-BB43-95CBF5FD7C5C"}
 */
function onActionGrabar(event) {
	if(cj_egr_fecha == null){
		globals.lanzarVentanaEmergente(0,'Ingrese fecha del ingreso.','Info',controller.getName(),null,null)
		return
	}
	if(conc_cod == null || conc_cod == 0){
		globals.lanzarVentanaEmergente(0,'Seleccione concepto del ingreso.','Info',controller.getName(),null,null)
		return
	}
	if(cj_egr_importe == 0 || cj_egr_importe == null){
		globals.lanzarVentanaEmergente(0,'Ingrese importe del ingreso.','Info',controller.getName(),null,null)
		return
	}
	conc_nombre = cj_ingresos_to_cj_conceptos.conc_nombre
	databaseManager.saveData()
	forms.p_caja.filtrar()
	application.getWindow().hide()
}
