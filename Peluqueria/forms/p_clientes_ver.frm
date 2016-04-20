dataSource:"db:/peluqueria/ccc_clientes",
items:[
{
anchors:11,
background:"#2ba6d5",
borderType:"LineBorder,1,#000000",
horizontalAlignment:2,
location:"0,1",
size:"1000,118",
text:"",
typeid:7,
uuid:"37A2A6D1-8A32-4AE8-A60D-CD9EA3613F4A"
},
{
anchors:15,
formIndex:18,
items:[
{
containsFormID:"EA61D93F-246B-452B-8DB2-C7BF02706708",
location:"134,276",
text:"Datos",
typeid:15,
uuid:"6436F27F-6B98-46B5-9AA8-77BED3CED1C6"
},
{
containsFormID:"ECE7B31A-0A39-45DC-88E5-3F1B80EFA352",
location:"28,236",
relationName:"ccc_clientes_to_adn.adn_to_pel_ventas",
text:"Cuenta Corriente",
typeid:15,
uuid:"7DF5E2D7-981A-4DD3-97E2-0FA04156E898"
}
],
location:"0,189",
name:"tabs",
printable:false,
size:"1000,315",
transparent:true,
typeid:16,
uuid:"4BF370DF-C4EE-4B9F-B560-B7261C7E115D"
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
text:"Detalle Cliente",
transparent:true,
typeid:7,
uuid:"58771382-2754-4D2E-87E8-2BB2E76410BB"
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
uuid:"94F64BC2-9329-47D1-A716-BD80C9968D67"
},
{
formIndex:21,
labelFor:"c_codigo",
location:"28,129",
name:"c_codigo_label",
size:"140,20",
styleClass:"encabezado",
text:"Código",
typeid:7,
uuid:"9B5AA93C-4F3E-41A6-BB33-29E63A79D8E4"
},
{
dataProviderID:"ccc_clientes_to_adn.adn_nombre",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:20,
location:"183,149",
name:"adn_nombre",
size:"285,20",
styleClass:"disable",
text:"Adn Nombre",
typeid:4,
uuid:"ACE6F280-6E7E-4198-BBDC-FD4DD317649F"
},
{
formIndex:19,
labelFor:"adn_nombre",
location:"183,129",
name:"adn_nombre_label",
size:"285,20",
styleClass:"encabezado",
text:"Nombre",
typeid:7,
uuid:"BA89ADF1-F32A-45B6-A095-FDC9D1745BB9"
},
{
formIndex:6,
imageMediaID:"AFAF5472-3C5F-4A8F-B550-DF92FCED0766",
location:"236,67",
mediaOptions:1,
name:"btn_grabar",
onActionMethodID:"A8903B58-B5CD-4472-86D2-65ABE2B9E3A8",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Grabar",
typeid:7,
uuid:"DB9FA227-D160-4DC3-A340-FE8305C3DBA1"
},
{
height:504,
partType:5,
typeid:19,
uuid:"DBBAFA74-8EBB-4901-8493-090B5746E6CC"
},
{
dataProviderID:"c_codigo",
fontType:"Trebuchet MS,0,15",
formIndex:22,
horizontalAlignment:0,
location:"28,149",
name:"c_codigo",
size:"140,20",
styleClass:"disable",
text:"C Codigo",
typeid:4,
uuid:"FCB0DFE0-CAE6-4E22-AF50-C4C7DD63AC59"
},
{
formIndex:6,
imageMediaID:"D9E5FF97-F987-429C-9627-069F1547E29A",
location:"116,67",
mediaOptions:1,
name:"btn_salir",
onActionMethodID:"2665D927-4589-43A0-8002-F0FF2E54047E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Volver",
typeid:7,
uuid:"FDCC43A6-28ED-4D61-AB15-C4E6ECD05EE1"
}
],
name:"p_clientes_ver",
navigatorID:"-1",
onLoadMethodID:"5E196B2F-0BDB-489D-A1EC-CAD6F501AF8D",
onShowMethodID:"C094E34A-AB52-4BB1-ADEB-776BFD57C6BA",
showInMenu:true,
size:"1000,480",
styleClass:"detail",
styleName:"estilo",
typeid:3,
uuid:"7CD0D54E-F049-4A4F-9CC7-B08FA2C393D5"