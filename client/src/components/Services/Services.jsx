import React, { Component } from 'react';
import {Grid} from 'material-ui';
import {Card, CardActions, CardContent, Typography } from 'material-ui';

class Services extends Component {

  render() {
    return (
      <div className="row"> 
        <div className="container">
          <Grid container={true} spacing={24}>
            <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography>Web Development</Typography>
              </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography>Mobile Applications</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography>Branding</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Typography>Videography</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
    </div>
    );
  }
}

export default Services;