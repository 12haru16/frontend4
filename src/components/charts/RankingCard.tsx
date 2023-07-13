import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function RankingCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h4" component="div">
          品種別収量ランキング
        </Typography>
        <Typography variant="h4" component="div" color="text.secondary">
        1, kit 00005
        </Typography>
        <Typography variant="h4" component="div" color="text.secondary">
        2, kit 00021
        </Typography>
        <Typography variant="h4" component="div" color="text.secondary">
        3, kit 00015
        </Typography>
      </CardContent>
    </Card>
  );
}