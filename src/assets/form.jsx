import { useEffect, useState } from 'react';
import '../App.css'
import { useCookies } from 'react-cookie'
import { Box } from '@mui/material';
import gsap from 'gsap';
import AsyncStorage from '@react-native-async-storage/async-storage';




function Form(props) {
  const [user, setUser] = useState([
    {title:'username', value:undefined},
    {title:'correo', value:undefined},
    {title:'telefono', value:undefined}
  ])
  const [myInput, setMyInput] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  
  
  const storageUser = AsyncStorage.getItem('user')




  const form = () => {

    const submit = (e, index) => {
      e.preventDefault()
      let newUser = [...user]
      console.log(newUser)
      newUser[index].value = myInput
      setUser(newUser)
      setMyInput("")
    }

    const change = (e) => {
      setMyInput(e.target.value, ...myInput)
    }

    

    

    for (let list = 0; list < user.length; list++) {
      const element = user[list];
  
      if(element.value===undefined){

        return(
          <Box display={'flex'} justifyContent={'center'} p={1}>

            <form onSubmit={(e)=>submit(e,list)}>

              <input autoFocus
                onChange={(e)=>change(e)}
                value={myInput} className='input' placeholder={element.title}
              />

            </form>

            
          </Box>
        )
      }
      
    }

    

    
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


    let count = 0
    for (let index = 0; index < user.length; index++) {
      const element = user[index];
      if(element.value){
        count++
      }
      
    }

    if(count===user.length){
      setIsComplete(true)

      let localUser = {
        username: user[0].value,
        email: user[1].value,
        telefono: user[2].value
      }
      
      AsyncStorage.setItem('user',JSON.stringify(localUser))
      

      document.location.reload()
    }


  },[user])


  return (
    <Box height={'0px'} className={'int'} overflow={'hidden'}>

      {
        props.storage===false?
        isComplete?
        <Box fontSize={20} p={1}>
          Listo
        </Box>
        :
        <Box fontSize={20} p={1} color={'gray'}>
          Unas preguntas antes de comenzar
        </Box>
        :undefined
      }

      {props.storage?undefined:form()}




    </Box>
  )
}


export default Form