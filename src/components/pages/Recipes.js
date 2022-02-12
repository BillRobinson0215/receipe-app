import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Col } from 'react-bootstrap'

import apiUrl from '../../apiConfig'
import { createRecipeSuccess, deleteRecipeSuccess, updateRecipeSuccess, createRecipeFailure } from '../AutoDismissAlert/messages'
import axios from 'axios'

class Recipe extends Component {
  constructor (props) {
    super(props)
    this.addStep = this.addStep.bind(this)
    this.addIngredient = this.addIngredient.bind(this)
    this.createRecipe = this.createRecipe.bind(this)

    this.state = {
      recipeName: '',
      ingredients: [
        { ingredientName: '', qty: '', units: '' }
      ],
      steps: [''],
      recipes: [],
      recipeToShow: '',
      selectedRecipe: false,
      selectedRecipeId: '',
      recipeToShowName: '',
      ingredientsToShow: [],
      stepsToShow: [],
      updatedIngredients: [
        { ingredientName: '', qty: '', units: '' }
      ],
      updatedSteps: [''],
      editRecipe: false
    }
  }

    getRecipes = (token) => {
      return axios({
        url: apiUrl + '/recipes/find-recipes/',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .catch(console.error)
    }

      updateRecipes = () => {
        this.getRecipes(this.props.user.token).then(
          (recipes) => {
            console.log(recipes)
            this.setState({ recipes: recipes.data.recipes })
          }
        )
      }

      componentDidMount () {
        this.updateRecipes()
      }

  // creates a new recipe
  createRecipe = function (event) {
    event.preventDefault()
    const { msgAlert } = this.props
    const ingredients = this.state.ingredients
    const name = this.state.recipeName
    const steps = this.state.steps
    return axios({
      method: 'POST',
      url: apiUrl + '/recipes/new',
      data: {
        recipe: { name: name, ingredients: ingredients, steps: steps, owner: this.props.user }
      }
    })
      .then((recipe) => this.state.recipes.push(recipe.data.recipe))
      .then(() =>
        msgAlert({
          heading: 'Recipe Created',
          message: createRecipeSuccess,
          variant: 'success'
        }))
      .catch((error) => {
        msgAlert({
          heading: 'Failed to Create Recipe: ' + error.message,
          message: createRecipeFailure,
          variant: 'danger'
        })
      })
  }

  consoleLog = (event) => {
    event.preventDefault()
    // this.handleUpdateFieldChange()
    console.log(event)
  }

  updateRecipe = (event) => {
    event.preventDefault()
    const { msgAlert } = this.props
    const ingredients = this.state.updatedIngredients
    const id = this.state.selectedRecipeId
    const steps = this.state.updatedSteps
    return axios({
      method: 'PATCH',
      url: apiUrl + '/recipes/update/' + id,
      data: {
        recipe: { ingredients: ingredients, steps: steps }
      }
    })
      .then(this.setState({ ingredientsToShow: this.state.updatedIngredients, stepsToShow: this.state.updatedSteps }))
      .then(() =>
        msgAlert({
          heading: 'Recipe Updated',
          message: updateRecipeSuccess,
          variant: 'success'
        })
      )
      .then(this.componentDidMount())
  }

  handleFieldChange = (event) => {
    if (['ingredientName', 'qty', 'units'].includes(event.target.name)) {
      const ingredients = [...this.state.ingredients]
      ingredients[event.target.id][event.target.name] = event.target.value
      this.setState({ ingredients })
    } if (['steps'].includes(event.target.name)) {
      const steps = [...this.state.steps]
      steps[event.target.id] = event.target.value
      this.setState({ steps })
    } else {
      this.setState({ [event.target.name]: event.target.value })
    }
  }

    handleUpdateFieldChange = (event) => {
      if (['ingredientName', 'qty', 'units'].includes(event.target.name)) {
        const updatedIngredients = [...this.state.updatedIngredients]
        updatedIngredients[event.target.id][event.target.name] = event.target.value
        this.setState({ updatedIngredients })
      } if (['updatedSteps'].includes(event.target.name)) {
        const updatedSteps = [...this.state.updatedSteps]
        updatedSteps[event.target.id] = event.target.value
        this.setState({ updatedSteps })
      } else {
        this.setState({ [event.target.name]: event.target.value })
      }
    }

  addIngredient = event => {
    event.preventDefault()
    this.setState({
      ingredients: [
        ...this.state.ingredients,
        { ingredientName: '', qty: '', unit: '' }
      ]
    })
  }

    addUpdateIngredient = event => {
      event.preventDefault()
      this.setState({
        updatedIngredients: [
          ...this.state.updatedIngredients,
          { ingredientName: '', qty: '', units: '' }
        ]
      })
      console.log(this.state.updatedIngredients)
    }

   addStep = event => {
     event.preventDefault()
     console.log(event)
     this.setState({
       steps: [
         ...this.state.steps,
         event.target.value
       ]
     })
   }

     addUpdatedStep = event => {
       event.preventDefault()
       console.log(event.target.value)
       this.setState({
         updatedSteps: [
           ...this.state.updatedSteps,
           event.target.value
         ]
       })
     }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

  removeStep = index => {
    this.state.steps.splice(index, 1)
    this.setState({
      steps: this.state.steps
    })
  }

    removeUpdateStep = index => {
      this.state.updatedSteps.splice(index, 1)
      this.setState({
        steps: this.state.updatedSteps
      })
    }

  removeIngredient = index => {
    console.log(index)
    this.state.ingredients.splice(index, 1)
    this.setState({
      ingredients: this.state.ingredients
    })
  }

    removeUpdateIngredient = index => {
      console.log(index)
      this.state.updatedIngredients.splice(index, 1)
      this.setState({
        updatedIngredients: this.state.updatedIngredients
      })
      this.updateRecipes()
      this.componentDidMount()
    }

    deleteRecipe = (event) => {
      const { msgAlert } = this.props
      const recipeId = event.target.id
      const userId = this.props.user._id
      const token = this.props.user.token
      return axios({
        method: 'DELETE',
        url: apiUrl + '/recipes/delete/' + userId + '/' + recipeId,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(() =>
          msgAlert({
            heading: 'Recipe Deleted',
            message: deleteRecipeSuccess,
            variant: 'success'
          })
        )
        .then(this.componentDidMount())
    }

    render () {
    // const buttonStyle = {
    //   borderRadius: '.5rem'
    // }

      const listStyle = {
        listStyle: 'none',
        color: 'black',
        display: 'flex',
        textAlign: 'bottom',
        columnCount: '5',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyItems: 'center'
      }

      // const listText = {
      //   display: 'flex',
      //   marginTop: '.3rem',
      //   alignSelf: 'center'
      // }

      let editIngredientsForms
      if (this.state.editRecipe) {
        editIngredientsForms =
        <Form onChange={this.handleUpdateFieldChange} onSubmit={this.updateRecipe}>
          <Form.Group>
            <br />
            <Button className='form-btn' variant='success' onClick={this.addUpdateIngredient}>Add Ingredient</Button>

            {this.state.updatedIngredients.map((ingredient, index) => {
              return (
                <div key={index}>
                  <Form.Control
                    type='text'
                    placeholder='Ingredient Name'
                    className='input-form'
                    required
                    id={index.toString()}
                    name='ingredientName'
                    defaultValue={this.state.updatedIngredients[index].ingredientName}
                    onChange={this.handleChange}
                  />
                  <Form.Control
                    type='number'
                    className='input-form'
                    required
                    id={index.toString()}
                    name='qty'
                    // value={ingredient.qty}
                    defaultValue={this.state.updatedIngredients[index].qty}
                    placeholder='Quantity'
                    onChange={this.handleChange}
                  />
                  <Form.Control
                    type='text'
                    placeholder='units'
                    className='input-form'
                    required
                    id={index.toString()}
                    name='units'
                    defaultValue={this.state.updatedIngredients[index].units}
                    onChange={this.handleChange}
                  />
                  <Button variant='danger' onClick={() => this.removeUpdateIngredient(index.toString())}>Remove</Button>
                </div>
              )
            })}
          </Form.Group>
          <Button className='form-btn' variant='success' type='submit' onClick={this.updateRecipe}>Submit</Button>
        </Form>
      } else {
        editIngredientsForms = null
      }

      let editStepsForms
      if (this.state.editRecipe) {
        editStepsForms =
        <Form onChange={this.handleUpdateFieldChange} onSubmit={this.updateRecipe}>
          <Form.Group>
            <br />
            <Button className='form-btn' variant='success' onClick={this.addUpdatedStep}>Add Step</Button>

            {this.state.updatedSteps.map((step, index) => {
              return (
                <div key={index}>
                  <Form.Control
                    type='text'
                    placeholder='Step'
                    className='input-form'
                    required
                    id={index.toString()}
                    name='updatedSteps'
                    defaultValue={this.state.updatedSteps[index]}
                    onChange={this.handleChange}
                  />
                  <Button variant='danger' onClick={() => this.removeUpdateStep(index)}>Remove</Button>
                </div>
              )
            })}
          </Form.Group>
          <Button className='form-btn' variant='success' type='submit' onClick={this.updateRecipe}>Submit</Button>
        </Form>
      } else {
        editStepsForms = null
      }

      const { setRecipeName } = this.state.recipeName
      if (!this.state.selectedRecipe) {
        return (
          <div>
            <Col className='recipeCreate'>
              <Form className='recipeCard' onChange={this.handleFieldChange}>
                <Form.Group>
                  <Form.Label className='form-label'>Create New Recipe</Form.Label>
                  <Form.Control
                    className='input-form'
                    required
                    name='recipeName'
                    value={setRecipeName}
                    type='recipeName'
                    placeholder='Recipe Name'
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className='form-label'>Ingredients</Form.Label>
                  <br />
                  <Button className='form-btn' variant='success' onClick={this.addIngredient}>Add Ingredient</Button>

                  {this.state.ingredients.map((ingredient, index) => {
                    return (
                      <div key={index}>
                        <Form.Control
                          type='text'
                          placeholder='Ingredient Name'
                          className='input-form'
                          required
                          id={index.toString()}
                          name='ingredientName'
                          value={ingredient.ingredientName}
                          onChange={this.handleChange}
                        />
                        <Form.Control
                          type='number'
                          className='input-form'
                          required
                          id={index.toString()}
                          name='qty'
                          value={ingredient.qty}
                          placeholder='Quantity'
                          onChange={this.handleChange}
                        />
                        <Form.Control
                          type='text'
                          placeholder='units'
                          className='input-form'
                          required
                          id={index.toString()}
                          name='units'
                          value={ingredient.units}
                          onChange={this.handleChange}
                        />
                        <Button variant='danger' onClick={() => this.removeIngredient(index)}>Remove</Button>
                      </div>
                    )
                  })}
                </Form.Group>
                <Form.Group>
                  <Form.Label className='form-label'>Steps</Form.Label>
                  <br />
                  <Button className='form-btn' variant='success' onClick={this.addStep}>Add Step</Button>
                  {this.state.steps.map((step, index) => {
                    return (
                      <div key={index}>
                        <Form.Control
                          type='text'
                          placeholder="Step"
                          className='input-form'
                          required
                          id={index.toString()}
                          name='steps'
                          value={step}
                          onChange={this.handleChange}
                        />
                        <Button className='form-btn' variant='danger' onClick={() => this.removeStep(index)}>Remove</Button>
                      </div>
                    )
                  })}
                  <br />
                </Form.Group>
                <Button className='form-btn' variant='success' type='submit' onClick={this.createRecipe}>Submit</Button>
                {/* <Button variant='success' type='submit' onClick={this.consoleLog}>console log</Button> */}
              </Form>

              {/* <h4>{this.collectionName}</h4> */}
              <ul className='recipe-list'>{this.state.recipes
                .sort((recipeA, recipeB) => {
                  const nameA = recipeA.name.toLowerCase()
                  const nameB = recipeB.name.toLowerCase()
                  return nameA < nameB ? -1 : 1
                })
                .map((recipe) => (
                  <li className='recipe-list' key={recipe._id} style={listStyle}>
                    <Col>
                      <Button variant="dark" onClick={() => this.setState({ selectedRecipe: true, selectedRecipeId: recipe._id, recipeToShow: recipe, recipeToShowName: recipe.name, ingredientsToShow: recipe.ingredients, stepsToShow: recipe.steps })}>{recipe.name}</Button>
                    </Col>
                    <Col>
              Steps:{recipe.steps.length}
                    </Col>
                    <Col>
                      <p>Ingredients:{recipe.ingredients.length}</p>
                    </Col>
                    <Col>
                      <Button variant="danger" onClick={this.deleteRecipe} id={recipe._id}>Delete</Button>
                    </Col>
                  </li>
                ))}</ul>
            </Col>
          </div>
        )
      } else {
        return (
          <>
            <Button
              className='editButton'
              variant='dark'
              onClick={() => this.setState({ selectedRecipe: false })}>Back to Recipes</Button>
            <Button className='editButton' variant='success' onClick={() => this.setState(prevState => ({ editRecipe: true, updatedIngredients: prevState.ingredientsToShow, updatedSteps: prevState.stepsToShow }))}>Edit Recipe</Button>
            <h1>{this.state.recipeToShowName}</h1>
            <div className='edit-forms'>
              {editIngredientsForms}
              {editStepsForms}
            </div>
            <ol>
              {this.state.ingredientsToShow
                .sort((ingredientA, ingredientB) => {
                  const nameA = ingredientA.ingredientName.toLowerCase()
                  const nameB = ingredientB.ingredientName.toLowerCase()
                  return nameA < nameB ? -1 : 1
                })
                .map((ingredient, index) => (
                  <li
                    className='ingredient-list'
                    style={listStyle}
                    key={ingredient.index}>
                    <Col>
                      <div id={index}>
                        {ingredient.ingredientName} {ingredient.qty}{' '}{ingredient.units}
                      </div>
                    </Col>
                    <Col>
                    </Col>
                  </li>
                ))}
              <br />
              <br />
              <br />
              {this.state.stepsToShow.map((step) => (
                <li className='step-list' key={step.name}>
                  <Col>{step}</Col>
                  <Col>
                  </Col>
                </li>
              ))}
            </ol>
          </>
        )
      }
    }
}

export default Recipe
