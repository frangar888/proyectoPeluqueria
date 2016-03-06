/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C99CBA3A-F877-4AA5-9085-ACD0F920634D",variableType:4}
 */
var vl_tipo_movim = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7953B920-2122-482D-888E-11D7DE0C7962",variableType:4}
 */
var vl_causa = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8E5ED123-6FF6-4A0B-87B7-6EBE1F7C7089",variableType:4}
 */
var vl_prd_id = null;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"79DB3181-0635-4350-891A-F48466F10B68"}
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
 * @properties={typeid:24,uuid:"9E14B1E4-1F9E-4FFB-BDCC-1AEC5AAC49FE"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		globals.vg_fecha_final = application.getServerTimeStamp()
		globals.vg_fecha_inicial = application.getServerTimeStamp()
		inicializarVariables()
		filtrar()
	}
	//if(!globals.checkearAdmin(globals.vg_user_id,globals.getFormID(controller.getName()),[elements.btn_nuevo.getName()],controller.getName())){
	if(globals.validarLeer(globals.vg_user_id,globals.getFormID(controller.getName()))){
		globals.validarPermisos(globals.vg_user_id,globals.getFormID(controller.getName()),2,null)
	}else{
		forms.p_menu_productos.controller.show()
		globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
	}
//}
}

/**
 * @properties={typeid:24,uuid:"7EDD64E8-4E74-4336-948B-AD994F5DF799"}
 */
function inicializarVariables(){
	vl_causa = null
	vl_prd_id = null
	vl_tipo_movim = null
}

/**
 * @properties={typeid:24,uuid:"20AD4749-2476-4CFD-B3FD-BAC6C1CDC756"}
 * @AllowToRunInFind
 */
function filtrar(){
	controller.find()
	
	mov_fecha = utils.dateFormat(globals.vg_fecha_inicial,'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(globals.vg_fecha_final,'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	
	if(vl_causa != null){
		mov_causa = vl_causa
	}
	if(vl_prd_id != null){
		prd_id = vl_prd_id
	}
	if(vl_tipo_movim != null){
		mov_tipo = vl_tipo_movim
	}
	controller.search()
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3DE0EA6A-6080-45DD-A72B-D0D8F08F25C7"}
 */
function onActionRefresh(event) {
	inicializarVariables()
	filtrar()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E7280C87-E4AB-4DB7-BE90-A9D635A8FE34"}
 */
function onActionVolver(event) {
	forms.p_menu_productos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"08DE2674-EED1-44E8-86E6-799E929C85FF"}
 */
function onActionNuevo(event) {
	var win1 = application.createWindow("ingEgrPrd", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_productos_ing_egr);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0F194AA2-0D89-496F-A38E-17A012988C99"}
 */
function onActionDetalle(event) {
	forms.p_movimientos_detalle.controller.show()
}
