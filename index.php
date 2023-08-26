<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simulador de credito</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  <style>
    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }


    @media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }
  </style>

  <link rel="stylesheet" href="//cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
  <script src="//cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>

</head>

<body>
  <body class="bg-light">
    <div class="container">
      <main>
        <div class="py-5 text-center">
          <img class="d-block mx-auto mb-4" src="https://cdn-icons-png.flaticon.com/512/346/346399.png" alt="" height="57">
          <h2>Simulador de crédito</h2>
          <p class="lead">Con esta herramienta podrás simular financiamientos, para obtener cuánto terminarías pagando por un crédito, así como una tabla de amortización para tu referencia.</p>
        </div>

        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Calcular</span>
            </h4>
            <form class="needs-validation" id="calculator">
              <div class="row g-3">

                <div class="col-sm-12">
                  <label for="fecha" class="form-label">Fecha de desembolso</label>
                  <input type="date" class="form-control" id="fecha_desembolso" required>
                  <div class="invalid-feedback">
                    Fecha de desembolso
                  </div>
                </div>

                <div class="col-sm-12">
                  <label for="monto_credito" class="form-label">Monto del crédito</label>
                  <input type="number" class="form-control" id="monto_credito" placeholder="1.000.000" required>
                  <div class="invalid-feedback">
                    Monto del crédito
                  </div>
                </div>

                <div class="col-sm-12">
                  <label for="plazo" class="form-label">Plazo de pago</label>
                  <select name="plazo" id="plazo_pago" class="form-control" required>
                    <option value="">Seleccione</option>
                    <option value="1">1 año</option>
                    <option value=2>2 años</option>
                    <option value=3>3 años</option>
                    <option value=4>4 años</option>
                  </select>
                  <div class="invalid-feedback">
                    Plazo de pago
                  </div>
                </div>

                <div class="col-sm-12">
                  <label for="periodo" class="form-label">Periodo de pago</label>
                  <select name="periodo" id="periodo_pago" class="form-control" required>
                    <option value="">Seleccione</option>
                    <option value="1">Mensual</option>
                    <option value=2>Trimestral</option>
                    <option value=3>Semestral</option>
                    <option value=4>Anual</option>
                    <option value=5>Unico, al vencimineto</option>
                  </select>
                  <div class="invalid-feedback">
                    Periodo de pago
                  </div>
                </div>


                <div class="col-sm-12">
                  <label for="tipo_credito" class="form-label">Tipos de crédito</label>
                  <select name="tipo_credito" id="tipo_credito" class="form-control" required>
                    <option value="">Seleccione</option>
                    <option value="1">libre inversión</option>
                    <option value=2>Refinanciación</option>
                    <option value=3>Consumo</option>
                    <option value=4>Educación</option>
                    <option value=5>Salud</option>
                    <option value=6>Calamidad doméstica</option>
                    <option value=7>Otros descuentos</option>
                    <option value=8>Sustitución de pasivo </option>
                    <option value=9>Credito intermediación</option>
                    <option value=10>Vacaciones</option>
                    <option value=11>Anticipo de primas </option>
                  </select>
                  <div class="invalid-feedback">
                    Tipos de crédito
                  </div>
                </div>
              </div>

              <hr class="my-4">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="terminos" required>
                <label class="form-check-label" for="terminos">Acepto los términos y condiciones</label>
              </div>
              <hr class="my-4">
              <button class="w-100 btn btn-primary btn-lg" type="submit">Calcular</button>
            </form>
          </div>

          <div class="col-md-7 col-lg-8">
            <div class="py-5 text-center" id="credit_icon">
              <img src="./assets/img/credit_icon.png" alt="" height="350px" class="d-block mx-auto mb-4">
            </div>

            <div class="table-responsive" id="table_responsive" style="display: none;">
              <table id="cuotas" class="table table-flush">
                <thead class="thead-light">
                  <tr>
                    <th>Nº Cuota</th>
                    <th>Sdo.Capital</th>
                    <th>Capital</th>
                    <th>Interes</th>
                    <th>Monto</th>
                    <th>Fecha</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <script src="./assets/js/main.js"></script>
      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; 2017–<?php echo date("Y"); ?> Company Name</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="#">Privacy</a></li>
          <li class="list-inline-item"><a href="#">Terms</a></li>
          <li class="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
    </div>
  </body>
</body>
</html>