function validateform() {

    //***import js into html*****  
    var script = document.createElement("script");
    script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js'  
    document.body.appendChild(script)
    //***END import js into html*****
    
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
    if((document.getElementById('init-card2').value) == 'ClickHere'){
        document.getElementById('init-card2').style.backgroundColor = "#ff5c5c"
        document.getElementById('init-card2').scrollIntoView()
        x = x+1
    }             
    if((document.getElementById('exp-card2').value) == 'ClickHere'){
        document.getElementById('exp-card2').style.backgroundColor = "#ff5c5c"
        document.getElementById('exp-card2').scrollIntoView()
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
        
        Swal.fire({
            icon: 'error',
            html:
            'คุณกรอกรายละเอียดไม่ครบ <b style="color:red">ยังขาดอีก '+x+' แห่ง</b>',
            
        })
    }
    if(x == 0){
        function loadFile(url, callback) {
            JSZipUtils.getBinaryContent(url, callback);
        }
        
        //function generate(){ ยกเลิก function generate มาจาก index18 รวมกับ function validateForm ไปเลย
            
            loadFile("https://pokkrong-2409a.web.app/basedoc/Curfuse2.docx", function (error, content) {
                if (error) {
                    throw error
                };
                var zip = new JSZip(content);
                var doc = new window.docxtemplater().loadZip(zip)
                //วัน เดือน ปี เกิด ผู้ร้อง
                var birthday_v = document.getElementById("birthday").value.split("/");
                var birthday_v2 = document.getElementById("birthday").value;
                var b_date = birthday_v[0];
                var b_month = parseInt(birthday_v[1]); 
                var b_year = birthday_v[2];
                var b_year_int = parseInt(b_year);
                            
                                     
                //วันที่ปัจจุบัน 
                var to_day = new Date();
                var thmonth = new Array ("มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน", "กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม");
                var dd = to_day.getDate();
                var mm = to_day.getMonth();
                var mmmm = parseInt(mm)+1;
                var yy = to_day.getFullYear();
                var yyyy = to_day.getFullYear() +543;
                var mmm = thmonth[to_day.getMonth()];
                var this_day = dd + ' ' + mmm + ' ' + yyyy;
                var ttday = dd + ' ' + mmm + ' พ.ศ. ' + yyyy;
                
    
                //วันออกบัตร ผู้ร้อง
                var issue_c = document.getElementById("init-card").value.split("/");
                var issue_date = parseInt(issue_c[0]);
                var issue_month = issue_c[1];
                var issue_year = issue_c[2];
                var issue_m = parseInt(issue_month)-1;
                var issue_year_int = parseInt(issue_year);
                var issue_mm = thmonth[issue_m];
                var issue_card = issue_date + ' ' + issue_mm + ' ' + issue_year_int;
                
                //วันบัตรหมดอายุ ผู้ร้อง
                var exp_c = document.getElementById("exp-card").value.split("/");
                var exp_date = parseInt(exp_c[0]);
                var exp_month = parseInt(exp_c[1])-1;
                var exp_year = parseInt(exp_c[2]);
                var exp_mm = thmonth[exp_month];
                if(exp_year==9999){
                    var exp_card ="ตลอดชีพ"
                    console.log(exp_card)    
                    }
                else{
                    var exp_card = exp_date + ' ' + exp_mm + ' ' + exp_year;
                    console.log(exp_card)
                }
                
                
                //วันเริ่มเดินทาง
                var issue_c2 = document.getElementById("init-card2").value.split("/");
                var issue_date2 = parseInt(issue_c2[0]);
                var issue_month2 = issue_c2[1];
                var issue_year2 = issue_c2[2];
                var issue_m2 = parseInt(issue_month2)-1;
                var issue_year_int2 = parseInt(issue_year2);
                var issue_mm2 = thmonth[issue_m2];
                var issue_card2 = issue_date2 + ' ' + issue_mm2 + ' ' + issue_year_int2;
                
                //เดินทางถึงวันที่
                var exp_c2 = document.getElementById("exp-card2").value.split("/");
                var exp_date2 = parseInt(exp_c2[0]);
                var exp_month2 = parseInt(exp_c2[1])-1;
                var exp_year2 = parseInt(exp_c2[2]);
                var exp_mm2 = thmonth[exp_month2];
                var exp_card2 = exp_date2 + ' ' + exp_mm2 + ' ' + exp_year2;
               
                //คำนวนอายุอัตโนมัติ ผู้ร้อง
                var age_in_years;
                if(b_month>mmmm) {age_in_years = (yyyy-b_year_int)-1;}
                if(b_month<mmmm) {age_in_years = yyyy-b_year_int;}
                if(b_month==mmmm) {
                    if(b_date<=dd) {age_in_years = yyyy-b_year_int;}
                    else age_in_years = (yyyy-b_year_int)-1;
                }
                                       
                //ใส่ขีดให้เลขบัตรประชาชน ผู้ร้อง
                var id_card = document.getElementById('card').value;
                var id_card_slice = id_card.substring(0,1) + '-' + id_card.substring(1,5) +'-'+ id_card.substring(5,10) + '-' + id_card.substring(10,12) + '-' + id_card.substring(12,13);

                
                doc.setData({
                    //ตัวแปรข้อมูลผู้ร้อง
                    full_name: document.getElementById("full_name").value,
                    b_date: b_date,
                    b_month: b_month,
                    b_year: b_year_int,
                    tday: this_day,
                    birth_province: document.getElementById("birth_province").value,
                    age: age_in_years,
                    addresss: document.getElementById("addresss").value,
                    moo: document.getElementById("moo").value,
                    road: document.getElementById("road").value,
                    tambol: document.getElementById("tambol").value,
                    district: document.getElementById("district").value,
                    provice: document.getElementById("provice").value,
                    addresss2: document.getElementById("addresss2").value,
                    moo2: document.getElementById("moo2").value,
                    road2: document.getElementById("road2").value,
                    tambol2: document.getElementById("tambol2").value,
                    job: document.getElementById("job").value,
                    card: id_card_slice,
                    officer: document.getElementById("officer").value,
                    init_card: issue_card,
                    exp_card: exp_card,
                    forwhat: document.getElementById("forwhat").value,
                    telNo:document.getElementById("telNo").value,
                    law:document.getElementById("law").value,
                    destination:document.getElementById("destination").value,
                    destinationDistrict:document.getElementById("destinationDistrict").value,
                    destinationTambol:document.getElementById("destinationTambol").value,
                    destinationRoad:document.getElementById("destinationRoad").value,
                    vehicle: document.getElementById("vehicle").value,
                    init_card2: issue_card2,
                    exp_card2: exp_card2,
                    docNo:document.getElementById("docNo").value,
                    father: document.getElementById("father").value,
                    mother: document.getElementById("mother").value,
                    yyyy: yyyy,
                    ttday:ttday,
                    cardplace: document.getElementById("cardplace").value,
                    
                    
    
                });
                try {
                    // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                    doc.render()
                } catch (error) {
                    var e = {
                        message: error.message,
                        name: error.name,
                        stack: error.stack,
                        properties: error.properties,
                    }
                    console.log(JSON.stringify({
                        error: e
                    }));
                    // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
                    throw error;
                }
                var out = doc.getZip().generate({
                    type: "blob",
                    mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                }) //Output the document using Data-URI
                saveAs(out, document.getElementById('full_name').value +"output.docx")
            })
        //} ยกเลิก function generate มาจาก index18 รวมกับ function validateForm ไปเลย
    }
    
    
}