import {GENERATE_AURAL_UPDATE,generateAuralUpdate,RESTART_GAME,restartGame,MAKE_GUESS,makeGuess} from './actions';
describe("Generate Aural update",()=>{
	it("Should create aural update",()=>{
		const action = generateAuralUpdate();
		expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
	});
});

describe("Restart game action",()=>{
	it("Should create a restart game action with a provided number",()=>{
		const num = 5
		const action = restartGame(num);
		expect(action.type).toEqual(RESTART_GAME);
		expect(action.correctAnswer).toEqual(num);

	});
});

describe("Make guess action",()=>{
	it("Should create a make guess action with a provided number",()=>{
		const num = 5
		const action = makeGuess(num);
		expect(action.type).toEqual(MAKE_GUESS);
		expect(action.guess).toEqual(num);

	});
});