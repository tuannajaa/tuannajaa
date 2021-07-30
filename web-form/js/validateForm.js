function validateform() {
    var x = 0
    if((document.getElementById('officer').value) == ''){
            document.getElementById('officer').style.backgroundColor = "#ff5c5c"
            document.getElementById('officer').scrollIntoView()
            x = x+1
    }
    if((document.getElementById('docNo').value) == ''){
            document.getElementById('docNo').style.backgroundColor = "#ff5c5c"
            document.getElementById('docNo').scrollIntoView()
            x = x+1
    }
    if((document.getElementById('birthday').value) == 'ClickHere'){
            document.getElementById('birthday').style.backgroundColor = "#ff5c5c"
            document.getElementById('birthday').scrollIntoView()
            x = x+1
    }
    if((document.getElementById('birth_province').value) == ''){
        document.getElementById('birth_province').style.backgroundColor = "#ff5c5c"
        document.getElementById('birth_province').scrollIntoView()
        x = x+1
    }
    if((document.getElementById('father').value) == ''){
        document.getElementById('father').style.backgroundColor = "#ff5c5c"
        document.getElementById('father').scrollIntoView()
        x = x+1
    }
    if((document.getElementById('mother').value) == ''){
        document.getElementById('mother').style.backgroundColor = "#ff5c5c"
        document.getElementById('mother').scrollIntoView()
        x = x+1
    }
    if((document.getElementById('job').value) == ''){
        document.getElementById('job').style.backgroundColor = "#ff5c5c"
        document.getElementById('job').scrollIntoView()
        x = x+1
    }   
    if((document.getElementById('init-card').value) == 'ClickHere'){
        document.getElementById('init-card').style.backgroundColor = "#ff5c5c"
        document.getElementById('init-card').scrollIntoView()
        x = x+1
    }             
    if((document.getElementById('exp-card').value) == 'ClickHere'){
        document.getElementById('exp-card').style.backgroundColor = "#ff5c5c"
        document.getElementById('exp-card').scrollIntoView()
        x = x+1
    }
    if((document.getElementById('telNo').value) == ''){
        document.getElementById('telNo').style.backgroundColor = "#ff5c5c"
        document.getElementById('telNo').scrollIntoView()
        x = x+1
    }  
    if((document.getElementById('law').value) == ''){
        document.getElementById('law').style.backgroundColor = "#ff5c5c"
        document.getElementById('law').scrollIntoView()
        x = x+1
    }
    if(x > 0) {
        alert("คุณกรอกรายละเอียดไม่ครบ!!!")
    }           
}