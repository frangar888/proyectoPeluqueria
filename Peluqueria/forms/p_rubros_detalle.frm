dataSource:"db:/peluqueria/prd_rubros",
items:[
{
dataProviderID:"rubro_cod",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:12,
horizontalAlignment:0,
location:"139,147",
name:"rubro_cod",
size:"71,20",
styleClass:"disable",
text:"Rubro Cod",
typeid:4,
uuid:"192A9432-BF27-467F-A1B2-97163D831858"
},
{
formIndex:6,
imageMediaID:"65F75DC3-37E9-49B5-8F0E-11D9B5765806",
location:"236,66",
mediaOptions:1,
name:"btn_grabar",
onActionMethodID:"E7A2BC56-F421-449F-BCCA-64D01AD3EDD1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Grabar",
typeid:7,
uuid:"2724F423-7AB1-47D2-8B84-C2A1C5B1A096"
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
uuid:"33BCF490-857C-42F3-8B25-043BABBD8C26"
},
{
fontType:"Corbel,2,36",
foreground:"#000000",
formIndex:6,
horizontalAlignment:2,
location:"116,9",
name:"opcion_nombre",
size:"300,42",
styleClass:"title",
text:"Detalle Rubro",
transparent:true,
typeid:7,
uuid:"375F46E2-94BD-447B-B7C6-243EA1B73CFD"
},
{
dataProviderID:"rubro_id",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:10,
horizontalAlignment:0,
location:"31,147",
name:"rubro_id",
size:"71,20",
styleClass:"disable",
text:"Rubro Id",
typeid:4,
uuid:"5CAB67E9-B6BE-4A1A-87FC-7634A24EF7AC"
},
{
formIndex:13,
labelFor:"rubro_nombre",
location:"249,128",
name:"rubro_nombre_label",
size:"302,20",
styleClass:"encabezado",
text:"Nombre",
typeid:7,
uuid:"5EBDE2FD-E95D-4CA4-B380-1F4DB867FBCA"
},
{
dataProviderID:"rubro_nombre",
fontType:"Trebuchet MS,0,15",
formIndex:14,
location:"249,147",
name:"rubro_nombre",
size:"302,20",
text:"Rubro Nombre",
typeid:4,
uuid:"626788FE-395B-46EE-B3D6-EDAF249B02A5"
},
{
formIndex:6,
imageMediaID:"0D22D325-B7DD-404D-AF0D-9AA3ED4AA32A",
location:"116,66",
mediaOptions:1,
name:"btn_salir",
onActionMethodID:"9BD28338-5C5E-48CA-B96A-3FBFAD096546",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Volver",
typeid:7,
uuid:"78D071AD-921A-45D9-AD58-D213C0AB93DA"
},
{
formIndex:11,
labelFor:"rubro_cod",
location:"139,128",
name:"rubro_cod_label",
size:"71,20",
styleClass:"encabezado",
text:"Código",
typeid:7,
uuid:"9E88D746-758A-408A-8EBA-5836E6B1E285"
},
{
height:426,
partType:5,
typeid:19,
uuid:"C2D5F569-C46C-41EE-BFC1-FB42E2610546"
},
{
anchors:11,
background:"#2ba6d5",
borderType:"LineBorder,1,#000000",
horizontalAlignment:2,
location:"0,0",
size:"1000,118",
text:"",
typeid:7,
uuid:"EA9A94B6-2BE7-43FB-ABD5-573434CAA879"
},
{
formIndex:9,
labelFor:"rubro_id",
location:"31,128",
name:"rubro_id_label",
size:"71,20",
styleClass:"encabezado",
text:"ID",
typeid:7,
uuid:"FA5FDAE3-0C1A-45C6-83D0-B54EA5083657"
},
{
anchors:15,
formIndex:15,
items:[
{
containsFormID:"6D6A9E6D-0AAB-412C-9C90-E03C9FB8B365",
location:"52,227",
relationName:"prd_rubros_to_prd_lineas",
text:"Líneas",
typeid:15,
uuid:"9E8DE2CA-AEBB-4DB9-B6BA-00284B508744"
}
],
location:"0,182",
name:"tabs",
printable:false,
size:"1000,244",
transparent:true,
typeid:16,
uuid:"FDB35C27-DAAC-4B86-9694-37A42054E6ED"
}
],
name:"p_rubros_detalle",
navigatorID:"-1",
onLoadMethodID:"743AEDD1-0CD9-406B-A242-2F64E786FF53",
onShowMethodID:"9E3B338A-934E-42A0-8E98-C8DEEF8E0A0F",
showInMenu:true,
size:"1000,333",
styleClass:"detail",
styleName:"estilo",
typeid:3,
uuid:"B1D3722D-1806-4A16-A8B8-902142660D76"