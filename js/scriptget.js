const url = "https://g8a2ec818572549-db202109242024.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience";
let xhr = new XMLHttpRequest();

// peticion GET
function peticionget() {
    xhr.open("GET", url);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    xhr.send();
}

// peticion POST
function peticionpost() {

    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = `{
  "id": 4,
  "owner": "Argentina",
  "capacity": 1,
  "category_id": 10,
  "name": "John Smith" 
}`;

    xhr.send(data);

}


// peticion PUT
function peticionput() {
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    var data = `{
  "id": 4,
  "owner": "Peru",
  "capacity": 120,
  "category_id": 13, 
  "name": "Pablo Sex"
}`;

    xhr.send(data);

}

// peticion DELETE
function peticiondelete() {
    var settings = {
        "url": "https://g8a2ec818572549-db202109242024.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/audience/audience?id=4",
        "method": "DELETE",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "id": "4"
        }),
    };

    $.ajax(settings).done(function(response) {
        console.log(response);
    });
}