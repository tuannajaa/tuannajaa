var header = [];
var dataSet = [];
var mainTable;



function loadFile() {

    fetch('ForTest.csv')
        .then(response => response.text())
        .then(text => parseCsv.getParsecsvdata(text));

  
}

function uploadDealcsv() {};
/*------- Method for parse csv data and display --------------*/
uploadDealcsv.prototype.getParsecsvdata = function (data) {


    header = [];
    dataSet = [];


    const rows = data.split('\n');

    for (var i = 0; i < rows.length; i++) {

        if (rows[i].trim() !== "") {
            const content = rows[i].split(",");

            if (i == 0) {
                header.push({
                    title: "id"
                });
                for (var j = 0; j < content.length; j++) {
                    const headerContent = {
                        title: content[j]
                    }

                    header.push(headerContent);

                }
               
            } else {
                var rawDataSet = []
                rawDataSet.push(i);
                for (var j = 0; j < content.length; j++) {

                    rawDataSet.push(content[j].replace(/(\r\n|\n|\r)/gm, ""));

                }

              
                dataSet.push(rawDataSet);


            }
        }


    }


    if (mainTable) {
        mainTable.destroy();
        $('#csv-table').empty();
        mainTable = $('#csv-table').on('error.dt', function (e, settings, techNote, message) {
            console.log('An error has been reported by DataTables: ', message);
        }).DataTable({
            data: dataSet,
            columns: header,
            scrollX: true,
            scrollCollapse: true,
            fixedColumns: {
                leftColumns: 1,
                
            }
        });
        mainTable.column( 0 ).visible( false );

    } else {
        mainTable = $('#csv-table').on('error.dt', function (e, settings, techNote, message) {
            console.log('An error has been reported by DataTables: ', message);
        }).DataTable({
            data: dataSet,
            columns: header,
            scrollX: true,
            scrollCollapse: true,
            fixedColumns: {
                leftColumns: 1,
               
            }
        });
        mainTable.column( 0 ).visible( false );
    }

    
    $("#output").show();
    


    // console.table(parsedata);
}

var parseCsv = new uploadDealcsv();
// loadFile();

$('#searchbox').on( 'keyup', function () {
    mainTable.search( this.value ).draw();
} );