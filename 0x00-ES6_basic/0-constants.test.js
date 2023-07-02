import { taskFirst, taskNext } from './0-constants';

test('properly displays the result', () => {
	const result = taskFirst();
	expect(result).toBe('I prefer const when I can.');

	const nextResult = taskNext();
	expect(nextResult).toBe('But sometimes let is okay');
});
