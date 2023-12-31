import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { DeleteForever, EditRounded, CheckCircleOutline} from "@mui/icons-material";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditForm from "./editForm";
import Theme from "../theme";




function ItemOptions(props){
  // props: 
  // item, 
  // setItem, 
  // valueItem, 
  // setItemValueIsActive,
  // itemValueIsActive
  
  const [isEditMode, setIsEditMode] = useState(false)
  const [saveItem, setSaveItem] = useState(false)
  
  


  const deleteItem = () => {
    let newArray = props.item.items.filter(item=>item.title !== props.valueItem)
    let localItems = AsyncStorage.getItem('data')
    localItems.then(data=>{
      let jsonItems = JSON.parse(data)
      let itemFind = jsonItems.findIndex(e=> e.title === props.item.title)
      jsonItems[itemFind].items = newArray
      
      AsyncStorage.setItem('data', JSON.stringify(jsonItems))
      let updatedItems = AsyncStorage.getItem('data')
      updatedItems.then(data=>{
        let jsonData = JSON.parse(data)
        props.setItem(jsonData[itemFind])
        props.setItemValueIsActive(false)
      })
    })
  }


  const saveMyItem = () => {
    setSaveItem(true)

    setTimeout(()=>{
      setSaveItem(false)
    },[300])
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

      {
        isEditMode?
        <EditForm 
          itemValueIsActive={props.itemValueIsActive}
          setItemValueIsActive={props.setItemValueIsActive}
          valueItem={props.valueItem} 
          item={props.item}
          setItem={props.setItem}
          saveItem={saveItem}
          setSaveItem={setSaveItem}
        />
        :undefined
      }
      
      <Box display={'flex'} justifyContent={'space-around'} bgcolor={'hsla(0,0%,0%,.05)'} p={2}>

        

        <Box color={'white'} bgcolor={Theme.primary} borderRadius={2} p={1} pl={2} pr={2} fontSize={20}
          textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'}
          style={{cursor:'pointer'}} minWidth={'25%'} onClick={()=>setIsEditMode(!isEditMode)}
        >
          <EditRounded fontSize={"medium"}/>
          <strong>Editar</strong>
        </Box>

        

        <Box color={'white'} bgcolor={'red'} borderRadius={2} p={1} fontSize={20}
          textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'}
          style={{cursor:'pointer'}} onClick={deleteItem} minWidth={'25%'}
        >
          <DeleteForever fontSize={"medium"}/>
          <strong>Eliminar</strong>
        </Box>

        <Box color={'white'} bgcolor={'greenyellow'} borderRadius={2} p={1} fontSize={20}
          textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'}
          style={{cursor:'pointer'}} minWidth={'25%'} onClick={()=>saveMyItem()}
        >
          <CheckCircleOutline fontSize={"medium"}/>
          <strong>Listo</strong>
        </Box>
      </Box>
    </Box>
  )
}


export default ItemOptions