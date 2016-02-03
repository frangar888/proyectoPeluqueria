/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2718E6E9-3B05-4A40-ACA0-D479C1F29B6B",variableType:8}
 */
var vl_precio_final = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"614A2ED3-082A-45F5-91AE-AD6B4D7FC42C",variableType:8}
 */
var vl_dto_1 = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A4FE30D6-E7A5-42B9-9EDA-1452EC4E3A81",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1708D031-2722-4AA1-B11A-B8E87085349D",variableType:8}
 */
var vl_cantidad = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"116D459A-F67F-4D3E-B3C4-B3EE9A65D820",variableType:8}
 */
var vl_precio = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D9C6087D-F872-415F-B947-4F28BBC04C84"}
 */
var vl_cod_barra = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A18E780C-0A13-4C74-8D6A-4A79DAA7F69C",variableType:4}
 */
var vl_prd_id = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2F8B18F1-6703-4497-BE23-DCBA9D444EAB"}
 */
var vl_codigo = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E9C16064-DDF6-47E1-9241-B40365A1E611"}
 */
function onShow(firstShow, event) {
	inicializarVariables()
	elements.vl_codigo.requestFocus()
}

/**
 * @properties={typeid:24,uuid:"45B829BE-49CF-465E-9A5F-E397CDACC9D9"}
 */
