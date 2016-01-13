
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3F5699EC-6612-4214-8FCC-F355C9797FB0"}
 */
function onActionVolver(event) {
	forms.p_config.controller.show()
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"311E5484-303D-4BFA-82B9-2D003DED4482"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text)
}
