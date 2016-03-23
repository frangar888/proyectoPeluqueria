/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3BB8A11-3720-4BCC-B750-CE822C772804"}
 */
var vl_form_padre = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A92C326A-559E-4173-A20F-56CFC62FE558"}
 */
var vl_cod_alt = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"308DE23A-EC15-4BF5-A573-7681D933883D",variableType:8}
 */
var vl_stock_nuevo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5AB931B8-0BA8-4FA6-BC8D-0ABAF8AF53DC",variableType:8}
 */
var vl_stock_ant = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0F39DE8E-00D9-4E2C-A229-138BE55ADCE5",variableType:8}
 */
var vl_cant = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"818BBFDD-73C3-48F9-AB9A-8743675B4587"}
 */
var vl_cod_bar = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2ABBA0F0-287D-4802-8BBE-4A7F850D8803",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"30DB1155-8004-4EF3-AA88-6053B440C30B",variableType:4}
 */
var vl_prd_id = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2E4CF7EE-84B9-43C1-BE3F-65FF0A197573",variableType:4}
 */
var vl_tipo_movim = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A3FD0021-5FCF-4ED8-96D6-EF2930064C37"}
 */
function onActionVolver(event) {
	databaseManager.revertEditedRecords()
	application.getWindow().hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"0628ABC2-BDCA-4125-9D1A-3CD02E044501"}
 */
