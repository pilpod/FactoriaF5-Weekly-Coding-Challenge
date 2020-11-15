let inputArray1 = document.getElementById('array1');
let inputArray2 = document.getElementById('array2');
let inputArray3 = document.getElementById('array3');
let result = document.getElementById('result');


let arr1 = [1, 4, 6, 35, 2, 5, 20];
let arr2 = [1, 4, 60, 35, 2, 5, 20];
let arr3 = [1, 4, 6, 35, 2, 55, 20];

let maxNum = 0;

$('input[type="radio"]').bind("click", function () {
    $(
        encontrarNumSuperior(evaluateArr($(this).attr('value')))
    )
    .not($(this))
    .trigger('deselect');
});

$('input[type="radio"]').bind('deselect', function(){
    console.log($(this));
})

function encontrarNumSuperior(data) {
    console.log(data);
    data.forEach(numb => {
        if(maxNum < numb) {
            maxNum = numb;
        };
    });

    result.innerHTML = 'El valor númerico más grande del array es ...' + maxNum;
    console.log(maxNum);
    maxNum = 0;
};

function evaluateArr(value) {
    if(value == 'arr1') {
        return arr1;
    }
    if(value == 'arr2') {
        return arr2;
    }
    if(value == 'arr3') {
        return arr3;
    }
}


