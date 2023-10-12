function divideAndConquerSum(arr) {
    
    if (arr.length == 0)
    {
        return 0; 
    }
    else if (arr.length == 1)
    {
        return arr[0]; 
    }
    else if (arr.length == 2)
    {
        return arr[0] + arr[1]; 
    }
    else if (arr.length == 3)
    {
        return arr[0] + arr[1] + arr[2]; 
    }
    
    var i0 = 0; 
    var i1 = Math.floor((arr.length - 1) / 3); 
    var i2 = 2*i1;
    var i3 = arr.length; 

    var arr1 = arr.slice(i0, i1); 
    var arr2 = arr.slice(i1, i2); 
    var arr3 = arr.slice(i2, i3); 

    let sum1 = Sum(arr1), sum2 = Sum(arr2), sum3 = Sum(arr3); 

    var sum = sum1 + sum2 + sum3; 
    return sum; 
}

function Sum(arr)
{
    if (arr.length == 0)
    {
        return 0; 
    }

    var tmpsum; 
    tmpsum = arr[0] + Sum(arr.slice(1)); 

    return tmpsum; 
}