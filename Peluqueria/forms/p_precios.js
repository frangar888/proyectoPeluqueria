/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6D144E64-58D1-4FE3-BAE1-BA484130A136"}
 */
var vl_nombre = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2AFF298C-9FF9-44FA-8A2A-D21504ED5EA1",variableType:4}
 */
var vl_linea = null;




/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8B4FD659-3820-4104-9054-4ADADCC25552",variableType:4}
 */
var vl_rubro = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8B7BC4A3-D569-4C7C-8AD2-EE61D4961481",variableType:4}
 */
var vl_tipo_prd = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ACB768E3-921A-4859-88A0-9CA692939ED6",variableType:4}
 */
var vl_marca = null;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"30B382D2-2315-41BA-B84C-DB8FBE18FBB6"}
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
 * @properties={typeid:24,uuid:"7E62C8B4-0E06-4097-BCAC-071D5BC4743A"}
 */
function onShow(firstShow, event) {
	//if(!globals.checkearAdmin(globals.vg_user_id,globals.getFormID(controller.getName()),[elements.btn_nuevo.getName()],controller.getName())){
	if(globals.validarLeer(globals.vg_user_id,globals.getFormID(controller.getName()))){
		globals.validarPermisos(globals.vg_user_id,globals.getFormID(controller.getName()),2,null)
	}else{
		forms.p_menu_productos.controller.show()
		globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
	}
	if(firstShow){
		vl_linea = null
		vl_marca = null
		vl_nombre = null
		globals.vg_rubro = null
		vl_tipo_prd = null
		filtrar()
	}
//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"169EAB1C-777A-4CAD-AD25-18B09A460485"}
 */
function onActionActualizar(event) {
	var win1 = application.createWindow("actPrecios", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_precios_actualizar);
}

/**
 * @properties={typeid:24,uuid:"9315372D-252D-43E6-B020-C1C7CEDCE63B"}
 * @AllowToRunInFind
 */
function filtrar(){
	controller.find()
	if(vl_nombre != null && vl_nombre != ''){
		prd_nombre = '%'+vl_nombre+'%'
	}
	if(globals.vg_rubro != null){
		prd_productos_to_prd_lineas.prd_lineas_to_prd_rubros.rubro_id = globals.vg_rubro
	}
	if(vl_linea != null){
		linea_id = vl_linea
	}
	if(vl_marca != null){
		marca_id = vl_marca
	}
	if(vl_tipo_prd != null){
		prd_tipo = vl_tipo_prd
	}
	controller.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"ADF59AFE-011C-4FC3-937C-96C20A4086BB"}
 */
function onActionRefresh(event) {
	vl_linea = null
	vl_marca = null
	vl_nombre = null
	globals.vg_rubro = null
	vl_tipo_prd = null
	filtrar()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"73D1640A-2B08-40B4-ADEA-C5A7383B2146"}
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
 * @properties={typeid:24,uuid:"956F0D74-0B40-4F38-AC74-EE24E923932A"}
 */
function onActionVolver(event) {
	forms.p_menu_productos.controller.show()
}
