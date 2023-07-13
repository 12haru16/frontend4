import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

import {useState} from 'react';

const rows: GridRowsProp = [
    { id: "kit00001", col1: 'Hello', col2: 'World' },
    { id: "kit00002", col1: 'DataGridPro', col2: 'is Awesome' },
    { id: "kit00003", col1: 'MUI', col2: 'is Amazing' },
];
  
const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
];

export default function ShowDataBase() {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');

    const handleYearChange = (event: SelectChangeEvent) => {
        setYear(event.target.value);
    };
    const handleMonthChange = (event: SelectChangeEvent) => {
        setMonth(event.target.value);
    };

    
    return (
        <Box sx={{ flexGrow: 1,pt:2}}>
            <Grid container spacing={2}>
                <Grid xs={8} sx={{pl:2}}>
                    <Typography variant="h4" component="div" color="text.secondary" align="left">
                    データベース
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                    <InputLabel id="demo-simple-select-disabled-label">年</InputLabel>
                    <Select
                    labelId="demo-simple-select-disabled-label"
                    id="demo-simple-select-disabled"
                    value={year}
                    label="Age"
                    onChange={handleYearChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>2021</MenuItem>
                    <MenuItem value={20}>2022</MenuItem>
                    <MenuItem value={30}>2023</MenuItem>
                    </Select>
                    <FormHelperText>Please select</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 90 }}>
                    <InputLabel id="demo-simple-select-disabled-label">月</InputLabel>
                    <Select
                    labelId="demo-simple-select-disabled-label"
                    id="demo-simple-select-disabled"
                    value={month}
                    label="Age"
                    onChange={handleMonthChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>4</MenuItem>
                    <MenuItem value={20}>5</MenuItem>
                    <MenuItem value={30}>6</MenuItem>
                    </Select>
                    <FormHelperText>Please select</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <DataGrid sx={styles.grid} rows={rows} columns={columns} />
                </Grid>
            </Grid>
        </Box>
    );
}

const styles = {
    grid: {
      border: 0.8,
      borderColor: 'grey.500',
      '.MuiDataGrid-toolbarContainer': {
        borderBottom: 'solid 1px rgba(224, 224, 224, 1)'  
      },
      '.MuiDataGrid-row .MuiDataGrid-cell:not(:last-child)': {
        borderRight: 'solid 1px rgba(224, 224, 224, 1) !important'
      },
       // 列ヘッダに背景色を指定
      '.MuiDataGrid-columnHeaders': {
        backgroundColor: '#003D21', 
        color: '#fff',
        fontSize: 17,
        letterSpacing: 5
      },
      //奇数行をしましまにする設定
      '& .rows-active': {
        background: '#f3f6f5 !important'
      }
    }
   }