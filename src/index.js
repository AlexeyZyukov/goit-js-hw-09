"use strict"
console.log("Hello!");

//default import examples
import passwordValidate from '../js/default-export-import'
console.log(passwordValidate);
const result = passwordValidate('abracadabra');
console.log(result)
//_______________________
import testService from '../js/default-testServise'
console.log(testService);

//named import - per individual name]
import { fetchAllUsers, fetchUserById } from '../js/named-export-import'
console.log(fetchAllUsers)
console.log(fetchUserById)

//named import of all elements as 1 object
import * as namedExport from '../js/named-export-import';
console.log(namedExport);
