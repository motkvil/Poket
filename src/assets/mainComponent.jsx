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
      p={1}
    >

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box boxShadow={'1px 10px 20px gray'} p={3} borderRadius={2} bgcolor={Theme.primary}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box color={'white'} fontSize={45}>
                  <strong>${realCost && monIncome?monIncome-realCost:monIncome}</strong>
                </Box>
                <Box color={'hsla(0,0%,0%,.3)'} fontSize={20} maxWidth={200}>
                  <strong>Saldo actual</strong>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box color={'white'} fontSize={24}>
                  <strong>${prevCost && nextMonIncome?nextMonIncome-prevCost:nextMonIncome}</strong>
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
                    <strong>Ingreso mensual actual</strong>
                  </Box>
                  <Box color={Theme.secondary} fontSize={25}>
                    <strong>${monIncome}</strong>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box borderRadius={1} p={1} border={'dashed 2px gray'}>
                  <Box color={Theme.primary} fontSize={20}>
                    <strong>Ingreso mensual previsto</strong>
                  </Box>
                  <Box color={Theme.secondary} fontSize={25}>
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