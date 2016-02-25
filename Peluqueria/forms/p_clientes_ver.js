
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5E196B2F-0BDB-489D-A1EC-CAD6F501AF8D"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,1,globals.getFormID(forms.p_clientes.controller.getName()))
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C094E34A-AB52-4BB1-ADEB-776BFD57C6BA"}
 */
function onShow(firstShow, event) {
	globals.validarPermisosPadre(globals.getFormID(controller.getName()),globals.vg_user_id)
	forms.p_clientes_ver_tab_vtas.calcularTotales()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2665D927-4589-43A0-8002-F0FF2E54047E"}
 */
function onActionVolver(event) {
	forms.p_clientes.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A8903B58-B5CD-4472-86D2-65ABE2B9E3A8"}
 */
function onActionGrabar(event) {
	forms.p_clientes_ver_tab_datos.grabar()
	forms.p_clientes.controller.show()
}
