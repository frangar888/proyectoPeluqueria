dataSource:"db:/peluqueria/pel_ventas",
items:[
{
formIndex:20,
labelFor:"vta_nombre_cliente",
location:"135,128",
name:"vta_nombre_cliente_label",
size:"291,20",
styleClass:"encabezado",
text:"Cliente",
typeid:7,
uuid:"1834A691-A7C6-4BE0-AAF0-B5EECA52F0CB"
},
{
formIndex:18,
labelFor:"venta_id",
location:"40,128",
name:"venta_id_label",
size:"80,20",
styleClass:"encabezado",
text:"ID",
typeid:7,
uuid:"28F6F294-994D-47E0-BFB5-EBB5C801B9EC"
},
{
dataProviderID:"vta_nombre_cliente",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:21,
location:"135,148",
name:"vta_nombre_cliente",
size:"291,20",
text:"Vta Nombre Cliente",
typeid:4,
uuid:"572A908D-A455-43C9-B44D-05C146ACC0B0"
},
{
dataProviderID:"venta_id",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:19,
horizontalAlignment:0,
location:"40,148",
name:"venta_id",
size:"80,20",
text:"Venta Id",
typeid:4,
uuid:"58B82807-C1E9-47B7-9C98-48BE8454F361"
},
{
formIndex:6,
imageMediaID:"65F75DC3-37E9-49B5-8F0E-11D9B5765806",
location:"236,66",
mediaOptions:1,
name:"btn_grabar",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Grabar",
typeid:7,
uuid:"77088BD1-D172-4622-A388-1D1B9E7D79FD"
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
text:"Detalle Venta",
transparent:true,
typeid:7,
uuid:"B25E0BEF-B986-4AE1-9065-0D25751557B7"
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
uuid:"B307977C-659D-4270-9AB5-D8D4EC826978"
},
{
anchors:15,
formIndex:22,
items:[
{
containsFormID:"0F77F2AE-AAF3-4928-AE88-DA81C5ACE275",
location:"34,224",
relationName:"pel_ventas_to_pel_ventas_prd",
text:"Productos",
typeid:15,
uuid:"BA780D73-1221-4253-A460-90286B417962"
}
],
location:"0,180",
name:"tabs",
printable:false,
size:"1000,300",
transparent:true,
typeid:16,
uuid:"DCFBD9F5-D26C-4896-8375-A5F067D0761F"
},
{
formIndex:6,
imageMediaID:"0D22D325-B7DD-404D-AF0D-9AA3ED4AA32A",
location:"116,66",
mediaOptions:1,
name:"btn_salir",
onActionMethodID:"AAA41420-7854-4908-ADD0-0368704725FA",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Volver",
typeid:7,
uuid:"F07F76F2-7DE3-42DA-A52A-37F880FE7922"
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
uuid:"F0B50B79-8286-41BA-ACDB-6283DE0C7A55"
},
{
height:480,
partType:5,
typeid:19,
uuid:"FECE004E-A30B-49CC-B8B8-F924FB959C00"
}
],
name:"p_ventas_detalle",
navigatorID:"-1",
onLoadMethodID:"26CD256F-A3F4-42EF-9EEE-8D7ADFEB9F0D",
onShowMethodID:"F2A35592-742B-4672-8809-4B7A09108916",
showInMenu:true,
size:"1000,480",
styleClass:"detail",
styleName:"estilo",
typeid:3,
uuid:"AD831634-DF20-4F48-B44A-310723908AA9"