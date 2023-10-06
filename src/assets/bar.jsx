import { Box } from "@mui/material"
import gsap from "gsap"
import { useEffect } from "react"
import { useCookies } from "react-cookie"


function Bar(){
  const[cookieUser] = useCookies(['User'])


  useEffect(()=>{
    if(cookieUser.User){

      let data = cookieUser.User
      console.log(data)
    }

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

      {
        cookieUser.User?
        <Box bgcolor={'red'} boxSizing={'content-box'} overflow={'hidden'} className={'bar'} height={'0px'}>

          <Box color={'white'} fontSize={30} p={1}>
            <strong>POTK</strong>
          </Box>

          <Box display={'flex'} justifyContent={'space-between'} p={1}>
            <Box color={'white'}>{cookieUser.User[0].value}</Box>
            <Box color={'white'}>{cookieUser.User[1].value}</Box>
          </Box>

        </Box>
        :undefined
      }

    </Box>
  )
}


export default Bar