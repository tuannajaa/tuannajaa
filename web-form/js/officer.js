$(document).ready(function(){

    officerList = [
        {
            displayName : "ศุภวัฒน์",
            valueName : "นายศุภวัฒน์ เสี้ยวทอง เจ้าพนักงานปกครองปฏิบัติการ"
        },
        {
            displayName : "ณรงค์ศักดิ์",
            valueName : "นายณรงศักดิ์ ชาวเรือ เจ้าพนักงานปกครองชำนาญการ"
        },
        {
            displayName : "สมพงษ์",
            valueName : "นายสมพงษ์ ละลี พนักงานปกครองชำนาญงาน"
        },
        {
            displayName : "กัญจนพร",
            valueName : "นางสาวกัญจนพร ทับแสง เจ้าพนักงานปกครองปฏิบัติการ"
        },
        {
            displayName : "อัมรินทร์",
            valueName : "นางสาวอัมรินทร์ คำบุดดี พนักงานปกครองชำนาญงาน"
        },
        {
            displayName : "ฝ่ายชัชชลัยย์",
            valueName : "นางสาวชัชชลัยย์ หยุนแดง เจ้าพนักงานปกครองชำนาญการพิเศษ"
        },

    ]

    officerList.forEach(element => {
        $('#officer').append('<option value="'+element.valueName+'">'+element.displayName+'</option>')
    });
     
    //Create button for read ThaiID
    document.getElementById("ScanButton").innerHTML = "<input type='button' class='btn btn--radius-2 btn--blue' value='Scan บัตรประชาชน' onclick='getCardData()'>"
    //var btn = document.createElement("button")
    //btn.innerHTML = "Scan Thai ID Card..!!"
    //document.Scan

})