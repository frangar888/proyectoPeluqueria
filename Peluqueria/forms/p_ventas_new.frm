dataSource:"db:/peluqueria/pel_ventas",
items:[
{
dataProviderID:"vl_saldo",
editable:false,
fontType:"Trebuchet MS,0,20",
formIndex:14,
format:"#,###.00",
horizontalAlignment:4,
location:"852,181",
name:"vl_saldo",
size:"83,35",
text:"Vl Saldo",
typeid:4,
uuid:"07F63884-2964-474A-A6F5-47C71F6819DB"
},
{
dataProviderID:"adn_id",
displayType:10,
formIndex:7,
location:"98,102",
name:"vl_cliente",
onDataChangeMethodID:"01C614FF-28C4-4B35-9195-23C6D0A02451",
size:"243,20",
text:"Vl Cliente",
typeid:4,
uuid:"2A2DD7C1-28FB-40CA-A481-FAB9830B13D3",
valuelistID:"EEB12ED8-E46C-4912-8786-1AD34C54F751"
},
{
fontType:"Trebuchet MS,0,17",
formIndex:5,
labelFor:"vl_total_total",
location:"535,181",
name:"vl_total_total_label",
size:"107,35",
styleClass:"fieldlabel",
text:"Total Final:",
typeid:7,
uuid:"2D139974-A22E-4B84-A8B4-54CEDB677CB9"
},
{
fontType:"Trebuchet MS,0,17",
formIndex:1,
labelFor:"vl_descuento",
location:"535,141",
name:"vl_descuento_label",
size:"107,35",
styleClass:"fieldlabel",
text:"Dto %:",
typeid:7,
uuid:"38696F4E-560B-402B-8F01-3D03FFF22591"
},
{
formIndex:6,
imageMediaID:"0D22D325-B7DD-404D-AF0D-9AA3ED4AA32A",
location:"116,39",
mediaOptions:1,
name:"btn_salir",
onActionMethodID:"1091DC3D-FA4A-4F75-B53A-77476BCBF4A3",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Volver",
typeid:7,
uuid:"3AF9CF95-5621-435D-A6A6-7345FEA62683"
},
{
formIndex:1,
imageMediaID:"AA1ECD5F-8EEF-44D9-B015-5240196D7480",
location:"352,99",
mediaOptions:1,
onActionMethodID:"DBE7A8D1-AED0-4082-B363-A1E11613DD2B",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"126,25",
text:"Cons. Final",
typeid:7,
uuid:"3DD68DB6-0D19-4D65-A499-08C0BC0BFBBD"
},
{
fontType:"Corbel,2,36",
foreground:"#000000",
formIndex:6,
horizontalAlignment:2,
location:"116,5",
name:"opcion_nombre",
size:"300,30",
styleClass:"title",
text:"Nueva Venta",
transparent:true,
typeid:7,
uuid:"3E620592-A455-4CC1-85D1-D863993BF2D9"
},
{
dataProviderID:"vendedor_adn_id",
displayType:3,
formIndex:6,
location:"98,127",
name:"vendedor_adn_id",
scrollbars:33,
size:"243,93",
text:"Vendedor Adn Id",
typeid:4,
uuid:"4C4B744F-24A7-431B-8EEA-DDC042DA7125",
valuelistID:"585581A2-8CED-428A-A15E-BE07DC751F25"
},
{
fontType:"Trebuchet MS,0,17",
formIndex:7,
labelFor:"vl_total_vta",
location:"535,101",
name:"vl_total_vta_label",
size:"107,35",
styleClass:"fieldlabel",
text:"Total Venta:",
typeid:7,
uuid:"5FEDCB05-A3D1-4087-A137-8D090C7D260D"
},
{
anchors:15,
items:[
{
containsFormID:"A9B8D453-670F-4F5E-A8CF-FC26EEF8C4B4",
location:"7,258",
text:"Selección de Productos",
typeid:15,
uuid:"4C59E614-6EB0-4892-A7A5-BD2912E8E924"
},
{
containsFormID:"B5543DFE-F5F7-4721-9C2D-DE4C3C8D61D5",
location:"537,255",
name:"Productos",
text:"Productos de la Venta",
typeid:15,
uuid:"AB71B577-FD2E-4498-B122-DFF192CA4E8F"
}
],
location:"0,238",
name:"tabs",
printable:false,
size:"1000,288",
tabOrientation:-2,
transparent:true,
typeid:16,
uuid:"6542CCEE-C135-4A2D-9670-20FAF089DA3B"
},
{
formIndex:3,
labelFor:"",
location:"19,102",
name:"vl_cliente_label",
size:"76,20",
styleClass:"fieldlabel",
text:"Cliente:",
typeid:7,
uuid:"693FF91A-E865-4871-95BF-C2AEB3DBC6F9"
},
{
formIndex:1,
imageMediaID:"883E27E5-27EE-4BD0-8716-4D3ABC8269B5",
location:"939,101",
mediaOptions:1,
name:"btn_cancelar",
onActionMethodID:"3EF6A7AC-91CB-496E-B18F-53EC5E2AF556",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"43,35",
typeid:7,
uuid:"6CE6384D-B776-45DC-97D4-8F18E96A5700"
},
{
dataProviderID:"vl_pago",
fontType:"Trebuchet MS,0,20",
formIndex:4,
format:"#,###.00",
horizontalAlignment:4,
location:"852,101",
name:"vl_pago",
onDataChangeMethodID:"7529E46B-6F8D-4777-90C4-0CB9BADDB847",
selectOnEnter:true,
size:"83,35",
text:"Vl Pago",
typeid:4,
uuid:"70210074-54BE-4EC1-8FB2-69DDDC27F5C9"
},
{
borderType:"TitledBorder,Datos,4,0,Segoe UI,0,12,#000000",
lineSize:1,
location:"10,84",
size:"479,147",
typeid:21,
uuid:"746193CD-728E-486D-B249-BE9D8F934341"
},
{
anchors:11,
background:"#2ba6d5",
borderType:"LineBorder,1,#000000",
horizontalAlignment:2,
location:"0,0",
size:"1000,79",
text:"",
typeid:7,
uuid:"74A607B6-406B-4F63-B717-B138AB654F10"
},
{
background:"#80ff80",
dataProviderID:"vl_total_total",
editable:false,
fontType:"Trebuchet MS,0,20",
formIndex:6,
format:"#,###.00",
horizontalAlignment:4,
location:"647,181",
name:"vl_total_total",
size:"83,35",
text:"Vl Total Total",
typeid:4,
uuid:"7E6D8D68-FDCA-4CAF-ABA2-88ECB8DBD698"
},
{
formIndex:6,
imageMediaID:"65F75DC3-37E9-49B5-8F0E-11D9B5765806",
location:"236,39",
mediaOptions:1,
name:"btn_grabar",
onActionMethodID:"57CD5771-9A7A-4E9F-9906-F2E9A443286D",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Cerrar",
typeid:7,
uuid:"8C908712-8F1C-4268-BAA1-B07C713D7EE7"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"scopes.globals.vg_user_logo",
displayType:9,
editable:false,
formIndex:17,
horizontalAlignment:0,
location:"15,7",
name:"vg_user_logo",
scrollbars:36,
size:"82,65",
transparent:true,
typeid:4,
uuid:"938B22DE-FF85-42C5-982F-D9C3A4272437"
},
{
dataProviderID:"vl_total_vta",
editable:false,
fontType:"Trebuchet MS,0,20",
formIndex:8,
format:"#,###.00",
horizontalAlignment:4,
location:"647,101",
name:"vl_total_vta",
size:"83,35",
styleClass:"disable",
text:"Vl Total Vta",
typeid:4,
uuid:"9572EA74-8477-420F-8C0E-ADDF076EA743"
},
{
dataProviderID:"vl_saldo_cli",
editable:false,
fontType:"Trebuchet MS,0,18",
formIndex:19,
format:"#,###.00",
horizontalAlignment:4,
location:"352,181",
name:"vl_saldo_cli",
size:"125,42",
text:"Vl Saldo Cli",
typeid:4,
uuid:"9A50E978-BAC2-4D9C-8722-E282502A7431"
},
{
formIndex:2,
imageMediaID:"AA1ECD5F-8EEF-44D9-B015-5240196D7480",
location:"351,129",
mediaOptions:1,
name:"btn_no_cli",
onActionMethodID:"C6ED89F7-1619-4D57-A490-76A04A9452FD",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"126,25",
text:"No Cliente",
typeid:7,
uuid:"A80598B1-2A75-40E1-8367-F1F536A9BEA0"
},
{
borderType:"TitledBorder,Totales,4,0,Segoe UI,0,12,#000000",
lineSize:1,
location:"517,84",
size:"475,147",
typeid:21,
uuid:"B12E09E9-103E-4EA2-B067-2EA4BAA9D393"
},
{
dataProviderID:"vl_no_cliente",
formIndex:5,
location:"98,102",
name:"vl_no_cliente",
onDataChangeMethodID:"-1",
size:"243,20",
text:"Vl No Cliente",
typeid:4,
uuid:"B7EE09B8-9E42-4964-85BF-3C5EA14658B8"
},
{
formIndex:4,
labelFor:"",
location:"19,127",
name:"vl_cliente_labelc",
size:"76,20",
styleClass:"fieldlabel",
text:"Empleado:",
typeid:7,
uuid:"C1A49EC3-26DF-4F76-B9F7-86BCD5D34EE8"
},
{
height:526,
partType:5,
typeid:19,
uuid:"C1B53F86-D065-4024-90D1-BCCEF8A69368"
},
{
fontType:"Trebuchet MS,0,17",
formIndex:3,
labelFor:"vl_pago",
location:"740,101",
name:"vl_pago_label",
size:"107,35",
styleClass:"fieldlabel",
text:"Pago:",
typeid:7,
uuid:"C51E52FD-BB3E-4342-AE8C-A0BAD11B028F"
},
{
fontType:"Trebuchet MS,0,20",
formIndex:13,
labelFor:"vl_saldo",
location:"740,181",
name:"vl_saldo_label",
size:"107,35",
styleClass:"fieldlabel",
text:"Saldo:",
typeid:7,
uuid:"C64284EF-9FA7-4002-9A85-AA35FCD7AC26"
},
{
background:"#80ff80",
dataProviderID:"vl_vuelto",
editable:false,
fontType:"Trebuchet MS,0,20",
formIndex:10,
format:"#,###.00",
horizontalAlignment:4,
location:"852,141",
name:"vl_vuelto",
size:"83,35",
text:"Vl Resta",
typeid:4,
uuid:"C75AFCAB-50FB-4C22-88FF-1C5097F45727"
},
{
formIndex:18,
labelFor:"vl_saldo_cli",
location:"352,161",
name:"vl_saldo_cli_label",
size:"125,20",
styleClass:"encabezado",
text:"Slado Cliente",
typeid:7,
uuid:"CE0758B0-7F53-48F2-8C02-A3B4BD3ADD81"
},
{
dataProviderID:"vl_descuento",
fontType:"Trebuchet MS,0,20",
formIndex:2,
format:"#,###.00",
horizontalAlignment:4,
location:"647,141",
name:"vl_descuento",
onDataChangeMethodID:"ECDABE68-561A-4406-BDF3-06108BE8173B",
selectOnEnter:true,
size:"83,35",
text:"Vl Descuento",
typeid:4,
uuid:"EA13D95B-63EC-4524-8516-FEF7413C9BD8"
},
{
fontType:"Trebuchet MS,0,20",
formIndex:9,
labelFor:"vl_vuelto",
location:"740,141",
name:"vl_resta_label",
size:"107,35",
styleClass:"fieldlabel",
text:"Vuelto:",
typeid:7,
uuid:"ECF44DAB-68F6-437D-8348-D21C35418FC1"
}
],
name:"p_ventas_new",
navigatorID:"-1",
onShowMethodID:"0659F89D-DE89-4F32-96DB-D2948DCD1185",
showInMenu:true,
size:"1000,570",
styleClass:"detail",
styleName:"estilo",
typeid:3,
uuid:"C14082E3-666F-4BA8-9BA3-3D6ECA308AFA"