/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DF3B2E69-4433-4BAE-BCDD-74B352C40006"}
 */
var vl_form_padre = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DDA906A3-D776-4B95-8C62-65A3C3B04C4B"}
 */
var vl_prd = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"61EE6F05-82B3-4BF5-9447-CA014083F2F2",variableType:8}
 */
var vl_total = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D777D546-A247-4738-A7A6-1BE57EF1C0DE"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms[vl_form_padre].controller.show()
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F745C4A1-466C-4913-A74C-A6D2B698F7F4"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	controller.newRecord()
	forms.p_ventas_nuevo_prd.foundset.clear()
	forms.p_ventas_nuevo_prd.vl_cant_prd = 0
	forms.p_ventas_nuevo_prd.vl_total = 0
	vl_prd = null
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"47F7618C-E632-41F0-8D85-E8C14A9650CE"}
 */
function onActionNuevoProducto(event) {
	var win1 = application.createWindow("nuevoPrd", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_ventas_nuevo_add_prd);

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1EDA3919-4009-4989-83C6-00444E6D0605"}
 */
function onActionGrabar(event) {
	if(adn_id == null || adn_id == 0){
		globals.lanzarVentanaEmergente(0,'Seleccione un Cliente.','Info',controller.getName(),null,null)
		return
	}
	if(forms.p_ventas_nuevo_prd.foundset.getSize() == 0){
		globals.lanzarVentanaEmergente(0,'La Venta no tiene ningún producto.','Info',controller.getName(),null,null)
		return
	}
	var win1 = application.createWindow("cerrarVta", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_ventas_nuevo_cerrar);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F9E9183-F88D-45AC-BF7C-263B17966A54"}
 */
function onActionNuevoNoProducto(event) {
	var win1 = application.createWindow("nuevoNoPrd", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_ventas_nuevo_add_no_prd);
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
 * @properties={typeid:24,uuid:"647A67D0-4F88-465A-9B42-D92C88A29C29"}
 * @AllowToRunInFind
 */
function onDataChangePrd(oldValue, newValue, event) {
	cambiaPrd()
	return true
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"140CCF5C-43DE-4B17-86C1-A330073CB5B6"}
 */
function cambiaPrd(){
	/** @type {JSFoundset<db:/peluqueria/prd_productos>}*/
	var fs_prd = databaseManager.getFoundSet('peluqueria','prd_productos')
	fs_prd.loadAllRecords()
	var ast = new RegExp("/\u002A")
	var cant_en_stock = 0
	if(vl_prd.search(ast) != -1){
		var partes = [] 
		partes = vl_prd.split("*")
		var cant = utils.stringToNumber(partes[1])
		if(cant != 0){
			if(partes[0].length < 13){
				
				fs_prd.find()
				fs_prd.prd_codigo = partes[0]
				if(fs_prd.search() != 0){
					if(fs_prd.prd_controla_stock == 1){
						cant_en_stock = globals.obtieneStock(fs_prd.prd_id)
						if(cant_en_stock < cant){
							globals.lanzarVentanaEmergente(0,'La cantidad ingresada es mayor a la cantidad en stock del porducto. Cantidad: '+cant_en_stock,'Info',controller.getName(),null,null)
							return
						}
					}
					forms.p_ventas_nuevo_prd.controller.newRecord()
					forms.p_ventas_nuevo_prd.venta_id = venta_id
					forms.p_ventas_nuevo_prd.prd_cant = cant
					forms.p_ventas_nuevo_prd.prd_cod_bar = fs_prd.prd_cod_bar
					forms.p_ventas_nuevo_prd.prd_codigo = fs_prd.prd_codigo
					forms.p_ventas_nuevo_prd.prd_costo = fs_prd.prd_costo
					forms.p_ventas_nuevo_prd.prd_id = fs_prd.prd_id
					forms.p_ventas_nuevo_prd.prd_nombre = fs_prd.prd_nombre
					forms.p_ventas_nuevo_prd.prd_peso = fs_prd.prd_peso
					forms.p_ventas_nuevo_prd.prd_precio = fs_prd.prd_precio
					forms.p_ventas_nuevo_prd.prd_presentacion = fs_prd.prd_presentacion
					forms.p_ventas_nuevo_prd.calcularTotal()
				}else{
					globals.lanzarVentanaEmergente(0,'Producto inexistente. Verifique.','Info',controller.getName(),null,null)
					elements.vl_prd.requestFocus()
					return
				}
		
			}else{
				
				fs_prd.find()
				fs_prd.prd_cod_bar = partes[0]
				if(fs_prd.search() != 0){
					if(fs_prd.prd_controla_stock == 1){
						cant_en_stock = globals.obtieneStock(fs_prd.prd_id)
						if(cant_en_stock < cant){
							globals.lanzarVentanaEmergente(0,'La cantidad ingresada es mayor a la cantidad en stock del porducto. Cantidad: '+cant_en_stock,'Info',controller.getName(),null,null)
							return
						}
					}
					forms.p_ventas_nuevo_prd.controller.newRecord()
					forms.p_ventas_nuevo_prd.venta_id = venta_id
					forms.p_ventas_nuevo_prd.prd_cant = cant
					forms.p_ventas_nuevo_prd.prd_cod_bar = fs_prd.prd_cod_bar
					forms.p_ventas_nuevo_prd.prd_codigo = fs_prd.prd_codigo
					forms.p_ventas_nuevo_prd.prd_costo = fs_prd.prd_costo
					forms.p_ventas_nuevo_prd.prd_id = fs_prd.prd_id
					forms.p_ventas_nuevo_prd.prd_nombre = fs_prd.prd_nombre
					forms.p_ventas_nuevo_prd.prd_peso = fs_prd.prd_peso
					forms.p_ventas_nuevo_prd.prd_precio = fs_prd.prd_precio
					forms.p_ventas_nuevo_prd.prd_presentacion = fs_prd.prd_presentacion
					forms.p_ventas_nuevo_prd.calcularTotal()
				}else{
					globals.lanzarVentanaEmergente(0,'Producto inexistente. Verifique.','Info',controller.getName(),null,null)
					elements.vl_prd.requestFocus()
					return
				}
			}
		}else{
			globals.lanzarVentanaEmergente(0,'Luego del asterisco debe ingresar la cantidad.','Info',controller.getName(),null,null)
			elements.vl_prd.requestFocus()
			return
		}
	}else{
		globals.lanzarVentanaEmergente(0,'El producto debe ir seguido de un asterisco (*) y la cantidad deseada. (Ej.000001*2).','Info',controller.getName(),null,null)
		return
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B15A05B0-72F1-4593-B47C-6D57CBF45123"}
 * @AllowToRunInFind
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
}
