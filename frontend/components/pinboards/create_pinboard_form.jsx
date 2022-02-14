import React from "react";

class CreatePinboard extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      title: "",
      user_id: this.props.userId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
  
    const pinboard1 = Object.assign({}, this.state);
    this.props.createPinboard(pinboard1)
      .then(this.props.closeModal)
      .then(this.props.history.push(`/users/${this.props.userId}/pinboards`));
  }

  render() {
    return ( 
      <div className='pinboard-create'>
        <h1>Create board</h1>
        <form className="create-pinboard-form" onSubmit={this.handleSubmit}>
          <p>Name</p>
          <input className='pinboard-title'
            type="text"
            placeholder='Like "Places to Go" or "Recipes to Make"'
            value={this.state.title}
            onChange={this.update('title')}
          />
          <br/>
          <button className='create-pinboard-button' type='submit'>Create</button>
        </form>
      </div>
    )
  }
}

export default CreatePinboard;