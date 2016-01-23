
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
	globals.getUserId(globals.vg_user)
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
