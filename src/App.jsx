
import { useEffect, useState } from 'react';
import './App.css'
import { Box, Grid } from '@mui/material';
import Form from './assets/form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IndexPage from './assets';
import Theme from './theme';
import Auth from './assets/auth';


function App() {

  const [storage, setStorage] = useState();
  const [user, setUser] = useState()
  const [status, setStatus] = useState(false)
  const [segments, setSegments] = useState([
    {title: 'Profile', description:'This is a descripcion'},
    {title: 'Gastos', description:'This is a descripcion'}
  ])

  
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

  
  },[segments])

 
  const addSegment = () => {
    
    setSegments([...segments, {
      title: 'New Segment',
      description: 'This is a description'
    }])
    
  }

 
  


  return (
    <Box boxSizing={'border-box'}>

      <Auth/>

      <Box
        bgcolor={'black'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}
        p={3} boxSizing={'border-box'} overflow={'auto'}
      >
        <Box border={1} borderColor={'white'} borderRadius={2} p={3} pt={5} pb={5}>
          <Box color={Theme.primary} p={2} fontSize={30}> <strong>APP</strong> </Box>
          <Grid container spacing={1}>
            {segments.map((e,i)=>(
              <Grid item xs={4} key={i}>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} color={'white'}>
                  <Box border={1} borderRadius={2}>
                    <Box p={1} textAlign={'center'} fontSize={20} color={Theme.primary}>
                      <strong>{e.title}</strong>
                    </Box>

                    <Box fontSize={15} p={1} display={'flex'} alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
                      {e.description}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
            <Grid item xs={4}>
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={100}
                border={1} borderRadius={2} borderColor={'white'} style={{cursor:'pointer'}} 
                onClick={()=>addSegment()}
              >
                <Box borderRadius={'50%'} width={40} height={40} bgcolor={Theme.primary} fontSize={50}
                  display={'flex'} justifyContent={'center'} alignItems={'center'}
                >+</Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Box>

      <Box>
        {storage && status==='myPoket'?<IndexPage/>:undefined}
      </Box>

    </Box>
  )
}

export default App
