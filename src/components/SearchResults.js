import React, { useState, useEffect,useContext } from 'react';
import HomePageAccordion from './HomePageAccordion'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import AppBar from './AppBar'
import BookCard from './BookCard'
import {ServerContext} from '../contexts/ServerContext'

import Image from '../assets/wp2036898.jpg';

import Pages from '../pages'

// let booksToDisplay = [];
let booksToDisplay = [
    {publication:{title : "To Kill a Mockingbird", author : "Harper Lee"}},
    {publication:{title : "Animal Farm", author : "George Orwell"}},
]



export default function Home({setCurrentPage,searchQuery,setSearchQuery}){
    // const {searchQuery} = useContext(ServerContext);
    const {search} = useContext(ServerContext);

    useEffect(()=>{
        // booksToDisplay = Search(searchQuery);
        console.log("The search query is "+searchQuery);
    },[])

    
    let generateCards = ()=>booksToDisplay.map((book)=>{
            return(
                <Grid item xs = {6}>                
                    <BookCard book = {book} ></BookCard>
                </Grid>
            )
    });
    

    return (
    <Grid container sx = {{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize : 'cover',
        height : '100vh',
        }}>
        <Grid item xs= {12}  >            
            <AppBar setCurrentPage={setCurrentPage} setSearchQuery = {setSearchQuery}></AppBar>
            {/* <BookCard book = {booksToDisplay[0]}></BookCard>     */}
            <Grid container spacing = {2} sx = {{mt:'20px'}}>
                {booksToDisplay.length ? generateCards() : 
                    <Grid item xs = {12} >
                        <Paper fullWidth sx= {{margin : '50px'}}><Typography variant = 'h3' align = 'center'> No Results Found</Typography></Paper>
                    </Grid>
                }
                {generateCards()}
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Paper sx = {{mt:'20px'}}>
                    <Button onClick={()=>setCurrentPage(Pages.Home)}>Back to DashBoard</Button>
                </Paper>
              </Grid>
            </Grid>
            
        </Grid>
        
    </Grid>
    );
}