
import { useEffect, useState } from 'react';
import '../App.css'
import { Box } from '@mui/material';
import Form from '../assets/form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IndexPage from '../assets';
import Theme from '../theme';


function MyPoket() {

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


      

      <Box>
        {storage?<IndexPage/>:undefined}
      </Box>



    </Box>
  )
}

export default MyPoket
