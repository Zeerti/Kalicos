import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import organizationsReducer from '../reducers/organizations'
import filterReducer from '../reducers/filters'
// import { createLogger } from 'redux-logger'

// const loggerMiddleware = createLogger()

export default () => {
const store = createStore(
	combineReducers({
		organizations: organizationsReducer,
		form: formReducer,
		filters: filterReducer
	}),
	compose(
	    applyMiddleware( thunkMiddleware ),
	    window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)
	return store
}
