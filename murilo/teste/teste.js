const mysql = require('mysql2');
const express = require('express');

let val1 = 0;
let val2 = 0;

let poolBancoDados = mysql.createPool(
    {
        host: '127.0.0.1',
        user: 'aluno',
        password: 'Sptech#2024',
        database: 'aerasense',
        port: 3307
    }
).promise();

function rand() {

    val1 = Math.random() * (100.00 - 0);
    val2 = Math.random() * (100.00 - 0);

}

const SERVIDOR_PORTA = 3300;

const servidor = (ArrayVal1, Arrayval2) => {
    const app = express();

    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });

    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });

    app.get('/sensores/val1', (_, response) => {
        return response.json(val1);
    });
    app.get('/sensores/val2', (_, response) => {
        return response.json(val2);
    });
}

const pros = async (ArrayVal1,Arrayval2) => {

    setInterval(() => {

        rand();

        poolBancoDados.execute(
            'INSERT INTO dado(fkSensor,fkSetor,fkEmpresa,porcentagem) VALUES (?, ?, ?, ?)',
            [1, 1, 1, val1]
        );

        poolBancoDados.execute(
            'INSERT INTO dado(fkSensor,fkSetor,fkEmpresa,porcentagem) VALUES (?, ?, ?, ?)',
            [2, 2, 2, val2]
        );

        console.log('dados inseridos');

        ArrayVal1.push(val1);
        Arrayval2.push(val2)

    }, 1000);


}


(async () => {

    ArrayVal1 = [];
    Arrayval2 = [];

    pros(

        ArrayVal1,
        Arrayval2

    );

    servidor(
        val1,
        val2
    );

})();