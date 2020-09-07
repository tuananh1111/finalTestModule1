function equation(temp1, temp2){
    if(temp1==0){
        if(temp2==0){
            document.write("Phuong trinh vo so nghiem");
        }else document.write("Phuong trinh vo nghiem");
    }else document.write("Phuong trinh co nghiem la: "+ (-temp2/temp1));
}