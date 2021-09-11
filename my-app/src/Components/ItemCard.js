import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

export default function Spatial({ stock }) {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader 
          title={stock.name}
          subheader={stock.number}
        />  
      </Card>
    </div>
  )
}