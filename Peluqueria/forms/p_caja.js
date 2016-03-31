/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C0FD90F1-7103-4F1B-A6EA-158A4A7DDBB3",variableType:8}
 */
var vl_saldo_periodo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7B298749-CECD-4C50-B27C-1013DA100A64",variableType:8}
 */
var vl_saldo_fin = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"746AA919-AFED-41E1-AF45-63A275A2E118",variableType:8}
 */
var vl_saldo_ini = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"67C2EB3E-8232-4E49-BA30-A9113B2324EF"}
 */
function onActionVolver(event) {
	forms.form_inicio.controller.show()
}

/**
 * @properties={typeid:24,uuid:"60230241-A1C1-4FE4-BFF0-AA4E3624736F"}
 * @AllowToRunInFind
 */
function filtrar(){
	forms.p_caja_egresos.controller.find()
	forms.p_caja_egresos.cj_egr_fecha = utils.dateFormat(globals.vg_fecha_inicial,'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(globals.vg_fecha_final,'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	forms.p_caja_egresos.controller.search()
	
	forms.p_caja_ingresos.controller.find()
	forms.p_caja_ingresos.cj_ing_fecha = utils.dateFormat(globals.vg_fecha_inicial,'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(globals.vg_fecha_final,'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	forms.p_caja_ingresos.controller.search()
	
	vl_saldo_ini = globals.obtenerSaldoIni(globals.vg_fecha_inicial)
	vl_saldo_periodo = forms.p_caja_ingresos.aggr_ing_imp_total - forms.p_caja_egresos.aggr_egr_imp_total
	vl_saldo_fin = vl_saldo_ini + vl_saldo_periodo
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"61D6B4A3-280D-4086-90F9-AB3E5D968880"}
 */
function onShow(firstShow, event) {
	elements.split.dividerLocation = 0.5
	if(firstShow){
		globals.vg_fecha_final = application.getServerTimeStamp()
		globals.vg_fecha_inicial = application.getServerTimeStamp()
		filtrar()
	}
	filtrar()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"259EFC88-87F4-43AA-A3D9-2F35614C4D2B"}
 */
function onActionIngManual(event) {
	var win1 = application.createWindow("nuevoIngManual", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_caja_ing_manual);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"058AD4D8-7806-491E-83AA-929F922C5E3E"}
 */
function onActionEgrManual(event) {
	var win1 = application.createWindow("nuevoEgrManual", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_caja_egr_manual);
}
