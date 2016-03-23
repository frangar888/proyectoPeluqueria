/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"010BD165-34FF-46AC-929F-19E03020C666",variableType:4}
 */
var vl_estado = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"72620352-9C14-426F-9073-C3F9830E6598",variableType:4}
 */
var vl_vendedor_adn_id = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6B2334AB-EA6B-480E-897C-832D879FF32D"}
 */
function onActionVolver(event) {
	forms.p_empleados_consulta.controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4FEB0CAC-31CB-428A-A30C-F29390848DB9"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		globals.vg_fecha_final = application.getServerTimeStamp()
		globals.vg_fecha_inicial = application.getServerTimeStamp()
		vl_estado = 0
		filtrar()
	}
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"A9BF781F-EB90-43B1-9213-55D24B6AEE13"}
 * @AllowToRunInFind
 */
function filtrar(){
	controller.find()
	adn_ven_comisiones_to_pel_ventas.vta_fecha_emision = utils.dateFormat(globals.vg_fecha_inicial,'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(globals.vg_fecha_final,'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	adn_id = vl_vendedor_adn_id
	if(vl_estado != null){
		com_estado = vl_estado
	}
	controller.search()
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B8ADC877-A2CA-4AAB-8754-EE01C4F78484"}
 */
function onActionPagar(event) {
	var total = calcularTotal()
	if(total == 0){
		globals.lanzarVentanaEmergente(0,'No hay comisiones pendientes para pagar.','Info',controller.getName(),null,null)
		return
	}else{
		forms.p_empleados_consulta_com_pagar.vl_total = total
		forms.p_empleados_consulta_com_pagar.vl_empleado_id = vl_vendedor_adn_id
		forms.p_empleados_consulta_com_pagar.vl_fecha_pago = application.getServerTimeStamp()
		var win1 = application.createWindow("pagarCom", JSWindow.MODAL_DIALOG);
		win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
		win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
		win1.resizable = false
		win1.title= 'Hair System';
		win1.show(forms.p_empleados_consulta_com_pagar);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1A1D987A-8F30-445F-96FE-E2297F75CD44"}
 */
function onActionDetalle(event) {
	forms.p_ventas_detalle.vl_form_padre = controller.getName()
	forms.p_ventas_detalle.controller.loadRecords(venta_id)
	forms.p_ventas_detalle.controller.show()
}

/**
 * @properties={typeid:24,uuid:"C1F0D5FB-3F09-4DA5-82B5-876C79D5AFDA"}
 */
function calcularTotal(){
	var cant = databaseManager.getFoundSetCount(foundset)
	var total = 0
	if(cant != 0){
		for (var index = 1; index <= cant; index++) {
			var record = foundset.getRecord(index);
			if(record.com_estado == 0){
				total += record.com_importe
			}
		}
	}
	return total
}

/**
 * @properties={typeid:24,uuid:"7725F16E-81B4-4066-8BE7-97FE31C74E6A"}
 */
function pagarComisiones(){
	var cant = databaseManager.getFoundSetCount(foundset)
	var total = forms.p_empleados_consulta_com_pagar.vl_total
	var fecha = forms.p_empleados_consulta_com_pagar.vl_fecha_pago
	for (var index = 1; index <= cant; index++) {
		var record = foundset.getRecord(index);
		if(record.com_estado == 0){
			record.com_estado = 1
			record.com_fecha_pago = fecha
		}
	}
	
	////////////////Graba Caja////////////////////////
	/** @type {JSFoundset<db:/peluqueria/cj_egresos>}*/
	var fs_egr = databaseManager.getFoundSet('peluqueria','cj_egresos')
	fs_egr.newRecord()
	fs_egr.cj_egr_fecha = forms.p_empleados_consulta_com_pagar.vl_fecha_pago
	fs_egr.cj_egr_importe = total
	fs_egr.conc_cod = 5
	fs_egr.conc_nombre = 'Pago de Comisiones'
	fs_egr.user_id = globals.vg_user_id
	fs_egr.vendedor_adn_id = 0
	fs_egr.venta_id = 0
	databaseManager.saveData()
}