function inicializarVariables(){
	vl_cantidad = null
	vl_cod_barra = null
	vl_codigo = null
	vl_prd_id = null
	vl_precio = null
	vl_subtotal = null
	vl_dto_1 = null
	vl_precio_final = null
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
 * @properties={typeid:24,uuid:"30E5036E-AF8B-48A3-9DC0-96E51F4DEC07"}
 * @AllowToRunInFind
 */
function onDataChangeCodigo(oldValue, newValue, event) {
	/** @type {JSFoundset<db:/peluqueria/prd_productos>}*/
	var fs_prd = databaseManager.getFoundSet('peluqueria','prd_productos')
	fs_prd.find()
	fs_prd.prd_codigo = vl_codigo
	if(fs_prd.search() != 0){
		vl_cod_barra = fs_prd.prd_cod_bar
		vl_prd_id = fs_prd.prd_id
		vl_precio = fs_prd.prd_precio
		if(vl_dto_1 != null && vl_dto_1 != 0){
			cambiaDescuento()
		}else{
			vl_precio_final = vl_precio
		}
		elements.vl_cantidad.requestFocus()
		cambiaCantidad()
	}else{
		inicializarVariables()
	}
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
 * @properties={typeid:24,uuid:"FA6BC2CA-4899-4D76-BD5D-1EC3D95B677F"}
 * @AllowToRunInFind
 */
function onDataChangePrdId(oldValue, newValue, event) {
	/** @type {JSFoundset<db:/peluqueria/prd_productos>}*/
	var fs_prd = databaseManager.getFoundSet('peluqueria','prd_productos')
	fs_prd.find()
	fs_prd.prd_id = vl_prd_id
	if(fs_prd.search() != 0){
		vl_cod_barra = fs_prd.prd_cod_bar
		vl_codigo = fs_prd.prd_codigo
		vl_precio = fs_prd.prd_precio
		if(vl_dto_1 != null && vl_dto_1 != 0){
			cambiaDescuento()
		}else{
			vl_precio_final = vl_precio
		}
		elements.vl_cantidad.requestFocus()
		cambiaCantidad()
	}else{
		inicializarVariables()
	}
	return true
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
 * @properties={typeid:24,uuid:"9D812F4C-9641-4554-9F86-DB4ACED1AE1D"}
 * @AllowToRunInFind
 */
function onDataChangeCodBar(oldValue, newValue, event) {
	/** @type {JSFoundset<db:/peluqueria/prd_productos>}*/
	var fs_prd = databaseManager.getFoundSet('peluqueria','prd_productos')
	fs_prd.find()
	fs_prd.prd_cod_bar = vl_cod_barra
	if(fs_prd.search() != 0){
		vl_codigo = fs_prd.prd_codigo
		vl_prd_id = fs_prd.prd_id
		vl_precio = fs_prd.prd_precio
		if(vl_dto_1 != null && vl_dto_1 != 0){
			cambiaDescuento()
		}else{
			vl_precio_final = vl_precio
		}
		cambiaCantidad()
		elements.vl_cantidad.requestFocus()
	}else{
		inicializarVariables()
	}
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
 * @properties={typeid:24,uuid:"6CD1005B-6CA1-4CE6-A579-289500D52C16"}
 */
function onDataChangeCantidad(oldValue, newValue, event) {
	cambiaCantidad()
	return true
}

/**
 * @properties={typeid:24,uuid:"8A7E9A5F-A11B-470A-868B-838B4394EFF1"}
 */
function cambiaCantidad(){
	var cant_en_stock = globals.obtieneStock(vl_prd_id)
	if(cant_en_stock >= vl_cantidad){
		vl_subtotal = vl_cantidad * vl_precio_final
	}else{
		globals.lanzarVentanaEmergente(0,'La cantidad ingresada es mayor a la cantidad en stock del porducto. Cantidad: '+cant_en_stock,'Info',controller.getName(),null,null)
		return
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A15722DE-9CA4-42AB-8430-2FB06C221C7E"}
 * @AllowToRunInFind
 */
function onActionAceptar(event) {
	if(vl_prd_id == null || vl_prd_id == 0){
		globals.lanzarVentanaEmergente(0,'Seleccione un producto.','Info',controller.getName(),null,null)
		return
	}
	if(vl_cantidad == null || vl_cantidad == 0){
		globals.lanzarVentanaEmergente(0,'Ingrese la cantidad.','Info',controller.getName(),null,null)
		return
	}
	var cant_en_stock = globals.obtieneStock(vl_prd_id)
	if(cant_en_stock < vl_cantidad){
		globals.lanzarVentanaEmergente(0,'La cantidad ingresada es mayor a la cantidad en stock del porducto. Cantidad: '+cant_en_stock,'Info',controller.getName(),null,null)
		return
	}
		/** @type {JSFoundset<db:/peluqueria/prd_productos>}*/
		var fs_prd = databaseManager.getFoundSet('peluqueria','prd_productos')
		fs_prd.find()
		fs_prd.prd_id = vl_prd_id
		if(fs_prd.search() != 0){
			forms.p_ventas_nuevo_prd.controller.newRecord()
			forms.p_ventas_nuevo_prd.venta_id = forms.p_ventas_nuevo.venta_id
			forms.p_ventas_nuevo_prd.prd_cant = vl_cantidad
			forms.p_ventas_nuevo_prd.prd_cod_bar = fs_prd.prd_cod_bar
			forms.p_ventas_nuevo_prd.prd_codigo = fs_prd.prd_codigo
			forms.p_ventas_nuevo_prd.prd_costo = fs_prd.prd_costo
			forms.p_ventas_nuevo_prd.prd_id = vl_prd_id
			forms.p_ventas_nuevo_prd.prd_nombre = fs_prd.prd_nombre
			forms.p_ventas_nuevo_prd.prd_peso = fs_prd.prd_peso
			forms.p_ventas_nuevo_prd.prd_precio = vl_precio
			forms.p_ventas_nuevo_prd.prd_presentacion = fs_prd.prd_presentacion
			forms.p_ventas_nuevo_prd.prd_dto_1 = vl_dto_1
			forms.p_ventas_nuevo_prd.calcularTotal()
		}
		inicializarVariables()
		elements.vl_codigo.requestFocus()

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"099BF4CC-14ED-4891-AF95-76E9514E7EB6"}
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
 * @properties={typeid:24,uuid:"282A4BB7-2A92-4DB4-A553-1EB347C23BB6"}
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
 * @properties={typeid:24,uuid:"73CA2A24-06CB-4888-B003-E01C132AA3E2"}
 */
function onActionCambiaPrecio(event) {
	var win1 = application.createWindow("cambioPrec", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_ventas_nuevo_prd_prec);

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
 * @properties={typeid:24,uuid:"896F979C-7DA8-4320-A29F-95CED8702BD8"}
 */
function onDataChangeDto(oldValue, newValue, event) {
	cambiaDescuento()
	cambiaCantidad()
	return true
}

/**
 * @properties={typeid:24,uuid:"0669BB1B-69A3-43F5-AA3D-C5DCB20A184B"}
 */
function cambiaDescuento(){
	var descuento_porc = vl_dto_1/100
	var descuento_imp = vl_precio * descuento_porc
	vl_precio_final = vl_precio - descuento_imp
}


