
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"C3D2B4F8-8CD1-4E07-9040-BD408AD95CFD"}
 */
function onSolutionOpen(arg, queryParams) {
	
	databaseManager.setAutoSave(false)
	databaseManager.nullColumnValidatorEnabled = false
	application.setNumpadEnterAsFocusNextEnabled(true)
	globals.getUserId(globals.vg_user)
	globals.vg_version = 'Version 1.0.0'
	//plugins.DateUtils.register("Francisco Garcia","123456")
	forms.form_inicio.controller.show()

}

/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method. (This is the FindRecord in find mode, which is like JSRecord has all the columns/dataproviders, but doesn't have its methods)
 * @param {Boolean} findMode True if foundset of this record is in find mode
 * @param {Boolean} rawDisplayValue The raw displayValue without being converted to lower case
 *
 * @return {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"5353D891-6D51-4ABF-B60E-2444EF5663A1"}
 */
function getDataSetForValueList_prd_rubros(displayValue, realValue, record, valueListName, findMode, rawDisplayValue) {
var args = new Array()
	/** @type  {JSDataSet} */
	var result = null;
	if (displayValue == null && realValue == null) 
	{
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(rubro_cod as char),'-',rubro_nombre), rubro_id from prd_rubros order by rubro_cod asc ", args, -1);
	} 
	else if (displayValue != null) 
	{
		// TYPE_AHEAD filter call, return a filtered list
		args = [, "%" + displayValue + "%",displayValue + "%"]
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(rubro_cod as char),'-',rubro_nombre), rubro_id from prd_rubros where (rubro_cod like ? OR rubro_nombre like ?) order by rubro_cod asc", args, -1);

	} 
	else if (realValue != null) 
	{
		// real object not found in the current list, return 1 row with display,realvalue that will be added to the current list
		// dont return a complete list in this mode because that will be added to the list that is already there
		args = [realValue];
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(rubro_cod as char),'-',rubro_nombre), rubro_id from prd_rubros where rubro_id = ?", args, -1);

	}
	return result;

}

/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method. (This is the FindRecord in find mode, which is like JSRecord has all the columns/dataproviders, but doesn't have its methods)
 * @param {Boolean} findMode True if foundset of this record is in find mode
 * @param {Boolean} rawDisplayValue The raw displayValue without being converted to lower case
 *
 * @return {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"9DCB8282-8530-4122-BFEA-0CF8DBC73FED"}
 */
function getDataSetForValueList_ccc_clientes(displayValue, realValue, record, valueListName, findMode, rawDisplayValue) {
var args = new Array()
	/** @type  {JSDataSet} */
	var result = null;
	if (displayValue == null && realValue == null) 
	{
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(a.c_codigo as char),'-',b.adn_nombre), a.adn_id from ccc_clientes as a inner join adn as b on a.adn_id = b.adn_id order by c_codigo asc ", args, -1);
	} 
	else if (displayValue != null) 
	{
		// TYPE_AHEAD filter call, return a filtered list
		args = [, "%" + displayValue + "%",displayValue + "%"]
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(a.c_codigo as char),'-',b.adn_nombre), a.adn_id from ccc_clientes as a inner join adn as b on a.adn_id = b.adn_id where (a.c_codigo like ? OR b.adn_nombre like ?) order by c_codigo asc", args, -1);

	} 
	else if (realValue != null) 
	{
		// real object not found in the current list, return 1 row with display,realvalue that will be added to the current list
		// dont return a complete list in this mode because that will be added to the list that is already there
		args = [realValue];
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(a.c_codigo as char),'-',b.adn_nombre), a.adn_id from ccc_clientes as a inner join adn as b on a.adn_id = b.adn_id where adn_id = ?", args, -1);

	}
	return result;


}

/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method. (This is the FindRecord in find mode, which is like JSRecord has all the columns/dataproviders, but doesn't have its methods)
 * @param {Boolean} findMode True if foundset of this record is in find mode
 * @param {Boolean} rawDisplayValue The raw displayValue without being converted to lower case
 *
 * @return {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"5BA16E4B-BBB0-48E1-A80E-5563165C8318"}
 */
function getDataSetForValueList_adn_cod_postales(displayValue, realValue, record, valueListName, findMode, rawDisplayValue) {
var args = new Array()
	/** @type  {JSDataSet} */
	var result = null;
	if (displayValue == null && realValue == null) 
	{
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(cpos_codigo as char),'-',cpos_nombre), cod_postal_id from adn_cod_postales order by cpos_codigo asc ", args, -1);
	} 
	else if (displayValue != null) 
	{
		// TYPE_AHEAD filter call, return a filtered list
		args = [, "%" + displayValue + "%",displayValue + "%"]
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(cpos_codigo as char),'-',cpos_nombre), cod_postal_id from adn_cod_postales where (cpos_codigo like ? OR cpos_nombre like ?) order by cpos_codigo asc", args, -1);

	} 
	else if (realValue != null) 
	{
		// real object not found in the current list, return 1 row with display,realvalue that will be added to the current list
		// dont return a complete list in this mode because that will be added to the list that is already there
		args = [realValue];
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(cpos_codigo as char),'-',cpos_nombre), cod_postal_id from adn_cod_postales where cod_postal_id = ?", args, -1);

	}
	return result;



}



