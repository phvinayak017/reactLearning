import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import Form from './Form';
import { styles } from 'ansi-colors';

const Style = {
    paper: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        padding: 20,
        height: 'calc(100% - 12px)',
        overflowY: 'auto'
    },
    '@global': {
        'body, html, #root': {
            height: '100%'
        }
    },
    Container: {
        height: '100%'
    },
    textTrans: {
        textTransform: 'capitalize',
    }
}


function Excercises(props) {
    const { excercises, category, onSelect, onDelete, onSelectEdit, onEdit, editMode, muscles, excercise, excercise: { title = "Welcome", description = "Please Click on the left side" } } = props
    // console.log("not of category : ", excercise)
    return (
        <div>
            <Grid container style={Style.Container} >
                <Grid item xs={12} sm={6}>
                    <Paper style={Style.paper}>
                        {
                            excercises.map(([group, excercises]) => {
                                return (!category || category === group)
                                    ? (< Fragment key={group}>
                                        <Typography variant="h4" color="secondary" style={Style.textTrans}  >
                                            {group}
                                        </Typography>
                                        <List component="nav" >
                                            {excercises.map(({ id, title }) => {
                                                return <Fragment key={id}>
                                                    <ListItem button>
                                                        <ListItemText primary={title} onClick={() => onSelect(id)}
                                                        />
                                                        <ListItemSecondaryAction>
                                                            <IconButton
                                                                size='medium'
                                                                edge="end"
                                                                color='secondary'
                                                                aria-label="Edit"
                                                                onClick={() => onSelectEdit(id)}>
                                                                <Edit />
                                                            </IconButton>
                                                            <IconButton
                                                                size='medium'
                                                                edge="end"
                                                                color='primary'
                                                                aria-label="Delete"
                                                                onClick={() => onDelete(id)}>
                                                                <Delete />
                                                            </IconButton>
                                                        </ListItemSecondaryAction>
                                                    </ListItem>
                                                </Fragment>
                                            })}
                                        </List>
                                    </Fragment>) : null
                            })
                        }

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper style={Style.paper}>
                        <Fragment>
                            <Typography variant="h3" color='secondary' gutterBottom>
                                {title}
                            </Typography>
                        </Fragment>
                        {editMode
                            ? <Form
                                excercise={excercise}
                                muscles={muscles}
                                onSubmit={onEdit}
                            />
                            :
                            <Typography variant="subtitle1">
                                {description}
                            </Typography>
                        }
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Excercises
