document.getElementById('calculator').addEventListener('submit', function(e){
    e.preventDefault();
    datos();
})

function datos() {
    var montoinicial = parseFloat(document.getElementById("monto_credito").value);
    var plazo_anios = parseInt(document.getElementById("plazo_pago").value);
    var periodo_pago = parseInt(document.getElementById("periodo_pago").value);
    var tipo_credito = document.getElementById("tipo_credito").value;
    var fecha_inicio = new Date(document.getElementById("fecha_desembolso").value);
    
    var pagos_por_anio = {
        1: 12,  // Mensual
        2: 4,   // Trimestral
        3: 2,   // Semestral
        4: 1,   // Anual
        5: 1    // Unico, al vencimiento
    };
    
    var plazo = plazo_anios * pagos_por_anio[periodo_pago];
    var por_interes = calcularInteres(tipo_credito) / 100;

    var saldo_capital = montoinicial;
    var miData = [];

    var cuotaFija = montoinicial * por_interes / pagos_por_anio[periodo_pago] / (1 - Math.pow(1 + por_interes / pagos_por_anio[periodo_pago], -plazo));

    for (let i = 1; i <= plazo; i++) {
        let intereses = saldo_capital * por_interes / pagos_por_anio[periodo_pago];
        let capital = cuotaFija - intereses;

        let fecha_pago = new Date(fecha_inicio);
        fecha_pago.setMonth(fecha_pago.getMonth() + i * (12 / pagos_por_anio[periodo_pago]));
        let fecha_str = `${fecha_pago.getFullYear()}-${fecha_pago.getMonth()+1}-${fecha_pago.getDate()}`;

        miData.push({
            "numero_cuota": i.toString(),
            "saldo_capital": saldo_capital.toFixed(2),
            "capital": capital.toFixed(2),
            "intereses": intereses.toFixed(2),
            "monto_pago": cuotaFija.toFixed(2),
            "fecha_pago": fecha_str,
            "total": (saldo_capital - capital).toFixed(2),
        });

        // Actualizamos el saldo del capital
        saldo_capital -= capital;
    }

    // Actualizamos el DataTable con la nueva data
    makeTable(miData);
}







function calcularInteres(tipo_credito) {
    let por_interes = 0;
    if (["1", "2", "3", "8", "11"].includes(tipo_credito)) {
      por_interes = 0.08;
    } else if (["6", "10"].includes(tipo_credito)) {
      por_interes = 0.04;
    } else if (["4", "5"].includes(tipo_credito)) {
      por_interes = 0.05;
    } else {
      por_interes = 0.0;
    }
    return por_interes;
  }
  


function makeTable(miData){

    document.getElementById("credit_icon").style.display = "none";
    document.getElementById("table_responsive").style.display = "block";


    // Si la tabla ya está inicializada, la destruimos primero
    if ($.fn.DataTable.isDataTable('#cuotas')) {
        $('#cuotas').DataTable().destroy();
    }


    var table = $('#cuotas').DataTable({
        processing: true,
        lengthMenu: [[-1], ["All"]],
        pageLength: -1, 
        order: [[0, 'asc']],
        initComplete: function() {
            console.log("Ok");
        },
        data: miData,
        columns: [
            {
                data: 'numero_cuota',
                visible: true,
            },
            {
                data: 'saldo_capital',
                visible: true,
            },
            {
                data: 'capital',
                visible: true,
            },
            {
                data: 'intereses',
                visible: true,
            },
            {
                data: 'monto_pago',
                visible: true,
            },
            {
                data: 'fecha_pago',
                visible: true,
            },
            {
                data: 'total',
                visible: true,
            },
        ]
    });
}