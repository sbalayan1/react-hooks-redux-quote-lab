import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";
import { useDispatch } from 'react-redux'

function QuoteForm() {
  const [formData, setFormData] = useState({
    id: uuid(),
    content: "",
    author: ""
  });

  const dispatch = useDispatch()

  function handleChange(event) {
    // Handle Updating Component State
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    })
  }


  function handleSubmit(event) {
    // Handle Form Submit event default
    event.preventDefault()
    dispatch(addQuote(formData))

    setFormData({
      content: '',
      author: ''
    })
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="content"
                      id="content"
                      value={formData.content}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      className="form-control"
                      name="author"
                      type="text"
                      id="author"
                      value={formData.author}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
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

export default QuoteForm;
