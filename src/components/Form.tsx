import React, { FormEvent } from 'react';
import Items from './Items';

interface State {
  items: string[];
  userInput?: string;
}

class Form extends React.Component<{}, State> {
  state: State = {
    items: [],
    userInput: '',
  };

  handleSubmit = (e: FormEvent, userInput?: string) => {
    e.preventDefault();
    this.setState((state) => {
      return { items: [...state.items, userInput as string] };
    });
    this.setState({ userInput: '' });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={(e) => this.handleSubmit(e, this.state.userInput)}>
          <label htmlFor='item'>Add Item</label>
          <input
            type='text'
            placeholder='Add Item'
            value={this.state.userInput}
            onChange={(e) => this.setState({ userInput: e.target.value })}
          />
          <input type='submit' placeholder='submit' />
        </form>
        <Items items={this.state.items} />
      </React.Fragment>
    );
  }
}

export default Form;