/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method. (This is the FindRecord in find mode, which is like JSRecord has all the columns/dataproviders, but doesn't have its methods)
 * @param {Boolean} findMode True if foundset of this record is in find mode
 * @param {Boolean} rawDisplayValue The raw displayValue without being converted to lower case
 *
 * @return {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"1651AB5D-5EA7-4B38-8D46-33BC80119A43"}
 */
function getDataSetForValueList_lineas_x_rubro(displayValue, realValue, record, valueListName, findMode, rawDisplayValue) {
var args = new Array()
	/** @type  {JSDataSet} */
	var result = null;
	if (displayValue == null && realValue == null) 
	{
		args = [globals.vg_rubro]
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(linea_cod as char),'-',linea_nombre), linea_id from prd_lineas where rubro_id = ? order by linea_cod asc ", args, -1);
	} 
	else if (displayValue != null) 
	{
		// TYPE_AHEAD filter call, return a filtered list
		args = [globals.vg_rubro,"%" + displayValue + "%",displayValue + "%"]
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(linea_cod as char),'-',linea_nombre), linea_id from prd_lineas where rubro_id = ? and (linea_cod like ? OR linea_nombre like ?) order by linea_cod asc", args, -1);

	} 
	else if (realValue != null) 
	{
		// real object not found in the current list, return 1 row with display,realvalue that will be added to the current list
		// dont return a complete list in this mode because that will be added to the list that is already there
		args = [globals.vg_rubro,realValue];
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(linea_cod as char),'-',linea_nombre), linea_id from prd_lineas where rubro_id = ? and linea_id = ?", args, -1);

	}
	return result;

}

/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method. (This is the FindRecord in find mode, which is like JSRecord has all the columns/dataproviders, but doesn't have its methods)
 * @param {Boolean} findMode True if foundset of this record is in find mode
 * @param {Boolean} rawDisplayValue The raw displayValue without being converted to lower case
 *
 * @return {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"8026B4EA-93FA-4BEC-B6B4-8AEEF3916DE5"}
 */
function getDataSetForValueList_prd_productos_todos(displayValue, realValue, record, valueListName, findMode, rawDisplayValue) {
var args = new Array()
	/** @type  {JSDataSet} */
	var result = null;
	if (displayValue == null && realValue == null) 
	{
		args = []
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(prd_codigo as char),'-',prd_nombre), prd_id from prd_productos order by prd_codigo asc ", args, -1);
	} 
	else if (displayValue != null) 
	{
		// TYPE_AHEAD filter call, return a filtered list
		args = ["%" + displayValue + "%",displayValue + "%"]
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(prd_codigo as char),'-',prd_nombre), prd_id from prd_productos where (prd_codigo like ? OR prd_nombre like ?) order by prd_codigo asc", args, -1);

	} 
	else if (realValue != null) 
	{
		// real object not found in the current list, return 1 row with display,realvalue that will be added to the current list
		// dont return a complete list in this mode because that will be added to the list that is already there
		args = [realValue];
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(prd_codigo as char),'-',prd_nombre), prd_id from prd_productos where prd_id = ?", args, -1);

	}
	return result;

}

/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method. (This is the FindRecord in find mode, which is like JSRecord has all the columns/dataproviders, but doesn't have its methods)
 * @param {Boolean} findMode True if foundset of this record is in find mode
 * @param {Boolean} rawDisplayValue The raw displayValue without being converted to lower case
 *
 * @return {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"02856A3A-513B-4716-A7B3-1AAAB9E77636"}
 */
function getDataSetForValueList_prd_productos_activos(displayValue, realValue, record, valueListName, findMode, rawDisplayValue) {
	var args = new Array()
	/** @type  {JSDataSet} */
	var result = null;
	if (displayValue == null && realValue == null) 
	{
		args = []
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(prd_codigo as char),'-',prd_nombre), prd_id from prd_productos where prd_estado = 0 order by prd_codigo asc ", args, -1);
	} 
	else if (displayValue != null) 
	{
		// TYPE_AHEAD filter call, return a filtered list
		args = ["%" + displayValue + "%",displayValue + "%"]
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(prd_codigo as char),'-',prd_nombre), prd_id from prd_productos where prd_estado = 0 and (prd_codigo like ? OR prd_nombre like ?) order by prd_codigo asc", args, -1);

	} 
	else if (realValue != null) 
	{
		// real object not found in the current list, return 1 row with display,realvalue that will be added to the current list
		// dont return a complete list in this mode because that will be added to the list that is already there
		args = [realValue];
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(prd_codigo as char),'-',prd_nombre), prd_id from prd_productos where prd_estado = 0 and prd_id = ?", args, -1);

	}
	return result;

}

