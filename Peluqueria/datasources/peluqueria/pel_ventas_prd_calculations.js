/**
 * @properties={type:8,typeid:36,uuid:"95AB1838-9C93-41CF-BEC4-EF281C000D56"}
 */
function calc_subtotal()
{
	var dto_porc = prd_dto_1 / 100
	var dto_imp = prd_precio * dto_porc
	return prd_cant * (prd_precio - dto_imp);
}
