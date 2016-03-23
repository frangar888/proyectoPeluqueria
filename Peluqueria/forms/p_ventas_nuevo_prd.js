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
	forms.p_ventas_new.inicializarVariables()
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

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * 
 *
 * @properties={typeid:24,uuid:"B02409AF-D719-4176-AA40-8D1CCA449D3D"}
 */
function onDataChangeCambiaCant(oldValue, newValue, event) {
	if(pel_ventas_prd_to_prd_productos.prd_controla_stock == 1){
		var cant_en_stock = globals.obtieneStock(prd_id)
		if(cant_en_stock < prd_cant){
			globals.lanzarVentanaEmergente(0,'La cantidad ingresada es mayor a la cantidad en stock del porducto. Cantidad: '+cant_en_stock,'Info',controller.getName(),null,null)
			prd_cant = oldValue
			calcularTotal()
			return
		}else{
			calcularTotal()
		}
	}
	//return true
}

/**
 * 
 * @param lnk_prd_id
 *
 * @properties={typeid:24,uuid:"1DBAAB45-FD06-4706-BB37-34022EA034B8"}
 */
function validarExistencia(lnk_prd_id){
	var cant = databaseManager.getFoundSetCount(foundset)
	for (var index = 1; index <= cant; index++) {
		var record = foundset.getRecord(index);
		if(record.prd_id == lnk_prd_id){
			return record
		}
	}
	return null
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"754A4BDB-A6E7-4DE3-8741-1DC1C9EA9B5F"}
 */
function onActionRestar(event) {
	if(prd_cant == 1){
		controller.deleteRecord()
	}else{
		prd_cant -= 1
	}
	calcularTotal()
}
