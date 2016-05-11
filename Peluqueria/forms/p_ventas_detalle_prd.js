/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8C6441C3-021E-4D90-9998-411D3B83BB03",variableType:8}
 */
var vl_dto_imp = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"40AB2ED3-171B-400E-952C-ED2715EF5FD4",variableType:8}
 */
var vl_subtotal = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8AD62F70-08A8-4917-BACA-C2CF0F284F8E",variableType:8}
 */
var vl_saldo = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"136B9AD3-4063-436E-8CD7-6E1AE377E064",variableType:8}
 */
var vl_pago = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4BC04C7D-A274-4E15-9498-6066250AF9DD",variableType:8}
 */
var vl_total_vta = null;

/**
 * @properties={typeid:24,uuid:"6D88336D-2AA8-448D-9D9B-E233ADBAF993"}
 */
function calcularTotales(){
	vl_total_vta =  forms.p_ventas_detalle.vta_importe_total
	vl_pago = forms.p_ventas_detalle.calc_importe_pagado
	vl_saldo = vl_total_vta - vl_pago
	vl_dto_imp = (forms.p_ventas_detalle.vta_dto_1 * vl_total_vta) / (100 - forms.p_ventas_detalle.vta_dto_1)
	vl_subtotal = vl_total_vta + vl_dto_imp
	if(vl_saldo > 0){
		elements.vl_saldo.bgcolor = '#ff4242'
	}else{
		elements.vl_saldo.bgcolor = '#00ff80'
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0BBD96D2-7356-405A-8A4B-F4026F9F4C27"}
 */
function onActionDetalle(event) {
	forms.p_productos_detalle.vl_form_padre = 'p_ventas_detalle'
	forms.p_productos_detalle.controller.loadRecords(prd_id)
	forms.p_productos_detalle.controller.show()
}
