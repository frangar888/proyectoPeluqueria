
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

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"09A49535-B580-4700-AF10-CFB0E5BF36A5"}
 */
function onShow(firstShow, event) {
	if(globals.esTipoAdmin()){
		elements.btn_us.visible = true
	}else{
		elements.btn_us.visible = false
	}
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"88DD5BF4-A31F-4AD8-B84A-C3927C5DD13D"}
 */
function onActionLineas(event) {
	forms.p_lineas.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"48525ECD-5732-4BF1-A49C-C09C712F505D"}
 */
function onActionCP(event) {
	forms.p_cod_postales.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8EAACDC3-7807-4780-A92C-E6F5B8777013"}
 */
function onActionMarcas(event) {
	forms.p_marcas.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F5395BC9-CCCC-4A46-822E-74607469580F"}
 */
function onActionEmpleados(event) {
	forms.p_empleados.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FF685206-BE6B-41F5-9A9D-FB66E8F43B0B"}
 */
function onActionConceptos(event) {
	forms.p_conceptos.controller.show()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4C931C3B-03C0-473D-9989-D6C1CCF92D50"}
 */
function onActionProveedores(event) {
	forms.p_proveedores.controller.show()
}
