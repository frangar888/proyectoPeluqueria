
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"81AA2E2C-9800-4A26-B5E7-5709CE65DFE8"}
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
 * @properties={typeid:24,uuid:"4E0B5B3C-5F8C-4484-B3CD-ABA235D7906A"}
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
 * @properties={typeid:24,uuid:"03F95317-016D-4163-A0D6-44EF3A450004"}
 */
function onActionGrabar(event) {
	if(cj_desc == '' || cj_desc == null){
		globals.lanzarVentanaEmergente(0,'Ingrese descripción del movimiento.','Info',controller.getName(),null,null)
		return
	}
	if(conc_cod == 0 || conc_cod == null){
		globals.lanzarVentanaEmergente(0,'Seleccione un concepto para el movimiento.','Info',controller.getName(),null,null)
		return
	}
	databaseManager.saveData()
	application.getWindow().hide()
}
