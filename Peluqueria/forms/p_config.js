
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B77F41C-D1BF-409F-B47C-6A6196BC19C7"}
 */
function onActionVolver(event) {
	forms.form_inicio.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4ACBA187-91D3-4E6D-8905-119E8A3F86EB"}
 */
function onActionRubros(event) {
	elements.btn_rubros.getDataProviderID()
	forms.p_rubros.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AD56A300-9E65-4896-8ADE-A43EA23EB788"}
 */
function onActionUsuarios(event) {
	forms.p_usuarios.controller.show()
}




