import React from "react";

function QuoteCard(props) {
  let handleUpVote = (props) => {
    console.log(props.quote)
    props.upvoteQuote(props.quote.id)
  }

  let handleDownVote = (props) => {
    console.log(props.quote)
    props.downvoteQuote(props.quote.id)
  }

  let handleDeleteQuote = () => {
    console.log(props.quote)
    props.removeQuote(props.quote.id)
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{props.quote.content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{props.quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" onClick={handleUpVote}>
              Upvote
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleDownVote}>
              Downvote
            </button>
            <button type="button" className="btn btn-danger" onClick={handleDeleteQuote}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {props.quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
