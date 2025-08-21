import * as React from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers';
const today = dayjs();
const twoPM = dayjs().set('hour', 14).startOf('hour');
const threePM = dayjs().set('hour', 15).startOf('hour');

export default function DataPickerOLd() {

  const [value, setValue] = React.useState(dayjs('2024-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container columns={{ xs: 1, lg: 2 }} spacing={4} alignItems="center" justifyContent="center" 
              sx={{   mt:'4rem',
                      '& .MuiPickerStaticWrapper-content': { bgcolor: 'background.default_var3', color: 'common.black', borderRadius: '24px'},
                      '& .MuiPickerStaticWrapper-root': {},
                      '& .MuiPickersDay-root': { color: 'common.white'},
                      '& .MuiDialogActions-root': { color: 'common.white'},
              
              }}>

        <Grid item>
          <StaticDateTimePicker defaultValue={today} onChange={(newValue) => setValue(newValue)} disableFuture  />
        </Grid>
        
      </Grid>
    </LocalizationProvider>
  );
}