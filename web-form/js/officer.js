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
            displayName : "ณิฐชานันท์",
            valueName : "นางสาวณิฐชานันท์ พงษ์สิริฐากูร พนักงานปกครองชำนาญงาน"
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
            displayName : "ชัชชลัยย์",
            valueName : "นางสาวชัชชลัยย์ หยุนแดง เจ้าพนักงานปกครองชำนาญการพิเศษ"
        },

    ]

    officerList.forEach(element => {
        $('#officer').append('<option value="'+element.valueName+'">'+element.displayName+'</option>')
    });
     
    

})