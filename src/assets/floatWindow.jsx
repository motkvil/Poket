import { useState, useEffect } from "react"
import { Box, Grid } from "@mui/material"
import ItemOptions from "./itemOptions"
import AsyncStorage from "@react-native-async-storage/async-storage"

const FloatWindow = (props) => {

  const [itemValueIsActive, setItemValueIsActive] = useState(false)
  const [valueItem, setValueItem] = useState("")
  const [myInput, setMyInput] = useState("")
  const [item,setItem] = useState()


  



  const setItemValue = (props) => {
    setItemValueIsActive(!itemValueIsActive)
    setValueItem(props.title)
  }


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
      position={'fixed'} boxSizing={'border-box'}
      bgcolor={'hsla(0,0%,100%)'}
      p={1} height={'100%'} left={0} top={0}width={'100%'}
      display={'flex'} justifyContent={'center'} alignItems={'center'}
    >

      <Box
        height={'90vh'}
        p={1} width={'90vw'} borderRadius={2}
      >


        <Box height={'90%'} bgcolor={'white'} borderRadius={3}
          overflow={'auto'}
        >
          <Box className={'itemDetails'}>
            <Box
              bgcolor={'#ff0000'} color={'white'} fontSize={20}
              style={{borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}} p={1}
            >
              {
                item?
                <Grid container>
                  <Grid item xs={5}>
                    <strong>{item.title}</strong>
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

            <Box>
              {
                item?
                item.items.map((element,index)=>(
                  <Box key={index}>
                    <Box p={1} fontSize={20}  borderBottom={1} color={"hsla(0,0%,0%,.2)"}>
                      <Box onClick={()=>setItemValue(element)} style={{cursor:'pointer'}}>
                        <Grid container>
                          <Grid item xs={5}>

                            <Box fontSize={20} color={'black'} p={1}>
                              <strong>{element.title}</strong>
                            </Box>
                              
                          </Grid>
                          <Grid item xs={4}>
                            <Box p={1} bgcolor={'hsla(39,60%,60%,.9)'} borderRadius={3} color={'black'}>${element.prev_cost}</Box>
                          </Grid>
                          <Grid item xs={3}>
                            <Box p={1} color={'black'} >${element.real_cost}</Box>
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

        <Box display={'flex'} p={1} justifyContent={'space-around'} textAlign={'center'}>
          <Box bgcolor={'red'} borderRadius={1} minWidth={100} p={1}
            fontSize={20} color={'white'} style={{cursor:'pointer'}} onClick={()=>props.setItemIsActive(false)}
          >
            <strong>Salir</strong>
          </Box>

          <Box bgcolor={'red'} borderRadius={1} minWidth={100} p={1}
            fontSize={20} color={'white'} style={{cursor:'pointer'}}
          >
            <strong>Agregar item</strong>
          </Box>
        </Box>

      </Box>

    </Box>
  )
}

export default FloatWindow