import React, { Component, Fragment } from 'react'
import { FormControl, InputLabel, MenuItem, TextField, Button } from '@material-ui/core/';
import Select from '@material-ui/core/Select';

const styles = {
    formControl: {
        width: 500
    },
    buttonControl: {
        marginLeft: 400,
        marginTop: 20,
        marginBottom: 20
    }
}

export default class Form extends Component {

    state = this.getInitState()

    getInitState() {
        const { excercise } = this.props

        return excercise ? excercise : {
            title: " ",
            description: " ",
            muscles: " "
        }
    }

    static getDerivedStateFromProps({ excercise }) {
        return excercise || null
    }

    handleChange = (name) => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    handleSubmit = () => {
        this.props.onSubmit({
            id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
            ...this.state,
        })
        this.setState(
            this.getInitState()
            // {
            //     title: " ",
            //     description: " ",
            //     muscles: " "
            // }
        )
    }

    render() {
        const { title, muscles, description } = this.state
        console.log('excercise:', !title)
        return (
            <Fragment>
                <TextField
                    margin="dense"
                    value={title}
                    label="Excercise Title"
                    onChange={this.handleChange("title")}
                    fullWidth
                    style={styles.formControl}
                />
                <br />
                <FormControl style={styles.formControl}>
                    <InputLabel htmlFor="muscles">Muscles</InputLabel>
                    <Select
                        value={muscles}
                        onChange={this.handleChange("muscles")}>
                        {
                            this.props.muscles.map(category => {
                                return <MenuItem key={category} value={category}>{category}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
                <br />
                <TextField
                    label="Description"
                    value={description}
                    multiline
                    onChange={this.handleChange("description")}
                    margin="normal"
                    style={styles.formControl}
                /> <br />
                {/* <Button
                    variant="outlined"
                    onClick={this.handleClose}
                    color="primary">
                    Cancle
                </Button> */}
                <Button
                    variant="contained"
                    onClick={this.handleSubmit}
                    color="primary"
                    style={styles.buttonControl}
                >
                    {this.props.excercise ? "Edit" : "Create"}
                </Button>
            </Fragment>
        )
    }
}
