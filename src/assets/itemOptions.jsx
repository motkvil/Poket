import { Box } from "@mui/material";
import { useEffect } from "react";
import gsap from "gsap";




function ItemOptions(props){

  useEffect(()=>{

    gsap.fromTo('.itemOptions',{
      height:'0px',
      duration:.5
    },{
      duration:.5,
      height:'auto'
    })
    
  },[])
  return (
    
    <Box className={'itemOptions'} overflow={'hidden'}>
      <Box display={'flex'} justifyContent={'space-around'} bgcolor={'hsla(0,0%,0%,.05)'} p={2}>
        <Box color={'white'} bgcolor={'red'} borderRadius={2} p={1}
          textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'}
        >
          <strong>Delete</strong>
        </Box>

        <Box color={'white'} bgcolor={'brown'} borderRadius={2} p={1}
          textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'}
        >
          <strong>Edit</strong>
        </Box>

        <Box color={'white'} bgcolor={'green'} borderRadius={2} p={1}
          textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'}
        >
          <strong>Ok</strong>
        </Box>
      </Box>
    </Box>
  )
}


export default ItemOptions