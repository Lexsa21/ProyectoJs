let jsonBtn = document.getElementById('jsonBtn').addEventListener('click',cargarJSON)

function cargarJSON(){
    fetch('datos.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html = '';
            data.forEach(function(cartelera){
                html += `
                <li><a href="">${cartelera.pelicula}</a></li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
}    