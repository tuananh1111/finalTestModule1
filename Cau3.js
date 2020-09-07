function checkNguyenAm(string, arr){
    let count=0;
    for (let i=0; i<string.length;i++){
        for (let j=0;j<arr.length;j++){
            if (string[i]===arr[j]){
                count++;
            }
        }
    }
    return count;
}