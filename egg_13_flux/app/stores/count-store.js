
import constants from '../constants/app-constants.js'
import dispatcher from '../dispatcher/dispatcher.js'
import {EventEmitter} from 'events'

// backing variables
let _count = 0

function getCount() {
    return _count
}

function incrementCount() {
    _count = _count + 1
}

// store
export let TodoStore = Object.assign({}, EventEmitter.prototype, {
    getCount: getCount,

    emitChange: function() {
        this.emit('CHANGE_EVENT')
    },

    addChangeListener: function (callback) {
        this.addListener('CHANGE_EVENT', callback)
    },

    removeChangeListener: function (callback) {
        this.removeListener('CHANGE_EVENT', callback)
    }
})

// registry

dispatcher.register(action => {
    console.log("TRACER from x")
    
    if (action.actionType == constants.INCREMENT) {
        incrementCount()
        TodoStore.emitChange()
        console.log("TRACER from y")
    }
})

