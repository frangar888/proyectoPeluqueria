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
	if(vl_saldo > 0){
		elements.vl_saldo.bgcolor = '#ff4242'
	}else{
		elements.vl_saldo.bgcolor = '#00ff80'
	}
}