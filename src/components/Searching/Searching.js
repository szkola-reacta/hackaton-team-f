import React from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
import styles from './Searching.module.css';
import { withRouter } from 'react-router-dom';
import api from '../../api'
import OfferList from '../OfferList/OfferList';

class Searching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        place: this.props.match.params.query
      }, 
      data: [],
      results: null
    }
  }

 async loadData() {
   api.get("offer")
    .then((res) => {
      this.setState({
        data: res
      });
    });
    await this.filterData();
  }

  filterData() {
    const { place } = this.state.fields;
    const newData =  this.state.data.filter(item => (
      item.address.country.includes(place) ||
      item.name.includes(place)));
    this.setState({
      results: newData
    });
  }

  componentDidMount() {
    this.loadData();
  }

  handleChange = (e) => {
    this.setState({fields: {
      [e.target.name]: e.target.value
    }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { place } = this.state.fields;
    this.props.history.push('/search/'+place);
    this.filterData();
  }

  render() {
    const { place } = this.state.fields;
    const { results } = this.state;
    return (
      <div className={styles.root}>
        <form onSubmit={this.handleSubmit} action='search' className={styles.form}>
          <FormControl className={styles.input}>
            <TextField
            id='place'
            name='place'
            label="let's find some place"
            value={place}
            onChange={this.handleChange}
            required
            autoComplete='off'
            />
            </FormControl>
          <Button type='submit' variant='outlined' color='default' className={styles.btn}>Let's go!</Button>
        </form>
        {results && <OfferList data={results}/>}
      </div>
    )
  }
}

export default withRouter(Searching);