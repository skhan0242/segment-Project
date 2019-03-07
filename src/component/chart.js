import React from 'react';
import PropTypes from 'prop-types';

import { Bar } from 'react-chartjs-2';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    card:{
        position: 'absolute',
        top: 63,
        zIndex: 1,
        width:'100%',
        left:0
    }
}

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:{
                labels: ['product', 'segments','customers'],
                datasets:[{
                    label: 'product',
                    data:[
                        100,
                        200,
                        300,
                        400,
                        500
                    ],
                    backgroundColor: [
                        '#990000',
                        '#00b300',
                        '#000099'
                    ]
                }]
            }
        };
    }

    render() {
        const { classes } = this.props;
        const { chartData } = this.state;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Bar data={chartData} options={{maintainAspectRatio:false}} />
                    </CardContent>
                </Card>
        </div>
        );
    }
}

Chart.propTypes = {};

export default withStyles(styles)(Chart);
