// ===== MEDICATION TABLE (JS) =======

// column names
var medColumnDefs = [
    { headerName: "Medication Needed", field: 'needs_meds', width: 100 },
    { headerName: "Medication Name", field: 'medication_name', width: 100 },
    { headerName: "Time of Medication", field: 'medication_time', width: 100 },
    { headerName: "Dosage Amount", field: 'dosage', width: 100 },

];

var medRowData = [
    { needs_meds: 'test 1', medication_name: 'test 1b', medication_time: 'test 1c', dosage: 'test 1d' },
];


var medGridOptions = {
    defaultColDef: {
        editable: true,
        resizable: true
    },
    columnDefs: medColumnDefs,

    // !!!!!!! THIS IS WHERE ROW DATA POPULATES AFTER PULLING FROM API
    rowData: medRowData,



    onGridReady: function (params) {
        params.api.sizeColumnsToFit();
    },
    onRowEditingStarted: function (event) {
        console.log('never called - not doing row editing');
    },
    onRowEditingStopped: function (event) {
        console.log('never called - not doing row editing');
    },
    onCellEditingStarted: function (event) {
        console.log('cellEditingStarted');
    },
    onCellEditingStopped: function (event) {
        console.log('cellEditingStopped');
    }
};

function onBtStopEditing() {
    medGridOptions.api.stopEditing();
}

function onBtStartEditing(key, char, pinned) {
    medGridOptions.api.setFocusedCell(0, 'medication_name', pinned);

    medGridOptions.api.startEditingCell({
        rowIndex: 0,
        colKey: 'medication_name',
        // set to 'top', 'bottom' or undefined
        rowPinned: pinned,
        keyPress: key,
        charPress: char
    });
}

function getCharCodeFromEvent(event) {
    event = event || window.event;
    return typeof event.which === 'undefined' ? event.keyCode : event.which;
}

function isCharNumeric(charStr) {
    return !!/\d/.test(charStr);
}

function isKeyPressedNumeric(event) {
    var charCode = getCharCodeFromEvent(event);
    var charStr = String.fromCharCode(charCode);
    return isCharNumeric(charStr);
}

function onBtNextCell() {
    medGridOptions.api.tabToNextCell();
}

function onBtPreviousCell() {
    medGridOptions.api.tabToPreviousCell();
}

function onBtWhich() {
    var cellDefs = medGridOptions.api.getEditingCells();
    if (cellDefs.length > 0) {
        var cellDef = cellDefs[0];
        console.log('editing cell is: row = ' + cellDef.rowIndex + ', col = ' + cellDef.column.getId()
            + ', floating = ' + cellDef.rowPinned);
    } else {
        console.log('no cells are editing');
    }
}

document.getElementById("meds_link").addEventListener('click', function () {

    $('#myGrid').empty()
    // $('#myGrid2').empty()
    // $('#myGrid').hide()


    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, medGridOptions);


});
