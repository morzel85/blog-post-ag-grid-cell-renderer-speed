import {
    VANILLA_FUNCTION,
    REACT_CLASS,
    REACT_FUNCTION
} from './renderers/rendererTypeNames';

const generateColumnsAndRows = (columnsPerTypeCount, rowsCount) => {
    const columnDefs = [];
    const rowData = []

    for (let i = 0; i < columnsPerTypeCount; i++) {
        columnDefs.push({
            field: 'field_' + i,
            headerName: 'Col ' + i
        }, {
            field: 'field_vf_' + i,
            headerName: 'Col VF ' + i,
            cellRenderer: VANILLA_FUNCTION,
            hide: true
        }, {
            field: 'field_rc_' + i,
            headerName: 'Col RC ' + i,
            cellRenderer: REACT_CLASS,
            hide: true
        }, {
            field: 'field_rf_' + i,
            headerName: 'Col RF ' + i,
            cellRenderer: REACT_FUNCTION,
            hide: true
        });
    }

    for (let r = 0; r < rowsCount; r++) {
        const row = { id: r };

        for (let c = 0; c < columnsPerTypeCount; c++) {
            const text = `(${r}, ${c})`;
            row['field_' + c] = text;
            row['field_vf_' + c] = text;
            row['field_rc_' + c] = text;
            row['field_rf_' + c] = text;
        }

        rowData.push(row);
    }

    return [columnDefs, rowData];
}

export default generateColumnsAndRows;
