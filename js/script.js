(function(){
    var data = [{
            "Id": 1,
            "Name": "Andres",
            "Apellido": "Minota",
            "Edad": "25"
        },
        {
            "Id": 2,
            "Name": "Carlos",
            "Apellido": "Lopez",
            "Edad": "36"
        },
        {
            "Id": 3,
            "Name": "Pablo",
            "Apellido": "Perez",
            "Edad": "24"
        }
    ];

    MyFunction(data);
    
})();

function MyFunction(data) {
    $.each(data, function(key, attr){
        $("#Hola").append('<div class="card-header" id="headingOne">'+
        '<h5 class="mb-0">'+
        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse'+attr.Id+'" aria-controls="collapse'+attr.Id+'">'+
          '00'+attr.Id+''+
          '</button>'+
          '<button class="btn btn-primary float-sm-right">Editar</button>'+
          '<button class="btn btn-danger float-sm-right">Eliminar</button>'+
        '</h5>'+
      '</div>'+
      '<div id="collapse'+attr.Id+'" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">'+
      '<div class="card-body">'+
        '<h3 class="card-title">Hola como estas?</h3>'+
        '<dl class="dl-horizontal">'+
          '<dt class="form-group">ID</dt>'+
          '<dd>'+attr.Id+'</dd>'+
          '<dt class="form-group">Nombre</dt>'+
          '<dd>'+attr.Name+'</dd>'+
          '<dt class="form-group">Apellido</dt>'+
          '<dd>'+attr.Apellido+'</dd>'+
          '<dt class="form-group">Edad</dt>'+
          '<dd>'+attr.Edad+'</dd>'+
        '</dl>'+
      '</div>'+
    '</div>');
        
        console.log(attr);
    });

    /*var vehicleSelect = $("#table1").DataTable({
        columns: [
          { data: "select", title: "" },
          { data: "placa", title: "Placa" },
          { data: "descripcionMarca", title: "Marca" },
          { data: "descripcionReferencia", title: "Referencia" }
        ],
        columnDefs: [
          { orderable: true, targets: [1, 2, 3] },
          {
            targets: [1],
            render: function (data, type, row, meta) {
              var nombre = data;

              if (nombre == null || nombre == undefined) {
                nombre = "";
              }

              return nombre;
            }
          },
          {
            orderable: false,
            className: 'select-checkbox',
            targets: 0
          }
        ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        iDisplayLength: 10,
        order: [[0, "desc"]],
        autoWidth: false,
        language: {
          url: "https://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
        },
        data: vehicleForDriver
      });

  vehicleSelect.on("click", "th.select-checkbox", function() {
        if ($("th.select-checkbox").hasClass("selected")) {
            example.rows().deselect();
            $("th.select-checkbox").removeClass("selected");
        } else {
            example.rows().select();
            $("th.select-checkbox").addClass("selected");
        }
    }).on("select deselect", function() {
        ("Some selection or deselection going on")
        if (example.rows({
                selected: true
            }).count() !== example.rows().count()) {
            $("th.select-checkbox").removeClass("selected");
        } else {
            $("th.select-checkbox").addClass("selected");
        }
    });*/
    
}
