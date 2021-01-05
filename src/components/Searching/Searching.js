import React from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
import styles from "./Searching.module.scss";
import { withRouter } from "react-router-dom";
import axios from "axios";
import OfferList from "../OfferList/OfferList";
import Alert from "../Alert/Alert";

class Searching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        place: this.props.match.params.query
      },
      data: [],
      results: null,
      clicked: true
    };
  }

 async loadData() {
    await axios.get("http://localhost:3001/offer").then((res) => {
      this.setState({
        data: res.data
      });
    });
    await this.filterData();
  }

  filterData() {
    const { place } = this.state.fields;
    if(place) {
    const newData = this.state.data.filter(item => (
      item.address.country.toLowerCase().includes(place.toLowerCase()) ||
      item.name.toLowerCase().includes(place.toLowerCase())));
    this.setState({
      results: newData
    });
  }
  }

  componentDidMount() {
    this.loadData();
  }

  handleChange = (e) => {
    this.setState({ fields: {
      [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { place } = this.state.fields;
    this.setState({
      clicked: !this.state.clicked
    });
    this.props.history.push("/search/"+place);
    this.filterData();
  }

  getResults(results) {
    if(results.length) {
      return <OfferList data={results}/>;
    }
    if(!results.length & results !== null) {
      return <Alert
      message="Sorry, we can't find any place right now. Try find another place or try again later."
      clicked={this.state.clicked}
      />;
    }
  }

  render() {
    const { place } = this.state.fields;
    const { results } = this.state;
    return (
      <div className={styles.root}>
        <form onSubmit={this.handleSubmit} action="search" className={styles.form}>
          <FormControl className={styles.input}>
            <TextField
            id="place"
            name="place"
            label="let's find some place"
            value={place}
            onChange={this.handleChange}
            required
            autoComplete="off"
            />
            </FormControl>
          <Button type="submit" variant="outlined" color="default" className={styles.btn}>Let's go!</Button>
        </form>
        { results && this.getResults(results)}
       
      </div>
    );
  }
}

export default withRouter(Searching);