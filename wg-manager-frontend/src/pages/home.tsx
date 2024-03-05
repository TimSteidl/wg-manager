
import { Grid } from "@mui/material";
import { Card, CardContent, CardTitle } from "@/components/ui/card.tsx";
import { WavyBackground } from "@/components/ui/wavy-background.tsx";
import withRoot from "@/hocs/root.tsx";

function Home() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <center className={"pt-32"}>
        <h1 className={"text-3xl pb-4"}>Willkommen im Wg.Manager!</h1>
        <Grid container spacing={3}>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <Card>
              <CardTitle className={"pt-2"}>Dashboard</CardTitle>
              <CardContent></CardContent>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Card>
              <CardTitle className={"pt-2"}>Bashboard</CardTitle>
              <CardContent>Tschüss</CardContent>
            </Card>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </center>
    </WavyBackground>
  );
}

export default withRoot(Home);