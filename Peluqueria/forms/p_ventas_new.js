/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"74087287-857A-431C-B401-0C528A1EC76F",variableType:8}
 */
var vl_saldo_cli = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3DAEBC5E-0B10-4DF6-936C-64BD7A345364"}
 */
var vl_no_cliente = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B350C07E-B5FD-4B1C-879F-CCD37B347AA6",variableType:8}
 */
var vl_vuelto = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"93FB557B-67F8-4C2A-8BD4-3E0A22029B9B",variableType:8}
 */
var vl_total_vta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DF274E5F-9E8E-4C8E-B50C-D42E403A3124",variableType:8}
 */
var vl_total_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B58C41D4-D49E-4E5E-A69F-9D2F4F502A49",variableType:8}
 */
var vl_saldo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5C980BC6-A849-4B83-AA8C-79460EA7B009",variableType:8}
 */
var vl_pago = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"92C3764B-8B50-4B40-AD4F-BA5F6B784CD3"}
 */
var vl_observa = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CD20E1AE-790F-4F1D-8FD6-CDD0EA0CE144",variableType:8}
 */
var vl_descuento = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D3DFC694-1232-45A0-A9C5-197799A4E1E7"}
 */
var vl_form_padre = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0659F89D-DE89-4F32-96DB-D2948DCD1185"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
//	elements.tabs.leftFormMinSize = 600
	//elements.tabs.setSize(800,500)
	elements.tabs.dividerLocation = 0.5
	controller.newRecord()
	forms.p_ventas_nuevo_prd.foundset.clear()
	forms.p_ventas_nuevo_prd.vl_cant_prd = 0
	forms.p_ventas_nuevo_prd.vl_total = 0
	elements.vl_no_cliente.visible = false
	elements.vl_cliente.visible = true
	elements.btn_no_cli.text = 'No Cliente'
	inicializarVariables()
vl_saldo_cli = null
/*	var ancho = elements.tabs.getWidth()
	var pos = elements.tabs.getLocationX()
	var posTotales = ancho + pos
	elements.tabs.dividerLocation = ancho / 2
	elements.grp_totales.setLocation(posTotales,241)*/
}

/**
 * @properties={typeid:24,uuid:"1091DC3D-FA4A-4F75-B53A-77476BCBF4A3"}
 */
function onActionVolver(){
	databaseManager.revertEditedRecords()
	forms[vl_form_padre].controller.show()
}

/**
 * @AllowToRunInFind
 * 
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"DBE7A8D1-AED0-4082-B363-A1E11613DD2B"}
 */
function onActionConsFinal(event) {
	/** @type {JSFoundset<db:/peluqueria/ccc_clientes>}*/
	var fs_ccc = databaseManager.getFoundSet('peluqueria','ccc_clientes')
	fs_ccc.loadAllRecords()
	fs_ccc.find()
	fs_ccc.c_codigo = "0"
	if(fs_ccc.search() != 0){
		adn_id = fs_ccc.adn_id
	}
	elements.vl_cliente.visible = true
	elements.vl_no_cliente.visible = false
	vl_no_cliente = null
	elements.btn_no_cli.text = 'No Cliente'
	if(adn_id != 0 && adn_id != null && adn_id != globals.obtenerAdnConsFinal()){
		vl_saldo_cli = globals.calcularSaldoCliente(adn_id)
	}else{
		vl_saldo_cli = null
	}
}

/**
 * @properties={typeid:24,uuid:"A989E371-511C-49DB-A946-AC5065AB05DB"}
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
 * @properties={typeid:24,uuid:"885F8F03-DE70-40FF-850A-889E03896FDC"}
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
 * 
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"ECDABE68-561A-4406-BDF3-06108BE8173B"}
 */
function onDataChangeDto(oldValue, newValue, event) {
	cambiaDescuento()
	return true
}


/**
 * 
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"7529E46B-6F8D-4777-90C4-0CB9BADDB847"}
 */
function onDataChangePago(oldValue, newValue, event) {
	vl_saldo = vl_total_total - vl_pago
	vl_vuelto = vl_pago - vl_total_total
	if(vl_vuelto < 0){
		vl_vuelto = 0
	}
//	if(vl_saldo < 0){
//		vl_saldo = 0
//	}
	if(vl_saldo > 0){
		elements.vl_saldo.bgcolor = '#ff3c3c'
	}else{
		elements.vl_saldo.bgcolor = '#80ff80'
	}
	return true
}

/**
 * 
 * @param event
 *
 * @properties={typeid:24,uuid:"3EF6A7AC-91CB-496E-B18F-53EC5E2AF556"}
 */
