/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E8707587-0393-444C-B14C-CE976145F9A6",variableType:4}
 */
var vl_empleado = null;

/**
 * @type {Array}
 * @properties={typeid:35,uuid:"291A7B3F-C7B5-4BFC-8630-B8B49FDDEF53",variableType:-4}
 */
var vl_array_ventas = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FCEFE628-B6D3-4310-980D-1826DB5B558D",variableType:4}
 */
var vl_caja_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B9D2A44D-1D78-4F68-A745-E0E39A7D26F4",variableType:8}
 */
var vl_imp_total = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0D2F11AF-D50D-4699-B093-4D1530CDFA83",variableType:8}
 */
var vl_cj_ing_importe = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D4FD0E4D-7342-4C59-A736-AA4BB11444C2"}
 */
var vl_conc_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E9E46705-832E-466C-A3A2-4C52A92A94D3",variableType:4}
 */
var vl_conc_cod = null;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"78C75865-F6DD-4AF4-A130-82B614001E4B"}
 */
function onShow(firstShow, event) {
	vl_conc_cod = 1
	vl_caja_id = null
	vl_cj_ing_importe = null
	vl_empleado = null
	//elements.vl_conc_cod.enabled = false
	elements.btn_monedas.visible = true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4A5D0E54-D607-42D1-BF75-D7310394C792"}
 */
function onActionVolver(event) {
	application.getWindow().hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"2F0E2D47-06BE-48D1-A9E7-7778A33003B1"}
 */
function onHide(event) {
	application.getWindow().hide()
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2AC5A881-D9D5-4229-8921-BD7ED994CE58"}
 */
function onActionCancelarTotal(event) {
	vl_cj_ing_importe = vl_imp_total
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3E6587AA-4EC1-4D61-A242-8E439B102E1A"}
 * @AllowToRunInFind
 */
function onActionGrabar(event) {
	
	if(vl_empleado == null){
		globals.lanzarVentanaEmergente(0,'Seleccione un empleado.','Info',controller.getName(),null,null)
		return
	}
	
	if(vl_cj_ing_importe == 0){
		globals.lanzarVentanaEmergente(0,'Debe completar el importe del ingreso.','Info',controller.getName(),null,null)
		elements.vl_cj_ing_importe.requestFocus()
		return
	}
	
	/** @type {JSFoundset<db:/peluqueria/pel_ventas>}*/
	var fs_vtas = databaseManager.getFoundSet('peluqueria','pel_ventas')
	
	var cantVtas = vl_array_ventas.length - 1
	if(vl_array_ventas != null){
		var vl_resto = vl_cj_ing_importe
		for (var index = 0; index < vl_array_ventas.length; index++) {
			if(vl_resto > 0){
				controller.newRecord()
				cj_ing_fecha = application.getServerTimeStamp()
				vendedor_adn_id = vl_empleado
				fs_vtas.loadAllRecords()
				fs_vtas.find()
				fs_vtas.venta_id = vl_array_ventas[index]
				if(fs_vtas.search() != 0){
					if(vl_resto >= fs_vtas.calc_saldo_vta && index < cantVtas){
						cj_ing_importe = fs_vtas.calc_saldo_vta
						vl_resto = vl_resto - fs_vtas.calc_saldo_vta
					}
					if(vl_resto >= fs_vtas.calc_saldo_vta && index == cantVtas){
						cj_ing_importe = vl_resto
						vl_resto = 0
					}
					if(vl_cj_ing_importe < fs_vtas.calc_saldo_vta){
						cj_ing_importe = vl_cj_ing_importe
						vl_resto = vl_resto - vl_cj_ing_importe
					}
				}
				conc_cod = vl_conc_cod
				conc_nombre = cj_ingresos_to_cj_conceptos.conc_nombre
				user_id = globals.vg_user_id
				venta_id = vl_array_ventas[index]
				cj_desc = "Ingreso por Venta "+venta_id+"; Cliente: "+forms.p_clientes_ver.ccc_clientes_to_adn.adn_nombre
				databaseManager.saveData()
				forms.p_clientes_ver_tab_vtas.calcularTotales()
			}
		}
	}
	
	
    application.getWindow().hide()
}
