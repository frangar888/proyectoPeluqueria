/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E300F89E-FCDB-4AA2-83AB-0A61DD594693",variableType:4}
 */
var vl_prd_tipo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B906EE65-C2C0-4BD4-9DD0-A9D6E50D7BD0",variableType:4}
 */
var vl_prd_tipo_tt = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E25DD7BE-5FF5-45D1-8E3A-090F5F17643F",variableType:4}
 */
var vl_prd_tipo_serv = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DB436499-AF89-43F7-9313-548F0223CE16",variableType:4}
 */
var vl_prd_tipo_prd = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"602C7E7F-4D06-438F-BFC3-FE5FE7E8451E"}
 * @AllowToRunInFind
 */
function onActionAgregarPrd(event) {
	
	/** @type {JSFoundset<db:/peluqueria/pel_ventas_prd>}*/
	var record = forms.p_ventas_nuevo_prd.validarExistencia(prd_id)
	
	if(prd_controla_stock == 1){
		var cant_en_stock = globals.obtieneStock(prd_id)
		if(record == null){
			if(cant_en_stock < 1){
				globals.lanzarVentanaEmergente(0,'La cantidad ingresada es mayor a la cantidad en stock del porducto. Cantidad: '+cant_en_stock,'Info',controller.getName(),null,null)
				return
			}else{
				forms.p_ventas_nuevo_prd.controller.newRecord()
				forms.p_ventas_nuevo_prd.prd_cant = 1
				forms.p_ventas_nuevo_prd.prd_cod_bar = prd_cod_bar
				forms.p_ventas_nuevo_prd.prd_codigo = prd_codigo
				forms.p_ventas_nuevo_prd.prd_costo = prd_costo
				forms.p_ventas_nuevo_prd.prd_id = prd_id
				forms.p_ventas_nuevo_prd.prd_nombre = prd_nombre
				forms.p_ventas_nuevo_prd.prd_peso = prd_peso
				forms.p_ventas_nuevo_prd.prd_precio = prd_precio
				forms.p_ventas_nuevo_prd.prd_presentacion = prd_presentacion
				forms.p_ventas_nuevo_prd.venta_id = forms.p_ventas_new.venta_id
			}
		}else{
			if(cant_en_stock < record.prd_cant + 1){
				globals.lanzarVentanaEmergente(0,'La cantidad ingresada es mayor a la cantidad en stock del porducto. Cantidad: '+cant_en_stock,'Info',controller.getName(),null,null)
				return
			}else{
				record.prd_cant += 1
			}
		}
	}else{
		if(record == null){
			forms.p_ventas_nuevo_prd.controller.newRecord()
			forms.p_ventas_nuevo_prd.prd_cant = 1
			forms.p_ventas_nuevo_prd.prd_cod_bar = prd_cod_bar
			forms.p_ventas_nuevo_prd.prd_codigo = prd_codigo
			forms.p_ventas_nuevo_prd.prd_costo = prd_costo
			forms.p_ventas_nuevo_prd.prd_id = prd_id
			forms.p_ventas_nuevo_prd.prd_nombre = prd_nombre
			forms.p_ventas_nuevo_prd.prd_peso = prd_peso
			forms.p_ventas_nuevo_prd.prd_precio = prd_precio
			forms.p_ventas_nuevo_prd.prd_presentacion = prd_presentacion
			forms.p_ventas_nuevo_prd.venta_id = forms.p_ventas_new.venta_id
			forms.p_ventas_nuevo_prd.calcularTotal()
		}else{
			record.prd_cant += 1
		}
	}
	forms.p_ventas_nuevo_prd.calcularTotal()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BB74C235-8EA3-4277-B40A-676E1B8D8317"}
 */
function onShow(firstShow, event) {
	vl_prd_tipo_prd = 0
	vl_prd_tipo_serv = 1
	vl_prd_tipo_tt = 0
	vl_prd_tipo = 2
	filtrar()
}

/**
 * @properties={typeid:24,uuid:"FC81A46B-58B1-476C-B909-3F0D426EAE96"}
 * @AllowToRunInFind
 */
function filtrar(){
	controller.find()
	if(vl_prd_tipo != null){
		prd_tipo = vl_prd_tipo
	}
/*	if(vl_prd_tipo_prd == 1 && vl_prd_tipo_serv == 0 && vl_prd_tipo_tt == 0){
		prd_tipo = 1
	}
	if(vl_prd_tipo_prd == 0 && vl_prd_tipo_serv == 1 && vl_prd_tipo_tt == 0){
		prd_tipo = 2
	}
	if(vl_prd_tipo_prd == 0 && vl_prd_tipo_serv == 0 && vl_prd_tipo_tt == 1){
		prd_tipo = 3
	}
	if(vl_prd_tipo_prd == 1 && vl_prd_tipo_serv == 1 && vl_prd_tipo_tt == 0){
		prd_tipo = '1 || 2'
	}
	if(vl_prd_tipo_prd == 1 && vl_prd_tipo_serv == 0 && vl_prd_tipo_tt == 1){
		prd_tipo = '1 || 3'
	}
	if(vl_prd_tipo_prd == 0 && vl_prd_tipo_serv == 1 && vl_prd_tipo_tt == 1){
		prd_tipo = '2 || 3'
	}
	if(vl_prd_tipo_prd == 1 && vl_prd_tipo_serv == 1 && vl_prd_tipo_tt == 1){
		prd_tipo = '1 || 2 || 3'
	}*/
	
	controller.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7A0A70E1-13BB-49B6-8A09-BC02C9AE4FD3"}
 */
function onActionNoPrd(event) {
	var win1 = application.createWindow("nuevoNoPrd", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_ventas_nuevo_add_no_prd);
}
