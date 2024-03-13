function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    res = []
    for (let i = 0; i < arr.length; i++){
        if (i % 2 === 1){
            res.push(arr[i])
        }
    }
    return res
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    res = []
    for (let i = arr.length - 1; i >= 0; i--){
        if (i % 2 === 1){
            res.push(arr[i])
        }
    }
    return res
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    if (arr.length === 0){
        return []
    }
    else {
        res = [arr[1], arr[2]]
        for (let i = 3; i < arr.length; i++){
            if ((i/2) % 2 === 0){
                res.push(arr[i])
            }
        }
        return res

    }

}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    if (arr.length === 0){
        return []
    }
    else{
        res = [arr[1], arr[n]]
        for (let i = n+1; i < arr.length; i++){
            if ((i/n) % n === 0){
                res.push(arr[i])
            }
        }
        return res
    }
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    if (arr.length % 2 === 0){
        return arr.slice(0,arr.length/2)
    }
    else {
        return arr.slice(0,(arr.length+1)/2)
    }
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    if (arr.length % 2 === 0){
        return arr.slice(arr.length/2, arr.length)
    }
    else {
        return arr.slice((arr.length+1)/2, arr.length)
    }
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}