/**
 * @properties={type:8,typeid:36,uuid:"DF69B56E-D70F-4960-B6E9-DA1ABC4DF023"}
 */
function calc_importe_pagado()
{
	var pago = 0
	if(utils.hasRecords(pel_ventas_to_cj_ingresos)){
		for (var index = 1; index <= pel_ventas_to_cj_ingresos.getSize(); index++) {
			var record = pel_ventas_to_cj_ingresos.getRecord(index);
			pago += record.cj_ing_importe
		}
	}
	return pago;
}

/**
 * @properties={type:4,typeid:36,uuid:"23F07E95-04C7-435B-AEF5-2C4894B0A159"}
 */
function calc_tilde()
{
	return ;
}

/**
 * @properties={type:8,typeid:36,uuid:"F3366D33-6791-4A26-9819-BC638C90FBF2"}
 */
function calc_saldo_vta()
{
	return vta_importe_total - calc_importe_pagado;
}
