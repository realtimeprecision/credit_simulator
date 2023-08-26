document.getElementById('calculator').addEventListener('submit', function(e){
    e.preventDefault();
    datos();
})

function datos() {
    var montoinicial = parseFloat(document.getElementById("monto_credito").value);
    var plazo = parseInt(document.getElementById("plazo_pago").value);
    var tipo_credito = document.getElementById("tipo_credito").value;
    var fecha_inicio = new Date(document.getElementById("fecha_desembolso").value);

    var por_interes = calcularInteres(tipo_credito) / 100; // Suponiendo que está en porcentaje

    var saldo_capital = montoinicial;
    var total_por_pagar = montoinicial; // Inicializamos con el monto inicial
    var miData = [];

    // Cuota fija
    var cuotaFija = montoinicial * (por_interes / 12) / (1 - Math.pow(1 + (por_interes / 12), -plazo));

    for (let i = 1; i <= plazo; i++) {
        let intereses = saldo_capital * (por_interes / 12); // Suponiendo interés anual y pagos mensuales
        let capital = cuotaFija - intereses; 

        // Registramos los datos
        let fecha_pago = new Date(fecha_inicio);
        fecha_pago.setMonth(fecha_pago.getMonth() + i);
        let fecha_str = `${fecha_pago.getFullYear()}-${fecha_pago.getMonth()+1}-${fecha_pago.getDate()}`;

        miData.push({
            "numero_cuota": i.toString(),
            "saldo_capital": saldo_capital.toFixed(2), // Aquí no restamos el capital todavía
            "capital": capital.toFixed(2),
            "intereses": intereses.toFixed(2),
            "monto_pago": cuotaFija.toFixed(2),
            "fecha_pago": fecha_str,
            "total": (saldo_capital - capital).toFixed(2),
        });

        // Ahora sí, restamos el pago del capital al saldo y al total por pagar
        saldo_capital -= capital;
    }

    // Aquí puedes añadir el código para actualizar tu DataTable
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
    var table = $('#cuotas').DataTable({
        processing: true,
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        pageLength: 12,
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