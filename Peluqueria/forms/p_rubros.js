
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9A5F7E47-6455-4327-9783-747F892C7D6B"}
 */
function onActionVolver(event) {
	forms.p_config.controller.show()
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FAB8B034-3AAE-4957-B685-4ACB61EBB07B"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text)
}
