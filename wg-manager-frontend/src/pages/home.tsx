import { withRoot } from "@/hocs/root.tsx";
import { Grid } from "@mui/material";
import { Card, CardContent, CardTitle } from "@/components/ui/card.tsx";
import { WavyBackground } from "@/components/ui/wavy-background.tsx";

function Home() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <center className={"pt-32"}>
        <Grid container spacing={3}>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            <Card>
              <CardTitle className={"pt-2"}>Dashboard</CardTitle>
              <CardContent>
                <p>Willkommen im Wg-Manager</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardTitle className={"pt-2"}>Bashboard</CardTitle>
              <CardContent>
                <p>Tschüss</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </center>
    </WavyBackground>
  );
}

export default withRoot(Home);
