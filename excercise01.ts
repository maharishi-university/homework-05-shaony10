export class Meditation {
    count: number;
    constructor(count: number) {
        this.count = count;
    }

    start = function () {
        this.printvalues(this.count);

    }
    private printvalues(count: number) {
        if (count > 0) {
            setTimeout(() => {
                console.log(count);
                this.printvalues(count - 1);
            }, 0);
        } else {
            console.log('Jay Guru Dev');
        }
    }
}