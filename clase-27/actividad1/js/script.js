var dataBase = openDatabase("mydb", "1.0", "TEST DB", 1024 * 1024 * 2);

function transaction(){
    dataBase.transaction(function(tx){
        tx.executeSql("CREATE TABLE IF NOT EXISTS PERSONS(id unique, name, lastname)");
        //tx.executeSql("INSERT INTO PERSONS (id, name, lastname) values (1, 'Leo', 'Grigoriadis') ");
        //tx.executeSql("INSERT INTO PERSONS (id, name, lastname) values (2, 'Matias', 'Grigoriadis') ");
    });
}


function res(){
    dataBase.transaction(function(tx){
        tx.executeSql("SELECT * FROM PERSONS", [], function(tx, res){
            console.log(res.rows.length);
            for(let i=0; i<res.rows.length;i++){
                console.log(res.rows.item(i));
            }
        });
    });
}

// function search(value){
//     dataBase.transaction(function(tx){
//         tx.executeSql(`SELECT * FROM PERSON where name=${value}`, function(tx, res){
//             console.log(res.rows.length);
//         });
//     });
// }

function main(){
    transaction();
    setTimeout(function (){
        res()}, 200);
}
main();
console.log("info");