import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core'
import './App.css';
import {
  Redirect, withRouter
} from 'react-router-dom';

import { createTheme, ThemeProvider } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"

import ItemCard from './Components/ItemCard';

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 40,
      marginBottom:20,
    }
  },
});

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px"
  }
});

export default function Spatial() {
  const [clickButton, setClickButton] = React.useState(false);
  const classes = useStyles();
  const [stocks, setStocks] = useState([])

  // to get data only once
  useEffect(() => {
    fetch('http://localhost:8000/stocks')
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])

  if (clickButton) {
    return <Redirect to="/" />
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <header className="App-header">
          <Typography 
            variant="h2" 
            style={{ height: 100, width: '100%', position: 'relative'}}>
            Inventory Stocks Page
          </Typography>
          <Typography style={{ height: 80, width: '100%', position: 'relative'}}>
            <Button id="home-btn" variant="contained" onClick={() => setClickButton(true)}>Back to Home Page</Button>
          </Typography>
 
          <Grid container spacing={3}>
            {stocks.map(stock => (
              <Grid item key={stock.id} xs={12} md={6} lg={6}>
                <ItemCard stock={stock} />
              </Grid>
            ))}
          </Grid>
        </header>
      </Container>
    </ThemeProvider>
  )
}