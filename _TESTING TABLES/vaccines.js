// column names
var columnDefs = [
    { field: 'vaccinationName', width: 100 },
    { field: 'vaccinationStatus', width: 100 },
    { field: 'vaccinationDueDate', width: 90 },

];

var rowData = [
    { vaccinationName: 'Bob', vaccinationStatus: 'Harrison', vaccinationDueDate: 'Male' },
    { vaccinationName: 'Mary', vaccinationStatus: 'Wilson', vaccinationDueDate: 'Female' },


];

// function getPinnedTopData() {
//     return [
//         { vac_name: '##', vac_status: '##', vac_due_date: '##' }
//     ];
// }

// function getPinnedBottomData() {
//     return [
//         { vac_name: '##', vac_status: '##', vac_due_date: '##' }
//     ];
// }

var gridOptions = {
    defaultColDef: {
        editable: true,
        resizable: true
    },
    columnDefs: columnDefs,
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
document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});
