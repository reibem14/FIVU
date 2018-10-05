
import { Person } from './person';
// tslint:disable: prefer-const
let p = new Person ('Lorenz', 'Muri', 2000);
// tslint:enable: prefer-const
console.log(p.vorname, p.nachname, p.birthYear);
