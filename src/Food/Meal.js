
import React from 'react';

function Meal(){

    return(
     
        <div>
          
          {/* <div style={{overflow:'hidden'}}>
        <Box>
           <Stack sx={{textAlign:'center',alignItems:'center',fontStyle:'italic'}}>
              <Typography variant='h3'>Find your food</Typography>
              <Typography variant='h5'>It is our restarent find your food, enjoy your day</Typography>

           </Stack>

           <Stack sx={{alignItems:'center'}}>
            <TextField variant='outlined'label='search your food' sx={{width:"600px",marginTop:'40px'}}
            onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipes}>
        
            </TextField>

           </Stack>
    <Stack>
        <Box>


           {
               show ?  <MealItem data={item} /> : 'Not Found' 
           }
           </Box>
</Stack>
        </Box>
<Stack>

    <Recipes alphaIndex={(alpha)=>setIndex(alpha)} />
</Stack>

        </div> */}
        </div>
    );
}
export default Meal;