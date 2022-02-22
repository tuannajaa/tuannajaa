function getCardData() {
    console.log("function is working")
    fetch('https://localhost:8182/thaiid/read.jsonp?&section1=true&section2a=true&section2b=true')
    .then(response => response.text())
    .then(data => {
        var idcard = data
        var x = idcard.substring(13 , idcard.length - 1)
        console.log(x)
        const obj = JSON.parse(x);
        console.log(obj)
        if (obj== null){
            alert('ตรวจสอบ บัตรประชาชนเสียบแล้วหรือไม่?')
        }
        else{
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
    });
}
//////////////////// GetCardData For Mother /////////////////

//////////////////// GetCardData For Wit1 /////////////////

//////////////////// GetCardData For Wit2 /////////////////

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
