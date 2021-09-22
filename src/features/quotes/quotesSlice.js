// Action Creators
// TODO: Create action creators as defined in tests

// Reducer
const initialState = [];

export const addQuote = (quote) => (
  {
    type: 'quotes/add',
    payload: quote
  }
)

export const removeQuote = (quoteID) => (
  {
    type: 'quotes/remove',
    payload: quoteID
  }
)

export const upvoteQuote = (quoteID) => (
  {
    type: 'quotes/upvote',
    payload: quoteID
  }
)

export const downvoteQuote = (quoteID) => (
  {
    type: 'quotes/downvote',
    payload: quoteID
  }
)

export default function quotesReducer(state = initialState, action) {
  switch (action.type){
    case ('quotes/add'): 
      return (
        [...state, action.payload]
      )

    case ('quotes/remove'):
      return (
        state.filter(x => x.id !== action.payload)
      )
      
    case ('quotes/upvote'):
      let target = state.find(quote => quote.id === action.payload)
      target.votes = target.votes + 1
      return [target]

    case ('quotes/downvote'):
      let targetDown = state.find(quote => quote.id === action.payload)
      if(targetDown.votes > 0) {
        targetDown.votes = targetDown.votes - 1
      } 
      return [targetDown]

    default:
      return state
  }
}
