import { Box, Grid } from "@mui/material";
import Theme from "../theme";

function MainComponent (props) {
  return (
    <Box
      p={1}
    >

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box boxShadow={'1px 1px 10px gray'} p={3} borderRadius={2} bgcolor={Theme.secondary}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Box color={'white'} fontSize={45}>
                  <strong>$90.898,00</strong>
                </Box>
                <Box color={'gray'} fontSize={20} maxWidth={200}>
                  <strong>Ingresos mensuales reales</strong>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box color={'white'} fontSize={45}>
                  <strong>$90.898,00</strong>
                </Box>
                <Box color={'gray'} fontSize={20} maxWidth={200}>
                  <strong>Ingresos mensuales previstos</strong>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box p={1} borderRadius={2}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Box color={Theme.primary} fontSize={30}>
                  <strong>Saldo previsto</strong>
                </Box>
                <Box color={Theme.secondary} fontSize={25}>
                  <strong>$90.898,00</strong>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box color={Theme.primary} fontSize={30}>
                  <strong>Saldo real</strong>
                </Box>
                <Box color={Theme.secondary} fontSize={25}>
                  <strong>$90.898,00</strong>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

    </Box>
  )
}

export default MainComponent