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
	visibilidad()
}

/**
 * @properties={typeid:24,uuid:"6D126A0C-0022-49BD-A9F8-3BA61063B13F"}
 */
function visibilidad(){
	if(prd_controla_stock == 0){
		elements.vl_ing_inicial.visible = false
		elements.vl_ing_inicial_label.visible = false
	}else{
		elements.vl_ing_inicial.visible = true
		elements.vl_ing_inicial_label.visible = true
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
