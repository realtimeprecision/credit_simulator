document.getElementById('calculator').addEventListener('submit', function(e){
    e.preventDefault();
    calculate();
})

function calculate(){


    const tipoToInteres = {
        "1": 0.08,
        "2": 0.08,
        "3": 0.08,
        "8": 0.08,
        "11": 0.08,
        "6": 0.04,
        "10": 0.04,
        "4": 0.05,
        "5": 0.05
      };
      
    const por_interes = tipoToInteres[tipo_credito.value] || 0.0;
    var intereses = monto_credito.value * (por_interes / plazo.value);
    var monto_pago = parseInt(monto_credito.value) + parseInt(intereses);

    console.log(monto_pago);


    const miData = [
        { 
            "numero_cuota": "10", 
            "saldo_capital": "18732", 
            "capital": "876857",
            "intereses": "876857",
            "monto_pago": "1.000.000",
            "fecha_pago": "agosto 2",
            "total": "876857",
        }, 
    ];

    makeTable(miData);
}



function makeTable(miData){
    var table = $('#cuotas').DataTable({
        processing: true,
        order: [[0, 'desc']],
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



