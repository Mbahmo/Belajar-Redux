import reducer from './todo'

describe('Todo Reducer', () => {
    test('returns a state object ', () => {
        const result = reducer(undefined, {type:'ANYTHING'})
        expect(result).toBeDefined()
    })
    test('adds a todo ', () => {
        const startState = {
            todos : [
                {id:1, name:'UI', isComplete:false},
                {id:2, name:'UI 2', isComplete:false},
                {id:3, name:'UI 3', isComplete:true},
            ]
        }

        const expectedState = {
            todos : [
                {id:1, name:'UI', isComplete:false},
                {id:2, name:'UI 2', isComplete:false},
                {id:3, name:'UI 3', isComplete:true},
                {id:4, name:'UI 4', isComplete:true},
            ]
        }
        const action = {type:'TODO_ADD', payload:{id: 4, name:'UI 4', isComplete:true}}
        const result = reducer(startState, action)
        expect(result).toEqual(expectedState)
    })
    
});

 