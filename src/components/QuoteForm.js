import React, { Component } from 'react';
// import { addQuote } from '../actions/quotes';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addQuote } from '../actions/quotes';



export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {content: '', author: ''}
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const quote = {...this.state, id: uuid() };
    this.props.addQuote(quote);
    this.setState( {content: '', author: ''});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={(event) => this.handleOnSubmit(event)} className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name="content"
                        onChange={(event) => this.handleOnChange(event)}
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="author"
                        onChange={(event) => this.handleOnChange(event)}
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
  addQuote: addQuote
  //   removeQuote: removeQuote,
  //   downvoteQuote: downvoteQuote,
  //   upvoteQuote: upvoteQuote
  }, dispatch)

}

//add arguments to connect as needed
export default connect(state => ({ quotes: state.quotes }), mapDispatchToProps)(QuoteForm);
