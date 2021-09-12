import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Icon, IconButton, Typography } from '@material-ui/core';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import { Radio } from '@material-ui/core';

export default function Spatial({ stock }) {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader 
          action = { <Radio colour = "secondary"> </Radio>}
          title={stock.name}
          subheader={stock.number}
          paragraph={<Typography>23AF39D</Typography>}
          
        />  
      </Card>
    </div>
  )
}