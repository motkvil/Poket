import { Box,Grid } from "@mui/material";
import { useEffect, useState } from "react";
import items from "./db/data";
import FloatWindow from "./floatWindow";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Bar from "./bar";
import Theme from "../theme";
import MainComponent from "./mainComponent";
import gsap from "gsap";

function IndexPage(props) {

  const [itemActive, setItemActive] = useState("")
  const [itemIsActive, setItemIsActive] = useState(false)
  const [dataItems, setDataItems] = useState()
  const [user, setUser] = useState()
  const [dataIncome, setDataIncome] = useState({
    monthlyIncome: 1100,
    nextMonthlyIncome:1100
  })
  const [moreItems, setMoreItems] = useState(false)



  const getTotal = (array,value) => {
    let total = 0

    if(array){
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        total += parseFloat(value===1?element.real_cost:element.prev_cost)
      }
    }

    return total
  }


  
  const selectItem = (props) => {
    setItemActive(props)
    setItemIsActive(true)
  }

  
  useEffect(()=>{
    const myItems = AsyncStorage.getItem('data')
    const storageUser = AsyncStorage.getItem('user')
    const myIncomes = AsyncStorage.getItem('income')


    if(moreItems){
      gsap.to('.itemsContainer',{
        height: 'auto',
        duration: 1,
        ease: 'power1.out'
      })
    } else {
      gsap.to('.itemsContainer',{
        height: '30vh',
        duration: 1,
        ease: 'power1.out'
      })
    }


    myIncomes.then(data=>{
      if(data){
        setDataIncome(JSON.parse(data))
      } else {
        AsyncStorage.setItem('income', JSON.stringify(dataIncome))
      }
    })

    
    myItems.then((data)=>{
      if(data){
        console.log("Hay data")
        setDataItems(JSON.parse(data))
      } else {
        console.log("No hay data")
        AsyncStorage.setItem('data', JSON.stringify(items))
        setDataItems(items)
      }
    })

    storageUser.then((data)=>{
      // console.log('localUser',JSON.parse(data))
      if(data){
        console.log('Hay un usuario')
        setUser(JSON.parse(data))
      } else {
        console.log('No hay usuario')
      }
    })


  },[moreItems])

  

  

  return (

    <Box 
      pt={5}
      pb={3}
      overflow={'auto'}
      height={'100vh'}
      boxSizing={'border-box'}
    >

      {
        itemIsActive?
        <FloatWindow
          itemActive={itemActive} 
          itemIsActive={itemIsActive}
          setItemIsActive={setItemIsActive} 
        />
        :undefined
      }

      {
        itemIsActive?undefined:
        <Box p={1} mt={7} borderRadius={2} fontSize={30} color={Theme.primary} textAlign={'left'} >
          <p>¡<strong>Bienvenido</strong> a tu App de finanzas personales!</p>
        </Box>
      }



      {
        dataItems && itemIsActive===false?
        <MainComponent/>
        :undefined
      }



      {
        dataItems && itemIsActive===false?
        <Box>
          <Box
            overflow={'hidden'} boxSizing={'border-box'}
            p={2} pt={1} mb={2}
            boxShadow={'0px 0px 10px  hsla(0,0%,0%,.3)'}
            borderColor={'hsla(0,0%,0%,.2)'}
            borderRadius={2}
            className={'itemsContainer'}
          >
            <Grid container >
              {dataItems.map((item,index)=>(
                <Grid item xs={12} md={12} key={index}>
                  <Box 
                  >

                  
                    <Box borderRadius={2} m={1} bgcolor={Theme.primary} mb={2}  display={'flex'} boxShadow={'0px 1px 7px gray'}>

                      <Grid container>
                        <Grid item xs={7}>
                          <Box p={2} color={'white'} flexGrow={1} flexDirection={'column'}>
                            <Box fontSize={item.title.length >= 14? 15: 20}>
                              <strong>{item.title}</strong>
                            </Box>
                            <Grid container>
                              <Grid item xs={6}>
                                <Box fontSize={30} flexGrow={1}>${getTotal(item.items,1)}</Box>
                                <Box fontSize={13}>Costo actual</Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box fontSize={30} flexGrow={1}>${getTotal(item.items,2)}</Box>
                                <Box fontSize={13}>Costo previsto</Box>
                              </Grid>
                            </Grid>
                            
                          </Box>
                        </Grid>

                        <Grid item xs={5}>
                          <Box 
                            p={1} display={'flex'} justifyContent={'center'} 
                            flexDirection={'column'} bgcolor={'white'}
                            style={{borderBottomLeftRadius:'10px', borderTopRightRadius:'10px'}}
                            className='indexItemOptions'
                          >
                            <Box p={1} fontSize={20} >
                              {item.items.length} {' Items'}
                            </Box>
                            <Box p={1} fontSize={20} bgcolor={Theme.secondary} maxWidth={150} color={'white'} borderRadius={2}>
                              <strong>Agregar item </strong>
                            </Box>
                          </Box>
                          <Box  p={2} fontSize={20} color={'white'} className={'details'}
                              textAlign={'center'} style={{cursor:'pointer', borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px'}}
                              onClick={()=>selectItem(item.title)}
                            >
                              <strong>Details</strong>
                            </Box>
                        </Grid>
                      </Grid>

                    </Box>

                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          <Box
            display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box 
              onClick={()=>setMoreItems(!moreItems)} 
              style={{cursor:'pointer'}} 
              bgcolor={Theme.secondary} 
              fontSize={13}
              padding={1} 
              color={'white'} 
              textAlign={'center'} 
              borderRadius={2}>
              {moreItems?'Less':'More'}
            </Box>
          </Box>

        </Box>
        :undefined
      }
    </Box>
  )
}


export default IndexPage