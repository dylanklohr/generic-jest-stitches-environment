import { api } from '../index'

describe('test', () => {
	it('should expose the expected public api', () => {
		expect(api).toBe(true);
	});
});
