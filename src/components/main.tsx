import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import LineChart from './charts/lineChart';
import PieChart from './charts/pieChart';
import BarChart from './charts/barChart';
import RankingCard from './charts/RankingCard';
import ShowDataBase from './showDB';
import Header from './header';
import {useState, useEffect} from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
type Props = {
  anum : number,
  bnum : number,
  cnum : number
}
export default function Main(){

    const [data, setData] = useState<Props>();

    useEffect(() => {
      fetch("http://localhost:8000/api/data")
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch(() => alert("error"));
    }, []);
    return(
        <div>
          <Header />
          <p></p>
        <Grid container spacing={1} sx={{p:2}}>
          <Grid xs={8} sx={{pl:2}}>
            <Typography variant="h4" component="div" color="text.secondary" align="left">
            ダッシュボード（2023年4月）
            </Typography>
          </Grid>
          <Grid xs={8}>
            <Item>
              <LineChart {...data}/>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <PieChart {...data} />
            </Item>
          </Grid>
          <Grid xs={8}>
            <Item>
              <BarChart {...data}/>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <RankingCard />
            </Item>
          </Grid>
          <Grid xs={12}>
            <Item>
              <ShowDataBase />
            </Item>
          </Grid>
        </Grid>
        </div>
    )
}