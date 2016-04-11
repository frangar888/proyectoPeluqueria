/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"17D1E0E6-ADA0-4476-BE6B-CBE2F131766F",variableType:8}
 */
var vl_total_egresos = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8002CC27-337A-41A2-A691-9C7C1B5EA31B",variableType:8}
 */
var vl_total_ingresos = null;

/**
 * @properties={typeid:24,uuid:"CCE656AC-C6B6-497E-AE57-1E10EFE2A02B"}
 */
function armarFormIngresos(){

   



    var success = history.removeForm("caja_ing")
    if(success) {solutionModel.removeForm("caja_ing")}
    
    var vQuery = "SELECT "+ 
    "b.conc_cod AS codigo, "+
    "b.conc_nombre AS concepto, "+
    "SUM(a.cj_ing_importe) AS importe "+
    "FROM "+
    "cj_ingresos AS a "+
    "INNER JOIN "+
    "cj_conceptos AS b ON a.conc_cod = b.conc_cod "+
    "WHERE "+
    "DATE(a.cj_ing_fecha) BETWEEN '"+utils.dateFormat(globals.vg_fecha_inicial,'yyyy-MM-dd')+"' AND '"+utils.dateFormat(globals.vg_fecha_final,'yyyy-MM-dd')+"' "+
    "GROUP BY b.conc_cod; "
    
	/** @type {JSDataSet<codigo:number, concepto:String, importe:number>}*/
	var vl_vDataset = databaseManager.getDataSetByQuery('peluqueria', vQuery, new Array(), -1);

	vl_total_ingresos = 0
	for(var i=1;i<=vl_vDataset.getMaxRowIndex();i++){
       vl_vDataset.rowIndex = i
       vl_total_ingresos += vl_vDataset.importe
    }
	
     var uri = vl_vDataset.createDataSource('_tmp_caja_ing', [JSColumn.NUMBER,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER]);

   
    var myForm = solutionModel.newForm('caja_ing', uri, null, true, 300, 200);
    myForm.extendsForm = 'p_caja_ingresos'
    myForm.navigator = SM_DEFAULTS.NONE
    myForm.styleClass = 'table'
    myForm.styleName = 'estilo'
    
    
    var cod_conc = myForm.newTextField('codigo', 20, 200, 60, 20)
    cod_conc.editable = false
    cod_conc.horizontalAlignment = SM_ALIGNMENT.CENTER
    cod_conc.titleText = 'Cod. Concepto'
    cod_conc.anchors = SM_ANCHOR.ALL
    cod_conc.styleClass = 'table_field'
    cod_conc.fontType = solutionModel.createFont('Trebuchet MS',0,15)
   
    var concepto = myForm.newTextField('concepto', 20, 200, 280, 20)
    concepto.editable = false
    concepto.horizontalAlignment = SM_ALIGNMENT.LEFT
    concepto.titleText = 'Concepto'
    concepto.anchors = SM_ANCHOR.ALL
    concepto.styleClass = 'table_field'
    concepto.fontType = solutionModel.createFont('Trebuchet MS',0,15)

    var importe = myForm.newTextField('importe', 50, 200, 100, 20)
    importe.editable = false
    importe.horizontalAlignment = SM_ALIGNMENT.RIGHT
    importe.titleText = 'Importe'
    importe.format = '##,###.00'
    importe.anchors = SM_ANCHOR.ALL
    importe.styleClass = 'table_field'
    importe.fontType = solutionModel.createFont('Trebuchet MS',0,15)
    
    
}

/**
 * @properties={typeid:24,uuid:"19F5AF18-02F5-4C4A-BEFF-A3F2F3C438A7"}
 */
