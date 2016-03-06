/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D57F6CE5-23AD-4508-B8C5-A814B7089681",variableType:8}
 */
var vl_total_vtas = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"06E6F035-E00C-4C6E-9D7F-B355DCAF0718",variableType:4}
 */
var vl_cliente = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"627FE22E-7EF7-464F-A0B3-C6CD8C66BE60"}
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
 * @properties={typeid:24,uuid:"B135202F-55D9-44A0-91E4-C6E0A1F8A982"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		globals.vg_fecha_final = application.getServerTimeStamp()
		globals.vg_fecha_inicial = application.getServerTimeStamp()
		vl_cliente = null
		filtrar()
	}
//	if(!globals.checkearAdmin(globals.vg_user_id,globals.getFormID(controller.getName()),[elements.btn_nuevo.getName()],controller.getName())){
		if(globals.validarLeer(globals.vg_user_id,globals.getFormID(controller.getName()))){
			globals.validarPermisos(globals.vg_user_id,globals.getFormID(controller.getName()),2,null)
		}else{
			forms.form_inicio.controller.show()
			globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
//		}
	}
	calcularTotal()

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"34EA425E-FE13-4F18-ADDB-24F4F1C42586"}
 */
function onActionVolver(event) {
	forms.form_inicio.controller.show()
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"4DF731C5-1681-457E-909D-4A80D1D3F2C4"}
 */
function filtrar(){
	controller.find()
	if(vl_cliente != 0 && vl_cliente != null){
		adn_id = vl_cliente
	}
	vta_fecha_emision = utils.dateFormat(globals.vg_fecha_inicial,'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(globals.vg_fecha_final,'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	controller.search()
	calcularTotal()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8C0F6E70-BF97-468E-96A7-5338D3F55E76"}
 */
function onActionNuevaVenta(event) {
	forms.p_ventas_nuevo.vl_form_padre = controller.getName()
	forms.p_ventas_nuevo.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6177CBF5-9562-45B1-BD52-B376C98FCD8C"}
 */
function onActionDetalle(event) {
	forms.p_ventas_detalle.vl_form_padre = controller.getName()
	forms.p_ventas_detalle.controller.show()
}

/**
 * @properties={typeid:24,uuid:"9CDB342A-A6D7-4AB4-9DB1-5523D6955564"}
 */
function calcularTotal(){
	vl_total_vtas = 0
	var cant = databaseManager.getFoundSetCount(foundset)
	for (var index = 1; index <= cant; index++) {
		var record = foundset.getRecord(index);
		vl_total_vtas += record.vta_importe_total
	}
}
