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

    newFunction(data);
    
})();

function newFunction(data) {
    $("#id").text(data[0].Id);
    $("#Name").text(data[0].Name);
    $("#Apellido").text(data[0].Apellido);
    $("#Edad").text(data[0].Edad);

    $.each(data, function(key, attr){
        $("#headingOne").append();
        console.log(attr);
    });
    
}