/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method. (This is the FindRecord in find mode, which is like JSRecord has all the columns/dataproviders, but doesn't have its methods)
 * @param {Boolean} findMode True if foundset of this record is in find mode
 * @param {Boolean} rawDisplayValue The raw displayValue without being converted to lower case
 *
 * @return {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"059EAD36-31FB-41C0-BFC3-AFF4DB8BF946"}
 */
function getDataSetForValueList_adn_vendedores(displayValue, realValue, record, valueListName, findMode, rawDisplayValue) {
var args = new Array()
	/** @type  {JSDataSet} */
	var result = null;
	if (displayValue == null && realValue == null) 
	{
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(a.ven_codigo as char),'-',b.adn_nombre), a.adn_id from adn_vendedores as a inner join adn as b on a.adn_id = b.adn_id order by ven_codigo asc ", args, -1);
	} 
	else if (displayValue != null) 
	{
		// TYPE_AHEAD filter call, return a filtered list
		args = [, "%" + displayValue + "%",displayValue + "%"]
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(a.ven_codigo as char),'-',b.adn_nombre), a.adn_id from adn_vendedores as a inner join adn as b on a.adn_id = b.adn_id where (a.ven_codigo like ? OR b.adn_nombre like ?) order by ven_codigo asc", args, -1);

	} 
	else if (realValue != null) 
	{
		// real object not found in the current list, return 1 row with display,realvalue that will be added to the current list
		// dont return a complete list in this mode because that will be added to the list that is already there
		args = [realValue];
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(a.ven_codigo as char),'-',b.adn_nombre), a.adn_id from adn_vendedores as a inner join adn as b on a.adn_id = b.adn_id where a.adn_id = ?", args, -1);

	}
	return result;

}



/**
 * Called when the valuelist needs data, it has 3 modes.
 * real and display params both null: return the whole list
 * only display is specified, called by a typeahead, return a filtered list
 * only real value is specified, called when the list doesnt contain the real value for the give record value, this will insert this value into the existing list
 *
 * @param {String} displayValue The value of a lookupfield that a user types
 * @param realValue The real value for a lookupfield where a display value should be get for
 * @param {JSRecord} record The current record for the valuelist.
 * @param {String} valueListName The valuelist name that triggers the method. (This is the FindRecord in find mode, which is like JSRecord has all the columns/dataproviders, but doesn't have its methods)
 * @param {Boolean} findMode True if foundset of this record is in find mode
 * @param {Boolean} rawDisplayValue The raw displayValue without being converted to lower case
 *
 * @return {JSDataSet} A dataset with 1 or 2 columns display[,real]
 *
 * @properties={typeid:24,uuid:"17BBBAF1-E80E-482B-B8E4-44FC589ABC8B"}
 */
function getDataSetForValueList_prd_lineas(displayValue, realValue, record, valueListName, findMode, rawDisplayValue) {
var args = new Array()
	/** @type  {JSDataSet} */
	var result = null;
	if (displayValue == null && realValue == null) 
	{
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(linea_cod as char),'-',linea_nombre), linea_id from prd_lineas order by linea_cod asc ", args, -1);
	} 
	else if (displayValue != null) 
	{
		// TYPE_AHEAD filter call, return a filtered list
		args = [, "%" + displayValue + "%",displayValue + "%"]
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(linea_cod as char),'-',linea_nombre), linea_id from prd_lineas where (linea_cod like ? OR linea_nombre like ?) order by linea_cod asc", args, -1);

	} 
	else if (realValue != null) 
	{
		// real object not found in the current list, return 1 row with display,realvalue that will be added to the current list
		// dont return a complete list in this mode because that will be added to the list that is already there
		args = [realValue];
		result =  databaseManager.getDataSetByQuery("peluqueria", "select concat(cast(linea_cod as char),'-',linea_nombre), linea_id from prd_lineas where linea_id = ?", args, -1);

	}
	return result;

}
