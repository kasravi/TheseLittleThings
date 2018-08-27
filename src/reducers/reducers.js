import actionTypes from './constants'
import service from './service'

const initialState = {
    id: undefined,
    page: 0,
    things: [],
    dialog: false,
    date: 'Last Mounth',
    newThing: {},
    lovedOnes: []
}

export default function reducers(state = initialState, action) {
switch (action.type) {
    case actionTypes.OPEN_DIALOG:
        return Object.assign({}, state, {
            dialog: true
        })
    case actionTypes.CLOSE_CLEAR_DIALOG:
        return Object.assign({}, state, {
            dialog: false,
            newThing: {}
        })
    case actionTypes.CLOSE_DIALOG:
        if(state.id) {
            switch(state.page){
                case 0:
                    service.saveThing(state.newThing);
                case 1:
                    service.saveDream(state.newThing)
                case 2:
                    service.saveLoved(state.newThing) 
            }
        }
        return Object.assign({}, state, {
            dialog: false
        })
    case actionTypes.DIALOG_THING_CHANGE:
        return Object.assign({}, state, {
            newThing: {
                thing: action.payload,
                data: state.newThing.data
            }
        })
    case actionTypes.DIALOG_DATA_CHANGE:
        return Object.assign({}, state, {
            newThing: {
                thing: state.newThing.thing,
                data: action.payload
            }
        })
    case actionTypes.NAVIGATE:
        return Object.assign({}, state, {
            page: action.payload.page
        })
    case actionTypes.LOAD_THINGS:
        const id = localStorage.getItem('id');
        //localStorage.removeItem('id');
        if(!id) {
            return Object.assign({}, state, {
                page: 2,
                dialog: true
            })
        }
        return Object.assign({}, state, {
            things: service.getThings(id, state.date),
            id: id
        })
    case actionTypes.FILTER_WHEN_CHANGED:
        return Object.assign({}, state, {
            things: service.getThings(id, action.payload.date),
            date: action.payload.date
        })
    case actionTypes.CHANGE_ID:
        localStorage.setItem('id', state.newThing.thing);
        service.saveSelf(state.newThing);
        return Object.assign({}, state, {
            id: state.newThing.thing,
            things: service.getThings(id, state.date),
            newThing: {},
            dialog: false
        })
    case actionTypes.SAVE_THING:
        return Object.assign({}, state, {
            things: service.saveThing(action.payload)
        })
    
    default:
        return state
}
}

