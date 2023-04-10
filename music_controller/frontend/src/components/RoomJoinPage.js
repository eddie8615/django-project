import React, {Component} from "react";
// import Button from "@mui/material/Button"
// import Grid from "@mui/material/Grid"
// import Typography from "@mui/material/Typography"
// import TextField  from "@mui/material/TextField";
// import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
// import Radio from "@mui/material/Radio"
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
import { TextField, Button, Grid, Typography } from "@mui/material";



export default class RoomJoinPage extends Component {
    

    constructor(props){
        super(props);
        this.state={
            roomCode: "",
            error: "",
        }
        this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
        this._roomButtonPressed = this._roomButtonPressed.bind(this);
    }

    render(){
        return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography variant="h4" component="h4">
                    Join a Room
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <TextField
                    error={this.state.error}
                    label="Code"
                    placeholder="Enter a Room cdoe"
                    value={this.state.roomCode}
                    helperText={this.state.error}
                    variant="outlined"
                    onChange={this._handleTextFieldChange}
                />
            </Grid>
            <Grid item xs={12} align="center">
                <Button variant="contained" color="primary" onClick={this._roomButtonPressed}>Enter room</Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button variant="contained" color="secondary" to="/" component={Link}>Back</Button>
            </Grid>
        </Grid>
        );
        
    }
    // underscores are usually used for telling that this method is private
    _handleTextFieldChange(e){
        this.setState({
            roomCode: e.target.value,

        })
    }

    _roomButtonPressed(){
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                code: this.state.roomCode
            })
        };
        fetch('/api/join-room', requestOptions).then((response) => {
            if (response.ok){
                this.props.history.push(`/room/${this.state.roomCode}`)
            }else{
                this.setState({error: "Room not found."})
            }
        }).catch((error) => {
            console.log(error);
        })
    }
}