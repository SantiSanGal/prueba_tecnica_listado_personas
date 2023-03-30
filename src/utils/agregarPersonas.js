const agregarPersonas = () =>{
    $.ajax({
        url: "https://telemedicina.jakemate.net:7141/api/webservice/metodo",
        data: { _agregrPersonas_: "agregar_Personas", param1: "Santiago", param2: "Galvan", param3: '1000' },
        method: "POST",
        headers: {
            ContentType: "application/x-www-form-urlencoded",
            Token: "NJKJNTL8SNKH5JJRTS32ZGSIIDPGHLU6KRXLQMLMJJU8MD7EY5TSWMGD2D6Z",
            ApiKey: "ISSTIXZTV53RZURJKTZD3MXVMEW7X3",
        },
        success: function (resultados) {
            console.log(resultados);
        }
    });
}

export default agregarPersonas;