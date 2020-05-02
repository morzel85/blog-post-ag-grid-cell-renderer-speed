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

import RendererTypeChoice from './RendererTypeChoice';
import StaticMarkupChoice from './StaticMarkupChoice';

class Grid extends Component {
    constructor(props) {
        super(props);

        const [columnDefs, rowData] = generateColumnsAndRows(100, 100);

        this.state = {
            columnDefs,
            rowData,
            disableStaticMarkup: false
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

    handleRendererTypeChange = event => {
        this.setColumnsVisiblity(event.target.value);
    };

    handleDisableStaticMarkupOptionChange = event => {
        this.setState({
            disableStaticMarkup: event.target.checked
        });
    };

    render() {
        return (
            <>
                <div className="settings">
                    <RendererTypeChoice
                        type={this.state.rendererType}
                        onChange={this.handleRendererTypeChange} />
                    <StaticMarkupChoice
                        type={this.state.disableStaticMarkup}
                        onChange={this.handleDisableStaticMarkupOptionChange} />
                </div>
                <div className="ag-theme-balham">
                    <AgGridReact
                        defaultColDef={{
                            width: 90
                        }}
                        components={{
                            VANILLA_FUNCTION: vanillaFunctionRenderer
                        }}
                        frameworkComponents={{
                            REACT_CLASS: ReactClassRenderer,
                            REACT_FUNCTION: ReactFunctionRenderer
                        }}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        disableStaticMarkup={this.state.disableStaticMarkup}
                        onGridReady={this.handleGridReady}
                    />
                </div>
            </>
        );
    }
}

export default Grid;