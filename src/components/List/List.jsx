import React , {useState}from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, } from '@material-ui/core';
import useStyles from './styles';


const List =() =>{
    const classes = useStyles();
    const [type, setType] = useState('resturants');
    const [rating, setRating] = useState('');

    const places =[{name:'Cool Place'}];
    return (
        <div className ={classes.container}>
            <Typography variant="h4">Restaurant, Hotels & Attractions around you</Typography>
            <FormControl className={classes.formControl}> 
                <InputLabel>  Type </InputLabel>
                <Select Value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem Value="restaurants">Restaurants</MenuItem>
                    <MenuItem Value="hotels">Hotels</MenuItem>
                    <MenuItem Value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}> 
                <InputLabel> Rating </InputLabel>
                <Select Value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem Value={0}>All</MenuItem>
                    <MenuItem Value={3}>Above 3.0</MenuItem>
                    <MenuItem Value={4}>Above 4.0</MenuItem>
                    <MenuItem Value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default List;