
import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel
 } from '@syncfusion/ej2-react-schedule';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Calendar() {
  


    return (
        <div>
            <h2>Calendar</h2>
            <ScheduleComponent currentView='Month'>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
        </div>
    )
}

export default Calendar;