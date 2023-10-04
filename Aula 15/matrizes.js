// var matriz = [[1,2,3],[4,5,6],[7,8,9]]

/*  Matriz Nula
    var matriz2 = new Array(2)
    matriz[0] = new Array(3)
    matriz[1] = new Array(3)
*/

   var matriz = new Array(3)
    matriz[0] = [1,2,3]
    matriz[1] = [4,5,6]
    matriz[2] = [7,8,9]
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            console.log(matriz[i][j]+'')
        }
    }



    const matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    matriz.forEach(row => {
        row.forEach(element => {
            console.log(`${element}`)
        })
    })