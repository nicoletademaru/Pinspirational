import React from "react";

class EditPinboard extends React.Component {
  constructor(props) {
    super(props)
    this.state= this.props.pinboard;
    
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const pinboard = Object.assign({}, this.state);

    this.props.updatePinboard(pinboard)
      .then(this.props.requestPinboard(pinboard.id))
      .then(this.props.closeModal)
  }

  handleDelete() {
    this.props.deletePinboard(this.props.pinboard.id)      
      .then(this.props.closeModal)
      .then(this.props.history.push(`/users/${this.props.userId}/pinboards`))
  }
            
  render() {
    const { closeModal } = this.props;

    return (
      <div className='edit-pinboard'>
        <div className='edit-pinboard-header'>
          <h1>Edit your pinboard</h1>
        </div>
        <div className='edit-pinboard-body'>
          <form className='edit-pinboard-details'>
            <label htmlFor="title">Title
              <input
                name='title'
                type="text"
                value={this.state.title}
                onChange={this.handleChange('title')}
              />
            </label>
          </form>
        </div>
        <div className='edit-pinboard-footer'>
          <div className='left-footer'>
            <button 
              className='delete-cancel' 
              onClick={this.handleDelete}>Delete</button>
          </div>
          <div className='right-footer'>
            <button 
              className='delete-cancel' onClick={closeModal}>Cancel</button>
            <button className='save-pinboard-edit' type='submit' onClick={this.handleSubmit}>Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditPinboard;