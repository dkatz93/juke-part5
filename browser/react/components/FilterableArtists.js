import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtists extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({
      inputValue: ''
    }, {list: this.props.artists});

    this.handleChange = this.handleChange.bind(this);

  }

  componentWillReceiveProps(nextProps){
    this.setState({list: nextProps.artists})
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {

    const inputValue = this.state.inputValue;
    console.log('filterable artists state', this.state)
    console.log('filterable artist props', this.props)
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
