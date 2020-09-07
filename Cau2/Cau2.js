function checkNumber(number, arr){
    let count;
    for(let i=0; i<arr.length;i++){
        if(number==arr[i]){
            count=i;
            document.write("Vị trí thứ "+count);
            return true;
        }
    }return false;
}