function onHide(event) {
	databaseManager.revertEditedRecords()
	application.getWindow().hide()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2152D0E6-2188-4EFC-BE12-6F5C9A888D1E"}
 */
function onShow(firstShow, event) {
	inicializarVariables()
	textoEnEtiqueta()
	elements.vl_cod_bar.requestFocus()
	if(vl_form_padre == forms.p_productos.controller.getName()){
		elements.vl_tipo_movim.enabled = true
	}
	if(vl_form_padre == 'Ingreso'){
		vl_tipo_movim = 0
		elements.vl_tipo_movim.enabled = false
	}
	if(vl_form_padre == 'Egreso'){
		vl_tipo_movim = 1
		elements.vl_tipo_movim.enabled = false
	}
}
/**
 * @properties={typeid:24,uuid:"3706CD8B-2A37-4C01-9776-A109E3C66775"}
 */
function inicializarVariables(){
	vl_tipo_movim = 0
	vl_cant = null
	vl_cod_bar = null
	vl_codigo = null
	vl_prd_id = null
	vl_stock_ant = null
	vl_stock_nuevo = null
	vl_cod_alt = null
}
/**
 * @properties={typeid:24,uuid:"A00D2182-FF04-42BB-805F-68B9E1458D93"}
 */
function textoEnEtiqueta(){
	if(vl_tipo_movim == 0){
		elements.vl_cant_label.text = 'Cant. Ingreso:'
	}else{
		elements.vl_cant_label.text = 'Cant. Egreso:'
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
 * @properties={typeid:24,uuid:"2D5EA410-85C6-41A0-B08E-8EB50441DD28"}
 */
function onDataChangeTipoMovim(oldValue, newValue, event) {
	textoEnEtiqueta()
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
 * @properties={typeid:24,uuid:"388A2168-9C81-47C6-8FBA-B25FBE37B83B"}
 * @AllowToRunInFind
 */
function onDataChangeCodBar(oldValue, newValue, event) {
	buscarPorCodBar()
	elements.vl_cant.requestFocus()
	return true
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"68936B0B-8479-4102-914A-D8D96588C989"}
 */
function buscarPorCodBar(){
	/** @type {JSFoundset<db:/peluqueria/prd_productos>}*/
	var fs_prd = databaseManager.getFoundSet('peluqueria','prd_productos')
	fs_prd.loadAllRecords()
	fs_prd.find()
	fs_prd.prd_cod_bar = vl_cod_bar
	if(fs_prd.search() != 0){
		if(fs_prd.prd_controla_stock == 1){
			vl_codigo = fs_prd.prd_codigo
			vl_prd_id = fs_prd.prd_id
			vl_cod_alt = fs_prd.prd_cod_alt
			vl_stock_ant = globals.obtieneStock(vl_prd_id)
		}else{
			globals.lanzarVentanaEmergente(0,'Este producto no controla stock.','Info',controller.getName(),null,null)
			inicializarVariables()
			elements.vl_cod_bar.requestFocus()
			return
		}
	}else{
		globals.lanzarVentanaEmergente(0,'Producto Inexistente.','Info',controller.getName(),null,null)
		inicializarVariables()
		elements.vl_cod_bar.requestFocus()
		return
	}
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"4DDDAD40-3EE3-48B2-8182-DC64074921F7"}
 */
function buscarPorCod(){
	/** @type {JSFoundset<db:/peluqueria/prd_productos>}*/
	var fs_prd = databaseManager.getFoundSet('peluqueria','prd_productos')
	fs_prd.loadAllRecords()
	fs_prd.find()
	fs_prd.prd_codigo = vl_codigo
	if(fs_prd.search() != 0){
		if(fs_prd.prd_controla_stock == 1){
			vl_cod_bar= fs_prd.prd_cod_bar
			vl_prd_id = fs_prd.prd_id
			vl_cod_alt = fs_prd.prd_cod_alt
			vl_stock_ant = globals.obtieneStock(vl_prd_id)
		}else{
			globals.lanzarVentanaEmergente(0,'Este producto no controla stock.','Info',controller.getName(),null,null)
			inicializarVariables()
			elements.vl_codigo.requestFocus()
			return
		}
	}else{
		globals.lanzarVentanaEmergente(0,'Producto Inexistente.','Info',controller.getName(),null,null)
		inicializarVariables()
		elements.vl_codigo.requestFocus()
		return
	}
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"E488850C-9665-41B1-BA90-FEA27E8ED0F1"}
 */
function buscarPorCodAlt(){
	/** @type {JSFoundset<db:/peluqueria/prd_productos>}*/
	var fs_prd = databaseManager.getFoundSet('peluqueria','prd_productos')
	fs_prd.loadAllRecords()
	fs_prd.find()
	fs_prd.prd_cod_alt = vl_cod_alt
	if(fs_prd.search() != 0){
		if(fs_prd.prd_controla_stock == 1){
			vl_cod_bar = fs_prd.prd_cod_bar
			vl_prd_id = fs_prd.prd_id
			vl_codigo = fs_prd.prd_codigo
			vl_stock_ant = globals.obtieneStock(vl_prd_id)
		}else{
			globals.lanzarVentanaEmergente(0,'Este producto no controla stock.','Info',controller.getName(),null,null)
			inicializarVariables()
			elements.vl_cod_alt.requestFocus()
			return
		}
	}else{
		globals.lanzarVentanaEmergente(0,'Producto Inexistente.','Info',controller.getName(),null,null)
		inicializarVariables()
		elements.vl_cod_alt.requestFocus()
		return
	}
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"9302CC92-0C3B-4219-924A-201E284AFFD8"}
 */
function buscarPorId(){
	/** @type {JSFoundset<db:/peluqueria/prd_productos>}*/
	var fs_prd = databaseManager.getFoundSet('peluqueria','prd_productos')
	fs_prd.loadAllRecords()
	fs_prd.find()
	fs_prd.prd_id = vl_prd_id
	if(fs_prd.search() != 0){
		if(fs_prd.prd_controla_stock == 1){
			vl_cod_bar = fs_prd.prd_cod_bar
			vl_codigo = fs_prd.prd_codigo
			vl_cod_alt = fs_prd.prd_cod_alt
			vl_stock_ant = globals.obtieneStock(vl_prd_id)
		}else{
			globals.lanzarVentanaEmergente(0,'Este producto no controla stock.','Info',controller.getName(),null,null)
			inicializarVariables()
			elements.vl_prd_id.requestFocus()
			return
		}
	}else{
		globals.lanzarVentanaEmergente(0,'Producto Inexistente.','Info',controller.getName(),null,null)
		inicializarVariables()
		elements.vl_prd_id.requestFocus()
		return
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
 * @properties={typeid:24,uuid:"6BEF7228-6443-4469-BCA0-DDCE665CBE02"}
 */
function onDataChangeCodigo(oldValue, newValue, event) {
	buscarPorCod()
	elements.vl_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"0CCAECAC-B9F7-4AF6-9A5F-F4F77E456443"}
 */
function onDataChangePrdId(oldValue, newValue, event) {
	buscarPorId()
	elements.vl_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"1D20DF0D-D435-4E39-88D7-B75F18F5AE35"}
 */
function onDataChangeCodAlt(oldValue, newValue, event) {
	buscarPorCodAlt()
	elements.vl_cant.requestFocus()
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
 * @properties={typeid:24,uuid:"004751A8-7ABE-425D-9A28-81855A8D5B19"}
 */
function onDataChangeCantidad(oldValue, newValue, event) {
	cambiaCantidad()
	return true
}

/**
 * @properties={typeid:24,uuid:"A8129F8C-1DB1-4B5D-9788-EC05425D6184"}
 */
function cambiaCantidad(){
	if(vl_tipo_movim == 0){
		vl_stock_nuevo = vl_stock_ant + vl_cant
	}else{
		vl_stock_nuevo = vl_stock_ant - vl_cant
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"EBE65AAF-6A89-4879-9C20-998CB98F85FE"}
 */
function onActionGrabar(event) {
	if(vl_tipo_movim == null){
		globals.lanzarVentanaEmergente(0,'Seleccione el tipo de movimiento.','Info',controller.getName(),null,null)
		return
	}
	if(vl_prd_id == 0 || vl_prd_id == null){
		globals.lanzarVentanaEmergente(0,'Seleccione un Producto.','Info',controller.getName(),null,null)
		return
	}
	if(vl_cant == null || vl_cant == 0){
		globals.lanzarVentanaEmergente(0,'Ingrese la cantidad.','Info',controller.getName(),null,null)
		return
	}
	/** @type {JSFoundset<db:/peluqueria/prd_movimientos>}*/
	var fs_prd_movim = databaseManager.getFoundSet('peluqueria','prd_movimientos')
	fs_prd_movim.newRecord()
	fs_prd_movim.prd_id = vl_prd_id
	fs_prd_movim.venta_id = 0
	fs_prd_movim.mov_fecha = application.getServerTimeStamp()
	fs_prd_movim.mov_tipo = vl_tipo_movim
	if(vl_tipo_movim == 0){
		fs_prd_movim.mov_egr = 0
		fs_prd_movim.mov_ing = vl_cant
		fs_prd_movim.mov_causa = 3
	}else{
		fs_prd_movim.mov_egr = vl_cant
		fs_prd_movim.mov_ing = 0
		fs_prd_movim.mov_causa = 2
	}
	databaseManager.saveData()
	application.getWindow().hide()
}
