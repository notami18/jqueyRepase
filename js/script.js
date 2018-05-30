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
          '<dt>ID</dt>'+
          '<dd>'+attr.Id+'</dd>'+
          '<dt>Nombre</dt>'+
          '<dd>'+attr.Name+'</dd>'+
          '<dt>Apellido</dt>'+
          '<dd>'+attr.Apellido+'</dd>'+
          '<dt>Edad</dt>'+
          '<dd>'+attr.Edad+'</dd>'+
        '</dl>'+
      '</div>'+
    '</div>');
        
        console.log(attr);
    });

    /*var i;
    for (i = 0; i < data.length; i++) {
        $("#Hola").append('<div class="card-header" id="headingOne">'+
        '<h5 class="mb-0">'+
        '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse'+data[i].Id+'" aria-expanded="true" aria-controls="collapse'+data[i].Id+'">'+
          '00'+data[i].Id+''+
          '</button>'+
        '</h5>'+
      '</div>'+
      '<div id="collapse'+data[i].Id+'" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">'+
      '<div class="card-body">'+
        '<h3 class="card-title">Hola como estas?</h3>'+
        '<dl class="table-hover">'+
          '<dt>ID</dt>'+
          '<dd id="'+data[i].Id+'"></dd>'+
          '<dt>Nombre</dt>'+
          '<dd id="'+data[i].Name+'"></dd>'+
          '<dt>Apellido</dt>'+
          '<dd id="'+data[i].Apellido+'"></dd>'+
          '<dt>Edad</dt>'+
          '<dd id="'+ data[i].Edad+'"></dd>'+
        '</dl>'+
      '</div>'+
    '</div>');
    }*/
    
}
