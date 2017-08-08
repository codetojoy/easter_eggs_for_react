
import constants from '../constants/app-constants'
import dispatcher from '../dispatcher/dispatcher'

export let incrementActions = {
    incrementCount: () => {
        console.log("TRACER winning")
        dispatcher.dispatch({
            actionType: constants.INCREMENT
        })
    }
}

