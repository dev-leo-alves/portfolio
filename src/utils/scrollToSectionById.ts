import { scroller } from 'react-scroll';

export function scrollToSectionById(id: string): void {
    scroller.scrollTo(id, {
        duration: 1500,
        delay: 100,
        smooth: 'easeInOutQuint',
    });

    return;
}