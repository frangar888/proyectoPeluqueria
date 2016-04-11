/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"452A9391-B2D9-4C80-92D4-5942D4A8E2A1",variableType:8}
 */
var vl_total_saldo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"28F8CBC7-B1AB-4499-B9A4-CC30A2E6F1B5",variableType:4}
 */
var vl_nro_doc = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"67CB5095-80BD-4F98-995D-C771BB0208FF",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B4E20A41-E5CE-4528-8E5C-9CF831238573"}
 */
var vl_nombre = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5FECA732-D1B7-4E45-AD9F-936FA7C8A20E"}
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
 * @properties={typeid:24,uuid:"9B1FBA3D-8488-4226-9EEC-8B9F3BF34533"}
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
 * @properties={typeid:24,uuid:"DDD3DE4B-77A0-4F79-9739-C84C79BA05D6"}
 */
function onActionVolver(event) {
	forms.p_config.controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"6DDA1882-ED7F-4026-A439-86EED962E963"}
 */
function filtrar(){
	controller.find()
	if(vl_codigo != null){
		p_cod = vl_codigo
	}
	if(vl_nombre != null && vl_nombre != ''){
		ccp_proveedores_to_adn.adn_nombre = '%'+vl_nombre+'%'
	}
	if(vl_nro_doc != null && vl_nro_doc != 0){
		ccp_proveedores_to_adn.adn_doc_nro = vl_nro_doc
	}
	controller.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"46DD93D9-BF51-42F6-B273-AD8D98AA48DD"}
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
 * @properties={typeid:24,uuid:"B2CAD131-E014-4E94-9D38-A4A668B38FBD"}
 */
function onActionDetalle(event) {
	forms.p_proveedores_ver.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F5BA860A-4C61-4B61-821E-E1512DC27D9C"}
 */
function onActionNuevo(event) {
	forms.p_proveedores_nuevo.controller.show()
}
