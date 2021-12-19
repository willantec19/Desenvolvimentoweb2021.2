
const http = require('http');
const listagemPokemon = require("./listar_pokemons");
const port = 8080;
const ip = 'localhost';

const server = http.createServer((req, res) => {

    console.log("Recebendo uma requisição");
    if (req.url == '/') {
        
        let content = "<tr>";
        for(let i in listagemPokemon()){
            
            let line = `<td><th> ${listagemPokemon()[i].id}</th><th><img src="${listagemPokemon()[i].cover}" width="80"> ${listagemPokemon()[i].nome}</th><th>
            ${listagemPokemon()[i].pvMax}</th><th> ${listagemPokemon()[i].ataque}</th><th>${listagemPokemon()[i].defesa}</th>
            <th>${listagemPokemon()[i].ataque_especial}</th><th>${listagemPokemon()[i].defesa_especial}</th> <th>
            ${listagemPokemon()[i].velocidade}</th>
              `;
             if(Number(i + i) % 1 == 0 ){
                content += `${line}</tr><tr>`;
            }else{
                content += line;
            }
        }
        res.statusCode = 200;
        res.end(`
        <!DOCTYPE html>
        <html> 
        <head>
            <meta charset='utf-8'>
            <title>Pokedex</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
        </head>
        <body>
            <table>
                <caption>Pokemon</caption>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Pvmax</th>
                    <th>ataque</th>
                    <th>defesa</th>
                    <th>ataque especial</th>
                    <th>defesa especial</th>
                    <th>velocidade</th>
                </tr>

                ${content}
                </tbody>
                
            </table>

        </body>
        </html>
        `)
    }else if(req.url.toString().startsWith('/img')){
        console.log("procurando imagem");

    }
    else{
        console.log(`Não sei responder ${req.url}`);

    }
});

server.listen(port, ip, () => {
    console.log('rodando em http://', ip, ':', port, '');


});
