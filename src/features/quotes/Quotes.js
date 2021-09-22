import React from "react";
import QuoteCard from "./QuoteCard";
import { addQuote, removeQuote, upvoteQuote, downvoteQuote } from './quotesSlice'

function Quotes() {
  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/*
              TODO:

              Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
              */}
            
              {<QuoteCard 
                addQuote={addQuote}
                removeQuote={removeQuote}
                upvoteQuote={upvoteQuote}
                downvoteQuote={downvoteQuote}
              />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
