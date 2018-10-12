"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(vorname, nachname, birthYear) {
        this._vorname = vorname;
        this._nachname = nachname;
        this._birthYear = birthYear;
    }
    get vorname() {
        return this._vorname;
    }
    get nachname() {
        return this._nachname;
    }
    get birthYear() {
        return this._birthYear;
    }
}
exports.Person = Person;

//# sourceMappingURL=person.js.map
