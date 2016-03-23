dataSource:"db:/peluqueria/prd_movimientos",
items:[
{
groupID:"grp_egreso",
labelFor:"mov_egr",
location:"70,301",
name:"mov_egr_label",
size:"131,20",
styleClass:"fieldlabel",
text:"# Egreso:",
typeid:7,
uuid:"015ABC40-D45D-4741-AD86-2B9AFE8EFEBF"
},
{
formIndex:6,
imageMediaID:"5BD6B7F3-39F8-49D9-82F7-7D3AFFB23A0A",
location:"116,66",
mediaOptions:1,
name:"btn_salir",
onActionMethodID:"18DE328C-A53E-43FB-9476-D49E858DBC17",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Volver",
typeid:7,
uuid:"04BAEF02-2C66-46A4-99DB-E725A9592224"
},
{
formIndex:28,
labelFor:"mov_tipo",
location:"70,212",
name:"mov_tipo_label",
size:"131,20",
styleClass:"fieldlabel",
text:"Tipo de Movimiento:",
typeid:7,
uuid:"05C2A37B-EAFD-4E74-9948-D2D686FC034F"
},
{
dataProviderID:"mov_causa",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:21,
location:"205,237",
name:"mov_causa",
size:"140,20",
styleClass:"disable",
text:"Mov Causa",
typeid:4,
uuid:"119C3327-DC83-4C33-AFD6-96537CFCA4CD",
valuelistID:"49B801B1-36EE-4DF3-9794-7F419242BDA5"
},
{
formIndex:24,
labelFor:"mov_fecha",
location:"70,187",
name:"mov_fecha_label",
size:"131,20",
styleClass:"fieldlabel",
text:"Fecha:",
typeid:7,
uuid:"13DFC570-3C27-4F99-9F14-2D3567772515"
},
{
dataProviderID:"mov_tipo",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:29,
location:"205,212",
name:"mov_tipo",
size:"140,20",
styleClass:"disable",
text:"Mov Tipo",
typeid:4,
uuid:"1B9F826E-6BB8-4AB5-9CE3-AB0D12FB19C4",
valuelistID:"21D9FB04-1AB5-4DC5-83A2-CC86DF94B351"
},
{
groupID:"grp_venta",
labelFor:"venta_id",
location:"70,326",
name:"venta_id_label",
size:"131,20",
styleClass:"fieldlabel",
text:"Venta Asociada:",
typeid:7,
uuid:"4BC7DC2B-05FD-4B19-93E7-1E3520170966"
},
{
dataProviderID:"mov_ing",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:1,
format:"#,###.00",
groupID:"grp_ingreso",
horizontalAlignment:4,
location:"205,301",
name:"mov_ing",
size:"96,20",
styleClass:"disable",
text:"Mov Ing",
typeid:4,
uuid:"6059DB23-4583-4683-8E86-94CD052A921E"
},
{
dataProviderID:"mov_egr",
editable:false,
formIndex:1,
format:"#,###.00",
groupID:"grp_egreso",
horizontalAlignment:4,
location:"205,301",
name:"mov_egr",
size:"96,20",
styleClass:"disable",
text:"Mov Egr",
typeid:4,
uuid:"7944E2EB-C927-4BD6-93C2-BAB51CA6A678"
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
uuid:"7AC06AF3-3D99-42E6-B857-395C3D8D3AF9"
},
{
formIndex:18,
labelFor:"mov_id",
location:"149,162",
name:"mov_id_label",
size:"52,20",
styleClass:"fieldlabel",
text:"ID:",
typeid:7,
uuid:"9123CBA9-5972-48ED-BC3E-A04B040FEAD1"
},
{
formIndex:2,
groupID:"grp_venta",
imageMediaID:"5610BF5C-0B92-498B-911F-AC6937D161F7",
location:"306,326",
mediaOptions:1,
onActionMethodID:"FF7AE399-6747-413D-980F-2B5CC2A839A6",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"20,20",
typeid:7,
uuid:"98552806-3ACA-4944-8397-598187496510"
},
{
dataProviderID:"mov_id",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:19,
horizontalAlignment:0,
location:"205,162",
name:"mov_id",
size:"96,20",
styleClass:"disable",
text:"Mov Id",
typeid:4,
uuid:"B9B0EBF3-B2DD-4885-AE88-EEC011BB173B"
},
{
dataProviderID:"mov_fecha",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:25,
format:"dd-MM-yyyy HH:mm",
location:"205,187",
name:"mov_fecha",
size:"140,20",
styleClass:"disable",
text:"Mov Fecha",
typeid:4,
uuid:"BA556DD0-EC37-407F-B3B5-EA31C16ACEBC"
},
{
groupID:"grp_ingreso",
labelFor:"mov_ing",
location:"70,301",
name:"mov_ing_label",
size:"131,20",
styleClass:"fieldlabel",
text:"# Ingreso:",
typeid:7,
uuid:"C618FE03-81F2-4240-9613-022944B31CAA"
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
uuid:"C84D985F-7394-4F7D-B26A-ED09BA2DEBC0"
},
{
formIndex:20,
labelFor:"mov_causa",
location:"70,237",
name:"mov_causa_label",
size:"131,20",
styleClass:"fieldlabel",
text:"Causa:",
typeid:7,
uuid:"D10D0BEA-FF3E-4161-A7CE-D7C2771CAFB4"
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
text:"Detalle Movimiento",
transparent:true,
typeid:7,
uuid:"D45E2ABB-BE5B-44D5-B346-85F32650CFF4"
},
{
height:480,
partType:5,
typeid:19,
uuid:"D611D644-6903-4657-8F52-A8DD8785D290"
},
{
formIndex:6,
imageMediaID:"E01B381E-1497-4037-91A9-6E97C5AB215D",
location:"236,66",
mediaOptions:1,
name:"btn_grabar",
onActionMethodID:"CE864F49-DAAD-4486-A98E-0E0E457AE380",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Grabar",
typeid:7,
uuid:"D66232F4-942C-47FE-BD53-15EFE9A3E8B3"
},
{
dataProviderID:"prd_id",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:31,
location:"205,276",
name:"prd_id",
size:"290,20",
styleClass:"disable",
text:"Prd Id",
typeid:4,
uuid:"DCB389C7-79BF-4362-8556-2505ABE558B6",
valuelistID:"FE3D4883-D75C-4412-9A2A-AD4144062C91"
},
{
formIndex:30,
labelFor:"prd_id",
location:"70,276",
name:"prd_id_label",
size:"131,20",
styleClass:"fieldlabel",
text:"Producto:",
typeid:7,
uuid:"EAD988DF-B373-4151-8640-CAEA499B4A9B"
},
{
dataProviderID:"venta_id",
editable:false,
fontType:"Trebuchet MS,0,15",
formIndex:1,
groupID:"grp_venta",
horizontalAlignment:0,
location:"205,326",
name:"venta_id",
size:"96,20",
styleClass:"disable",
text:"Venta Id",
typeid:4,
uuid:"EB51D6F0-2B7D-4694-AE51-AD1176A88036"
}
],
name:"p_movimientos_detalle",
navigatorID:"-1",
onLoadMethodID:"42B05DDF-7861-41F5-87A5-E59312903B34",
onShowMethodID:"DC9C1281-BBB6-40F8-AD0A-453EA4C461F9",
showInMenu:true,
size:"1000,480",
styleClass:"detail",
styleName:"estilo",
typeid:3,
uuid:"833AC4CB-51ED-494D-AEDB-B7973DEE7D8D"