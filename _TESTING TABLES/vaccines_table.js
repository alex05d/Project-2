// ===== VACCINES TABLE (JS) =======
// $('#vaccines_link').on("click", function (event) {
//     console.log("Table Linked")
//     rowData = [];
// });
// column names
var columnDefs = [
    { headerName: "Vacination Name", field: 'vac_name', width: 100 },
    { headerName: "Vacination Status", field: 'vac_status', width: 100 },
    { headerName: "Vacination Due Date", field: 'vac_due_date', width: 100 },

];

var rowData = [
    { vac_name: 'test 1', vac_status: 'test 1b', vac_due_date: 'test 1c' },
];


var gridOptions = {
    defaultColDef: {
        editable: true,
        resizable: true
    },
    columnDefs: columnDefs,

    // !!!!!!! THIS IS WHERE ROW DATA POPULATES AFTER PULLING FROM API
    rowData: rowData,
    // pinnedTopRowData: getPinnedTopData(),
    // pinnedBottomRowData: getPinnedBottomData(),


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
    gridOptions.api.stopEditing();
}

function onBtStartEditing(key, char, pinned) {
    gridOptions.api.setFocusedCell(0, 'vacName', pinned);

    gridOptions.api.startEditingCell({
        rowIndex: 0,
        colKey: 'vac_name',
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
    gridOptions.api.tabToNextCell();
}

function onBtPreviousCell() {
    gridOptions.api.tabToPreviousCell();
}

function onBtWhich() {
    var cellDefs = gridOptions.api.getEditingCells();
    if (cellDefs.length > 0) {
        var cellDef = cellDefs[0];
        console.log('editing cell is: row = ' + cellDef.rowIndex + ', col = ' + cellDef.column.getId()
            + ', floating = ' + cellDef.rowPinned);
    } else {
        console.log('no cells are editing');
    }
}



// setup the grid after the page has finished loading
document.getElementById("vaccines_link").addEventListener('click', function () {

    console.log(gridOptions);
    $('#myGrid').empty()



    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);


});
