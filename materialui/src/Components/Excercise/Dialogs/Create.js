import React, { Component, Fragment } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Fab, } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import Form from '../Form';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    handleToggle = (event) => {
        this.setState({
            open: !this.state.open,
            // exercise: this.state.exercise
        })
    }

    handleFormSubmit = (excercise) => {
        this.handleToggle()
        this.props.onCreateExcercise(excercise)
    }

    render() {
        const { open } = this.state,
            { muscles } = this.props
        //console.log('muscles :', this.props.muscles);
        return (
            <Fragment>
                <Fab size="small" color="primary" aria-label="Add" onClick={this.handleToggle}>
                    <AddIcon />
                </Fab>
                <Dialog
                    open={open}
                    onClose={this.handleToggle}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle>New Excercise</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the below form
                        </DialogContentText>
                        <Form
                            muscles={muscles}
                            onSubmit={this.handleFormSubmit}
                        />
                    </DialogContent>
                </Dialog>

            </Fragment>
        )
    }
}
