dataSource:"db:/peluqueria/pel_ventas",
items:[
{
dataProviderID:"vl_cliente",
displayType:10,
fontType:"Trebuchet MS,0,15",
formIndex:37,
location:"327,149",
name:"vl_cliente",
onDataChangeMethodID:"4DF731C5-1681-457E-909D-4A80D1D3F2C4",
size:"278,20",
text:"Vl Cliente",
typeid:4,
uuid:"18A65DA0-C481-4446-8E9F-96D24D299A29",
valuelistID:"EEB12ED8-E46C-4912-8786-1AD34C54F751"
},
{
formIndex:38,
labelFor:"venta_id",
location:"25,195",
name:"venta_id_label",
size:"77,20",
styleClass:"encabezado",
text:"ID",
typeid:7,
uuid:"2A64D9B0-C9F7-4193-86EC-570B6E9DF7B2"
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
text:"Ventas",
transparent:true,
typeid:7,
uuid:"2AECE048-8384-4A93-9F8D-E3320621C0BB"
},
{
formIndex:6,
imageMediaID:"D37E5F09-608A-470E-BBBF-08140144FA44",
location:"236,67",
mediaOptions:1,
name:"btn_nuevo",
onActionMethodID:"8C0F6E70-BF97-468E-96A7-5338D3F55E76",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Nuevo",
typeid:7,
uuid:"35DCF0A5-167B-4230-94A1-E8BCE6F54808"
},
{
formIndex:36,
labelFor:"vl_cliente",
location:"327,129",
name:"vl_cliente_label",
size:"278,20",
styleClass:"encabezado",
text:"Cliente",
typeid:7,
uuid:"360B4F3D-296C-46CC-B6E4-BA4CF4E9B79C"
},
{
formIndex:22,
labelFor:"vta_importe_total",
location:"463,195",
name:"vta_importe_total_label",
size:"140,20",
styleClass:"encabezado",
text:"Importe",
typeid:7,
uuid:"391A1095-069F-46F7-979B-5D4DF54D5F78"
},
{
anchors:11,
dataProviderID:"venta_id",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:39,
horizontalAlignment:0,
location:"25,215",
name:"venta_id",
size:"77,20",
text:"Venta Id",
typeid:4,
uuid:"4B983993-FEC7-40C2-9844-703AFC7F0881"
},
{
dataProviderID:"scopes.globals.vg_fecha_final",
displayType:5,
fontType:"Trebuchet MS,0,15",
formIndex:33,
format:"dd-MM-yyyy|mask",
location:"177,149",
name:"vg_fecha_final",
onDataChangeMethodID:"4DF731C5-1681-457E-909D-4A80D1D3F2C4",
size:"140,20",
text:"Vg Fecha Final",
typeid:4,
uuid:"5541C570-2194-4DB2-AACC-70C6236D8528"
},
{
dataProviderID:"aggr_cant_vtas",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:31,
horizontalAlignment:4,
location:"107,451",
name:"aggr_cant_vtas",
size:"85,20",
styleClass:"disable",
text:"Aggr Cant Vtas",
typeid:4,
uuid:"57582780-4BDD-44F3-841E-BDFA4EB6F450"
},
{
anchors:11,
dataProviderID:"vta_importe_total",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:23,
format:"#,###.00",
horizontalAlignment:4,
location:"463,215",
name:"vta_importe_total",
size:"140,20",
text:"Vta Importe Total",
typeid:4,
uuid:"5B7A37E6-5CE3-4A21-BEBC-42CF96B9C604"
},
{
formIndex:30,
labelFor:"aggr_cant_vtas",
location:"25,451",
name:"aggr_cant_vtas_label",
size:"80,20",
styleClass:"fieldlabel",
text:"# Ventas:",
typeid:7,
uuid:"5D48FFFE-C85E-44CE-9377-DF91735527DB"
},
{
formIndex:6,
imageMediaID:"0D22D325-B7DD-404D-AF0D-9AA3ED4AA32A",
location:"116,67",
mediaOptions:1,
name:"btn_salir",
onActionMethodID:"34EA425E-FE13-4F18-ADDB-24F4F1C42586",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Volver",
typeid:7,
uuid:"73885472-C468-475E-AE7A-9867CA482376"
},
{
formIndex:26,
labelFor:"vta_nombre_cliente",
location:"242,195",
name:"vta_nombre_cliente_label",
size:"221,20",
styleClass:"encabezado",
text:"Cliente",
typeid:7,
uuid:"7E90395E-23DE-480E-BD25-2BFEA8C5B467"
},
{
formIndex:28,
labelFor:"vta_fecha_emision",
location:"102,195",
name:"vta_fecha_emision_label",
size:"140,20",
styleClass:"encabezado",
text:"Fecha",
typeid:7,
uuid:"81AA6677-4C70-42BB-976A-79C8F88A69F4"
},
{
anchors:11,
dataProviderID:"vta_fecha_emision",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:29,
format:"dd-MM-yyyy",
horizontalAlignment:0,
location:"102,215",
name:"vta_fecha_emision",
size:"140,20",
text:"Vta Fecha Emision",
typeid:4,
uuid:"851842FB-C5D3-4AA1-9A22-9EE3FA328717"
},
{
anchors:11,
dataProviderID:"vta_nro_comprob",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:25,
horizontalAlignment:0,
location:"603,215",
name:"vta_nro_comprob",
size:"149,20",
text:"Vta Nro Comprob",
typeid:4,
uuid:"87AAB394-D3CF-400E-907F-96F14B7B6E31"
},
{
formIndex:40,
labelFor:"aggr_total_vtas",
location:"252,451",
name:"aggr_total_vtas_label",
size:"100,20",
styleClass:"fieldlabel",
text:"Total Ventas:",
typeid:7,
uuid:"93110939-E3D0-4AC0-94FC-A3956C1F10CB"
},
{
formIndex:7,
imageMediaID:"7C3F5578-7608-42A3-A348-1D45C927C0D0",
location:"5,213",
mediaOptions:1,
onActionMethodID:"6177CBF5-9562-45B1-BD52-B376C98FCD8C",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"20,20",
typeid:7,
uuid:"9396D223-299C-4214-8D97-3E693A0084B3"
},
{
dataProviderID:"vl_total_vtas",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:41,
format:"#,###.00",
horizontalAlignment:4,
location:"354,451",
name:"aggr_total_vtas",
size:"140,20",
styleClass:"disable",
text:"Aggr Total Vtas",
typeid:4,
uuid:"B1876BCD-729D-46DB-8B11-A8F920A5960B"
},
{
formIndex:34,
labelFor:"vg_fecha_inicial",
location:"25,129",
name:"vg_fecha_inicial_label",
size:"140,20",
styleClass:"encabezado",
text:"Fecha Inicial",
typeid:7,
uuid:"B5379133-0604-45BC-A8DA-7CBC6D928AF6"
},
{
height:490,
partType:8,
typeid:19,
uuid:"B583B8B9-22CD-4465-AEA9-73C9F9F227EB"
},
{
anchors:11,
dataProviderID:"vta_nombre_cliente",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:27,
location:"242,215",
name:"vta_nombre_cliente",
size:"221,20",
text:"Vta Nombre Cliente",
typeid:4,
uuid:"BEEF6AA1-BA31-42E7-82F5-8B28D6207363"
},
{
formIndex:32,
labelFor:"vg_fecha_final",
location:"177,129",
name:"vg_fecha_final_label",
size:"140,20",
styleClass:"encabezado",
text:"Fecha Final",
typeid:7,
uuid:"C6731725-9630-412E-9329-8F2BB6875751"
},
{
height:185,
partType:1,
typeid:19,
uuid:"D40E426C-6CE9-46C3-AAF6-0B9DBD58E7E1"
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
uuid:"D5FB8959-0F67-43B4-AAF3-493B66D38508"
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
uuid:"D949CB21-F4F0-44DD-8998-156F231B5077"
},
{
formIndex:24,
labelFor:"vta_nro_comprob",
location:"603,195",
name:"vta_nro_comprob_label",
size:"149,20",
styleClass:"encabezado",
text:"Comprobante",
typeid:7,
uuid:"DD75B721-F492-4AF6-8A8F-2DF66593B50E"
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
uuid:"F2BBE338-79E0-450C-8293-6335DD886435"
},
{
dataProviderID:"scopes.globals.vg_fecha_inicial",
displayType:5,
fontType:"Trebuchet MS,0,15",
formIndex:35,
format:"dd-MM-yyyy|mask",
location:"25,149",
name:"vg_fecha_inicial",
onDataChangeMethodID:"4DF731C5-1681-457E-909D-4A80D1D3F2C4",
size:"140,20",
text:"Vg Fecha Inicial",
typeid:4,
uuid:"F2E003E5-A6A4-4896-9656-43ED2EB30C29"
},
{
height:426,
partType:5,
typeid:19,
uuid:"F9B2618B-017F-4493-BDF6-29A073FF6FB1"
}
],
name:"p_ventas",
navigatorID:"-1",
onLoadMethodID:"627FE22E-7EF7-464F-A0B3-C6CD8C66BE60",
onShowMethodID:"B135202F-55D9-44A0-91E4-C6E0A1F8A982",
showInMenu:true,
size:"1000,480",
styleClass:"listado",
styleName:"estilo",
typeid:3,
uuid:"13CEF8D3-2469-4CC4-9DE0-7D6B7F66911A",
view:3