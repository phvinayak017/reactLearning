import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Components/Layouts/Index'
import Excercises from './Components/Excercise/Excercises';
import { excercises, muscles } from './Store'
import CssBaseline from '@material-ui/core/CssBaseline'

const styles = {
  container: {
    height: 'calc(100% -10px)'
  },
  containerEx: {
    height: 'calc(100% -10px)'
  },
  '@global': {
    'body, html, #root': {
      height: '100%'
    }
  },
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      excercise: {},
      excercises,
      category: '',
    }
  }
  getExcercisesByMuscles() {

    const initExcercises = muscles.reduce((excercises, category) => ({
      ...excercises,
      [category]: []
    }), {})

    // console.log(...excercises)

    return Object.entries(
      this.state.excercises.reduce((excercises, excercise) => {
        const { muscles } = excercise
        // console.log(excercises[muscles])
        excercises[muscles] = [...excercises[muscles], excercise]
        return excercises
      }, initExcercises)
    )
  }

  handleCatergorySelection = (category) => {
    this.setState({
      category: category,

    })
  }

  handleExcerciseSelected = (id) => {
    this.setState(({ excercises }) => ({
      excercise: excercises.find(ex => ex.id === id),
      editMode: false
    }))
  }

  handleCreateExcercises = (excercise) => {
    this.setState(({ excercises }) => ({
      excercises: [...excercises, excercise]
    }))
  }

  handleExcerciseDelete = (id) => {
    this.setState(({ excercises, excercise, editMode }) => ({
      excercises: excercises.filter(ex => ex.id !== id),
      editMode: excercise.id === id ? false : editMode,
      excercise: excercise.id === id ? {} : excercise
    }))
  }

  handleExcerciseEdit = (id) => {
    this.setState(({ excercises }) => ({
      excercise: excercises.find(ex => ex.id === id),
      editMode: true
    }))
  }

  handleFormEdit = (excercise) => {
    this.setState(({ excercises }) => ({
      excercises: [...excercises.filter(ex => ex.id !== excercise.id), excercise],
      excercise
    }))
  }

  render() {
    const excercises = this.getExcercisesByMuscles()
    let { category, excercise, editMode } = this.state
    return (
      <Fragment>
        {/* <CssBaseline /> */}
        <Header
          createExcercises={this.handleCreateExcercises}
          muscles={muscles} />

        <Excercises
          style={styles.containerEx}
          category={category}
          excercise={excercise}
          excercises={excercises}
          muscles={muscles}
          editMode={editMode}
          onSelect={this.handleExcerciseSelected}
          onDelete={this.handleExcerciseDelete}
          onSelectEdit={this.handleExcerciseEdit}
          onEdit={this.handleFormEdit} />
        <Footer
          style={styles.container}
          category={category}
          muscles={muscles}
          handleChange={this.handleCatergorySelection}
        />
      </Fragment>
    )
  }
}

