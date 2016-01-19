
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
