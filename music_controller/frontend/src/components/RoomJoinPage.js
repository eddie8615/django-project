import React, {Component} from "react";


export default class RoomJoinPage extends Component {
    defaultVotes = 2;

    constructor(props){
        super(props);

    }

    render(){
        return <Grid container spacing={1}>
            <Grid item xs={12} align="center"></Grid>
        </Grid>;
    }
}