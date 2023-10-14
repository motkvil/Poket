import { useState, useEffect } from "react"
import { Box, Grid } from "@mui/material"
import ItemOptions from "./itemOptions"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useSwipeable } from "react-swipeable"
import { ArrowBackIos } from "@mui/icons-material"
import Theme from "../theme"

const FloatWindow = (props) => {

  const [itemValueIsActive, setItemValueIsActive] = useState(false)
  const [valueItem, setValueItem] = useState("")
  const [myInput, setMyInput] = useState("")
  const [item,setItem] = useState()



  



  const setItemValue = (props) => {
    setItemValueIsActive(!itemValueIsActive)
    setValueItem(props.title)
  }

  const hola = useSwipeable({
    onSwiped: (data)=>{
      console.log('SWIPED BITCH',data)
      alert('hollaaaaa')
    }
  })


  const inputHandler = (e) => {
    setMyInput(e.target.value, ...myInput)
  }

  useEffect(()=>{
    console.log(props.itemActive)
    let localStorageItems = AsyncStorage.getItem('data')
    localStorageItems.then(data=>{
      let jsonItems = JSON.parse(data)
      let myItem = jsonItems.find(e=> e.title === props.itemActive)
      setItem(myItem)
    })

  },[props.itemActive])



  return (
    <Box
      bgcolor={'hsla(0,0%,100%)'}
      height={'100%'} width={'100vw'}
      {...hola}
    >

      <Box>

        <Box boxSizing={'border-box'}
          bgcolor={Theme.primary} color={'white'} fontSize={20}
          display={'flex'} flexDirection={'column'} justifyContent={'center'}
        >

          <Box color={'white'} p={2} onClick={()=>props.setItemIsActive(false)} style={{cursor:'pointer'}} 
            display={'flex'} alignItems={'center'} borderBottom={1}
          >
            <Box display={'flex'} alignItems={'center'} flexGrow={1}>
              <ArrowBackIos fontSize={'large'}/>
              <Box><strong>Atrás</strong></Box>
            </Box>

            <Box bgcolor={Theme.secondary} borderRadius={2} p={1}>
              <strong>Agregar un item</strong>
            </Box>
          </Box>

          <Box display={'flex'} alignItems={'center'} p={2}>
            {
              item?
              <Grid container>
                
                <Grid item xs={5}>
                  <Box>
                    <strong>{item.title}</strong>
                  </Box>
                </Grid>
                

                <Grid item xs={4}>
                  <strong>Costo previsto</strong>
                </Grid>
                <Grid item xs={3}>
                  <strong>Costo real</strong>
                </Grid>
              </Grid>
              :undefined
            }
          </Box>
          

        </Box>

        <Box>
          <Box className={'itemDetails'}>
            <Box>
              {
                item?
                item.items.map((element,index)=>(
                  <Box key={index} {...hola}>
                    <Box p={1} fontSize={20}  borderBottom={1} color={"hsla(0,0%,0%,.2)"}>
                      <Box onClick={()=>setItemValue(element)} style={{cursor:'pointer'}}>
                        <Grid container>
                          <Grid item xs={5}>

                            <Box fontSize={20} color={'hsla(0,0%,0%,.7)'} p={1}>
                              <strong>{element.title}</strong>
                            </Box>
                              
                          </Grid>
                          <Grid item xs={4}>
                            <Box p={1} bgcolor={Theme.secondary} borderRadius={3} color={'white'}>
                              <strong>${element.prev_cost}</strong>
                            </Box>
                          </Grid>
                          <Grid item xs={3}>
                            <Box p={1} color={'hsla(0,0%,0%,.7)'} >
                              <strong>${element.real_cost}</strong>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    {
                      itemValueIsActive && valueItem === element.title?
                      <ItemOptions 
                        itemValueIsActive={itemValueIsActive}
                        setItemValueIsActive={setItemValueIsActive}
                        valueItem={valueItem} 
                        item={item}
                        setItem={setItem}
                      />
                      :undefined
                    }  
                    
                  </Box>
                ))
                :undefined
              }
            </Box>
          </Box>
        </Box>
      </Box>
        



    </Box>
  )
}

export default FloatWindow