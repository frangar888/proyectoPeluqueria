/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"19540EE6-C52C-4E4D-82E8-5A36713CE28F"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	controller.find()
	cj_egr_fecha = utils.dateFormat(globals.vg_fecha_inicial,'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(globals.vg_fecha_final,'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	controller.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"62613D11-EB30-4945-924E-571AA4FCB982"}
 */
function onActionVolver(event) {
	forms.p_caja_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D75B59D7-704C-40BF-9B6F-9B22B67F3ED8"}
 */
function onActionDetalle(event) {
	var win1 = application.createWindow("detalleEgr", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_egreso_detalle);
}
