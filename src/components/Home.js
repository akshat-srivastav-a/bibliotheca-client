import React, { useState } from 'react';
import HomePageAccordion from './HomePageAccordion'
import Grid from '@mui/material/Grid'
import AppBar from './AppBar'
import Image from '../assets/wp2036898.jpg';

export default function Home({setCurrentPage,setSearchQuery}){
    
    return (
    <Grid container sx = {{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize : 'cover',
        height : '100vh',
        }}>
        <Grid item xs= {12} >
            <Grid container spacing = {6}>
            <Grid item xs = {12}>
                <AppBar setCurrentPage = {setCurrentPage} setSearchQuery = {setSearchQuery}></AppBar>
            </Grid>
            <Grid item xs = {12} md = {3}></Grid>            
            <Grid item xs = {12} md = {6}>
                <HomePageAccordion setCurrentPage={setCurrentPage}></HomePageAccordion>
            </Grid>
            <Grid item xs = {12} md = {3}></Grid>
            </Grid>
        </Grid> 
    </Grid>
    );
}