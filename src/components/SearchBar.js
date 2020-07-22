import React, { Component } from 'react';

class SearchBar extends Component {
  state = { catGroup: 'entertainment' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.catGroup);
  };

  render() {
    const searchPosition = {
      position: 'relative',
      left: '110px',
      bottom: '77px',
    };
    const searchStyle = {
      marginLeft: '5px',
      background: 'violet',
      padding: ('1px', '4px'),
      borderRadius: '5px',
    };
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div style={searchPosition}>
            <label htmlFor="cate">View by Category</label>
            <select
              style={{ marginLeft: '5px' }}
              id="cate"
              name="cate"
              value={this.state.catGroup}
              onChange={(e) => this.setState({ catGroup: e.target.value })}
            >
              <option value="sport">Sport</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="general">General</option>
              <option value="entertainment">Entertainment</option>
              <option value="technology">Technology</option>
            </select>
            <input type="submit" style={searchStyle} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;