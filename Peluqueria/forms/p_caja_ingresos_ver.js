
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DEABD4BD-EB85-409E-9EB8-E0CAE2CC9CFA"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	controller.find()
	cj_ing_fecha = utils.dateFormat(globals.vg_fecha_inicial,'yyyy-MM-dd') + ' 00:00:00...' + utils.dateFormat(globals.vg_fecha_final,'yyyy-MM-dd') + ' 23:59:59|yyyy-MM-dd HH:mm:ss'
	controller.search()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5D0398EE-73B6-4DBA-8FDC-006CC373C385"}
 */
function onActionVolver(event) {
	forms.p_caja_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"058F7713-8215-4D40-B8CC-7D7F35E5D0FA"}
 */
function onActionDetalle(event) {
	var win1 = application.createWindow("detalleIng", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_ingreso_detalle);
}
