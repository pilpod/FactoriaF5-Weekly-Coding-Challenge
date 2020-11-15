const spanResult = document.getElementById('result');

let arr = [2, 5, -2, 5];

function sumarPositivos(array) {
    //vuestro código
    let sum = 0;
    array.forEach(num => {
        if(num >= 0) {
            sum += num;
        }
    });

    spanResult.innerHTML = 'Array[1, 2, 3, -4] = ' + sum;

    console.log(sum);
};

sumarPositivos(arr);
//resultado: 12

sumarPositivos([1, 2, 3, -4]);
//resultado: 6


