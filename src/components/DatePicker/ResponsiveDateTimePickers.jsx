import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
//import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
//import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { styled } from '@mui/material/styles';

const StyledDesktopDateTimePicker = styled(DesktopDateTimePicker)(({ theme }) => ({
  
  backgroundcolor: theme.palette.common.white,
  color: theme.palette.common.white,
  
}));



export default function ResponsiveDateTimePickers() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DateTimePicker',
          'MobileDateTimePicker',
          'DesktopDateTimePicker',
          'StaticDateTimePicker',
        ]}
      >
        <DemoItem label="Select date and time:">
          <StyledDesktopDateTimePicker orientation="landscape" defaultValue={dayjs('2025-04-17T15:30')} 
          
          slotProps={{
            day: {
            sx: {
              '& .MuiDateTimeField-root': {backgroundcolor: 'common.white'},
            },
            },
          }}
          
          
            />
        </DemoItem>
       
      </DemoContainer>
    </LocalizationProvider>
  );
}