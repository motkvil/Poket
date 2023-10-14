import { useState, useEffect } from "react"
import { Box, Grid } from "@mui/material"
import ItemOptions from "./itemOptions"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useSwipeable } from "react-swipeable"

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

      <Box 
        height={'100vh'}
        
      >

        <Box height={'10vh'} boxSizing={'border-box'}
          bgcolor={'#ff0000'} color={'white'} fontSize={20}
          display={'flex'} flexDirection={'column'} justifyContent={'center'}
        >

        <Box color={'white'} bgcolor={'hsla(0,0%,0%,.2)'} p={2} >
          Atrás
        </Box>

        <Box display={'flex'} alignItems={'center'} p={1}>
          {
            item?
            <Grid container>
              
              <Grid item xs={4}>
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
          

        </Box>

        <Box height={'80vh'} overflow={'auto'} >
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

        <Box height={'10vh'}>
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



    </Box>
  )
}

export default FloatWindow