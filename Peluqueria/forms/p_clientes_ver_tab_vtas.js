/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6D79247E-E4D9-43FD-8911-522AD5F8BE9A",variableType:8}
 */
var vl_total_saldo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"68B30DFC-2590-448E-89A0-60DF0CB00C58",variableType:8}
 */
var vl_total_pago = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FFA90D33-9170-4C5E-B30F-EAEF4631351F",variableType:8}
 */
var vl_total_imp = null;

/**
 * @properties={typeid:24,uuid:"8B42D36B-F810-42CC-9DA0-B253540C0DA8"}
 */
function calcularTotales(){
	vl_total_imp = 0
	vl_total_pago = 0
	vl_total_saldo = 0
	var cant = databaseManager.getFoundSetCount(foundset)
	for (var index = 1; index <= cant; index++) {
		var record = foundset.getRecord(index);
		vl_total_imp += record.vta_importe_total
		vl_total_pago += record.calc_importe_pagado
		vl_total_saldo += record.calc_saldo_vta
		record.calc_tilde = 0
	}
	if(vl_total_saldo > 0){
		elements.vl_total_saldo.bgcolor = '#ff4242'
	}else{
		elements.vl_total_saldo.bgcolor = '#00ff80'
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FB294E3E-3949-447A-A1CB-1F0E0ED028AF"}
 */
function onActionDetalle(event) {
	forms.p_ventas_detalle.vl_form_padre = forms.p_clientes_ver.controller.getName()
	forms.p_ventas_detalle.controller.loadRecords(venta_id)
	forms.p_ventas_detalle.controller.show()
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"C72EDBD7-0C39-4748-B827-BD8FB49B1E7D"}
 */
function onRender(event) {
	/**
	 *@type {JSRecord<db:/peluqueria/pel_ventas>}
	 */
	var record = event.getRecord()
	if(record.calc_saldo_vta <= 0){
		event.getRenderable().enabled = false
	}else{
		event.getRenderable().enabled = true
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"499B587C-79F8-491B-BF99-D8C377E74A29"}
 */
function onActionPago(event) {
	var arrayVtas = new Array()
	var cant = databaseManager.getFoundSetCount(foundset)
	var count = 0
	var importe = 0
	for (var index = 1; index <= cant; index++) {
		var record = foundset.getRecord(index);
		if(record.calc_tilde == 1){
			count += 1
			arrayVtas.push(record.venta_id)
			importe += record.calc_saldo_vta
		}
	}
	if(count == 0){
		globals.lanzarVentanaEmergente(0,'Debe seleccionar al menos una venta para ingresar el pago.','Info',controller.getName(),null,null)
	}else{
		//forms.p_clientes_ver_tab_vtas_pago.vl_form_padre = controller.getName()
		forms.p_clientes_ver_tab_vtas_pago.vl_imp_total = importe
		forms.p_clientes_ver_tab_vtas_pago.vl_array_ventas = arrayVtas
		var win1 = application.createWindow("nuevoIng", JSWindow.MODAL_DIALOG);
		win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win1.resizable = false
		win1.title= 'Hair System';
		win1.show(forms.p_clientes_ver_tab_vtas_pago);
	}
}
