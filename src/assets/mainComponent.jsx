import { Box, Grid } from "@mui/material";
import Theme from "../theme";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function MainComponent (props) {

  
  const [prevCost, setPrevCost] = useState()
  const [realCost, setRealCost] = useState()
  const [monIncome, setMonIncome] = useState()
  const [nextMonIncome, setNextMonIncome] = useState()


  


  useEffect(()=>{
    let localStorageItems = AsyncStorage.getItem('data')
    let localStorageIncome = AsyncStorage.getItem('income')

    localStorageIncome.then(data=>{
      let jsonIncome = JSON.parse(data)
      setMonIncome(jsonIncome.monthlyIncome)
      setNextMonIncome(jsonIncome.nextMonthlyIncome)

    })

    localStorageItems.then(data=>{
      let jsonItems = JSON.parse(data)

      let elementsPrevCost = 0
      let elementsRealCost = 0

      for (let index = 0; index < jsonItems.length; index++) {
        const element = jsonItems[index];
        
        for (let i = 0; i < element.items.length; i++) {
          const elementsItems = element.items[i];

          elementsPrevCost += parseFloat(elementsItems.prev_cost)
          elementsRealCost += parseFloat(elementsItems.real_cost)

        }
      }

      setPrevCost(elementsPrevCost)
      setRealCost(elementsRealCost)
    })

  },[])


  

  return (
    <Box
      p={1} pb={3}
    >

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box textAlign={'center'} boxShadow={'0px 0px 10px gray'} p={1} borderRadius={2} bgcolor={Theme.primary}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box color={'white'} fontSize={30}>
                  <strong>${realCost && monIncome?monIncome-realCost:monIncome}</strong>
                </Box>
                <Box color={'hsla(0,0%,0%,.3)'} fontSize={13}>
                  <strong>Saldo actual</strong>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box color={'white'} fontSize={30}>
                  <strong>${prevCost && nextMonIncome?nextMonIncome-prevCost:nextMonIncome}</strong>
                </Box>
                <Box color={'hsla(0,0%,0%,.3)'} fontSize={13} maxWidth={200}>
                  <strong>Saldo previsto</strong>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box p={1} borderRadius={2}>
            <Grid container spacing={1}>

              <Grid item xs={12}>
                <Box borderRadius={1} p={1} border={'dashed 2px gray'}>
                  <Box color={Theme.primary} fontSize={13}>
                    Ingreso mensual actual
                  </Box>
                  <Box color={Theme.secondary} fontSize={20}>
                    <strong>${monIncome}</strong>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} >
                <Box borderRadius={1} p={1} border={'dashed 2px gray'}>
                  <Box color={Theme.primary} fontSize={13}>
                    Ingreso mensual previsto
                  </Box>
                  <Box color={Theme.secondary} fontSize={20}>
                    <strong>${nextMonIncome}</strong>
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