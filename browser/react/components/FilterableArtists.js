import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtists extends React.Component {

  constructor(props) {
    super(props);

    this.state = Object.assign({
      inputValue: ''
    }, {list: props.artists});

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {

    const inputValue = this.state.inputValue;
    const filteredArtists = this.state.list.filter(artist => artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

export default FilterableArtists;
