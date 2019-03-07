import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {connect} from "react-redux"

import Chart from "./chart"

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

import {addAttributes} from "../action"

const styles = {
    root: {
        width: '100%',
      },
    contentWrapper: {
        paddingLeft:24,
        paddingRight:24,
    },
    attrWrapper:{
        border:'1px solid #ccc',
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        marginBottom:10,
        position:'relative'
    },
    attrTitle:{
        fontSize: '0.7rem'
    },
    attrType:{
        fontSize: '0.6rem'
    },
    attrIconContainer: {
        float:'right'
    },
    attrTitleContainer: {
        float:'left'
    },
    productWrapper:{
        position:'relative'
    },
    card:{
        position: 'absolute',
        top: 63,
        zIndex: 1,
        width:'100%',
        left:0
    },
    showGraph:{
        display:'block'
    },
    hideGraph:{
        display: 'none'
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attribute:[],
            selectedProduct:[],
            selectedCustomer:[],
            displayChart: false,
            displayId:''
        };
    }

    componentDidMount(){
        function getAttributes() {
            return axios('http://localhost:3000/attributes');
          }
           
          function selectedPreoducts() {
            return axios('http://localhost:3000/selectedProducts');
          }

          function selectedCustomers() {
            return axios('http://localhost:3000/selectedCustomers');
          }

        axios.all([getAttributes(), selectedPreoducts(), selectedCustomers()])
        .then(axios.spread((attr, selectedProduct,selectedCustomers) => {  
            this.setState({
                attribute: attr.data,
                selectedProduct:selectedProduct.data,
                selectedCustomer: selectedCustomers.data
            })
        }));
    }

    handleChart(id){
        console.log(id);
        
        this.setState((prevState) =>{
           return{ 
               displayChart: !prevState.displayChart,
               displayId: id
            }
        })
    }

    render() {
        const { classes, seletedAttributes } = this.props;
        const {attribute ,selectedProduct, selectedCustomer, displayChart, displayId} = this.state;
        console.log(displayId)
        return (
            <div className={classes.contentWrapper}>
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Typography component="h2" variant="headline" gutterBottom>
                                Selected Attritubes
                            </Typography>
                            {selectedProduct.length == 0 &&  selectedCustomer.length == 0 &&
                                <Typography gutterBottom noWrap>
                                    Select attribute from all attributes
                                </Typography>  
                            }       
                        </Grid>
                        {selectedProduct.length > 0 &&
                        <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom className={classes.attrTitle}>
                                Products
                            </Typography>
                        </Grid>
                        }
                        
                        {selectedProduct.length > 0 &&
                        selectedProduct.map(selectedProduct =>(
                            <Grid item xs={6} sm={3}  className={classes.attrWrapper} >
                                <Grid item xs={12} sm={6} className={classes.attrTitleContainer}>
                                <Typography variant="h6" gutterBottom className={classes.attrTitle}>
                                    {selectedProduct.title}
                                </Typography>
                                <Typography variant="subheading" gutterBottom className={classes.attrType}>
                                {selectedProduct.type}
                                </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} className={classes.attrIconContainer}>
                                <Icon className={classes.iconHover} 
                                color="error" 
                                style={{ fontSize: 30 }}
                                onClick={() => this.handleChart(selectedProduct.id)}
                                >
                                    add_circle
                                </Icon>
                                </Grid>
                                    {displayId && displayChart&&
                                    <div className={"hideAll "+ `${selectedProduct.id === displayId ? 'showGraph': ""}`}>
                                        <Chart /> 
                                    </div>
                                    }
                            </Grid>
                        ))
                        }
                        {selectedCustomer.length > 0 &&
                            <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom className={classes.attrTitle}>
                                    Customers
                                </Typography>
                            </Grid>
                        }
                        {selectedCustomer.length > 0 &&
                        selectedCustomer.map(selectedCustomer =>(
                        <Grid item xs={6} sm={3}  className={classes.attrWrapper} >
                            <Grid item xs={12} sm={6} className={classes.attrTitleContainer}>
                            <Typography variant="h6" gutterBottom className={classes.attrTitle}>
                                {selectedCustomer.title}
                            </Typography>
                            <Typography variant="subheading" gutterBottom className={classes.attrType}>
                            {selectedCustomer.type}
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} className={classes.attrIconContainer}>
                            <Icon className={classes.iconHover} color="error" style={{ fontSize: 30 }}>
                                add_circle
                            </Icon>
                            </Grid>
                        </Grid>
                        ))
                        }

                        <Grid item xs={12}>
                            <Typography component="h2" variant="headline" gutterBottom>
                                All Attritubes
                            </Typography>
                        </Grid>
                        {
                            attribute.map(attr =>(
                                <Grid item xs={12} sm={3} 
                                    key={attr.id} 
                                    className={classes.attrWrapper} 
                                    onClick={() => this.props.addAttribute(attr)} 
                                >
                                    <Grid item xs={12} sm={6} className={classes.attrTitleContainer}>
                                    <Typography variant="h6" gutterBottom className={classes.attrTitle}>
                                        {attr.title}
                                    </Typography>
                                    <Typography variant="subheading" gutterBottom className={classes.attrType}>
                                        {attr.type}
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} className={classes.attrIconContainer}>
                                    <Icon className={classes.iconHover} color="error" style={{ fontSize: 30 }}>
                                        add_circle
                                    </Icon>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </div>
        );
    }
}

Content.propTypes = {};

const mapStateToProps = (state) =>({
    seletedAttributes : state.seletedAttributes
})

const mapDispatchToProps = (dispatch) =>({
    addAttribute: (attr) =>{
        dispatch(addAttributes(attr))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Content));
