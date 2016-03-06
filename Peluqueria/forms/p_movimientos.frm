dataSource:"db:/peluqueria/prd_movimientos",
items:[
{
formIndex:20,
labelFor:"mov_causa",
location:"464,183",
name:"mov_causa_label",
size:"140,20",
styleClass:"encabezado",
text:"Causa",
typeid:7,
uuid:"0E25D87C-5430-43B6-9817-20486998A567"
},
{
formIndex:30,
labelFor:"mov_fecha",
location:"30,183",
name:"mov_fecha_label",
size:"124,20",
styleClass:"encabezado",
text:"Fecha Movim.",
typeid:7,
uuid:"0F1D683A-13E1-47E6-B2F4-922D50AD5BC5"
},
{
dataProviderID:"aggr_total_egr",
editable:false,
formIndex:43,
format:"#,###.00",
horizontalAlignment:4,
location:"591,455",
name:"aggr_total_egr",
size:"96,20",
styleClass:"disable",
text:"Aggr Total Egr",
typeid:4,
uuid:"1232CF12-0FA6-42CB-BA2B-7C69DAF9CC23"
},
{
dataProviderID:"vl_tipo_movim",
displayType:2,
editable:false,
formIndex:47,
location:"812,148",
name:"vl_tipo_movim",
onDataChangeMethodID:"20AD4749-2476-4CFD-B3FD-BAC6C1CDC756",
size:"140,20",
text:"Vl Tipo Movim",
typeid:4,
uuid:"1A73E78A-B2E5-4F0F-8AA5-BAEDCA584281",
valuelistID:"21D9FB04-1AB5-4DC5-83A2-CC86DF94B351"
},
{
formIndex:44,
labelFor:"aggr_total_ing",
location:"253,455",
name:"aggr_total_ing_label",
size:"106,20",
styleClass:"fieldlabel",
text:"Total Ingresos:",
typeid:7,
uuid:"2C232AAA-56DE-484A-9732-6ED5D62E5544"
},
{
formIndex:40,
labelFor:"aggr_cant_movim",
location:"30,455",
name:"aggr_cant_movim_label",
size:"99,20",
styleClass:"fieldlabel",
text:"# Movimientos:",
typeid:7,
uuid:"2E67A755-5C75-425E-9580-D9AD253EF07D"
},
{
formIndex:38,
labelFor:"vg_fecha_inicial",
location:"30,129",
name:"vg_fecha_inicial_label",
size:"140,20",
styleClass:"encabezado",
text:"Fecha Inicial",
typeid:7,
uuid:"359393F6-888D-464A-B705-D0369CCBD3B3"
},
{
dataProviderID:"scopes.globals.vg_fecha_inicial",
displayType:5,
formIndex:39,
format:"dd-MM-yyyy|mask",
location:"30,149",
name:"vg_fecha_inicial",
onDataChangeMethodID:"20AD4749-2476-4CFD-B3FD-BAC6C1CDC756",
size:"140,20",
text:"Vg Fecha Inicial",
typeid:4,
uuid:"3E226DFF-5274-4327-926D-3C2A67E6397E"
},
{
formIndex:36,
labelFor:"vg_fecha_final",
location:"175,129",
name:"vg_fecha_final_label",
size:"140,20",
styleClass:"encabezado",
text:"Fecha Final",
typeid:7,
uuid:"40A339DC-4FBB-486B-ADC7-A0BC858F551E"
},
{
formIndex:32,
labelFor:"vl_causa",
location:"623,128",
name:"vl_causa_label",
size:"174,20",
styleClass:"encabezado",
text:"Causa",
typeid:7,
uuid:"43F14162-2FB4-47EF-A7DA-749220DAFB49"
},
{
formIndex:22,
labelFor:"mov_egr",
location:"707,183",
name:"mov_egr_label",
size:"100,20",
styleClass:"encabezado",
text:"Cant. Egresada",
typeid:7,
uuid:"5195A0DB-86A7-4579-928F-E179024C65DF"
},
{
anchors:11,
dataProviderID:"mov_ing",
editable:false,
formIndex:25,
format:"#,###.00",
horizontalAlignment:4,
location:"603,203",
name:"mov_ing",
size:"105,20",
text:"Mov Ing",
typeid:4,
uuid:"55FAEAF2-7AA8-496F-BFEE-C747BA26BAD8"
},
{
anchors:11,
dataProviderID:"mov_egr",
editable:false,
formIndex:23,
format:"#,###.00",
horizontalAlignment:4,
location:"707,203",
name:"mov_egr",
size:"100,20",
text:"Mov Egr",
typeid:4,
uuid:"5C284D6F-F67C-4303-B74E-6A738C09D04A"
},
{
dataProviderID:"vl_prd_id",
formIndex:35,
location:"330,149",
name:"vl_prd_id",
onDataChangeMethodID:"20AD4749-2476-4CFD-B3FD-BAC6C1CDC756",
size:"278,20",
text:"Vl Prd Id",
typeid:4,
uuid:"652A9D88-AA8A-41CD-B3E4-ED555AA19699",
valuelistID:"FE3D4883-D75C-4412-9A2A-AD4144062C91"
},
{
height:426,
partType:5,
typeid:19,
uuid:"675D619A-BDA3-498F-96D5-05D426A1BBB0"
},
{
formIndex:7,
imageMediaID:"5610BF5C-0B92-498B-911F-AC6937D161F7",
location:"5,203",
mediaOptions:1,
onActionMethodID:"0F194AA2-0D89-496F-A38E-17A012988C99",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"20,20",
typeid:7,
uuid:"67EA8954-3D65-495B-B017-584C65A77A7C"
},
{
height:490,
partType:8,
typeid:19,
uuid:"6BC5C22C-ED1D-49DB-937A-8BC778B46197"
},
{
anchors:11,
dataProviderID:"prd_movimientos_to_prd_productos.prd_nombre",
editable:false,
formIndex:29,
location:"252,203",
name:"prd_nombre",
size:"213,20",
text:"Prd Nombre",
typeid:4,
uuid:"734C1F48-2958-441A-B5AE-D42AF708C8B0"
},
{
formIndex:6,
imageMediaID:"78EE323D-3835-4DE6-8166-B7AA78440F01",
location:"236,67",
mediaOptions:1,
name:"btn_nuevo",
onActionMethodID:"08DE2674-EED1-44E8-86E6-799E929C85FF",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Nuevo",
typeid:7,
uuid:"795CCB54-D795-4BB7-B221-5230E2D5E676"
},
{
formIndex:46,
labelFor:"vl_tipo_movim",
location:"812,128",
name:"vl_tipo_movim_label",
size:"140,20",
styleClass:"encabezado",
text:"Tipo Movimiento",
typeid:7,
uuid:"7E6AB41D-49E7-4FBC-A764-BC002FA8268D"
},
{
dataProviderID:"scopes.globals.vg_fecha_final",
displayType:5,
formIndex:37,
format:"dd-MM-yyyy|mask",
location:"175,149",
name:"vg_fecha_final",
onDataChangeMethodID:"20AD4749-2476-4CFD-B3FD-BAC6C1CDC756",
size:"140,20",
text:"Vg Fecha Final",
typeid:4,
uuid:"8B9ED1A2-468C-46EB-A51D-D028DCD1E1EE"
},
{
formIndex:26,
labelFor:"prd_codigo",
location:"154,183",
name:"prd_codigo_label",
size:"98,20",
styleClass:"encabezado",
text:"Cod. Producto",
typeid:7,
uuid:"989634E5-92E2-4D67-AC5D-0A33A336EEB4"
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
uuid:"9F526456-3A7C-4E97-B554-817AEF250BD7"
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
uuid:"A1EFB150-A876-4F26-9599-EBBA3814D54D"
},
{
height:179,
partType:1,
typeid:19,
uuid:"AE7D0B5C-132F-4344-B471-D84EEBBA4BD3"
},
{
anchors:11,
dataProviderID:"mov_fecha",
editable:false,
formIndex:31,
format:"dd-MM-yyyy",
horizontalAlignment:0,
location:"30,203",
name:"mov_fecha",
size:"124,20",
text:"Mov Fecha",
typeid:4,
uuid:"AE9112BA-BB5F-4EFD-9AAB-6C7E008D80CD"
},
{
fontType:"Corbel,2,36",
foreground:"#000000",
formIndex:6,
horizontalAlignment:2,
location:"116,10",
name:"opcion_nombre",
size:"393,42",
styleClass:"title",
text:"Movimientos de Productos",
transparent:true,
typeid:7,
uuid:"B254DB7E-E363-476B-970D-2B4EBB419981"
},
{
formIndex:42,
labelFor:"aggr_total_egr",
location:"482,455",
name:"aggr_total_egr_label",
size:"106,20",
styleClass:"fieldlabel",
text:"Total Egresos:",
typeid:7,
uuid:"BB4E4882-2A7F-464E-975B-2DBF77645BD8"
},
{
formIndex:24,
labelFor:"mov_ing",
location:"603,183",
name:"mov_ing_label",
size:"105,20",
styleClass:"encabezado",
text:"Cant. Ingresada",
typeid:7,
uuid:"BDCDECB1-2975-4252-A492-A8518ACB3B4E"
},
{
anchors:11,
dataProviderID:"mov_causa",
editable:false,
formIndex:21,
horizontalAlignment:0,
location:"464,203",
name:"mov_causa",
size:"140,20",
text:"Mov Causa",
typeid:4,
uuid:"BFC09A72-19BE-4F1D-B1F8-34810B462FA8",
valuelistID:"49B801B1-36EE-4DF3-9794-7F419242BDA5"
},
{
formIndex:6,
imageMediaID:"F0A0B051-05EE-4E42-BB33-5ED3E9C75641",
location:"355,67",
mediaOptions:1,
name:"btn_refresh",
onActionMethodID:"3DE0EA6A-6080-45DD-A72B-D0D8F08F25C7",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"122,30",
text:"Refrescar",
typeid:7,
uuid:"CE0A36DD-420A-417D-A822-C3A0D8CE9691"
},
{
dataProviderID:"vl_causa",
displayType:2,
editable:false,
formIndex:33,
location:"623,148",
name:"vl_causa",
onDataChangeMethodID:"20AD4749-2476-4CFD-B3FD-BAC6C1CDC756",
size:"174,20",
text:"Vl Causa",
typeid:4,
uuid:"DC9C47FF-2880-46BB-906B-D17898EF0E11",
valuelistID:"49B801B1-36EE-4DF3-9794-7F419242BDA5"
},
{
formIndex:28,
labelFor:"prd_nombre",
location:"252,183",
name:"prd_nombre_label",
size:"213,20",
styleClass:"encabezado",
text:"Nombre",
typeid:7,
uuid:"DD69F1A6-76CF-4526-AA72-3A71CBC1B56B"
},
{
dataProviderID:"aggr_cant_movim",
editable:false,
formIndex:41,
horizontalAlignment:4,
location:"132,455",
name:"aggr_cant_movim",
size:"83,20",
styleClass:"disable",
text:"Aggr Cant Movim",
typeid:4,
uuid:"DF42D3AA-FCEC-45A2-998A-2D631A1F0C7E"
},
{
formIndex:34,
labelFor:"vl_prd_id",
location:"330,129",
name:"vl_prd_id_label",
size:"278,20",
styleClass:"encabezado",
text:"Producto",
typeid:7,
uuid:"E3239B57-1B4B-47E2-855D-151D64B491E8"
},
{
anchors:11,
dataProviderID:"prd_movimientos_to_prd_productos.prd_codigo",
editable:false,
formIndex:27,
horizontalAlignment:0,
location:"154,203",
name:"prd_codigo",
size:"98,20",
text:"Prd Codigo",
typeid:4,
uuid:"E6B7B8E5-4F6D-43B1-9E3C-156F1BAE3E94"
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
uuid:"E7FCFC5C-50DE-450C-AA45-ABBB16CEACC0"
},
{
dataProviderID:"aggr_total_ing",
editable:false,
formIndex:45,
format:"#,###.00",
horizontalAlignment:4,
location:"362,455",
name:"aggr_total_ing",
size:"96,20",
styleClass:"disable",
text:"Aggr Total Ing",
typeid:4,
uuid:"EA94C9B0-E61A-4274-B3F4-5EA1F6431351"
},
{
formIndex:6,
imageMediaID:"5BD6B7F3-39F8-49D9-82F7-7D3AFFB23A0A",
location:"116,67",
mediaOptions:1,
name:"btn_salir",
onActionMethodID:"E7280C87-E4AB-4DB7-BE90-A9D635A8FE34",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,30",
text:"Volver",
typeid:7,
uuid:"F2A3FBFB-AF0D-411B-B480-8F5D6AE86AE3"
}
],
name:"p_movimientos",
navigatorID:"-1",
onLoadMethodID:"79DB3181-0635-4350-891A-F48466F10B68",
onShowMethodID:"9E14B1E4-1F9E-4FFB-BDCC-1AEC5AAC49FE",
showInMenu:true,
size:"1000,480",
styleClass:"listado",
styleName:"estilo",
typeid:3,
uuid:"A0A6930B-9CC3-4CE1-91A2-590589A2B6EF",
view:3