/* original data */
var data = [
    {"NIVEL 1":"1 ACTIVOS"},
    {"NIVEL 1":"2 PASIVOS"},
    {"NIVEL 1":"2 PATIMONIO", "NIVEL 3": "1.1.2.3 DISPONIBLE"},
];

/* this line is only needed if you are not adding a script tag reference */
if(typeof XLSX == 'undefined') XLSX = require('xlsx');

/* make the worksheet */
var ws = XLSX.utils.json_to_sheet(data);

/* add to workbook */
var wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "Plan de cuentas");
// XLSX.writeFile(wb, "PlanDeCuentas.xlsx");

