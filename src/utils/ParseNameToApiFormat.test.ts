import { Characters } from '../services/api/types';
import ParseNameToApiFormat from './ParseNameToApiFormat';

describe('ParseNameToApiFormat', () => {
	test.concurrent.each([
		[Characters.Amy, 'amy'],
		[Characters.ProfessorFarnsworth, 'professor-farnsworth'],
		[Characters.ZappBrannigan, 'zapp-brannigan'],
		[Characters.LindaTheReporter, 'linda-the-reporter'],
	])('%s should equal %s', (test, expected) => {
		expect(ParseNameToApiFormat(test)).toEqual(expected);
	});
});

export {};
