/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"71520CB0-52A3-45F1-9FAF-75A69BB74E09"}
 */
var vl_pass = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C2E449FE-4E0F-4C91-A1BD-EE4D61995CD0"}
 */
var vl_user = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C8262040-409A-4409-A05C-B39E94696EF6"}
 */
function onShow(firstShow, event) {
	databaseManager.setAutoSave(false)
	var ancho = application.getScreenWidth()
	
	elements.grp_login.setLocation(ancho/2 - ancho/16,298)
	elements.logo.setLocation(ancho/2 - ancho/16,14)
	elements.btn_ingresar.setLocation(ancho/2 - ancho/40,467)
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"78117CCC-BCF5-4564-9195-1CCD8DEB635C"}
 */
function onActionIngresar(event) {
	globals.auntenticar()
}
