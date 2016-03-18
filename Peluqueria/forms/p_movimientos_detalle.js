
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"18DE328C-A53E-43FB-9476-D49E858DBC17"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.p_movimientos.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DC9C1281-BBB6-40F8-AD0A-453EA4C461F9"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	if(mov_tipo == 0){
		elements.grp_egreso.visible = false
		elements.grp_ingreso.visible = true
	}else{
		elements.grp_egreso.visible = true
		elements.grp_ingreso.visible = false
	}
	if(venta_id != 0){
		elements.grp_venta.visible = true
	}else{
		elements.grp_venta.visible = false
	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"42B05DDF-7861-41F5-87A5-E59312903B34"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_movimientos.controller.getName()))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FF7AE399-6747-413D-980F-2B5CC2A839A6"}
 */
function onActionVenta(event) {
	forms.p_ventas_detalle.vl_form_padre = controller.getName()
	forms.p_ventas_detalle.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CE864F49-DAAD-4486-A98E-0E0E457AE380"}
 */
function onActionGrabar(event) {
	if(mov_causa == null){
		globals.lanzarVentanaEmergente(0,'Seleccione la causa del movimiento','Info',controller.getName(),null,null)
		return
	}
	databaseManager.saveData()
	forms.p_movimientos.controller.show()
}
