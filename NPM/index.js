import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
	cart: [
		{ product: 'bread', quantity: 5 },
		{ product: 'pizza', quantity: 4 },
		{ product: 'onion', quantity: 7 },
		{ product: 'chilli', quantity: 4 }
	],
	user: {loggedIn: true}
}

const stateClone = Object.assign({}, state)
console.log(stateClone);

/////////////////////////////////////////////////////////////////////////

const stateCloneDeep = cloneDeep(state)
console.log(stateCloneDeep)

/////////////////////////////////////////////////////////////////////////

state.user.loggedIn = false
console.log(stateClone)

/////////////////////////////////////////////////////////////////////////

