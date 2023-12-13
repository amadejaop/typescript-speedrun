"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* const user: User = {
    id: 0,
    name: "John Doe",
}; */
var user = {
    id: 0,
    name: "John Doe",
};
// getAdminUser() returns a User
function getAdminUser() {
    return user;
}
// function greet(a: string, b: number, c: boolean) {}
// function greet(a: string[]) {}
function greet(a) { }
var matt = {
    id: 1,
    name: "Matt"
};
var names = ["John", "Jane", "Matt"];
// ts already knows that name is a string (inferred from context)
names.map(function (name) {
    return {
        name: name
    };
}).map(function (user) {
    user.name;
});
/* type Coords = { x: number; y: number };
 */
function getCoords(coords) {
    return "x: ".concat(coords.x, ", y: ").concat(coords.y, ",");
}
function handleId(id) {
    if (typeof id === 'string') {
        return id.toUpperCase();
    }
    else {
        return id.toString();
    }
}
var name = Object.freeze({
    first: "John",
});
// named enums as arguments to a function
function canPerformAction(action, entity) { }
canPerformAction('create', 'user');
