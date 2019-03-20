// (C) 2007-2019 GoodData Corporation
import React from 'react';

import ExampleWithSource from '../components/utils/ExampleWithSource';
import PivotTableDrillExample from '../components/PivotTableDrillExample';
import PivotTableDrillExampleSRC from '!raw-loader!../components/PivotTableDrillExample'; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import PivotTableSortingExample from '../components/PivotTableSortingExample';
import PivotTableSortingExampleSRC from '!raw-loader!../components/PivotTableSortingExample'; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import PivotTableTotalsExample from '../components/PivotTableTotalsExample';
import PivotTableTotalsExampleSRC from '!raw-loader!../components/PivotTableTotalsExample'; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first
import Trang from 'd:/GDUI/gooddata-react-components/examples/src/components/Trang';
import TrangSRC from '!raw-loader!d:/GDUI/gooddata-react-components/examples/src/components/Trang'; // eslint-disable-line import/no-webpack-loader-syntax, import/no-unresolved, import/extensions, import/first

export const PivotTableDemo = () => (
    <div>
        <h1>Pivot Table</h1>

        <hr className="separator" />

        <h2 id="measures-row-attributes-and-column-attributes">
            Example of Presorted Pivot Table
        </h2>
        <ExampleWithSource
            for={() => (
                <PivotTableSortingExample />
            )}
            source={PivotTableSortingExampleSRC}
        />

        <hr className="separator" />

        <h2 id="measures-row-attributes-and-column-attributes">
            Example of Trang
        </h2>
        <ExampleWithSource
            for={() => (
                <Trang />
            )}
            source={TrangSRC}
        />

        <hr className="separator" />

        <h2 id="measures-row-attributes-and-column-attributes">
            Example of Pivot Table with Totals
        </h2>
        <ExampleWithSource
            for={() => (
                <PivotTableTotalsExample />
            )}
            source={PivotTableTotalsExampleSRC}
        />

        <hr className="separator" />

        <h2 id="measures-row-attributes-and-column-attributes">
            Example of Drill Event
        </h2>
        <ExampleWithSource
            for={() => (
                <PivotTableDrillExample />
            )}
            source={PivotTableDrillExampleSRC}
        />

        <hr className="separator" />

    </div>
);

export default PivotTableDemo;
