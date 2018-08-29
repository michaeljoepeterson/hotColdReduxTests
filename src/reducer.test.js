import reducer from './reducer';
import {generateAuralUpdate,restartGame,makeGuess} from "./actions"
describe("reducer",()=>{
	it("should set initial state if nothing passed",() =>{
		const state = reducer(undefined, {type: '__UNKNOWN'});
		const randNum = state.correctAnswer;
		expect(state).toEqual({
			guesses: [],
    	feedback: 'Make your guess!',
    	auralStatus: '',
   	 	correctAnswer: randNum
		});
	});

	it("should return the current state with unknown action",() => {
		const currentState = {};
		const state = reducer(currentState, {type: '__UNKNOWN'});
		expect(state).toEqual(currentState);
	});
	it("should restart the game",() =>{
		const num = 8
		let state;
		state = reducer(state,restartGame(num)); 
		expect(state).toEqual({
			guesses: [],
    	feedback: 'Make your guess!',
    	auralStatus: '',
   	 	correctAnswer: num
		});
	});
	it("should generate an aural status of the game",() =>{
		let state;
		state = reducer(state,generateAuralUpdate()); 
		expect(state.auralStatus).toEqual(
    	"Here's the status of the game right now: Make your guess! You've made 0 guesses.");
	});
	it("should make a guess and update state",() =>{
		let state;
		state = reducer(state,makeGuess(6)); 
		state = reducer(state,makeGuess(8)); 
		expect(state.guesses).toEqual([6,8]);
	});
	it("should make a guess and update state when guess is correct",() =>{
		let state;
		state = reducer(state,restartGame(8)); 
		const answer = state.correctAnswer;
		state = reducer(state,makeGuess(answer)); 
		expect(state.guesses).toEqual([answer]);
		expect(state.feedback).toEqual('You got it!');
	});
	it("should make a guess and update state when guess is correct",() =>{
		let state;
		let randNum =Math.floor(Math.random() * 100) + 1;
		let guess = Math.floor(Math.random() * 100) + 1;
		state = reducer(state,restartGame(randNum)); 
		const answer = state.correctAnswer;
		let difference = answer - guess
		state = reducer(state,makeGuess(guess)); 
		if (difference >= 50) {
            expect(state.feedback).toEqual("You're Ice Cold...");
        } else if (difference >= 30) {
            expect(state.feedback).toEqual("You're Cold...");
        } else if (difference >= 10) {
            expect(state.feedback).toEqual("You're Warm.");
        } else if (difference >= 1) {
            expect(state.feedback).toEqual("You're Hot!");
        } else {
            expect(state.feedback).toEqual("You got it!");
        }
	});
});