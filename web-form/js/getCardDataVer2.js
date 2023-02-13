function getCardData() {
    console.log("function is working")

    //***import js into html*****  
    var script = document.createElement("script");
    script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js'  
    document.body.appendChild(script)
    //***END import js into html*****   

    fetch('https://localhost:8182/thaiid/read.jsonp?&section1=true&section2a=true&section2b=true')
    .then(response => response.text())
    .then(data => {
        var idcard = data
        var x = idcard.substring(13 , idcard.length - 1)
        console.log(x)
        const obj = JSON.parse(x);
        console.log(obj)
        if (obj== null){
            //alert('ตรวจสอบ บัตรประชาชนเสียบแล้ว หรือไม่??')
            Swal.fire({
                icon: 'error',
                html: '<h2 style="color:red;">ตรวจไม่พบบัตรประชาชน?</h2>'+'<h4>ตรวจสอบว่าเสียบบัตรประชาชนแล้วหรือยัง? หรือใช้ยางลบ ลบบริเวณหน้าสัมผัสของบัตรประชาชน</h4>',   
            })
        }
        else{
            //alert('กำลังอ่านบัตรประชาชน!! รอสักครู่')
            Swal.fire({
                html: '<h1 style="color:#006C0F;">กำลังอ่านบัตรประชาชน</h1>' + '<h4>กรุณารอสักครุ...</h4>',
                position: "center",
                background: "white",
                icon: 'success',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: false,
                showCancelButton: false,
                timer: 3000,
                backdrop: `
                rgba(0,0,123,0.4)
                url("https://sweetalert2.github.io/images/nyan-cat.gif")
                center top
                no-repeat
                `
            })

            var dateOfBirth = getFormatedDateOfBirth(obj.BirthDate)
            var issueDate = getFormatedDateOfBirth(obj.IssueDate)
            var expDate = getFormatedDateOfBirth(obj.ExpiryDate)
            let preN = obj.TitleNameTh
            let repreN = preN.replace(/น.ส./g,"นางสาว")
            document.getElementById("full_name").value = repreN + obj.FirstNameTh +" "+ obj.LastNameTh
            document.getElementById("birthday").value = dateOfBirth
            document.getElementById("card").value = obj.CitizenNo
            document.getElementById("init-card").value = issueDate
            document.getElementById("exp-card").value = expDate
            document.getElementById("addresss").value = obj.HomeNo
            document.getElementById("moo").value = obj.Moo.substring(7) //ตัดคำว่า หมู่ที่ ออก
            document.getElementById("road").value = obj.Trok+obj.Soi+obj.Road
            document.getElementById("tambol").value = obj.Tumbol
            document.getElementById("district").value = obj.Amphur
            document.getElementById('provice').value = obj.Province
            var IssuePlace = obj.IssuePlace
            IssuePlaceArray = IssuePlace.split("/")
            var CardPlace = IssuePlaceArray[0]+" "+IssuePlaceArray[1]
            document.getElementById("cardplace").value = CardPlace
        }
    })
    .catch(err => {
    console.log('caught it!',err);
        Swal.fire({
            icon: 'error',
            html: '<h1 style="color:red;">พบข้อขัดข้อง</h1>'+'<h4>คุณยังไม่ติดตั้งโปรแกรม : <a href="https://drive.google.com/file/d/14SURlNUX9I3BBRMOT4S8GMM7TcwcfQw6/view" traget="_blank">Smartdcard Reader</a></h4>' + '<h4>และยังไม่เปิดใช้งาน : <a href="https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino" traget="_blank">Cors Unblock</a></h4> ',
        })
        
    })
}
//////////////////// GetCardData For Mother /////////////////
function getCardDataMom() {
    console.log("function is working")
    //***import js into html*****  
    var script = document.createElement("script");
    script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js'  
    document.body.appendChild(script)
    //***END import js into html*****
    fetch('https://localhost:8182/thaiid/read.jsonp?&section1=true&section2a=true&section2b=true')
    .then(response => response.text())
    .then(data => {
        var idcard = data
        var x = idcard.substring(13 , idcard.length - 1)
        console.log(x)
        const obj = JSON.parse(x);
        console.log(obj)
        if (obj== null){
            //alert('ตรวจสอบ บัตรประชาชนเสียบแล้วหรือไม่?')
            Swal.fire({
                icon: 'error',
                html: '<h2 style="color:red;">ตรวจไม่พบบัตรประชาชน?</h2>'+'<h4>ตรวจสอบว่าเสียบบัตรประชาชนแล้วหรือยัง? หรือใช้ยางลบ ลบบริเวณหน้าสัมผัสของบัตรประชาชน</h4>',   
            })
        }
        else{
            //alert('กำลังอ่านบัตรประชาชน!! รอสักครู่')
            Swal.fire({
                html: '<h1 style="color:#006C0F;">กำลังอ่านบัตรประชาชน</h1>' + '<h4>กรุณารอสักครุ...</h4>',
                position: "center",
                background: "white",
                icon: 'success',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: false,
                showCancelButton: false,
                timer: 3000,
                backdrop: `
                rgba(0,0,123,0.4)
                url("https://sweetalert2.github.io/images/nyan-cat.gif")
                center top
                no-repeat
                `
            })

        var dateOfBirth = getFormatedDateOfBirth(obj.BirthDate)
        var issueDate = getFormatedDateOfBirth(obj.IssueDate)
        var expDate = getFormatedDateOfBirth(obj.ExpiryDate)
        let preN = obj.TitleNameTh
        let repreN = preN.replace(/น.ส./g,"นางสาว")
        document.getElementById("full_name_mom").value = repreN + obj.FirstNameTh +" "+ obj.LastNameTh
        document.getElementById("birthday_mom").value = dateOfBirth
        document.getElementById("card_mom").value = obj.CitizenNo
        document.getElementById("init-card_mom").value = issueDate
        document.getElementById("exp-card_mom").value = expDate
        document.getElementById("addresss_mom").value = obj.HomeNo
        document.getElementById("moo_mom").value = obj.Moo.substring(7) //ตัดคำว่า หมู่ที่ ออก
        document.getElementById("road_mom").value = obj.Trok+obj.Soi+obj.Road
        document.getElementById("tambol_mom").value = obj.Tumbol
        document.getElementById("district_mom").value = obj.Amphur
        document.getElementById('provice_mom').value = obj.Province
        var IssuePlace = obj.IssuePlace
        IssuePlaceArray = IssuePlace.split("/")
        var CardPlace = IssuePlaceArray[0]+" "+IssuePlaceArray[1]
        document.getElementById("cardplace_mom").value = CardPlace
        }
    })
    .catch(err => {
    console.log('caught it!',err);
        Swal.fire({
            icon: 'error',
            html: '<h1 style="color:red;">พบข้อขัดข้อง</h1>'+'<h4>คุณยังไม่ติดตั้งโปรแกรม : <a href="https://drive.google.com/file/d/14SURlNUX9I3BBRMOT4S8GMM7TcwcfQw6/view" traget="_blank">Smartdcard Reader</a></h4>' + '<h4>และยังไม่เปิดใช้งาน : <a href="https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino" traget="_blank">Cors Unblock</a></h4> ',
        })
    
    })
}
//////////////////// GetCardData For Wit1 /////////////////
function getCardDataWit1() {
    console.log("function is working")
    //***import js into html*****  
    var script = document.createElement("script");
    script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js'  
    document.body.appendChild(script)
    //***END import js into html*****
    fetch('https://localhost:8182/thaiid/read.jsonp?&section1=true&section2a=true&section2b=true')
    .then(response => response.text())
    .then(data => {
        var idcard = data
        var x = idcard.substring(13 , idcard.length - 1)
        console.log(x)
        const obj = JSON.parse(x);
        console.log(obj)
        if (obj== null){
            //alert('ตรวจสอบ บัตรประชาชนเสียบแล้วหรือไม่?')
            Swal.fire({
                icon: 'error',
                html: '<h2 style="color:red;">ตรวจไม่พบบัตรประชาชน?</h2>'+'<h4>ตรวจสอบว่าเสียบบัตรประชาชนแล้วหรือยัง? หรือใช้ยางลบ ลบบริเวณหน้าสัมผัสของบัตรประชาชน</h4>',   
            })
        }
        else{
            //alert('กำลังอ่านบัตรประชาชน!! รอสักครู่')
            Swal.fire({
                html: '<h1 style="color:#006C0F;">กำลังอ่านบัตรประชาชน</h1>' + '<h4>กรุณารอสักครุ...</h4>',
                position: "center",
                background: "white",
                icon: 'success',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: false,
                showCancelButton: false,
                timer: 3000,
                backdrop: `
                rgba(0,0,123,0.4)
                url("https://sweetalert2.github.io/images/nyan-cat.gif")
                center top
                no-repeat
                `
            })

        var dateOfBirth = getFormatedDateOfBirth(obj.BirthDate)
        var issueDate = getFormatedDateOfBirth(obj.IssueDate)
        var expDate = getFormatedDateOfBirth(obj.ExpiryDate)
        let preN = obj.TitleNameTh
        let repreN = preN.replace(/น.ส./g,"นางสาว")
        document.getElementById("full_name_wit1").value = repreN + obj.FirstNameTh +" "+ obj.LastNameTh
        document.getElementById("birthday_wit1").value = dateOfBirth
        document.getElementById("card_wit1").value = obj.CitizenNo
        document.getElementById("init-card_wit1").value = issueDate
        document.getElementById("exp-card_wit1").value = expDate
        document.getElementById("addresss_wit1").value = obj.HomeNo
        document.getElementById("moo_wit1").value = obj.Moo.substring(7) //ตัดคำว่า หมู่ที่ ออก
        document.getElementById("road_wit1").value = obj.Trok+obj.Soi+obj.Road
        document.getElementById("tambol_wit1").value = obj.Tumbol
        document.getElementById("district_wit1").value = obj.Amphur
        document.getElementById('provice_wit1').value = obj.Province
        var IssuePlace = obj.IssuePlace
        IssuePlaceArray = IssuePlace.split("/")
        var CardPlace = IssuePlaceArray[0]+" "+IssuePlaceArray[1]
        document.getElementById("cardplace_wit1").value = CardPlace
        }
    })
    .catch(err => {
    console.log('caught it!',err);
        Swal.fire({
            icon: 'error',
            html: '<h1 style="color:red;">พบข้อขัดข้อง</h1>'+'<h4>คุณยังไม่ติดตั้งโปรแกรม : <a href="https://drive.google.com/file/d/14SURlNUX9I3BBRMOT4S8GMM7TcwcfQw6/view" traget="_blank">Smartdcard Reader</a></h4>' + '<h4>และยังไม่เปิดใช้งาน : <a href="https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino" traget="_blank">Cors Unblock</a></h4> ',
        })
    })
}
//////////////////// GetCardData For Wit2 /////////////////
function getCardDataWit2() {
    console.log("function is working")
    //***import js into html*****  
    var script = document.createElement("script");
    script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js'  
    document.body.appendChild(script)
    //***END import js into html*****
    fetch('https://localhost:8182/thaiid/read.jsonp?&section1=true&section2a=true&section2b=true')
    .then(response => response.text())
    .then(data => {
        var idcard = data
        var x = idcard.substring(13 , idcard.length - 1)
        console.log(x)
        const obj = JSON.parse(x);
        console.log(obj)
        if (obj== null){
            //alert('ตรวจสอบ บัตรประชาชนเสียบแล้วหรือไม่?')
            Swal.fire({
                icon: 'error',
                html: '<h2 style="color:red;">ตรวจไม่พบบัตรประชาชน?</h2>'+'<h4>ตรวจสอบว่าเสียบบัตรประชาชนแล้วหรือยัง? หรือใช้ยางลบ ลบบริเวณหน้าสัมผัสของบัตรประชาชน</h4>',   
            })
        }
        else{
            //alert('กำลังอ่านบัตรประชาชน!! รอสักครู่')
            Swal.fire({
                html: '<h1 style="color:#006C0F;">กำลังอ่านบัตรประชาชน</h1>' + '<h4>กรุณารอสักครุ...</h4>',
                position: "center",
                background: "white",
                icon: 'success',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: false,
                showCancelButton: false,
                timer: 3000,
                backdrop: `
                rgba(0,0,123,0.4)
                url("https://sweetalert2.github.io/images/nyan-cat.gif")
                center top
                no-repeat
                `
            })

        var dateOfBirth = getFormatedDateOfBirth(obj.BirthDate)
        var issueDate = getFormatedDateOfBirth(obj.IssueDate)
        var expDate = getFormatedDateOfBirth(obj.ExpiryDate)
        let preN = obj.TitleNameTh
        let repreN = preN.replace(/น.ส./g,"นางสาว")
        document.getElementById("full_name_wit2").value = repreN + obj.FirstNameTh +" "+ obj.LastNameTh
        document.getElementById("birthday_wit2").value = dateOfBirth
        document.getElementById("card_wit2").value = obj.CitizenNo
        document.getElementById("init-card_wit2").value = issueDate
        document.getElementById("exp-card_wit2").value = expDate
        document.getElementById("addresss_wit2").value = obj.HomeNo
        document.getElementById("moo_wit2").value = obj.Moo.substring(7) //ตัดคำว่า หมู่ที่ ออก
        document.getElementById("road_wit2").value = obj.Trok+obj.Soi+obj.Road
        document.getElementById("tambol_wit2").value = obj.Tumbol
        document.getElementById("district_wit2").value = obj.Amphur
        document.getElementById('provice_wit2').value = obj.Province
        var IssuePlace = obj.IssuePlace
        IssuePlaceArray = IssuePlace.split("/")
        var CardPlace = IssuePlaceArray[0]+" "+IssuePlaceArray[1]
        document.getElementById("cardplace_wit2").value = CardPlace
        }
    })
    .catch(err => {
    console.log('caught it!',err);
        Swal.fire({
            icon: 'error',
            html: '<h1 style="color:red;">พบข้อขัดข้อง</h1>'+'<h4>คุณยังไม่ติดตั้งโปรแกรม : <a href="https://drive.google.com/file/d/14SURlNUX9I3BBRMOT4S8GMM7TcwcfQw6/view" traget="_blank">Smartdcard Reader</a></h4>' + '<h4>และยังไม่เปิดใช้งาน : <a href="https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino" traget="_blank">Cors Unblock</a></h4> ',
        })
    
    })
}
//////////////////// Function Format Wording /////////////////
function getFormatedDateOfBirth(dateOfBirth){
    var year = dateOfBirth.slice(0,4)
    var month = dateOfBirth.slice(4,6)
    var date = dateOfBirth.slice(6,8)
    
    return date+"/"+month+"/"+year
}
function getFormatedDateOfBirth(issueDate){
    var yearIssue = issueDate.slice(0,4)
    var monthIssue = issueDate.slice(4,6)
    var dateIssue = issueDate.slice(6,8)
    
    return dateIssue+"/"+monthIssue+"/"+yearIssue
}
function getFormatedDateOfBirth(expDate){
    var yearExpire = expDate.slice(0,4)
    var monthExpire = expDate.slice(4,6)
    var dateExpire = expDate.slice(6,8)
    
    return dateExpire+"/"+monthExpire+"/"+yearExpire
}
