/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D494A0F3-08D7-4626-A89D-B202E58C49EE"}
 */
var vl_form_no = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A1F9CAF-8F0A-47BD-AB55-16CF54B1FCCE"}
 */
var vl_form_si = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1FC9D9E4-A9D4-48B3-91C5-389E8AEEE611"}
 */
var vl_accion_no = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"66C2B438-707C-4852-BA08-7D3524709F58"}
 */
var vl_accion_si = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0D3CCBDD-539A-42E9-8297-E923A8985BB9"}
 */
var vl_mensaje = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A0C166F4-4AC4-4458-BE55-73236D57CA41"}
 */
function onActionOk(event) {
	application.getWindow('ventanaGenerica').hide()
}

/**
 * TODO generated, please specify type and doc for the params
 * 
 * 
 *
 * @properties={typeid:24,uuid:"A0FB4152-3513-44BA-AF30-1DC0121F345C"}
 */
function onActionSi(){
	if(vl_accion_si == null || vl_form_si == null){
		application.getWindow('ventanaGenerica').hide()
	}else{
		forms[vl_form_si][vl_form_no]
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * 
 * 
 *
 * @properties={typeid:24,uuid:"F18C4E35-3D62-49B7-B9FF-E21E304B16A8"}
 */
function onActionNo(){
	if(vl_form_no == null || vl_form_si == null){
		application.getWindow('ventanaGenerica').hide()
	}else{
		forms[vl_form_no][vl_form_si]
	}
}
