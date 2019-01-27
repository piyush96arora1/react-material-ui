import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid'
import "./DemoUi.css";
class DemoUi extends Component {
    constructor(props) {
        super(props);
        this.state = { showAnotherBtn: false };
    }
    onBtnClick = e => {
        this.setState({ showAnotherBtn: !this.state.showAnotherBtn });
    };
    render() {
        return (
            <div>
                <Grid container direction='column' alignItems='center' >
                    <Grid item className='alterNateStyle'>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={e => {
                                this.onBtnClick(e);
                            }}
                        >
                            Click me
                        </Button>
                        {this.state.showAnotherBtn ? (
                            <Button variant="contained" size='small' color="primary">
                                I was hidden
                            </Button>

                        ) : (
                                ""
                            )}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default DemoUi;
