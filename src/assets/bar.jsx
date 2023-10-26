import { Box, Grid } from "@mui/material"
import AsyncStorage from "@react-native-async-storage/async-storage"
import gsap from "gsap"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import Theme from "../theme"


function Bar(props){
  const [storage, setStorage] = useState();
  const [user, setUser] = useState()
  const [status, setStatus] = useState(false)


  useEffect(()=>{

    const storageUser = AsyncStorage.getItem('user')
    storageUser.then((data)=>{
      // console.log('localUser',JSON.parse(data))
      if(data){
        console.log('Hay un usuario')
        setStorage(true)
        setUser(JSON.parse(data))
      } else {
        console.log('No hay usuario')
        setStorage(false)
      }
    })
  
    

    gsap.fromTo('.bar',{
      height:'0px',
      duration:1,
      ease: 'power1.out',
      delay:1
    },{
      height:'auto',
      duration:1,
      ease:'power1.out',
      delay:1
    })
  },[])


  return(
    <Box position={'fixed'} width={'100%'} top={0} zIndex={2}>

      <Box 
        bgcolor={Theme.primary} boxSizing={'content-box'} 
        overflow={'hidden'} className={'bar'} height={'0px'} 
        display={'flex'} boxShadow={'0px 0px 10px gray'}
      >

        <Box color={'white'} fontSize={20} p={1} flexGrow={1} display={'flex'} alignItems={'center'}>
          <strong>POKET</strong>
        </Box>

        <Box p={1}>
          <Box fontSize={20} color={'white'}>{user?user.username:undefined}</Box>
          <Box fontSize={20} color={'white'}>{user?user.email:undefined}</Box>
        </Box>

      </Box>

      <Grid container>
        <Grid items xs={12} sm={6} md={4}>
          <Box
            bgcolor={Theme.primary}
            borderRight={1} 
            p={1}borderTop={1}
            borderColor={'hsla(0,0%,100%,.2)'}
          >
            <Box color={'white'}>
              {
                props.status?props.status:'¡Bienvenido!'
              }
            </Box>

          </Box>
        </Grid>
        <Grid items xs={12} sm={6} md={4}>
          <Box
            bgcolor={Theme.primary}
            borderTop={1}
            borderRight={1} 
            borderColor={'hsla(0,0%,100%,.2)'}
            p={1}
            color={'white'}
          >
            <Box>Hola</Box>

          </Box>
        </Grid>
        <Grid items xs={12} sm={6} md={4}>
          <Box
            bgcolor={Theme.primary}
            borderTop={1}
            borderRight={1} 
            borderColor={'hsla(0,0%,100%,.2)'}
            p={1}
            color={'white'}
          >
            <Box>Hola</Box>

          </Box>
        </Grid>
      </Grid>

    </Box>
  )
}


export default Bar