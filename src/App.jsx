
import { useEffect, useState } from 'react';
import './App.css'
import { Box } from '@mui/material';
import Form from './assets/form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IndexPage from './assets';
import Theme from './theme';


function App() {

  const [storage, setStorage] = useState();
  const [user, setUser] = useState()

  const storageUser = AsyncStorage.getItem('user')

  useEffect(()=>{
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
  },[])


  


  return (
    <Box boxSizing={'border-box'}>


      <Box
        display={'frex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
      >

        <Box>

          <Box display={'flex'} justifyContent={'center'} >

            {storage===false?<Box
              fontSize={50} textAlign={'center'} padding={1}
              className={'title'} boxSizing={'border-box'}
              bgcolor={Theme.primary} color={'white'} mb={1} width={'100vw'}
            >
              <strong>POKET</strong>
            </Box>:undefined}

          </Box>

          <Box>
            {storage?undefined:<Form storage={storage}/>}
          </Box>

        </Box>


      </Box>

      <Box>
        {storage?<IndexPage/>:undefined}
      </Box>



    </Box>
  )
}

export default App
