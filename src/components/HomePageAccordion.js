import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import BookCard from './BookCard';
import Image from '../assets/backgroundPaper.jpg';
import Pages from '../pages';

const setBackGround = {
    bgcolor : '#EADDCA',
}

export default function ControlledAccordions({setCurrentPage}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx = {setBackGround} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0}}>Pending Book Requests</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing = {2}>
            <Grid item xs = {6}>
              <BookCard book = {{publication:{title : "To Kill a Mockingbird", author : "Harper Lee"} }} action = 'cancel request'></BookCard>
            </Grid>
            <Grid item xs = {6}>
              <BookCard book = {{publication:{title : "Animal Farm", author : "George Orwell"}}} action = 'cancel request'></BookCard>
            </Grid>            
          </Grid>        
        </AccordionDetails>
      </Accordion>
      

      {/* <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx = {setBackGround} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0}}>Sent Book Requests</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing = {2}>
            <Grid item xs = {6}>
              <BookCard book = {{publication:{title : "To Kill a Mockingbird", author : "Harper Lee"} }}></BookCard>
            </Grid>
            <Grid item xs = {6}>
              <BookCard book = {{publication:{title : "Animal Farm", author : "George Orwell"}}}></BookCard>
            </Grid>            
          </Grid>        
        </AccordionDetails>
      </Accordion> */}
      {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx = {setBackGround}>          
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Books Owned By You
          </Typography> */}
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        {/* </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing = {2}>
            <Grid item xs = {6}>
              <BookCard book = {{publication:{title : "To Kill a Mockingbird", author : "Harper Lee"} }}></BookCard>
            </Grid>
            <Grid item xs = {6}>
              <BookCard book = {{publication:{title : "Animal Farm", author : "George Orwell"}}}></BookCard>
            </Grid>            
          </Grid>        
        </AccordionDetails>
      </Accordion> */}
      
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx = {setBackGround}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Books You Are Willing to Lend</Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing = {2}>
            <Grid item xs = {6}>
              <BookCard book = {{publication:{title : "To Kill a Mockingbird", author : "Harper Lee"} }} action = 'delete'></BookCard>
            </Grid>
            <Grid item xs = {6}>
              <BookCard book = {{publication:{title : "Animal Farm", author : "George Orwell"}}} action = 'delete'></BookCard>
            </Grid>
            <Grid item xs = {8}>
              <Button onClick={()=>setCurrentPage(Pages.PublishBook)}>Add Another Book</Button>
            </Grid>            
          </Grid>        
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx = {setBackGround}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Books Lent By You
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing = {2}>
            <Grid item xs = {6}>
              <BookCard book = {{publication:{title : "To Kill a Mockingbird", author : "Harper Lee"} }} ></BookCard>
            </Grid>
            <Grid item xs = {6}>
              <BookCard book = {{publication:{title : "Animal Farm", author : "George Orwell"}}}></BookCard>
            </Grid>            
          </Grid>        
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx = {setBackGround}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Books Borrowed By You</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing = {2}>
            <Grid item xs = {6}>
              <BookCard book = {{publication:{title : "To Kill a Mockingbird", author : "Harper Lee"} }} action = 'return'></BookCard>
            </Grid>
            <Grid item xs = {6}>
              <BookCard book = {{publication:{title : "Animal Farm", author : "George Orwell"}}} action = 'return'></BookCard>
            </Grid>            
          </Grid>        
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
