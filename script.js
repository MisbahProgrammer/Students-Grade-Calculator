let eng = document.getElementById('english').value;
let math = document.getElementById('math').value;
let comp = document.getElementById('computer').value;
let phy = document.getElementById('physics').value;
let result = document.getElementById('grades');

 function cal() {
    let total = parseFloat(eng) + parseFloat(math) + parseFloat(comp) + parseFloat(phy) ;

    let per = (total/400)*100;
    let grade = '';
    if(per <= 100 && per >=90 ){
        grade = 'A+'
    }else if(per < 90 && per >=80){
        grade = 'A'
    }else if(per < 80 && per >= 70){
        grade = 'B'
    }else if(per < 70 && per >= 60){
        grade = 'C'
    }else if(per < 60 && per >= 50){
        grade = 'D'
    }else{
        grade = 'F'
    }
    if(per < 50){
         result.innerHTML = `Your total score is ${total} out of 400 and percentage is ${per}% and your grade is ${grade}. Unfortunately You are Fail. `
    }else if(total === "" || total == null || total == NaN){
         result.innerHTML = 'Please enter valid number'
    }else{
        result.innerHTML = `Your total score is ${total} out of 400 and percentage is ${per}% and your grade is ${grade}. You are Pass`
    }
    

}
