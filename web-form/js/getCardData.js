function getCardData() {
    console.log("function is working")
    fetch('https://localhost:8443/smartcard/data/')
        .then(response => response.json())
        .then(data => {

            var dateOfBirth = getFormatedDateOfBirth(data.dob)
            var issueDate = getFormatedDateOfBirth(data.issue_date)
            var expDate = getFormatedDateOfBirth(data.expire_date)
            let preN = data.prename
            let repreN = preN.replace(/น.ส./g,"นางสาว")
            document.getElementById("full_name").value = repreN+data.fname+" "+data.lname
            document.getElementById("birthday").value = dateOfBirth
            document.getElementById("card").value = data.cid
            document.getElementById("init-card").value = issueDate
            document.getElementById("exp-card").value = expDate

            var addressData = getAddress(data.address)
            document.getElementById("addresss").value = addressData.addressNo
            document.getElementById("moo").value = addressData.moo.substring(7)         //ตัดคำว่า หมู่ที่ ออก
            document.getElementById("road").value = (addressData.trok+addressData.soi+addressData.road).substring(3)
            document.getElementById("tambol").value = addressData.tambol.substring(4)   //ตัด ตำบล แขวง
            let district = addressData.district                                         //ตัดคำ อำเภอ และ เขต
            let cutDistrict = district.replace(/อำเภอ|เขต/g,"")                          
            document.getElementById("district").value = cutDistrict
            //document.getElementById("provice").value = addressData.provice.substring(7) 
            let Province = addressData.provice.substring(7)            //แก้ไขค่า กรณี คน กทม ไม่ยอมแสดงชื่อจังหวัดเต็มๆ
            let cutProvince = Province.replace(/มหานคร/g,'กรุงเทพมหานคร')
            document.getElementById('provice').value = cutProvince

        });
}
//////////////////// GetCardData For Mother /////////////////
function getCardDataMom() {
    console.log("function is working")
    fetch('https://localhost:8443/smartcard/data/')
        .then(response => response.json())
        .then(data => {

            let dateOfBirth = getFormatedDateOfBirth(data.dob)
            let issueDate = getFormatedDateOfBirth(data.issue_date)
            let expDate = getFormatedDateOfBirth(data.expire_date)
            let preN = data.prename
            let repreN = preN.replace(/น.ส./g,"นางสาว")
            document.getElementById("full_name_mom").value = repreN+data.fname+" "+data.lname
            document.getElementById("birthday_mom").value = dateOfBirth
            document.getElementById("card_mom").value = data.cid
            document.getElementById("init-card_mom").value = issueDate
            document.getElementById("exp-card_mom").value = expDate

            let addressData = getAddress(data.address)
            document.getElementById("addresss_mom").value = addressData.addressNo
            document.getElementById("moo_mom").value = addressData.moo.substring(7)         //ตัดคำว่า หมู่ที่ ออก
            document.getElementById("road_mom").value = (addressData.trok+addressData.soi+addressData.road).substring(3)
            document.getElementById("tambol_mom").value = addressData.tambol.substring(4)   //ตัด ตำบล แขวง
            let district = addressData.district                                         //ตัดคำ อำเภอ และ เขต
            let cutDistrict = district.replace(/อำเภอ|เขต/g,"")                          
            document.getElementById("district_mom").value = cutDistrict
            //document.getElementById("provice_mom").value = addressData.provice.substring(7) 
            let Province = addressData.provice.substring(7)                 //แก้ไขค่า กรณี คน กทม ไม่ยอมแสดงชื่อจังหวัดเต็มๆ
            let cutProvince = Province.replace(/มหานคร/g,'กรุงเทพมหานคร')
            document.getElementById('provice_mom').value = cutProvince

        });
}
//////////////////// GetCardData For Wit1 /////////////////
function getCardDataWit1() {
    console.log("function is working")
    fetch('https://localhost:8443/smartcard/data/')
        .then(response => response.json())
        .then(data => {

            let dateOfBirth = getFormatedDateOfBirth(data.dob)
            let issueDate = getFormatedDateOfBirth(data.issue_date)
            let expDate = getFormatedDateOfBirth(data.expire_date)
            let preN = data.prename
            let repreN = preN.replace(/น.ส./g,"นางสาว")
            document.getElementById("full_name_wit1").value = repreN+data.fname+" "+data.lname
            document.getElementById("birthday_wit1").value = dateOfBirth
            document.getElementById("card_wit1").value = data.cid
            document.getElementById("init-card_wit1").value = issueDate
            document.getElementById("exp-card_wit1").value = expDate

            let addressData = getAddress(data.address)
            document.getElementById("addresss_wit1").value = addressData.addressNo
            document.getElementById("moo_wit1").value = addressData.moo.substring(7)         //ตัดคำว่า หมู่ที่ ออก
            document.getElementById("road_wit1").value = (addressData.trok+addressData.soi+addressData.road).substring(3)
            document.getElementById("tambol_wit1").value = addressData.tambol.substring(4)   //ตัด ตำบล แขวง
            let district = addressData.district                                         //ตัดคำ อำเภอ และ เขต
            let cutDistrict = district.replace(/อำเภอ|เขต/g,"")                          
            document.getElementById("district_wit1").value = cutDistrict
            //document.getElementById("provice_wit1").value = addressData.provice.substring(7)
            let Province = addressData.provice.substring(7)                 //แก้ไขค่า กรณี คน กทม ไม่ยอมแสดงชื่อจังหวัดเต็มๆ
            let cutProvince = Province.replace(/มหานคร/g,'กรุงเทพมหานคร')
            document.getElementById('provice_wit1').value = cutProvince

        });
}
//////////////////// GetCardData For Wit2 /////////////////
function getCardDataWit2() {
    console.log("function is working")
    fetch('https://localhost:8443/smartcard/data/')
        .then(response => response.json())
        .then(data => {

            let dateOfBirth = getFormatedDateOfBirth(data.dob)
            let issueDate = getFormatedDateOfBirth(data.issue_date)
            let expDate = getFormatedDateOfBirth(data.expire_date)
            let preN = data.prename
            let repreN = preN.replace(/น.ส./g,"นางสาว")
            document.getElementById("full_name_wit2").value = repreN+data.fname+" "+data.lname
            document.getElementById("birthday_wit2").value = dateOfBirth
            document.getElementById("card_wit2").value = data.cid
            document.getElementById("init-card_wit2").value = issueDate
            document.getElementById("exp-card_wit2").value = expDate

            let addressData = getAddress(data.address)
            document.getElementById("addresss_wit2").value = addressData.addressNo
            document.getElementById("moo_wit2").value = addressData.moo.substring(7)            //ตัดคำว่า หมู่ที่ ออก
            document.getElementById("road_wit2").value = (addressData.trok+addressData.soi+addressData.road).substring(3)
            document.getElementById("tambol_wit2").value = addressData.tambol.substring(4)    //ตัด ตำบล แขวง
            let district = addressData.district                                              //ตัดคำ อำเภอ และ เขต
            let cutDistrict = district.replace(/อำเภอ|เขต/g,"")                          
            document.getElementById("district_wit2").value = cutDistrict
            //document.getElementById("provice_wit2").value = addressData.provice.substring(7)
            let Province = addressData.provice.substring(7)                          //แก้ไขค่า กรณี คน กทม ไม่ยอมแสดงชื่อจังหวัดเต็มๆ
            let cutProvince = Province.replace(/มหานคร/g,"กรุงเทพมหานคร")
            document.getElementById("provice_wit2").value = cutProvince

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
        trok : addressArray[2],
        soi : addressArray[3],
        road : addressArray[4],
        tambol : addressArray[5],
        district : addressArray[6],
        provice : addressArray[7],
    }

    return data
}