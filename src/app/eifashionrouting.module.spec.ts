import { EifashionroutingModule } from './eifashionrouting.module';

describe('EifashionroutingModule', () => {
  let eifashionroutingModule: EifashionroutingModule;

  beforeEach(() => {
    eifashionroutingModule = new EifashionroutingModule();
  });

  it('should create an instance', () => {
    expect(eifashionroutingModule).toBeTruthy();
  });
});
