function mycheck() {
    var text0 = document.getElementById('officer')
    var text1 = document.getElementById('docNo')
    var text2 = document.getElementById('birthday')
    var text3 = document.getElementById('birth_province')
    var text4 = document.getElementById('father')
    var text5 = document.getElementById('mother')
    if (text0.value !=''){
        document.getElementById('officer').style.backgroundColor = "#e4ffdf"
    }
    else{
        document.getElementById('officer').style.backgroundColor = "#ff5c5c"    
    }
    
    if (text1.value !=''){
        document.getElementById('docNo').style.backgroundColor = "#e4ffdf"
    }
    else{
        document.getElementById('docNo').style.backgroundColor = "#ff5c5c"    
    }
    
    if (text2.value !='ClickHere'){
        document.getElementById('birthday').style.backgroundColor = "#e4ffdf"
    }
    else{
        document.getElementById('birthday').style.backgroundColor = "#ff5c5c"    
    }
    
    if (text3.value !=''){
        document.getElementById('birth_province').style.backgroundColor = "#e4ffdf"
    }
    else{
        document.getElementById('birth_province').style.backgroundColor = "#ff5c5c"    
    }
    
    if(text4.value !=''){
        document.getElementById('father').style.backgroundColor = "#e4ffdf"
    }
    else{
        document.getElementById('father').style.backgroundColor = "#ff5c5c"
    }

    if(text5.value !=''){
        document.getElementById('mother').style.backgroundColor = "#e4ffdf"
    }
    else{
        document.getElementById('mother').style.backgroundColor = "#ff5c5c"
    }
    
}