function armarFormEgresos(){

	   
	 /*   for(var i=1;i<=vl_vDataset.getMaxRowIndex();i++)
	    {
	        vl_vDataset.rowIndex = i
	        vl_cant_registros = vl_vDataset.getMaxRowIndex()
			vl_total = vl_total + vl_vDataset.getValue(i,4)
			vl_cant_mov_total = vl_cant_mov_total + vl_vDataset.getValue(i,3)
	       
	    }*/


	    var success = history.removeForm("caja_egr")
	    if(success) {solutionModel.removeForm("caja_egr")}

	    var vQuery = "SELECT "+ 
	    "b.conc_cod AS codigo, "+
	    "b.conc_nombre AS concepto, "+
	    "SUM(a.cj_egr_importe) AS importe "+
	    "FROM "+
	    "cj_egresos AS a "+
	    "INNER JOIN "+
	    "cj_conceptos AS b ON a.conc_cod = b.conc_cod "+
	    "WHERE "+
	    "DATE(a.cj_egr_fecha) BETWEEN '"+utils.dateFormat(globals.vg_fecha_inicial,'yyyy-MM-dd')+"' AND '"+utils.dateFormat(globals.vg_fecha_final,'yyyy-MM-dd')+"' "+
	    "GROUP BY b.conc_cod; "
	    
		/** @type {JSDataSet<codigo:number, concepto:String, importe:number>}*/
		var vl_vDataset = databaseManager.getDataSetByQuery('peluqueria', vQuery, new Array(), -1);
		
		vl_total_egresos = 0
		for(var i=1;i<=vl_vDataset.getMaxRowIndex();i++){
	       vl_vDataset.rowIndex = i
	       vl_total_egresos += vl_vDataset.importe
	    }
		
	     var uri = vl_vDataset.createDataSource('_tmp_caja_egr', [JSColumn.NUMBER,JSColumn.TEXT,JSColumn.NUMBER,JSColumn.NUMBER,JSColumn.NUMBER]);

	    var myForm = solutionModel.newForm('caja_egr', uri, null, true, 300, 200);
	    myForm.extendsForm = 'p_caja_egresos'
	    myForm.navigator = SM_DEFAULTS.NONE
	    myForm.styleClass = 'table'
	    myForm.styleName = 'estilo'
	    
	    var cod_conc = myForm.newTextField('codigo', 20, 200, 60, 20)
	    cod_conc.editable = false
	    cod_conc.horizontalAlignment = SM_ALIGNMENT.CENTER
	    cod_conc.titleText = 'Cod. Concepto'
	    cod_conc.anchors = SM_ANCHOR.ALL
	    cod_conc.styleClass = 'table_field'
	    cod_conc.fontType = solutionModel.createFont('Trebuchet MS',0,15)
	   
	    var concepto = myForm.newTextField('concepto', 20, 200, 280, 20)
	    concepto.editable = false
	    concepto.horizontalAlignment = SM_ALIGNMENT.LEFT
	    concepto.titleText = 'Concepto'
	    concepto.anchors = SM_ANCHOR.ALL
	    concepto.styleClass = 'table_field'
	    concepto.fontType = solutionModel.createFont('Trebuchet MS',0,15)

	    var importe = myForm.newTextField('importe', 50, 200, 100, 20)
	    importe.editable = false
	    importe.horizontalAlignment = SM_ALIGNMENT.RIGHT
	    importe.titleText = 'Importe'
	    importe.format = '##,###.00'
	    importe.anchors = SM_ANCHOR.ALL
	    importe.styleClass = 'table_field'
	    importe.fontType = solutionModel.createFont('Trebuchet MS',0,15)


	}
	/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"352B3164-BA1B-4F6D-9882-1C9790EC4467"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		globals.vg_fecha_inicial = application.getServerTimeStamp()
		globals.vg_fecha_final = application.getServerTimeStamp()
	}
	armarFormEgresos()
	armarFormIngresos()
	forms['caja_ing'].vl_total_ingresos = vl_total_ingresos
	forms['caja_egr'].vl_total_egresos = vl_total_egresos
	forms.p_caja.elements.split.dividerLocation = 0.5
	forms.p_caja.elements.split.setLeftForm('caja_ing')
	forms.p_caja.elements.split.setRightForm('caja_egr')
	forms.p_caja.vl_saldo_ini = globals.obtenerSaldoIni(globals.vg_fecha_inicial)
	forms.p_caja.vl_saldo_periodo = vl_total_ingresos - vl_total_egresos
	forms.p_caja.vl_saldo_fin = forms.p_caja.vl_saldo_ini + forms.p_caja.vl_saldo_periodo
	forms.p_caja.controller.show()
}
	