function onActionCancelar(event) {
	if (vl_saldo_cli != 0 && vl_saldo_cli != null){
		vl_pago = vl_total_total + vl_saldo_cli
	}else{
		vl_pago = vl_total_total
	}
	vl_saldo = vl_total_total - vl_pago
	vl_vuelto = vl_pago - vl_total_total
	if(vl_vuelto < 0){
		vl_vuelto = 0
	}
//	if(vl_saldo < 0){
//		vl_saldo = 0
//	}
	if(vl_saldo > 0){
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
 * @properties={typeid:24,uuid:"57CD5771-9A7A-4E9F-9906-F2E9A443286D"}
 */
function onActionCerrar(event) {
	if(elements.btn_no_cli.text == 'Cliente'){
		if(vl_no_cliente == null || vl_no_cliente == ''){
			globals.lanzarVentanaEmergente(0,'Ingrese nombre del Cliente.','Info',controller.getName(),null,null)
			return
		}
		if(vl_saldo != 0){
			globals.lanzarVentanaEmergente(0,'Esta vendiendo a un No Cliente. No puede quedar saldo a cuenta corriente.','Info',controller.getName(),null,null)
			return
		}
	}else{
		if(adn_id == null || adn_id == 0){
			globals.lanzarVentanaEmergente(0,'Seleccione un Cliente.','Info',controller.getName(),null,null)
			return
		}
	}
	if(vendedor_adn_id == null || vendedor_adn_id == 0){
		globals.lanzarVentanaEmergente(0,'Seleccione un Vendedor.','Info',controller.getName(),null,null)
		return
	}
	if(forms.p_ventas_nuevo_prd.foundset.getSize() == 0){
		globals.lanzarVentanaEmergente(0,'La Venta no tiene ningún producto.','Info',controller.getName(),null,null)
		return
	}
	if(elements.btn_no_cli.text == 'Cliente'){
		vta_nombre_cliente = vl_no_cliente
		vta_cod_postal_id = 0
		vta_dom_cliente = null
	}else{
		vta_nombre_cliente = pel_ventas_to_adn.adn_nombre
		vta_cod_postal_id = pel_ventas_to_adn.cod_postal_id
		vta_dom_cliente = pel_ventas_to_adn.adn_domicilio
	}
	vta_dto_1 = vl_descuento
	vta_fecha_emision = application.getServerTimeStamp()
	vta_importe_pago = vl_pago
	vta_importe_total = vl_total_total
	
	vta_observa = vl_observa
	
	
	///////////Graba Stock y  Comision/////////
	/** @type {JSFoundset<db:/peluqueria/prd_movimientos>}*/
	var fs_mov = databaseManager.getFoundSet('peluqueria','prd_movimientos')
	
	/** @type {JSFoundset<db:/peluqueria/adn_ven_comisiones>}*/
	var fs_com = databaseManager.getFoundSet('peluqueria','adn_ven_comisiones')
	
	/** @type {JSFoundset<db:/peluqueria/cj_ingresos>}*/
	var fs_cj_ing = databaseManager.getFoundSet('peluqueria','cj_ingresos')
	
	/** @type {JSFoundset<db:/peluqueria/cj_egresos>}*/
	var fs_cj_egr = databaseManager.getFoundSet('peluqueria','cj_egresos')
	
	var totalCom = 0
	var comXprd = 0
	var cant = databaseManager.getFoundSetCount(forms.p_ventas_nuevo_prd.foundset)
	for (var index = 1; index <= cant; index++) {
		var record = forms.p_ventas_nuevo_prd.foundset.getRecord(index);
		if(record.prd_id != 0){
			if(record.pel_ventas_prd_to_prd_productos.prd_tipo == 1){
				if(record.pel_ventas_prd_to_prd_productos.prd_comision_imp != 0 && record.pel_ventas_prd_to_prd_productos.prd_comision_imp != null){
					comXprd = record.pel_ventas_prd_to_prd_productos.prd_comision_imp
				}else{
					if(pel_ventas_to_adn_vendedores.ven_com_x_prd != 0){
						comXprd = record.calc_subtotal * (forms.p_ventas_new.pel_ventas_to_adn_vendedores.ven_com_x_prd / 100)
					}
				}
			}
			
			if(record.pel_ventas_prd_to_prd_productos.prd_tipo == 2){
				if(record.pel_ventas_prd_to_prd_productos.prd_comision_imp != 0 && record.pel_ventas_prd_to_prd_productos.prd_comision_imp != null){
					comXprd = record.pel_ventas_prd_to_prd_productos.prd_comision_imp
				}else{
					if(pel_ventas_to_adn_vendedores.ven_com_x_serv != 0){
						comXprd = record.calc_subtotal * (forms.p_ventas_new.pel_ventas_to_adn_vendedores.ven_com_x_serv / 100)
					}
				}
			}
			
			if(record.pel_ventas_prd_to_prd_productos.prd_tipo == 3){
				if(record.pel_ventas_prd_to_prd_productos.prd_comision_imp != 0 && record.pel_ventas_prd_to_prd_productos.prd_comision_imp != null){
					comXprd = record.pel_ventas_prd_to_prd_productos.prd_comision_imp
				}else{
					if(pel_ventas_to_adn_vendedores.ven_com_x_tt != 0){
						comXprd = record.calc_subtotal * (forms.p_ventas_new.pel_ventas_to_adn_vendedores.ven_com_x_tt / 100)
					}
				}
			}
			
			totalCom += comXprd
			if(record.pel_ventas_prd_to_prd_productos.prd_controla_stock == 1){
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
	
	fs_com.newRecord()
	fs_com.adn_id = forms.p_ventas_new.vendedor_adn_id
	fs_com.com_estado = 0
	fs_com.com_importe = totalCom
	fs_com.venta_id = venta_id
	databaseManager.saveData(fs_mov)
	
	///////////Graba Caja/////////

	fs_cj_ing.newRecord()
	fs_cj_ing.cj_ing_importe = vl_pago
	fs_cj_ing.conc_cod = 1
	fs_cj_ing.conc_nombre = fs_cj_ing.cj_ingresos_to_cj_conceptos.conc_nombre
	fs_cj_ing.venta_id = forms.p_ventas_nuevo.venta_id
	fs_cj_ing.cj_ing_fecha = application.getServerTimeStamp()
	fs_cj_ing.user_id = globals.vg_user_id
	fs_cj_ing.vendedor_adn_id = vendedor_adn_id
	
	
	
	if(vl_pago > vl_total_total){
		fs_cj_egr.newRecord()
		fs_cj_egr.cj_egr_importe = vl_saldo * -1
		fs_cj_egr.conc_cod = 2
		fs_cj_egr.conc_nombre = fs_cj_egr.cj_egresos_to_cj_conceptos.conc_nombre
		fs_cj_egr.venta_id = forms.p_ventas_nuevo.venta_id
		fs_cj_egr.cj_egr_fecha = application.getServerTimeStamp()
		fs_cj_egr.user_id = globals.vg_user_id
		
		
	}
	

	
	databaseManager.saveData()
	databaseManager.saveData(fs_com)
	fs_cj_ing.cj_desc = "Ingreso por Venta "+venta_id+"; Cliente: "+vta_nombre_cliente
	fs_cj_egr.cj_desc = "Vuelto por Venta "+venta_id+"; Cliente: "+vta_nombre_cliente
	databaseManager.saveData(fs_cj_ing)
	databaseManager.saveData(fs_cj_egr)
	onShow(null,null)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C6ED89F7-1619-4D57-A490-76A04A9452FD"}
 * @AllowToRunInFind
 */
function onActionNoCliente(event) {
	if(elements.btn_no_cli.text == 'No Cliente'){
		/** @type {JSFoundset<db:/peluqueria/ccc_clientes>}*/
		var fs_ccc = databaseManager.getFoundSet('peluqueria','ccc_clientes')
		fs_ccc.loadAllRecords()
		fs_ccc.find()
		fs_ccc.c_codigo = "0"
		if(fs_ccc.search() != 0){
			adn_id = fs_ccc.adn_id
		}
		elements.vl_cliente.visible = false
		elements.vl_no_cliente.visible = true
		vl_no_cliente = "No Cliente"
		elements.btn_no_cli.text = 'Cliente'
	}else{
		adn_id = null
		elements.vl_cliente.visible = true
		elements.vl_no_cliente.visible = false
		vl_no_cliente = null
		elements.btn_no_cli.text = 'No Cliente'
	}
	if(adn_id != 0 && adn_id != null && adn_id != globals.obtenerAdnConsFinal()){
		vl_saldo_cli = globals.calcularSaldoCliente(adn_id)
	}else{
		vl_saldo_cli = null
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"01C614FF-28C4-4B35-9195-23C6D0A02451"}
 */
function onDataChangeCliente(oldValue, newValue, event) {
	if(adn_id != 0 && adn_id != null && adn_id != globals.obtenerAdnConsFinal()){
		vl_saldo_cli = globals.calcularSaldoCliente(adn_id)
	}else{
		vl_saldo_cli = null
	}
	return true
}
