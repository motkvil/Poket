import { useState, useEffect } from "react"
import { Box, Grid } from "@mui/material"
import AsyncStorage from "@react-native-async-storage/async-storage"



function EditForm (props){

  // props: 
  // item, 
  // setItem, 
  // valueItem, 
  // setItemValueIsActive,
  // itemValueIsActive

  const [item, setItem] = useState({
    title:"",
    prev_cost:0,
    real_cost:0
  })

  const onChangeTitle = (e) => {
    setItem({...item, [e.target.id] : e.target.value })
    console.log(item)
  }

  useEffect(()=>{

    let localStorageItems = AsyncStorage.getItem('data')
    localStorageItems.then(data=>{
      let jsonData = JSON.parse(data)
      let myItem = jsonData
      .find(it=> it.title === props.item.title)
      .items.find(it=>it.title === props.valueItem)

      console.log('HEY GURL',myItem)
      setItem(myItem)
    })

    if(props.saveItem){
      console.log(
        "Guardando Item: ", item
      )


      let localItems = AsyncStorage.getItem('data')
      localItems.then(data=>{
        let jsonItems = JSON.parse(data)
        let itemIndex = jsonItems.findIndex(e=> e.title === props.item.title)
        let itemFound = jsonItems[itemIndex]
        let objectItemIndex = itemFound.items.findIndex(e=>e.title === props.valueItem)
        
        jsonItems[itemIndex].items[objectItemIndex] = item



        AsyncStorage.setItem('data', JSON.stringify(jsonItems))
        let updatedItems = AsyncStorage.getItem('data')
        updatedItems.then(data=>{
          let jsonData = JSON.parse(data)
          props.setItem(jsonData[itemIndex])
          props.setItemValueIsActive(false)
        })
      })
    }

    

  },[props.saveItem])
  return(
    <Box p={1}>
      <form className="editItemForm">

        <Grid container>
          <Grid item xs={5}>
            <input className="inputItemProperty" 
              onChange={(e)=>onChangeTitle(e)} 
              id="title"
              value={item.title?item.title:""}
            />
            
          </Grid>
          <Grid item xs={4}>
            <input className="inputItemProperty" 
              onChange={(e)=>onChangeTitle(e)}
              id="prev_cost"
              value={item.prev_cost?item.prev_cost:""}
            />
          </Grid>
          <Grid item xs={3}>
            <input className="inputItemProperty"
              onChange={(e)=>onChangeTitle(e)}
              id="real_cost"
              value={item.real_cost?item.real_cost:""}
            />
          </Grid>
        </Grid>

      </form>
    </Box>
  )
}

export default EditForm