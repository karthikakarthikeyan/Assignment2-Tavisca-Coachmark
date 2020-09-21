import { OrxeCoachMark } from '../';


describe('orxe-coach-mark', () => {
  let coachmark;

  beforeEach(async function() {
    OrxeCoachMark;
    coachmark = (await document.body.appendChild(document.createElement('orxe-coach-mark'))) as OrxeCoachMark;
  });

  afterEach(async function() {
    await coachmark.remove();
  });

  it('should create', () => {
    expect(coachmark).toBeTruthy();
  });

  it('Should show close icon', () => {
    expect(coachmark.closediv()).toBeUndefined();
  });

});