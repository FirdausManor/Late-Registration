function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
let id ; // get value from param 'id'
}

function loadDoc() {
    // find student by id and show student detail
    console.log("!!! loadDoc !!!");
    let student_id = getParameterByName("studentId");

    let apiURL = `http://localhost:8080/data/get-info/comment`;
    fetch(apiURL).
    then(response => response.json()).
    then(data => {
        console.log(data)
        let student;
        for(let i=0; i<data.length; i++) {
            if(data[i].student_id == student_id) {
                student = data[i];
                renderStudentData(student);
                break;
            }
        }
    });
}

function renderStudentData(student) {
    document.getElementById("fname").value = student.fname;
    document.getElementById("lname").value = student.lname;
    document.getElementById("student_id").value = student.student_id;
    document.getElementById("student_year").value = student.student_year;
    document.getElementById("student_faculty").value = student.student_faculty;
    document.getElementById("student_major").value = student.student_major;
    document.getElementById("student_reason").value = student.student_reason;
}

function validate(form) {
    // form.preventDefault();

    if(form.comment.value == "") {
        alert("กรุณาแสดงความคิดเห็น");
        form.comment.focus();
        return false;
    }

    if(form.professer.value == "") {
        alert("กรุณากรอกชื่ออาจารย์ที่ปรึกษา");
        form.professer.focus();
        return false;
    }

    if(isNaN(form.professer.value) == false) {
        alert("กรุณากรอกข้อมูลชื่ออาจารย์ที่ปรึกษาให้ถูกต้อง");
        form.professer.focus();
         return false;
    }

    if(form.checkbox1_conInput.checked == false && form.checkbox2_conInput.checked == false ) {
        alert("กรุณากดเลือกว่าอนุมติหรือไม่อนุมติ");
        return false;
    } else  {
        alert("ข้อมูลได้ถูกบันทึกเรียบร้อยแล้ว");
        event.preventDefault();
        return true;
  }
}
