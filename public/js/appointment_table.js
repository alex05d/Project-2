// ===== APPOINTMENT TABLE (JS) =======

// column names
var apptColumnDefs = [
    { headerName: "Business Name", field: 'vet_name', width: 100 },
    { headerName: "Business Address", field: 'vet_address', width: 100 },
    { headerName: "Appointment Time & Date", field: 'appt', width: 100 },

];

// data in rows
var apptRowData = [
    { vet_name: 'test 1', vet_address: 'test 1b', appt: 'test 1c' },
];


var apptGridOptions = {
    defaultColDef: {
        editable: true,
        resizable: true
    },
    columnDefs: apptColumnDefs,


    // !!!!!!! THIS IS WHERE ROW DATA POPULATES AFTER PULLING FROM API
    rowData: apptRowData,



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
    apptGridOptions.api.stopEditing();
}

function onBtStartEditing(key, char, pinned) {
    apptGridOptions.api.setFocusedCell(0, 'vacName', pinned);

    apptGridOptions.api.startEditingCell({
        rowIndex: 0,
        colKey: 'vacName',
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
    apptGridOptions.api.tabToNextCell();
}

function onBtPreviousCell() {
    apptGridOptions.api.tabToPreviousCell();
}

function onBtWhich() {
    var cellDefs = apptGridOptions.api.getEditingCells();
    if (cellDefs.length > 0) {
        var cellDef = cellDefs[0];
        console.log('editing cell is: row = ' + cellDef.rowIndex + ', col = ' + cellDef.column.getId()
            + ', floating = ' + cellDef.rowPinned);
    } else {
        console.log('no cells are editing');
    }
}

// setup the grid after the page has finished loading
document.getElementById("appts_link").addEventListener('click', function () {

    $('#myGrid').empty()



    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, apptGridOptions);

});
