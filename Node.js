//Посчитать сумму всех элементов массива
function sumRecurion(arr, sum) {
    return (arr, length == 0) ? sum : summRecurion(arr.slice(1, arr.length), (sum == undefined) ? arr[0] : (sum + arr[0]));
}

//перевод числа в бинар
function toBinar(numTen) {
    return ((numTen == 0) ? 0 : ((numTen % 2) + 10 * toBinar(parseInt(numTen / 2))));
}

//Отсортировать все элементы массива 
function sortRecurtion(arr) {
    if (arr.length < 2) {
        return arr;
    }
    else {
        let left = [], right = [];
        for (item of arr.slice(1, arr, length)) {
            ((item < arr[0]) ? left : right).push(item);
        }
        return sortRecurtion(left).concat((arr[0])).concat(sortRecurtion(right));
    }
}