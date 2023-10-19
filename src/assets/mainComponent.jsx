import { Box, Grid } from "@mui/material";
import Theme from "../theme";

function MainComponent (props) {
  return (
    <Box
      p={1}
    >

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box boxShadow={'1px 10px 20px gray'} p={3} borderRadius={2} bgcolor={Theme.primary}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box color={'white'} fontSize={45}>
                  <strong>$90.898,00</strong>
                </Box>
                <Box color={'hsla(0,0%,0%,.3)'} fontSize={20} maxWidth={200}>
                  <strong>Saldo real</strong>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box color={'white'} fontSize={24}>
                  <strong>$90.898,00</strong>
                </Box>
                <Box color={'hsla(0,0%,0%,.3)'} fontSize={16} maxWidth={200}>
                  <strong>Saldo previsto</strong>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box p={1} borderRadius={2}>
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
                <Box borderRadius={1} p={1} border={'dashed 2px gray'}>
                  <Box color={Theme.primary} fontSize={20}>
                    <strong>Ingreso mensual real</strong>
                  </Box>
                  <Box color={Theme.secondary} fontSize={25}>
                    <strong>$90.898,00</strong>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box borderRadius={1} p={1} border={'dashed 2px gray'}>
                  <Box color={Theme.primary} fontSize={20}>
                    <strong>Ingreso mensual previsto</strong>
                  </Box>
                  <Box color={Theme.secondary} fontSize={25}>
                    <strong>$90.898,00</strong>
                  </Box>
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