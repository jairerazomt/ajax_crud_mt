function taerInformacion(){
    $.ajax({
        URL: "https://g8a2ec818572549-db202109242024.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
        }
    });
}