
import { Box, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React ,{useEffect, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Recipes from './Recipes';
import MealItem from './MealItem';

function Meal(){

    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setItem]=useState();
    const [show,setShow]=useState(false);
    const [search,setSearch]=useState("")

    useEffect(() => {
        fetch(url).then(res=>res.json()).then(data => {
            console.log(data.meals);
            setItem(data.meals);
            setShow(true)
        })

    },[url])

    const setIndex=(alpha)=>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipes=(evt)=>{
        if(evt.key=='Enter'){
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }

    }
    return(

        <div>
        <Box>
           <Stack sx={{textAlign:'center',alignItems:'center'}}>
              <Typography variant='h3'>Find your food</Typography>
              <Typography variant='h5'>It is our restarent find your food, enjoy your day</Typography>

           </Stack>

           <Stack sx={{alignItems:'center'}}>
            <TextField variant='outlined'label='search your food' sx={{width:"600px",marginTop:'40px'}}
            onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipes}>
        
            </TextField>

           </Stack>

           <Stack>

    <Recipes alphaIndex={(alpha)=>setIndex(alpha)} />
</Stack>

    <Stack>
        <Box>


           {
               show ?  <MealItem data={item} /> : 'Not Found' 
           }
           </Box>
</Stack>
        </Box>

        </div>

    );
}
export default Meal;