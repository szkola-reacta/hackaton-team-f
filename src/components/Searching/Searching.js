import React, { useState } from 'react';
import { format } from 'date-fns';
import { FormControl, TextField, Select, MenuItem, InputLabel } from '@material-ui/core';

import styles from './Searching.module.scss';

const data = [
  {id: 1, place: 1, name: 'Place 1', startDate: '2020-01-01', endDate: '2021-12-31'},
  {id: 2, place: 1, name: 'Place 2', startDate: '2020-02-01', endDate: '2021-12-31'},
  {id: 3, place: 2, name: 'Place 3', startDate: '2020-02-01', endDate: '2021-10-31'},
  {id: 4, place: 3, name: 'Place 4', startDate: '2020-01-01', endDate: '2021-12-31'}
]
const places = [
  {id: 1, name: 'Warsaw'},
  {id: 2, name: 'Gdansk'},
  {id: 3, name: 'Poznan'}
]

class Searching extends React.Component {
  state = {
    place: null,
    startDate: format(Date.now(), 'yyyy-MM-dd'),
    endDate: '',
    people: 1,
    data: data
  }

  handleClick = (e) => {
    console.log('click');
    console.log(Date.now());
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { place } = this.state;
    const newData = data.filter(item => item.place === place)
    this.setState({
      data: newData
    })
  }
  render() {
    const { place, startDate, endDate, people, data } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormControl>
            <InputLabel id='places'>Places</InputLabel>
            <Select labelId='places' id='place' name='place' value={place} onChange={this.handleChange}>
              {places.map(({id, name}) => (
                <MenuItem key={id} value={id}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id='persons'>Persons</InputLabel>
            <Select labelId='persons' id='persons' name='people' value={people} onChange={this.handleChange}>
              <MenuItem value='1'>1 person</MenuItem>
              <MenuItem value='2'>2 persons</MenuItem>
              <MenuItem value='3'>3 persons</MenuItem>
              <MenuItem value='4'>4 persons</MenuItem>
              <MenuItem value='5'>5 persons</MenuItem>
              <MenuItem value='6'>6 persons</MenuItem>
            </Select>
          </FormControl>
          <TextField
          id='startDate'
          name='startDate'
          label='Starting date'
          type='date'
          value={startDate}
          defaultValue={startDate}
          onChange={this.handleChange}/>
          <TextField
          id='endDate'
          name='endDate'
          label='Ending date'
          type='date'
          value={endDate}
          defaultValue={startDate}
          onChange={this.handleChange}/>
          <button type='submit' onClick={this.handleClick}>Search</button>
        </form>
        <div>
          {data.map(({id, name}) => (
            <div key={id}>{name}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default Searching;