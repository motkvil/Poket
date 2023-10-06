
import { useEffect, useState } from 'react';
import './App.css'
import { useCookies } from 'react-cookie'
import { Box } from '@mui/material';
import gsap from 'gsap';
import Intro from './assets/intro';
import Intro2 from './assets/intro2';
import Bar from './assets/bar';


function App() {

  const [cookies, setCookie] = useCookies(['Potk']);
  const [init, setInit] = useState(false)


  


  return (
    <Box>

      <Bar/>


      <Box
        display={'frex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'100vh'}
        flexDirection={'column'}
      >

        <Box>

          <Box display={'flex'} justifyContent={'center'}>

            <Box
              fontSize={50} textAlign={'center'} padding={1}
              className={'title'} maxWidth={200}
              bgcolor={'red'} color={'white'} mb={1}
            >
              <strong>POKET</strong>
            </Box>

          </Box>

          <Box>
            {cookies.Potk !== undefined?<Intro2/>:<Intro setInit={setInit}/>}
          </Box>

        </Box>


      </Box>



    </Box>
  )
}

export default App
