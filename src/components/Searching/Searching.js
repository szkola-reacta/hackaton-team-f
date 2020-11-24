import React from 'react';
import { format } from 'date-fns';
import { FormControl, TextField, Select, MenuItem, InputLabel, Button } from '@material-ui/core';
import styles from './Searching.module.scss';
import { withRouter } from 'react-router-dom';

const data = [
  {id: 1, place: 1, name: 'Place 1', startDate: '2020-01-01', endDate: '2021-12-31'},
  {id: 2, place: 1, name: 'Place 2', startDate: '2020-02-01', endDate: '2021-12-31'},
  {id: 3, place: 2, name: 'Place 3', startDate: '2020-02-01', endDate: '2021-10-31'},
  {id: 4, place: 3, name: 'Place 4', startDate: '2020-01-01', endDate: '2021-12-31'}
]
const places = [
  {id: 1, slug: 'Warsaw', name: 'Warsaw'},
  {id: 2, slug: 'Gdansk', name: 'Gdansk'},
  {id: 3, slug: 'Poznan', name: 'Poznan'}
]

class Searching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        place: null ,
        startDate: format(Date.now(), 'yyyy-MM-dd'),
        endDate: '',
        people: 1
      }, 
      data: data
    }
  }

  filterData(query) {
    //const { place, startDate, endDate, person } = query;
    const filters = query.split(',');
    filters.map(filter => {
      const item = filter.split('=');
      console.log(item[0], item[1]);
    });
    //query.explo
    console.log(query);
  }

  componentDidMount() {
    const query = this.props.match.params.query;
    console.log(query);
    if(this.props.match.params.query){
      this.filterData(query);
      console.log('mounted with query');
    }
    console.log('mounted');
  }

  componentDidUpdate() {
    if(this.props.match.params.query){
      this.filterData(this.props.match.params.query);
      console.log('updated');
    }
    console.log('not exist');
  }
  
  handleChange = (e) => {
    this.setState({fields: {
      [e.target.name]: e.target.value
    }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { place, people } = this.state.fields;
    this.props.history.push('/search/place='+place+',people='+people);
    const newData = data.filter(item => item.place === place)
    this.setState({
      data: newData
    })
  }
  render() {
    const { place, startDate, endDate, people } = this.state.fields;
    const { data } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} action='search' className={styles.form}>
          <FormControl style={{minWidth: '200px'}}>
            <InputLabel id='places'>Place</InputLabel>
            <Select labelId='places' id='place' name='place' value={place} onChange={this.handleChange}>
              {places.map(({id, name}) => (
                <MenuItem key={id} value={id}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id='persons'>Persons</InputLabel>
            <Select labelId='persons' id='persons' name='people' value={people} defaultValue='1' onChange={this.handleChange}>
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
            onChange={this.handleChange}
            InputLabelProps={{ shrink: true }}/>
            <TextField
            id='endDate'
            name='endDate'
            label='Ending date'
            type='date'
            value={endDate}
            defaultValue={startDate}
            onChange={this.handleChange}
            InputLabelProps={{ shrink: true }}/>
          <Button type='submit' variant='outlined'>Let's go!</Button>
        </form>
        <div style={{display: 'none'}}>
          {data.map(({id, name}) => (
            <div key={id}>{name}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(Searching);