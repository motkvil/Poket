import { Box } from "@mui/material";
import { useEffect } from "react";
import gsap from "gsap";
import { DeleteForever, EditRounded, CheckCircleOutline} from "@mui/icons-material";




function ItemOptions(props){



  const deleteItem = () => {
    console.log(props.item)
    console.log(props.valueItem)
  }

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
          style={{cursor:'pointer'}} onClick={deleteItem}
        >
          <DeleteForever fontSize={"large"}/>
        </Box>

        <Box color={'white'} bgcolor={'brown'} borderRadius={2} p={1} pl={2} pr={2}
          textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'}
          style={{cursor:'pointer'}}
        >
          <EditRounded fontSize={"large"}/>
        </Box>

        <Box color={'white'} bgcolor={'green'} borderRadius={2} p={1}
          textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'}
          style={{cursor:'pointer'}}
        >
          <CheckCircleOutline fontSize={"large"}/>
        </Box>
      </Box>
    </Box>
  )
}


export default ItemOptions