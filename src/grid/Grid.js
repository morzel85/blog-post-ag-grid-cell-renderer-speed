import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import {
    NO_RENDERER,
} from './renderers/rendererTypeNames';

import generateColumnsAndRows from './generator';

import vanillaFunctionRenderer from './renderers/vanillaFunctionRenderer';
import ReactClassRenderer from './renderers/ReactClassRenderer';
import ReactFunctionRenderer from './renderers/ReactFunctionRenderer';

import TypeChoice from './TypeChoice';

class Grid extends Component {
    constructor(props) {
        super(props);

        const [columnDefs, rowData] = generateColumnsAndRows(100, 100);

        this.state = {
            gridOptions: {
                defaultColDef: {
                    width: 90
                },
                columnDefs,
                rowData,
                components: {
                    VANILLA_FUNCTION: vanillaFunctionRenderer
                },
                frameworkComponents: {
                    REACT_CLASS: ReactClassRenderer,
                    REACT_FUNCTION: ReactFunctionRenderer
                },
                onGridReady: this.handleGridReady
            },
            rendererType: NO_RENDERER
        }
    }

    setColumnsVisiblity = rendererType => {
        const allColumns = this.gridColumnApi.getAllColumns();

        const columnsToHide = allColumns.filter(c => c.colDef.cellRenderer !== rendererType);
        const columnsToShow = rendererType === NO_RENDERER ?
            allColumns.filter(c => c.colDef.cellRenderer === undefined) :
            allColumns.filter(c => c.colDef.cellRenderer === rendererType);

        this.gridColumnApi.setColumnsVisible(columnsToHide, false);
        this.gridColumnApi.setColumnsVisible(columnsToShow, true);
    };

    handleGridReady = params => {        
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };

    handleRenererTypeChange = event => {
        this.setState({
            rendererType: event.target.value
        });

        this.setColumnsVisiblity(event.target.value);
    };

    render() {       
        return (
            <>
                <TypeChoice type={this.state.rendererType} onChange={this.handleRenererTypeChange} />
                <div className="Grid ag-theme-balham">
                    <AgGridReact gridOptions={this.state.gridOptions} />
                </div>
            </>
        );
    }
}

export default Grid;