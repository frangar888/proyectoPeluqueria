/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EB4762E8-E5F7-4A04-ACA6-FCFDF936A325",variableType:4}
 */
var vl_rubro = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3624CB0C-15E4-404F-A4D9-F3F64D55ECE3",variableType:4}
 */
var vl_linea = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"23BF569C-636F-448A-8539-F3770DC8F4B2",variableType:4}
 */
var vl_marca = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"21798C9D-B697-4282-83D3-F6851D27A359"}
 */
var vl_cod_bar = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"06DD7317-665C-43BC-BD09-137C34B1F3E1",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6C53E98A-5B92-4D67-B67E-4E1F6D2E3F58"}
 */
var vl_nombre = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1CCEE796-BCCE-4457-B451-DEDBF57F4FC7"}
 */
function onShow(firstShow, event) {
	//if(!globals.checkearAdmin(globals.vg_user_id,globals.getFormID(controller.getName()),[elements.btn_nuevo.getName()],controller.getName())){
		if(globals.validarLeer(globals.vg_user_id,globals.getFormID(controller.getName()))){
			globals.validarPermisos(globals.vg_user_id,globals.getFormID(controller.getName()),2,null)
		}else{
			forms.form_inicio.controller.show()
			globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
		}
	//}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"931FA628-3A75-446C-90B2-E74914B47DA2"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,0,0)
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"4DBAFC75-2763-4FF1-8E4A-A7084E7BD39A"}
 */
function filtrar(){
	controller.find()
	if(vl_codigo != null){
		prd_codigo = vl_codigo
	}
	if(vl_cod_bar != null){
		prd_cod_bar = vl_cod_bar
	}
	if(vl_nombre != null){
		prd_nombre = '%'+vl_nombre+'%'
	}
	controller.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"52FAC59C-1D44-4B0E-944F-522A93DD26C6"}
 */
function onActionRefresh(event) {
	vl_cod_bar = null
	vl_codigo = null
	vl_nombre = null
	filtrar()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1709A2F8-1B63-4A9A-A68C-F44B848A21CB"}
 */
function onActionNuevo(event) {
	forms.p_productos_nuevo.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"24823AE4-61DA-43A3-867D-D175499BFC25"}
 */
function onActionVolver(event) {
	forms.p_menu_productos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DB7C73DB-4209-4A1A-A718-4F5B16E00C45"}
 */
function onActionDetalle(event) {
	forms.p_productos_detalle.vl_form_padre = controller.getName()
	forms.p_productos_detalle.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3A13233B-9F7B-4C0E-B898-61F41F2F72B3"}
 */
function onActionIngEgr(event) {
	var win1 = application.createWindow("ingEgrPrd", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_productos_ing_egr);
}
