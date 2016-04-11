
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D02BE45B-03F4-4D25-A8DA-8DE095D7E08F"}
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
 * @properties={typeid:24,uuid:"D1C29E48-6980-4BB8-89DB-4C8D11EDBDC6"}
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
 * @properties={typeid:24,uuid:"EFDACA2E-6E6C-460C-A2A3-B99F0E40B6DB"}
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
