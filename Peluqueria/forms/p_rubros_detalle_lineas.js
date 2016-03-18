
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1D65B39D-6555-4AD9-9444-651EF48D706B"}
 */
function onActionAgregar(event) {
	forms.p_lineas_nuevo.vl_form_padre = controller.getName()
	forms.p_lineas_nuevo.controller.newRecord()
	forms.p_lineas_nuevo.rubro_id = forms.p_rubros_detalle.rubro_id
	var win1 = application.createWindow("nuevaLinea", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_lineas_nuevo);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E8647AA4-A4DD-44E1-BC10-87547332E7C2"}
 */
function onActionDetalle(event) {
	var win1 = application.createWindow("detalleLinea", JSWindow.MODAL_DIALOG);
	win1.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
	win1.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
	win1.resizable = false
	win1.title= 'Hair System';
	win1.show(forms.p_lineas_detalle);
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"91C84AA1-93BC-4804-9CA0-B43D8EF1BC69"}
 */
function onLoad(event) {
	//globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,0,0)
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D6E9DC1C-AFB2-4A31-9C90-560465A2864B"}
 */
function onShow(firstShow, event) {
	//if(!globals.checkearAdmin(globals.vg_user_id,globals.getFormID(forms.p_lineas.controller.getName()),[elements.btn_nuevo.getName()],controller.getName())){
		if(globals.validarLeer(globals.vg_user_id,globals.getFormID(forms.p_lineas.controller.getName()))){
			globals.validarPermisos(globals.vg_user_id,globals.getFormID(forms.p_lineas.controller.getName()),2,controller.getName())
		}else{
			forms.p_config.controller.show()
			globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
		}
//	}
}
