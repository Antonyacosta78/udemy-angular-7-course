export class CounterService {

    counterValue = 0;

    constructor() { }

    up() {
        this.counterValue++;
        console.log(`Counter Incremented, current value: ${this.counterValue}`);
    }
}
