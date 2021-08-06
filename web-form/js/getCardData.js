function getCardData() {
    fetch('http://127.0.0.1:5500/local.json')
        .then(response => response.json())
        .then(data => {

            var dateOfBirth = getFormatedDateOfBirth(data.dob)
            document.getElementById("full_name").value = data.fname+" "+data.lname
            document.getElementById("birthday").value = dateOfBirth
            document.getElementById("card").value = data.cid

            var addressData = getAddress(data.address)
            document.getElementById("addresss").value = addressData.addressNo
            document.getElementById("moo").value = addressData.moo
            document.getElementById("road").value = addressData.road
            document.getElementById("tambol").value = addressData.tambol
            document.getElementById("district").value = addressData.district
            document.getElementById("provice").value = addressData.provice
            

        });
}

function getFormatedDateOfBirth(dateOfBirth){
    var year = dateOfBirth.slice(0,4)
    var month = dateOfBirth.slice(4,6)
    var date = dateOfBirth.slice(6,8)
    
    return date+"/"+month+"/"+year

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