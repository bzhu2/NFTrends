import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import Item from '@mui/material/Stack';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

export default class Info extends Component {
    render() {
        return(
            <Container style={{ marginTop: '10%'}}>
            <Paper sx={{width: '100%', maxHeight: 7/10, justifyContent: 'center'}}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}>
                    <Item>
                        
                            <Grid container spacing = {3}>
                                <Grid item xs = {6}>
                                <Container style={{ marginLeft: '5%', marginTop:'5%'}}>
                                <Typography sx={{fontSize: '3rem'}} color="white">
                                    NFT Name
                                </Typography>
                                    <Typography  sx={{fontSize: '1rem'}}color="white">
                                        #x Trending NFT
                                    </Typography>
                                    <Typography sx={{fontSize: '1rem'}} color = "white">
                                        x Tweets about NFT Name today
                                    </Typography>
                                </Container>
                                </Grid>
                                <Grid item xs = {6}>
                                    <Container style={{alignItems:'center', justifyContent:'center'}}>
                                    <img src="" alt="image placeholder"/>
                                    </Container>
                                </Grid>
                            </Grid>  
                        
                    </Item>
                        <Container>
                            <Typography sx={{fontSize: '1em'}} align='left' color="white" paragraph>
                                aoiwefaofjaopifjaipw  jaoiejfapoiwefja  opiwefjapoiefjapow ijfawpeoijfaopwiefjaopiwefjawpoeifjaeopwifjaweopifjaewopif jaewopifjaw epoifjaewf poiajwefopiajewf
                            </Typography>
                        </Container>
                    <Item>

                    </Item>

                    <Item>
                        <Container>
                            <Typography sx={{fontSize:'2rem'}} align='left' color='white' >
                                Tweets About NFT Name
                            </Typography>

                        </Container>

                    </Item>
              </Stack>
          </Paper>
          </Container> 
        );
      }
}