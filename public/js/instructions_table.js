// ===== SPECIAL INSTRUCTIONS TABLE (JS) =======

// column names
var specialInstColumnDefs = [
    { headerName: "Special Instructions Required", field: 'instructions', width: 100 },
    { headerName: "Add Instructions here", field: 'info', width: 100 },
];

// data in rows
var specialInstRowData = [
    { instructions: 'test 1', info: 'test 1b' },
];


var instructionsGridOptions = {
    defaultColDef: {
        editable: true,
        resizable: true
    },

    columnDefs: specialInstColumnDefs,

    // !!!!!!! THIS IS WHERE ROW DATA POPULATES AFTER PULLING FROM API
    rowData: specialInstRowData,



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
    instructionsGridOptions.api.stopEditing();
}

function onBtStartEditing(key, char, pinned) {
    instructionsGridOptions.api.setFocusedCell(0, 'medication_name', pinned);

    instructionsGridOptions.api.startEditingCell({
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
    instructionsGridOptions.api.tabToNextCell();
}

function onBtPreviousCell() {
    instructionsGridOptions.api.tabToPreviousCell();
}

function onBtWhich() {
    var cellDefs = instructionsGridOptions.api.getEditingCells();
    if (cellDefs.length > 0) {
        var cellDef = cellDefs[0];
        console.log('editing cell is: row = ' + cellDef.rowIndex + ', col = ' + cellDef.column.getId()
            + ', floating = ' + cellDef.rowPinned);
    } else {
        console.log('no cells are editing');
    }
}

document.getElementById("instructions_link").addEventListener('click', function () {

    $('#myGrid').empty()
    // $('#myGrid2').empty()
    // $('#myGrid').hide()


    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, instructionsGridOptions);


});
