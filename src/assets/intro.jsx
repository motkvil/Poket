import { useEffect, useState } from 'react';
import '../App.css'
import { useCookies } from 'react-cookie'
import { Box } from '@mui/material';
import gsap from 'gsap';




function Intro(props) {
  const [cookies, setCookie] = useCookies(['Potk']);


  const createCookie = () => {
    setCookie('Potk', {iniciar:true}, {path:''})
    props.setInit(true)
  }

  
  useEffect(()=>{
    
    gsap.fromTo('.int', {
      height:'0px',
      duration:1,
      ease:'power1.out',
      opacity:0
    },{
      height:'auto',
      duration:1,
      ease:'power1.out',
      opacity:1,
      delay:1
    })

  })


  return (
    <Box height={'0px'} className={'int'} overflow={'hidden'} textAlign={'center'}>
      
      <Box >
        <Box fontSize={20} mb={5}>
          Bienvenido a POKET tu aliado de bolsillo
        </Box>

        <Box 
          border={1} p={1} m={1} borderRadius={1} color={'red'}
          style={{cursor:'pointer'}} className={'Iniciar'} onClick={createCookie}
        >
          <strong>Iniciar</strong>
        </Box>
      </Box>

    </Box>
  )
}


export default Intro