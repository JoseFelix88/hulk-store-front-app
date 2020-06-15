import { ValidateStrPipe } from './validate-str.pipe';

describe('ValidateStrPipe', () => {
  it('create an instance', () => {
    const pipe = new ValidateStrPipe();
    expect(pipe).toBeTruthy();
  });
});
