/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"66E7464D-3CC1-4D36-B051-58A8AEB995E5",variableType:8}
 */
var vl_stock = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"698EE10D-78E6-4A62-B1B3-7AB047382D0C"}
 */
var vl_form_padre = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7FA2796-C81A-4F58-B570-E1FE1C36A6CA"}
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
 * @properties={typeid:24,uuid:"EA780129-9130-407C-8A86-A4C40F14C226"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	cambiaTipoPrd()
	vl_stock = globals.obtieneStock(prd_id)
	if(utils.hasRecords(prd_productos_to_prd_lineas)){
		globals.vg_rubro = prd_productos_to_prd_lineas.prd_lineas_to_prd_rubros.rubro_id
	}else{
		globals.vg_rubro = null
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
 * @properties={typeid:24,uuid:"3DA5CB73-4973-40F1-AD75-797BCA094B30"}
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
 * @properties={typeid:24,uuid:"C6137258-7CBC-4ED7-AC73-95A2675BFD87"}
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
 * @properties={typeid:24,uuid:"6ED58C5E-5ABE-4ABA-8752-92DC4E722C13"}
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
 * @properties={typeid:24,uuid:"6DBC67C4-E11B-4D4D-98D5-1754764ACB73"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	forms[vl_form_padre].controller.show()
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
 * @properties={typeid:24,uuid:"2D462AE1-8091-41E1-9C2F-BA35F135F162"}
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
 * @properties={typeid:24,uuid:"EFD0D226-5EC9-4A87-B96A-607BD80563B4"}
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
 * @properties={typeid:24,uuid:"E63637EE-1A90-4FEA-B3A2-811D5F91CDC5"}
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
	if(prd_controla_stock == 1){
		if(prd_stock_min == null){
			globals.lanzarVentanaEmergente(0,'Debe ingresar el stock mínimo del producto.','Info',controller.getName(),null,null)
			elements.prd_precio.requestFocus()
			return
		}
	}
	databaseManager.saveData()
	forms[vl_form_padre].controller.show()
}

/**
 * @properties={typeid:24,uuid:"2FA17240-BB74-46E9-B815-F04B6CAF7E42"}
 */
function visibilidad(){
	if(prd_controla_stock == 0){
		elements.grp_stock.visible = false
	}else{
		elements.grp_stock.visible = true
	}
}

/**
 * @properties={typeid:24,uuid:"AA6BCEAD-C1E0-4286-AB0E-293E465EF80E"}
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
 * @properties={typeid:24,uuid:"6439F3B7-BEA4-4F5F-8EA9-B735AFC68B45"}
 */
function onDataChangeTipoPrd(oldValue, newValue, event) {
	cambiaTipoPrd()
	return true
}
