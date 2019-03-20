import React, { Component } from 'react';
import { PivotTable} from '@gooddata/react-components';

import '@gooddata/react-components/styles/css/main.css';

import {
    projectId,
    numberactivities,
    activityType
} from '../utils/fixtures';

export class TrangExample extends Component {
    render() {
        const measures = [
            {
                measure: {
                    localIdentifier: 'Activites',
                    definition: {
                        measureDefinition: {
                            item: {
                                identifier: numberactivities
                            }
                        }
                    },
                    format: '#,##0'
                }
            }
        ];

        const attributes = [
            {
                visualizationAttribute: {
                    displayForm: {
                        identifier: activityType
                    },
                    localIdentifier: 'activityType'
                }
            }
        ];

        return (
            <div style={{ height: 300 }} className="s-pivot-table-sorting">
                <PivotTable
                    projectId={projectId}
                    measures={measures}
                    rows={attributes}
                    //columns={columns}
                    pageSize={20}
                    //sortBy={sortBy}
                />
            </div>
        );
    }
}

export default TrangExample;