/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0DC071C7-83F9-4E8A-9215-C00A4679A067",variableType:8}
 */
var vl_vuelto = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B1319592-0721-4F30-952A-BF13EA5BB1DF"}
 */
var vl_observa = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2BFB22BD-4590-4D24-AE1B-8D5046B19FDC",variableType:8}
 */
var vl_saldo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"84C79B0F-B53F-43DC-96F9-FD968467407C",variableType:8}
 */
var vl_pago = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"847BBB30-C0CD-41DB-BA96-2FEF7897900B",variableType:8}
 */
var vl_total_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"45FA96B7-3650-4433-A44B-53AE734F36FF",variableType:8}
 */
var vl_descuento = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"51414F9E-B10B-44AF-8416-8175ACBA79AC",variableType:8}
 */
var vl_total_vta = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0FC04AE8-8EF5-45B4-BF4E-934675B2654B"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	inicializarVariables()
	elements.vl_pago.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"F04CBE12-CE22-401B-922B-18C1CDEA968F"}
 */
function inicializarVariables(){
	vl_total_vta = forms.p_ventas_nuevo_prd.vl_total
	vl_total_total = forms.p_ventas_nuevo_prd.vl_total
	vl_descuento = null
	vl_pago = 0
	vl_saldo = vl_total_total - vl_pago
	if(vl_saldo < 0){
		vl_saldo = 0
	}
	if(vl_saldo != 0){
		elements.vl_saldo.bgcolor = '#ff3c3c'
	}else{
		elements.vl_saldo.bgcolor = '#80ff80'
	}
}
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"839EE888-E8D3-437B-97A0-E24DE5C3FF4E"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_ventas.controller.getName()))
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B0223F9E-2E73-4EBE-867F-2FBC5EF0F3CD"}
 */
function onActionVolver(event) {
	application.getWindow("cerrarVta").hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"38618D5F-7AD2-4001-A227-DA0F0AF67E14"}
 */
function onHide(event) {
	application.getWindow("cerrarVta").hide()
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
 * @properties={typeid:24,uuid:"DBCFEE1B-49A3-4512-81BA-82E8BFF297D7"}
 */
function onDataChangeDto(oldValue, newValue, event) {
	cambiaDescuento()
	return true
}

/**
 * @properties={typeid:24,uuid:"C0507645-AD26-446A-A792-E50F0BFDF20B"}
 */
function cambiaDescuento(){
	var descuento_porc = vl_descuento/100
	var descuento_imp = vl_total_vta * descuento_porc
	vl_total_total = vl_total_vta - descuento_imp
	vl_saldo = vl_total_total - vl_pago
	vl_vuelto = vl_pago - vl_total_total
	if(vl_saldo < 0){
		vl_saldo = 0
	}
	if(vl_saldo != 0){
		elements.vl_saldo.bgcolor = '#ff3c3c'
	}else{
		elements.vl_saldo.bgcolor = '#80ff80'
	}
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
 * @properties={typeid:24,uuid:"33CEC8A7-78CE-4218-BD19-D17049FFBB63"}
 */
function onDataChangePago(oldValue, newValue, event) {
	vl_saldo = vl_total_total - vl_pago
	vl_vuelto = vl_pago - vl_total_total
	if(vl_vuelto < 0){
		vl_vuelto = 0
	}
	if(vl_saldo < 0){
		vl_saldo = 0
	}
	if(vl_saldo != 0){
		elements.vl_saldo.bgcolor = '#ff3c3c'
	}else{
		elements.vl_saldo.bgcolor = '#80ff80'
	}
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67931346-D686-4842-B629-A4C07459CEF6"}
 */
function onActionCancelar(event) {
	vl_pago = vl_total_total
	vl_saldo = vl_total_total - vl_pago
	vl_vuelto = vl_pago - vl_total_total
	if(vl_vuelto < 0){
		vl_vuelto = 0
	}
	if(vl_saldo < 0){
		vl_saldo = 0
	}
	if(vl_saldo != 0){
		elements.vl_saldo.bgcolor = '#ff3c3c'
	}else{
		elements.vl_saldo.bgcolor = '#80ff80'
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FE591923-D530-497B-A425-A2E8FA112357"}
 */
function onActionGrabar(event) {
	forms.p_ventas_nuevo.vta_cod_postal_id = forms.p_ventas_nuevo.pel_ventas_to_adn.cod_postal_id
	forms.p_ventas_nuevo.vta_dom_cliente = forms.p_ventas_nuevo.pel_ventas_to_adn.adn_domicilio
	forms.p_ventas_nuevo.vta_dto_1 = vl_descuento
	forms.p_ventas_nuevo.vta_fecha_emision = application.getServerTimeStamp()
	forms.p_ventas_nuevo.vta_importe_pago = vl_pago
	forms.p_ventas_nuevo.vta_importe_total = vl_total_total
	forms.p_ventas_nuevo.vta_nombre_cliente = forms.p_ventas_nuevo.pel_ventas_to_adn.adn_nombre
	forms.p_ventas_nuevo.vta_observa = vl_observa
	
	
	///////////Graba Stock/////////
	/** @type {JSFoundset<db:/peluqueria/prd_movimientos>}*/
	var fs_mov = databaseManager.getFoundSet('peluqueria','prd_movimientos')
	var cant = databaseManager.getFoundSetCount(forms.p_ventas_nuevo_prd.foundset)
	for (var index = 1; index <= cant; index++) {
		var record = forms.p_ventas_nuevo_prd.foundset.getRecord(index);
		if(record.prd_id != 0){
			if(record.pel_ventas_prd_to_prd_productos.prd_controla_stock == 0){
				fs_mov.newRecord()
				fs_mov.prd_id = record.prd_id
				fs_mov.mov_ing = 0
				fs_mov.mov_egr = record.prd_cant
				fs_mov.venta_id = record.venta_id
				fs_mov.mov_fecha = application.getServerTimeStamp()
				fs_mov.mov_tipo = 1
				fs_mov.mov_causa = 1
			}
		}
	}
	databaseManager.saveData(fs_mov)
	
	///////////Graba Caja/////////
	/** @type {JSFoundset<db:/peluqueria/cj_ingresos>}*/
	var fs_cj_ing = databaseManager.getFoundSet('peluqueria','cj_ingresos')
	fs_cj_ing.newRecord()
	fs_cj_ing.cj_ing_importe = vl_pago
	fs_cj_ing.conc_cod = 1
	fs_cj_ing.conc_nombre = fs_cj_ing.cj_ingresos_to_cj_conceptos.conc_nombre
	fs_cj_ing.venta_id = forms.p_ventas_nuevo.venta_id
	databaseManager.saveData(fs_cj_ing)
	
	if(vl_pago > vl_total_total){
		/** @type {JSFoundset<db:/peluqueria/cj_egresos>}*/
		var fs_cj_egr = databaseManager.getFoundSet('peluqueria','cj_egresos')
		fs_cj_egr.newRecord()
		fs_cj_egr.cj_egr_importe = vl_saldo * -1
		fs_cj_egr.conc_cod = 2
		fs_cj_egr.conc_nombre = fs_cj_egr.cj_egresos_to_cj_conceptos.conc_nombre
		fs_cj_egr.venta_id = forms.p_ventas_nuevo.venta_id
		databaseManager.saveData(fs_cj_egr)
	}
	
	databaseManager.saveData()
	application.getWindow().hide()
	forms.p_ventas.controller.show()
}
