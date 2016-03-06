/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"FACDF361-8AE7-456F-B86C-F3893AED4B9D",variableType:8}
 */
var vl_total_saldo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"993D09FC-CE92-404A-99BD-E6343A5EA61B",variableType:4}
 */
var vl_nro_doc = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8497D47E-57BD-469C-BCE6-88EA242BBA60",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B4D89285-70F7-402D-9BF7-0FE40D62AA4F"}
 */
var vl_nombre = null;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CCAC41CC-62C3-4618-819C-17D7D2D60F88"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,0,0)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F1FF87BC-3E2D-48A0-B805-4C3938D91D0C"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		vl_codigo = null
		vl_nombre = null
		vl_nro_doc = null
		filtrar()
	}
//	if(!globals.checkearAdmin(globals.vg_user_id,globals.getFormID(controller.getName()),[elements.btn_nuevo.getName()],controller.getName())){
		if(globals.validarLeer(globals.vg_user_id,globals.getFormID(controller.getName()))){
			globals.validarPermisos(globals.vg_user_id,globals.getFormID(controller.getName()),2,null)
		}else{
			forms.form_inicio.controller.show()
			globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
		}
//	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7441560-D577-43F1-ACBE-920A55F8071E"}
 */
function onActionVolver(event) {
	forms.form_inicio.controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"80CB85C0-1F7A-4357-A22B-567F37B2F2D3"}
 */
function filtrar(){
	controller.find()
	if(vl_codigo != null){
		c_codigo = vl_codigo
	}
	if(vl_nombre != null && vl_nombre != ''){
		ccc_clientes_to_adn.adn_nombre = '%'+vl_nombre+'%'
	}
	if(vl_nro_doc != null && vl_nro_doc != 0){
		ccc_clientes_to_adn.adn_doc_nro = vl_nro_doc
	}
	controller.search()
	calcularTotales()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AE63D7B1-B031-4697-965E-C41E43C06BAD"}
 */
function onActionRefresh(event) {
	vl_codigo = null
	vl_nombre = null
	vl_nro_doc = null
	filtrar()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7DC53615-7986-40E2-8544-E386665B39C9"}
 */
function onActionDetalle(event) {
	forms.p_clientes_ver.controller.show()
}

/**
 * @properties={typeid:24,uuid:"A8E5DAE5-0406-4DDC-B5EF-239651820D6B"}
 */
function calcularTotales(){
	vl_total_saldo = 0
	var cant = databaseManager.getFoundSetCount(foundset)
	for (var index = 1; index <= cant; index++) {
		var record = foundset.getRecord(index);
		vl_total_saldo += record.calc_saldo_cliente
	}
}
