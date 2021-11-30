import React from "react";

class PinCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      media: "",
      category: "",
      pinboard_id: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const pin = Object.assign({}, this.state);
    this.props.createPin(pin)
      .then(pin => this.props.history.push(`/users/${this.props.authorId}`))
  }

  render() {
    return (
      <div className='create-pin'>
        <form className='create-pin-form' onSubmit={this.handleSubmit}>
          <button type='submit'>Save</button>
          <br/>
          <input 
            type="text" 
            placeholder="Add image URL"
            value={this.state.media}
            onChange={this.update('media')}
          />
          <br/>
          <input 
            type="text" 
            placeholder="Add your title"
            value={this.state.title}
            onChange={this.update('title')}
          />
          <br/>
          <input
            placeholder="Tell everyone what your Pin is about"
            value={this.state.description}
            onChange={this.update('description')}
          />
          <input
            placeholder="pinboard id"
            value={this.state.pinboard_id}
            onChange={this.update('pinboard_id')}
          />
          <br/>
          <input 
            type="text" 
            placeholder="category"
            value={this.state.category}
            onChange={this.update('category')}
          />
          <br />
        </form>
      </div>
    )
  };
};

export default PinCreateForm;