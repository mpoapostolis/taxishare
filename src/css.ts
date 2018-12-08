const breakPoints: Array<number> = [576, 768, 992, 1200];
const mq = breakPoints.map(bp => `@media (min-width: ${bp}px)`);
export default mq;
