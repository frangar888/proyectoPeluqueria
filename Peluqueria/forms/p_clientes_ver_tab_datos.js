/**
 * @properties={typeid:24,uuid:"5C338B4D-071C-4951-A9D1-28D32D5DE548"}
 */
function grabar(){
	if(ccc_clientes_to_adn.adn_nombre == null || ccc_clientes_to_adn.adn_nombre == ''){
		globals.lanzarVentanaEmergente(0,'Por favor complete el nombre del cliente','Info',controller.getName(),null,null)
		elements.adn_nombre.requestFocus()
		return
	}
	databaseManager.saveData()
}