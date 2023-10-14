import { useState, useEffect } from "react"
import { Box, Grid } from "@mui/material"



function EditForm (props){
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(()=>{

  },[])
  return(
    <Box p={1}>
      <form className="editItemForm">

        <Grid container>
          <Grid item xs={5}>
            <input className="inputItemProperty">
            </input>
          </Grid>
          <Grid item xs={4}>
            <input className="inputItemProperty">
            </input>
          </Grid>
          <Grid item xs={3}>
            <input className="inputItemProperty">
            </input>
          </Grid>
        </Grid>

      </form>
    </Box>
  )
}

export default EditForm