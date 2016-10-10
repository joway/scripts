var table = document.querySelector('table.datelist');

var head = table.firstElementChild.firstElementChild;
var cur = head.nextElementSibling;
var Credits = 0;
var GPAs = 0;
while(cur){
    var grade = cur.children[8].innerText;
    var credit = Number(cur.children[6].innerText);

    // switch rank to grade
    if (!Number(grade)){
        switch (grade){
            case "优秀":
                grade = 95;
                break;
            case "良好":
                grade = 85;
                break;
            case "中等":
                grade = 75;
                break;
            case "及格":
                grade = 65;
                break;
            default:
                grade = 55;
                break;
        }
    }


    var gpa = 0;
    switch (Math.floor(grade/10)){
        case 10:
            gpa = 4;
            break;
        case 9:
            gpa = 4;
            break;
        case 8:
            gpa = 3;
            break;
        case 7:
            gpa = 2;
            break;
        case 6:
            gpa = 1;
            break;
        default:
            gpa = 0;
            break;
    }
    GPAs+=gpa*credit;
    Credits+=credit;


    cur = cur.nextElementSibling;
}

var result = {
    "平均GPA": GPAs/Credits,
    "总学分": Credits
}
console.log(result);



