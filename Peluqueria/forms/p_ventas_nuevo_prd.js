/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"103EBF31-97B7-4A4C-8AB7-F917EA4972AF",variableType:8}
 */
var vl_cant_prd = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"043CDE66-A856-486E-86BE-627D7B969736",variableType:8}
 */
var vl_total = null;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A55131B3-FC1E-48EC-BC72-A163C5922D35"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E496B891-836A-421B-990C-DD7375FA7FF1"}
 */
function onShow(firstShow, event) {
	if(!globals.checkearAdmin(globals.vg_user_id,globals.getFormID(forms.p_lineas.controller.getName()),[],controller.getName())){
		if(globals.validarLeer(globals.vg_user_id,globals.getFormID(forms.p_lineas.controller.getName()))){
			globals.validarPermisos(globals.vg_user_id,globals.getFormID(forms.p_ventas.controller.getName()),0,controller.getName())
		}else{
			forms.p_ventas.controller.show()
			globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
		}
	}
}

/**
 * @properties={typeid:24,uuid:"57F00683-94CF-4EE9-B0BF-C863FB8427CE"}
 */
function calcularTotal(){
	vl_total = 0
	vl_cant_prd = 0
	for (var index = 1; index <= foundset.getSize(); index++) {
		var record = foundset.getRecord(index);
		vl_total += record.calc_subtotal
		vl_cant_prd += record.prd_cant
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E3C9F50B-3606-4101-85CD-7230531A16DE"}
 */
function onActionBorrar(event) {
	controller.deleteRecord()
	calcularTotal()
}
