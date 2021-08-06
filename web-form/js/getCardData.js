function getCardData() {
    console.log("function is working")
    fetch('https://localhost:8443/smartcard/data/')
        .then(response => response.json())
        .then(data => {

            var dateOfBirth = getFormatedDateOfBirth(data.dob)
            var issueDate = getFormatedDateOfBirth(data.issue_date)
            var expDate = getFormatedDateOfBirth(data.expire_date)
            let pren = data.prename
            let repren = pren.replace(/น.ส./g,"นางสาว")
            document.getElementById("full_name").value = repren+data.fname+" "+data.lname
            document.getElementById("birthday").value = dateOfBirth
            document.getElementById("card").value = data.cid
            document.getElementById("init-card").value = issueDate
            document.getElementById("exp-card").value = expDate

            var addressData = getAddress(data.address)
            document.getElementById("addresss").value = addressData.addressNo
            document.getElementById("moo").value = addressData.moo.substring(7) //ตัดคำว่า หมู่ที่ ออก
            document.getElementById("road").value = addressData.road
            document.getElementById("tambol").value = addressData.tambol.substring(4) //ตัด ตำบล แขวง
            document.getElementById("district").value = addressData.district.substring(5) //replace() อำเภอ เขต
            document.getElementById("provice").value = addressData.provice.substring(7) //replace() จังหวัด
            console.log(addressData.moo.substring(7))

        });
}

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

function getAddress(address){
    addressArray = address.split("#")
    var data ={
        addressNo : addressArray[0],
        moo : addressArray[1],
        soi : addressArray[2],
        road : addressArray[3],
        tambol : addressArray[5],
        district : addressArray[6],
        provice : addressArray[7],
    }

    return data
}