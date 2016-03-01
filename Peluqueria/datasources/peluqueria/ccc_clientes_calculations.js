/**
 * @properties={type:8,typeid:36,uuid:"BB0BCD5F-D5AD-4F95-AB89-19261DB5BA77"}
 */
function calc_saldo_cliente()
{
	var saldo = 0
	if(utils.hasRecords(ccc_clientes_to_adn.adn_to_pel_ventas)){
		for (var index = 1; index <= ccc_clientes_to_adn.adn_to_pel_ventas.getSize(); index++) {
			var record = ccc_clientes_to_adn.adn_to_pel_ventas.getRecord(index);
			saldo += record.calc_saldo_vta
		}
	}
	return saldo;
}
