/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F4E15793-0E54-4026-8090-2D2E17DB4DFF",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2BAF2170-EA2C-43FC-8641-E89E6D64899D",variableType:8}
 */
var vl_cantidad = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4712141E-4BE2-47FB-A008-D39A6DD17395",variableType:8}
 */
var vl_precio_final = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1721F86A-757F-4FA2-95ED-E0A7317798D7",variableType:8}
 */
var vl_dto_1 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DB6A7A84-A3FA-406F-89B9-704539A1FBA6",variableType:8}
 */
var vl_precio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F39B38EF-617E-4772-988A-02534D77FDCA"}
 */
var vl_nombre = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"45934439-0FDF-475D-B190-98B783179FBB"}
 */
function onDataChangeDto(oldValue, newValue, event) {
	cambiaDescuento()
	cambiaCantidad()
	return true
}

/**
 * @properties={typeid:24,uuid:"2C881B6E-E408-4280-8CD6-B4D75649167A"}
 */
function cambiaDescuento(){
	var descuento_porc = vl_dto_1/100
	var descuento_imp = vl_precio * descuento_porc
	vl_precio_final = vl_precio - descuento_imp
}

/**
 * @properties={typeid:24,uuid:"0318302E-9119-488A-A825-B2AC50C6DA41"}
 */
function cambiaCantidad(){
	vl_subtotal = vl_cantidad * vl_precio_final
}

/**
 * TODO generated, please specify type and doc for the params
 * @param oldValue
 * @param newValue
 * @param event
 *
 * @properties={typeid:24,uuid:"E477CEEA-E8DC-4732-9471-60EBC2363433"}
 */
function onDataChangeCantidad(oldValue, newValue, event) {
	cambiaCantidad()
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
 * @properties={typeid:24,uuid:"9C4A7F6D-89CA-4DAA-ADE9-B6457E273A19"}
 */
function onDataChangePrecio(oldValue, newValue, event) {

	return true
}

/**
 * @properties={typeid:24,uuid:"42A7A311-E568-4733-AD22-268CDD9C790C"}
 */
function inicializarVariables(){
	vl_cantidad = null
	vl_nombre = null
	vl_precio = null
	vl_subtotal = null
	vl_dto_1 = null
	vl_precio_final = null
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"68F6FA04-150C-48F6-9ADF-B4CB340B21D5"}
 */
function onShow(firstShow, event) {
	inicializarVariables()
	elements.vl_nombre.requestFocus()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EA7A127D-8D78-4830-AD0A-45C48191013E"}
 * @AllowToRunInFind
 */
function onActionAceptar(event) {
	if(vl_nombre == null || vl_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Seleccione un producto.','Info',controller.getName(),null,null)
		return
	}
	if(vl_cantidad == null || vl_cantidad == 0){
		globals.lanzarVentanaEmergente(0,'Ingrese la cantidad.','Info',controller.getName(),null,null)
		return
	}
	
		forms.p_ventas_nuevo_prd.controller.newRecord()
		forms.p_ventas_nuevo_prd.venta_id = forms.p_ventas_nuevo.venta_id
		forms.p_ventas_nuevo_prd.prd_cant = vl_cantidad
		forms.p_ventas_nuevo_prd.prd_cod_bar = 0
		forms.p_ventas_nuevo_prd.prd_codigo = 0
		forms.p_ventas_nuevo_prd.prd_costo = 0
		forms.p_ventas_nuevo_prd.prd_id = 0
		forms.p_ventas_nuevo_prd.prd_nombre = vl_nombre
		forms.p_ventas_nuevo_prd.prd_peso = 0
		forms.p_ventas_nuevo_prd.prd_precio = vl_precio
		forms.p_ventas_nuevo_prd.prd_presentacion = 0
		forms.p_ventas_nuevo_prd.prd_dto_1 = vl_dto_1
		forms.p_ventas_nuevo_prd.calcularTotal()
		
		inicializarVariables()
		elements.vl_nombre.requestFocus()

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"10EBF0EE-3C11-42F1-8C15-FE95487D8B94"}
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
 * @properties={typeid:24,uuid:"FCCA4657-D4B8-43E5-A36A-AA22B925275C"}
 */
function onHide(event) {
	application.getWindow().hide()
	return true
}
