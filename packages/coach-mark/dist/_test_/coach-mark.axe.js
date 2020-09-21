import { OrxeCoachMark } from '../';
import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);
describe('orxe-coach-mark-axe', () => {
    it('', () => {
        expect(true).toBeTruthy();
    });
    let CoachMark;
    beforeEach(async () => {
        OrxeCoachMark;
        document.body.appendChild(document.createElement('CoachMark'));
        CoachMark = document.querySelector('CoachMark');
    });
    afterEach(() => {
        CoachMark.remove();
    });
    it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
        const result = await axe(CoachMark);
        expect(result).toHaveNoViolations();
    });
});
