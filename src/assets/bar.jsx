import { Box } from "@mui/material"
import AsyncStorage from "@react-native-async-storage/async-storage"
import gsap from "gsap"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"


function Bar(props){
  const[cookieUser] = useCookies(['User'])


  useEffect(()=>{

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
    <Box>

      <Box bgcolor={'red'} boxSizing={'content-box'} overflow={'hidden'} className={'bar'} height={'0px'} display={'flex'}>

        <Box color={'white'} fontSize={30} p={1} flexGrow={1} display={'flex'} alignItems={'center'}>
          <strong>POKET</strong>
        </Box>

        <Box p={1}>
          <Box fontSize={30} color={'white'}>{props.user.username}</Box>
          <Box fontSize={20} color={'white'}>{props.user.email}</Box>
        </Box>

      </Box>

    </Box>
  )
}


export default Bar