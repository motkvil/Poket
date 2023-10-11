import { Box,Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import items from "./db/data";
import FloatWindow from "./floatWindow";

function IndexPage(props) {

  const [itemActive, setItemActive] = useState("")
  const [itemIsActive, setItemIsActive] = useState(false)


  

  const selectItem = (props) => {
    setItemActive(props)
    setItemIsActive(true)
  }


  

  

  useEffect(()=>{
    gsap.fromTo('.itemDetails',{
      height:'0px',
      duration:1,
    },{
      height:'auto',
      duration:1,
    })
  },[itemActive])

  return (
    <Box p={1}>
      

      <Box p={1} borderRadius={2} fontSize={40} color={'#ff0000'} textAlign={'center'} >
        <p>¡<strong>Bienvenido</strong> a tu App de finanzas personales!</p>
      </Box>


      <Box>
        <Grid container >
          {items.map((item,index)=>(
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box 
                overflow={'hidden'}
              >

                {
                  itemIsActive? <FloatWindow itemActive={itemActive} setItemIsActive={setItemIsActive} /> : undefined
                }

              
                <Box borderRadius={2} m={1} bgcolor={'#ff0000'} mb={2}  display={'flex'} boxShadow={'0px 7px 7px gray'}>

                  <Box p={2} color={'white'} display={'flex'} flexGrow={1} flexDirection={'column'}>
                    <Box fontSize={25}>
                      <strong>{item.title}</strong>
                    </Box>
                    <Box fontSize={50} flexGrow={1}>$9000</Box>
                    <Box  p={2} fontSize={20} color={'white'} className={'details'}
                      textAlign={'center'} style={{cursor:'pointer',borderTop:'dashed 3px white', borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px'}}
                      onClick={()=>selectItem(item.title)}
                    >
                      <strong>Details</strong>
                    </Box>
                  </Box>

                  <Box 
                    p={1} display={'flex'} justifyContent={'center'} borderRadius={2} 
                    flexDirection={'column'} bgcolor={'white'} width={'100%'}
                    boxShadow={'0px 0px 10px gray'}
                  >
                    <Box p={1} fontSize={20} >
                      {item.items.length} {' Items'}
                    </Box>
                    <Box p={1} fontSize={20} bgcolor={'#ff0000'} color={'white'} borderRadius={2}>
                      <strong>Agregar item </strong>
                    </Box>
                  </Box>
                </Box>


                



              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}


export default IndexPage