// Comando para establecer la conexion
let socket = io();

let searchParams = new URLSearchParams(window.location.search);
console.log(searchParams);

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario')
}

let escritorio = searchParams.get('escritorio');
let label = $('small');


$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function(){
    socket.emit('atenderTicket', {escritorio: escritorio}, function(resp) {
        if(res === 'No hay tickets'){
            label.text(res)
            alert(res);
            return;
        }
        label.text('Ticket ' + res.numero )
        
    })
})

