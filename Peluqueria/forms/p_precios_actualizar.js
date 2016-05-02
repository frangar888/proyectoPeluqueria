/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0E0E96E5-21CB-46FA-9029-04ED2B71889C",variableType:8}
 */
var vl_costo_porc = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6357A03C-EBFF-40C1-A382-08AA5F847DA1",variableType:8}
 */
var vl_prec_porc = null;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"00593C16-A857-4ABB-930B-141628F55539"}
 */
function onActionVolver(event) {
	application.getWindow().hide()
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"9FC7A3F0-D865-451C-A5C4-761BFA43A097"}
 */
function onHide(event) {
	application.getWindow().hide()
	return true
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6015761C-C65C-464E-8A8C-122421C05E85"}
 */
function onShow(firstShow, event) {
	vl_costo_porc = 0
	vl_prec_porc = 0
}

/**
 * @properties={typeid:24,uuid:"95F5F65A-8156-4CEF-A9E7-4DF218EC30DD"}
 */
function onActionGrabar(){
	if(vl_costo_porc <= 0 && vl_prec_porc <= 0){
		globals.lanzarVentanaEmergente(0,'Debe ingresar algun valor para actualizar.','Info',controller.getName(),null,null)
		return
	}
	globals.lanzarVentanaEmergente(1,'Se actualizarán todos los precios y/o costos de los productos en pantalla ¿Desea constinuar?','Atención',controller.getName(),'grabar',null)

}

/**
 * @properties={typeid:24,uuid:"74AD3CFF-74A7-4F39-B4A1-7238490E8056"}
 */
function grabar(){
	var cant = databaseManager.getFoundSetCount(forms.p_precios.foundset)
	/** @type {JSFoundset<db:/peluqueria/prd_precios_log>}*/
	var fs_prec = databaseManager.getFoundSet('peluqueria','prd_precios_log')
	for (var index = 1; index <= cant; index++) {
		var record = forms.p_precios.foundset.getRecord(index);
		
		if(vl_costo_porc > 0 || vl_prec_porc > 0){
			fs_prec.newRecord()
			fs_prec.log_fecha = application.getServerTimeStamp()
			fs_prec.prd_id = record.prd_id
			fs_prec.user_id = globals.vg_user_id
			fs_prec.prd_costo_ant = record.prd_costo
			record.prd_costo = record.prd_costo * ((vl_costo_porc / 100) + 1)
			fs_prec.prd_costo_act = record.prd_costo
			fs_prec.prd_prec_ant = record.prd_precio
			record.prd_precio = record.prd_precio * ((vl_prec_porc / 100) + 1)
			fs_prec.prd_prec_act = record.prd_precio
		}
		databaseManager.saveData(fs_prec)
		databaseManager.saveData(forms.p_precios.foundset)
	}
	application.getWindow().hide()
}
