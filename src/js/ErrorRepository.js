export default class ErrorRepository {
    constructor() {
        this.errors = new Map([[201, 'Webpage Created'], [403, 'Access allowed only for registered users'], [507, 'Insufficient Storage']])
    }

    translate(code) {
        if (this.errors.has(code)) return this.errors.get(code);

        return 'Unknown error';
    }
}