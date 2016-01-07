/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E08D03B6-2320-4D6A-AB6A-6E5032A44C5A"}
 */
var vg_version = 'v1.0.0';

/**
 * @properties={typeid:24,uuid:"B82FF25A-1549-47F7-B3CA-FC97F2F19A92"}
 */
function auntenticar(){
	
	if(vg_user == null && vg_pass == null){
		globals.lanzarVentanaEmergente(0,'Ingrese nombre de usuario y contraseña','Info',null,null,null)
		return
	}
	if(vg_user == null && vg_pass != null){
		globals.lanzarVentanaEmergente(0,'Ingrese nombre de usuario','Info',null,null,null)
		return
	}
	if(vg_user != null && vg_pass == null){
		globals.lanzarVentanaEmergente(0,'Ingrese contraseña','Info',null,null,null)
		return
	}
	if(validarUser() == 1){
		globals.lanzarVentanaEmergente(0,'El nombre de usuario no es correcto','Info',null,null,null)
		return
	}
	if(validarUser() == 2){
		globals.lanzarVentanaEmergente(0,'La contraseña no es correcta','Info',null,null,null)
		return
	}
	if(validarUser() == 0){
		forms.form_inicio.controller.show()
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param lnk_tipo
 * @param lnk_mensaje
 * @param lnk_accion_btn_si
 * @param lnk_accion_btn_no
 * @param lnk_nombre_form
 * @param lnk_titulo
 *
 * @properties={typeid:24,uuid:"B3709C4C-DE86-4D04-951B-1BAFA46EC92D"}
 */
function lanzarVentanaEmergente(lnk_tipo, lnk_mensaje, lnk_titulo, lnk_nombre_form, lnk_accion_btn_si, lnk_accion_btn_no){
	var win
	switch (lnk_tipo){
		case 0: //mensaje info
			forms.win_generica.elements.btn_no.visible = false
			forms.win_generica.elements.btn_si.visible = false
			forms.win_generica.elements.btn_ok.visible = true
			forms.win_generica.vl_mensaje = lnk_mensaje
			forms.win_generica.elements.imagen.imageURL = "media:///icons/written.png"
			win = application.createWindow("ventanaGenerica", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= lnk_titulo;
			win.show(forms.win_generica);
			break;
		case 1: //mensaje confirmacion
			forms.win_generica.elements.btn_no.visible = true
			forms.win_generica.elements.btn_si.visible = true
			forms.win_generica.elements.btn_ok.visible = false
			forms.win_generica.vl_mensaje = lnk_mensaje
			forms.win_generica.vl_form_no = lnk_nombre_form
			forms.win_generica.vl_form_si = lnk_nombre_form
			forms.win_generica.vl_accion_no = lnk_accion_btn_no
			forms.win_generica.vl_accion_si = lnk_accion_btn_si
			forms.win_generica.elements.imagen.imageURL = "media:///icons/warning18.png"
			win = application.createWindow("ventanaGenerica", JSWindow.MODAL_DIALOG);
			win.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
			win.setSize(JSWindow.DEFAULT,JSWindow.DEFAULT)
			win.resizable = false
			win.title= lnk_titulo;
			win.show(forms.win_generica);
		break;
	}
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"650C524A-AEFC-40FD-9349-628B3C8957C6"}
 */
function validarUser(){
	/** @type {JSFoundset<db:/peluqueria/adn_usuarios>}*/
	var fs_users = databaseManager.getFoundSet('peluqueria','adn_usuarios')
	fs_users.find()
	fs_users.user_nombre = globals.vg_user
	if(fs_users.search()== 0){
		return 1
	}else{
		fs_users.find()
		fs_users.user_nombre = globals.vg_user
		fs_users.user_pass = globals.vg_pass
		if(fs_users.search() == 0){
			return 2
		}else{
			return 0
		}
	}
	
}