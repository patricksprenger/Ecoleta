//importar a dependência do sqlite3

const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// //utilizar o objeto de banco de dados

// //com comandos sql
// //1) criar uma tabela 
// db.serialize(() => {
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //2) inserir dados
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
// `
// const values = [
//     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
//     "Papersider",
//     "Guilherme Gemballa, Jardim América",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"
// ]    

// function afterInsertData(err) {
//     if(err){
//     return console.log(err)
// }

// console.log("Cadastrado com sucesso")
// console.log(this)
// }

    // db.run(query, values, afterInsertData)


    // // consultar os dados
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)
    // })

//     //deletar

    // db.run(`DELETE FROM places WHERE id = ?`, [11], function(err){
    //     if(err){
    //         return console.log(err)
    //     }
        
    // })
// })