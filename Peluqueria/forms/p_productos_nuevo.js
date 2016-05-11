/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1565D533-E5AA-4CCA-B20F-983B61B6BA17",variableType:8}
 */
var vl_ing_inicial = null;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B71926AA-B0E8-4D06-9C66-D70B5A747EA4"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_productos.controller.getName()))
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9C200D11-8585-4A74-95EC-FEB41D15FC89"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	controller.newRecord()
	globals.vg_rubro = null
	prd_controla_stock = 0
	prd_tipo = 1
	cambiaTipoPrd()
}

/**
 * @properties={typeid:24,uuid:"6D126A0C-0022-49BD-A9F8-3BA61063B13F"}
 */
function visibilidad(){
	if(prd_controla_stock == 0){
		vl_ing_inicial = 0
		elements.grp_stock.visible = false
	}else{
		elements.grp_stock.visible = true
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
 * @properties={typeid:24,uuid:"3B09EC9B-569F-49C6-AC4F-E3F455BBC3D6"}
 */
function onDataChangeCosto(oldValue, newValue, event) {
	prd_margen = ((prd_precio / prd_costo) - 1) * 100
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
 * @properties={typeid:24,uuid:"D665C012-EA90-46E7-997B-7D205B609B77"}
 */
function onDataChangeMargen(oldValue, newValue, event) {
	var margen = (prd_margen / 100) + 1
	if(prd_costo != null){
		prd_precio = prd_costo * margen
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
 * @properties={typeid:24,uuid:"B518096E-E815-47A3-9CB0-0104BF599E58"}
 */
function onDataChangePrecio(oldValue, newValue, event) {
	prd_margen = ((prd_precio / prd_costo) - 1) * 100
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EC0314AD-B6C7-44E4-A0A5-8F4BDC4817C5"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms.p_productos.controller.show()
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
 * @properties={typeid:24,uuid:"00398657-D230-4E4B-B004-23A974EB503D"}
 */
function onDataChangeControlaStk(oldValue, newValue, event) {
	visibilidad()
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
 * @properties={typeid:24,uuid:"89C70026-1CB3-4657-B2C2-65F37557774B"}
 */
function onDataChangeRubro(oldValue, newValue, event) {
	linea_id = null
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"59D613F1-1F26-48A5-915B-66CA64FB45E0"}
 */
function onActionGrabar(event) {
	if(prd_codigo == 0 || prd_codigo == null){
		globals.lanzarVentanaEmergente(0,'Debe ingresar un código de producto.','Info',controller.getName(),null,null)
		elements.prd_codigo.requestFocus()
		return
	}
	if(prd_nombre == null || prd_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Debe ingresar un nombre de producto.','Info',controller.getName(),null,null)
		elements.prd_nombre.requestFocus()
		return
	}
	if(prd_costo == 0 || prd_costo == null){
		globals.lanzarVentanaEmergente(0,'Debe ingresar el costo del producto.','Info',controller.getName(),null,null)
		elements.prd_costo.requestFocus()
		return
	}
	if(prd_margen == null){
		globals.lanzarVentanaEmergente(0,'Debe ingresar el margen del producto.','Info',controller.getName(),null,null)
		elements.prd_margen.requestFocus()
		return
	}
	if(prd_precio == 0 || prd_precio == null){
		globals.lanzarVentanaEmergente(0,'Debe ingresar el precio del producto.','Info',controller.getName(),null,null)
		elements.prd_precio.requestFocus()
		return
	}
	if(existeCodigo(prd_codigo)){
		globals.lanzarVentanaEmergente(0,'Ya existe un producto con el còdigo ingresado. Verifique','Info',controller.getName(),null,null)
		elements.prd_codigo.requestFocus()
		return
	}
	if(prd_controla_stock == 1){
		if(prd_stock_min == null){
			globals.lanzarVentanaEmergente(0,'Debe ingresar el stock mínimo del producto.','Info',controller.getName(),null,null)
			elements.prd_precio.requestFocus()
			return
		}
	}

	
	if(vl_ing_inicial != 0){
		/** @type {JSFoundset<db:/peluqueria/prd_movimientos>}*/
		var fs_prd_mov = databaseManager.getFoundSet('peluqueria','prd_movimientos')
		fs_prd_mov.newRecord()
		fs_prd_mov.mov_fecha = application.getServerTimeStamp()
		fs_prd_mov.mov_egr = 0 
		fs_prd_mov.mov_ing = vl_ing_inicial
		fs_prd_mov.prd_id = prd_id
		fs_prd_mov.venta_id = 0
	}
	databaseManager.saveData()
	
		/** @type {JSFoundset<db:/peluqueria/prd_precios_log>}*/
	var fs_precios = databaseManager.getFoundSet('peluqueria','prd_precios_log')
	fs_precios.newRecord()
	fs_precios.prd_costo_act = prd_costo
	fs_precios.prd_id = prd_id
	fs_precios.prd_prec_act = prd_precio
	fs_precios.user_id = globals.vg_user_id
	databaseManager.saveData(fs_precios)
	
	forms.p_productos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1CB11DFA-7C5B-4B09-AFC6-BD2E277D7F7A"}
 */
function onActionUltLibre(event) {
	prd_codigo = ultLibre()
}
/**
 * @properties={typeid:24,uuid:"D6AF411E-3E01-4734-94A6-362918D87517"}
 */
function ultLibre(){
	/** @type {JSFoundset<db:/peluqueria/prd_productos>}*/
	var fs_prd = databaseManager.getFoundSet('peluqueria','prd_productos')
	fs_prd.loadAllRecords()
	fs_prd.sort("prd_codigo asc")
	
	var cant = databaseManager.getFoundSetCount(fs_prd)
	var count = 1
	for (var index = 1; index <= cant; index++) {
		var record = fs_prd.getRecord(index);
		if(record.prd_codigo != count){
			return count
		}
		count += 1
	}
	return count
}

/**
 * @properties={typeid:24,uuid:"ABAAA24C-2AA8-4B0B-90AD-9D4C144D56E4"}
 */
function cambiaTipoPrd(){
	if(prd_tipo == 1){
		prd_controla_stock = 1
		visibilidad()
	}else{
		prd_controla_stock = 0
		visibilidad()
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
 * @properties={typeid:24,uuid:"40A457A5-7629-495C-9732-6BC19ECF95C8"}
 */
function onDataChangeTipoPrd(oldValue, newValue, event) {
	cambiaTipoPrd()
	return true
}

/**
 * @properties={typeid:24,uuid:"E9A1FC7D-697D-49FB-B72A-BB0012179CB2"}
 * @AllowToRunInFind
 */
function existeCodigo(lnk_cod){
	/** @type {JSFoundset<db:/peluqueria/prd_productos>}*/
	var fs_prd = databaseManager.getFoundSet('peluqueria','prd_productos')
	fs_prd.loadAllRecords()
	fs_prd.find()
	fs_prd.prd_codigo = lnk_cod
	if(fs_prd.search() != 0){
		return true
	}
	return false
}