import React from 'react'
import {Card, Typography,Box, Stack} from '@mui/material'
import { Container } from '@mui/system';

export default function Recipes({alphaIndex}) {

    const alpha =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
                   'R','S','T','U','V','W','X','Y','Z']

              var num=0;    
  return (
    

      <div style={{textAlign:'center',color:'blue'}}>
        <h3>using bellow letters find your food</h3>

    <div style={{display:"flex", flexDirection:'row'}}>

     
        {
             alpha.map(item => {

                return(
                  <Stack>

                    <Box key={num++} onClick={()=>alphaIndex(item)}>
                    <Typography variant="h6" component='div' style={{display:'flex',marginTop:'30px',width:'66px',height:'40px',backgroundColor:'black', color:'white',
                      alignItems:'center',justifyContent:'center',cursor:'pointer'}}>{item}</Typography> 
                      

                       

                      </Box>
                       </Stack>
                )
             })
        }
        </div>
    </div>
  )
}
