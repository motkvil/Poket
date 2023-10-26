
import { useEffect, useState } from 'react';
import './App.css'
import { Box, Grid, Hidden } from '@mui/material';
import Form from './assets/form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IndexPage from './assets';
import Theme from './theme';
import Auth from './assets/auth';
import { Link } from 'react-router-dom';
import MyPoket from './pages/myPoket';
import Bar from './assets/bar';




function App() {

  const [storage, setStorage] = useState();
  const [user, setUser] = useState()
  const [status, setStatus] = useState(false)
  const [segments, setSegments] = useState([])


  
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
      <Bar 
        user={user}
        status={status}
        setStatus={setStatus}
      />

      <Grid container>  
        <Grid 
          item 
          xs={12} 
          md={4}
          lg={4}>

            
          
          <Box
            bgcolor={'white'}  
            height={'100vh'} 
            display={'flex'} 
            justifyContent={'center'} 
            alignItems={'center'} 
            flexWrap={'wrap'}
            p={3} 
            boxSizing={'border-box'} 
            overflow={'auto'}
            borderRight={1} 
            borderColor={'hsla(0,0%,0%,.1)'}
          >

            
            <Box 
              border={1} 
              borderColor={'white'} 
              borderRadius={2} 
              p={3} pt={5} pb={5}>
              <Box 
                color={Theme.primary} 
                p={2} 
                fontSize={30}> 
                  <strong>APP</strong> 
              </Box>














              
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Box 
                    display={'flex'}
                    borderRadius={2} 
                    bgcolor={Theme.primary} 
                    justifyContent={'center'}
                    onClick={()=>setStatus('Profile')}
                    alignItems={'center'} 
                    style={{cursor:'pointer'}}
                    color={'white'}>

                    <Box>

                      <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        padding={1}>

                        <Box
                          width={80} 
                          height={80} 
                          bgcolor={'white'} 
                          borderRadius={'50%'}
                        />

                      </Box>
                        
                      <Box 
                        pt={1} 
                        textAlign={'center'} 
                        fontSize={20}>
                        <strong>Profile</strong>
                      </Box>

                      <Box 
                        fontSize={15} 
                        pb={1} 
                        display={'flex'} 
                        alignItems={'center'} 
                        justifyContent={'center'} 
                        textAlign={'center'}>
                        Ajustes y mas
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                
                <Grid item xs={4}>
                  <Box 
                    display={'flex'} 
                    justifyContent={'center'} 
                    alignItems={'center'} 
                    onClick={()=>setStatus('Gastos')}
                    style={{cursor:'pointer'}}
                    color={'white'}>
                    <Box>
                      <Box 
                        p={1} 
                        borderRadius={2}
                        bgcolor={Theme.primary} 
                        textAlign={'center'} 
                        fontSize={20} 
                        color={'white'}>
                        <strong>Gastos</strong>
                      </Box>

                      <Box fontSize={15} p={1}
                            bgcolor={'white'} borderRadius={2} boxShadow={'0px 0px 10px  gray '} mt={1}
                            display={'flex'} color={'gray'}
                            alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
                        Tu App de finanzas personales
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {segments.map((e,i)=>(
                  <Grid item xs={4} key={i}>
                    <Link 
                      to={e.title} 
                      className='links'>
                      <Box 
                        display={'flex'} 
                        bgcolor={'white'} 
                        boxShadow={'0px 0px 10px gray'}
                        borderRadius={2}
                        justifyContent={'center'} 
                        alignItems={'center'} 
                        color={'white'}>
                        <Box 
                          border={1} 
                          borderRadius={2}>
                          <Box 
                            p={1} 
                            textAlign={'center'} 
                            fontSize={20} 
                            color={Theme.primary}>
                            <strong>{e.title}</strong>
                          </Box>

                          <Box 
                            fontSize={15} 
                            p={1} 
                            display={'flex'} 
                            alignItems={'center'} 
                            justifyContent={'center'} 
                            color={'gray'}
                            textAlign={'center'}>
                            {e.description}
                          </Box>
                        </Box>
                      </Box>
                    </Link>
                  </Grid>
                ))}
                <Grid item xs={4}>
                  <Box 
                    display={'flex'} 
                    justifyContent={'center'} 
                    alignItems={'center'} 
                    height={100}
                    border={1} 
                    borderRadius={2} 
                    borderColor={'white'} 
                    style={{cursor:'pointer'}} 
                    onClick={()=>addSegment()}
                  >
                    <Box 
                      borderRadius={'50%'} 
                      width={40} 
                      height={40} 
                      bgcolor={Theme.primary} 
                      fontSize={50}
                      display={'flex'} 
                      justifyContent={'center'} 
                      alignItems={'center'}
                    >+</Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

          </Box>
        </Grid>
        
        <Hidden mdDown>
          <Grid 
            item 
            xs={4}
            md={4} 
            lg={4}>
            <Box
              boxSizing={'border-box'}
              borderRight={1} 
              borderColor={'hsla(0,0%,0%,.1)'}
              bgcolor={'white'}>
              
              {
                status==='Gastos'?<MyPoket/>:status===false?<p>Welcome!!</p>:undefined
              }
            </Box>
          </Grid>
        </Hidden>

        <Hidden mdDown>
          <Grid 
            item 
            xs={4}
            md={4} 
            lg={4}>
            <Box 
              p={2} 
              bgcolor={'gray'}>

            </Box>
          </Grid>
        </Hidden>
      </Grid>

    </Box>
  )
}

export default App
