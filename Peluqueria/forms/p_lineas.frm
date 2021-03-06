dataSource:"db:/peluqueria/prd_lineas",
items:[
{
formIndex:6,
imageMediaID:"D37E5F09-608A-470E-BBBF-08140144FA44",
location:"236,67",
mediaOptions:1,
name:"btn_nuevo",
onActionMethodID:"B33B03D9-E1E2-4B15-86C8-7D3D684AD339",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Nuevo",
typeid:7,
uuid:"0BAAA8B5-6D18-4163-BD29-BCB03EB31195"
},
{
formIndex:15,
labelFor:"calc_cod_rubro",
location:"438,152",
name:"calc_cod_rubro_label",
size:"213,20",
styleClass:"encabezado",
text:"Rubro",
typeid:7,
uuid:"15957F33-0A63-479B-9B96-4B60D358B904"
},
{
height:490,
partType:8,
typeid:19,
uuid:"1BA7075A-1201-438F-94BE-CD375AFEA396"
},
{
formIndex:6,
imageMediaID:"0D22D325-B7DD-404D-AF0D-9AA3ED4AA32A",
location:"116,67",
mediaOptions:1,
name:"btn_salir",
onActionMethodID:"5F9905FC-750F-4DC8-AAA6-F2F1AD884837",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Volver",
typeid:7,
uuid:"1FB6A2A4-39C2-4714-A3DB-1240A6BFC849"
},
{
fontType:"Corbel,2,36",
foreground:"#000000",
formIndex:6,
horizontalAlignment:2,
location:"116,10",
name:"opcion_nombre",
size:"300,42",
styleClass:"title",
text:"Líneas",
transparent:true,
typeid:7,
uuid:"3E53A3BB-4F38-41EB-8FB7-3DCC08FB6DDF"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"scopes.globals.vg_user_logo",
displayType:9,
editable:false,
formIndex:17,
horizontalAlignment:0,
location:"15,10",
name:"vg_user_logo",
scrollbars:36,
size:"82,83",
transparent:true,
typeid:4,
uuid:"3EA2472E-57D4-464F-9848-D3C74460EA14"
},
{
anchors:11,
background:"#2ba6d5",
borderType:"LineBorder,1,#000000",
horizontalAlignment:2,
location:"0,436",
size:"1000,54",
text:"",
typeid:7,
uuid:"4D0A7F90-61E5-4ECC-9E31-5D3852038145"
},
{
formIndex:9,
labelFor:"linea_nombre",
location:"132,152",
name:"linea_nombre_label",
size:"306,20",
styleClass:"encabezado",
text:"Nombre",
typeid:7,
uuid:"6270EBBD-8B52-4746-9DE4-2FDBAD7E5B96"
},
{
formIndex:7,
imageMediaID:"7C3F5578-7608-42A3-A348-1D45C927C0D0",
location:"5,173",
mediaOptions:1,
onActionMethodID:"CC7B74ED-6F0B-48AB-BA25-71F767836682",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"20,20",
typeid:7,
uuid:"6943E7C0-CC45-42A4-A20A-9B2BB9AFAED3"
},
{
formIndex:11,
labelFor:"linea_cod",
location:"30,152",
name:"linea_cod_label",
size:"102,20",
styleClass:"encabezado",
text:"Código",
typeid:7,
uuid:"6F717C84-3147-4C6D-A5C5-842CA40B4B35"
},
{
formIndex:13,
labelFor:"aggr_cant_lineas",
location:"15,454",
name:"aggr_cant_lineas_label",
size:"80,20",
styleClass:"fieldlabel",
text:"# Líneas:",
typeid:7,
uuid:"87EEFA19-90C3-47C4-B6E2-45A572B7D166"
},
{
height:144,
partType:1,
typeid:19,
uuid:"8CFEA64A-3738-42F8-BD20-FBCC4EC15183"
},
{
anchors:11,
dataProviderID:"prd_lineas_to_prd_rubros.calc_cod_rubro",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:16,
location:"438,172",
name:"calc_cod_rubro",
size:"213,20",
text:"Calc Cod Rubro",
typeid:4,
uuid:"985F5389-3103-4B83-BF48-92A58E3614DC"
},
{
anchors:11,
dataProviderID:"linea_cod",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:12,
location:"30,172",
name:"linea_cod",
size:"102,20",
text:"Linea Cod",
typeid:4,
uuid:"A15C30C0-53EB-4C72-A621-D596647553F8"
},
{
height:426,
partType:5,
typeid:19,
uuid:"AD27304A-C1C5-4394-83AD-DAF66D35E2F8"
},
{
dataProviderID:"aggr_cant_lineas",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:14,
horizontalAlignment:4,
location:"98,454",
name:"aggr_cant_lineas",
size:"70,20",
styleClass:"disable",
text:"Aggr Cant Lineas",
typeid:4,
uuid:"B3CACB7F-6701-487D-AE89-AB9E95914263"
},
{
anchors:11,
background:"#2ba6d5",
borderType:"LineBorder,1,#000000",
horizontalAlignment:2,
location:"0,1",
size:"1000,118",
text:"",
typeid:7,
uuid:"BFC40D7A-46F9-4F02-A15C-672C8E8EEA7F"
},
{
anchors:11,
dataProviderID:"linea_nombre",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:10,
location:"132,172",
name:"linea_nombre",
size:"306,20",
text:"Linea Nombre",
typeid:4,
uuid:"E7CDE8E6-236B-4DCB-99F3-3299ABE5A58E"
}
],
name:"p_lineas",
navigatorID:"-1",
onLoadMethodID:"8A5F0EB0-DEBC-474C-BBCF-3FDBC364434D",
onShowMethodID:"33B25E85-9405-458A-9962-ED99F732839E",
showInMenu:true,
size:"1000,480",
styleClass:"listado",
styleName:"estilo",
typeid:3,
uuid:"CD81B031-1EAF-4654-82C4-786F4F68DE90",
view:3