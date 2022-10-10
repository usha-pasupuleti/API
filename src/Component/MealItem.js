import React from 'react';
import { Stack ,Box} from '@mui/system';
import {Card} from '@mui/material';
import Recipes from './Recipes';

export default function MealItem({data}) {
    console.log(data);

  return (
    <Box sx={{display:"flex", flexWrap:'wrap'}}>

        {
            (!data)? 'food is not found': data.map(item => {

                return (

    <Stack>
        <Box style={{marginTop:'30px',marginLeft:'35px'}}>
        <img src={item.strMealThumb} width="300px" alt=" "></img>
        <h3>{item.strMeal}</h3>

        </Box>
       
       
    </Stack>
                )

            })
        }
        

    </Box>
  )
}
