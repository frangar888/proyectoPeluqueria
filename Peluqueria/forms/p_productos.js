/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EB4762E8-E5F7-4A04-ACA6-FCFDF936A325",variableType:4}
 */
var vl_rubro = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3624CB0C-15E4-404F-A4D9-F3F64D55ECE3",variableType:4}
 */
var vl_linea = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"23BF569C-636F-448A-8539-F3770DC8F4B2",variableType:4}
 */
var vl_marca = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"21798C9D-B697-4282-83D3-F6851D27A359"}
 */
var vl_cod_bar = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"06DD7317-665C-43BC-BD09-137C34B1F3E1",variableType:4}
 */
var vl_codigo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6C53E98A-5B92-4D67-B67E-4E1F6D2E3F58"}
 */
var vl_nombre = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1CCEE796-BCCE-4457-B451-DEDBF57F4FC7"}
 */
function onShow(firstShow, event) {
	if(!globals.checkearAdmin(globals.vg_user_id,globals.getFormID(controller.getName()),[elements.btn_nuevo.getName()],controller.getName())){
		if(globals.validarLeer(globals.vg_user_id,globals.getFormID(controller.getName()))){
			globals.validarPermisos(globals.vg_user_id,globals.getFormID(controller.getName()),2,null)
		}else{
			forms.form_inicio.controller.show()
			globals.lanzarVentanaEmergente(0,'No tiene los permisos suficientes para acceder a esta opción.','Info',controller.getName(),null,null)
		}
	}
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"931FA628-3A75-446C-90B2-E74914B47DA2"}
 */
function onLoad(event) {
	globals.grabarFormUUID(controller.getName(),elements.opcion_nombre.text,0,0)
}
