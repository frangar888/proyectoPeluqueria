
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C425DD2C-D463-449C-B883-AE3EA77EC2F2"}
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
 * @properties={typeid:24,uuid:"4A463EEB-6FF2-4D0D-A7E1-040CAF74EBAE"}
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
 * @properties={typeid:24,uuid:"104B1C99-D440-47BC-B614-1DE49891997C"}
 */
function onShow(firstShow, event) {
	controller.newRecord()
	cj_ing_fecha = application.getServerTimeStamp()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DEF43F45-7296-4AB9-A47F-F0B78292EE74"}
 */
function onActionGrabar(event) {
	if(cj_ing_fecha == null){
		globals.lanzarVentanaEmergente(0,'Ingrese fecha del ingreso.','Info',controller.getName(),null,null)
		return
	}
	if(conc_cod == null || conc_cod == 0){
		globals.lanzarVentanaEmergente(0,'Seleccione concepto del ingreso.','Info',controller.getName(),null,null)
		return
	}
	if(cj_ing_importe == 0 || cj_ing_importe == null){
		globals.lanzarVentanaEmergente(0,'Ingrese importe del ingreso.','Info',controller.getName(),null,null)
		return
	}
	conc_nombre = cj_ingresos_to_cj_conceptos.conc_nombre
	databaseManager.saveData()
	forms.p_caja.filtrar()
	application.getWindow().hide()
}
