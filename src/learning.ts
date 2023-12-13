export interface User {
    name: string;
    id: string | number;
    location?: string;
}

/* const user: User = {
    id: 0,
    name: "John Doe",
}; */

const user = {
    id: 0,
    name: "John Doe",
} as User;

// getAdminUser() returns a User
function getAdminUser(): User {
    return user
}

// function greet(a: string, b: number, c: boolean) {}
// function greet(a: string[]) {}
function greet(a: Array<string>) {}

const matt: User = {
    id: 1,
    name: "Matt"
}

const names = ["John", "Jane", "Matt"];

// ts already knows that name is a string (inferred from context)
names.map(name => {
    return {
        name
    };
}).map(user => {
    user.name
});

// Use either interface or type, not both

interface Coords {
    x: number;
    y: number;
}

/* type Coords = { x: number; y: number };
 */
function getCoords(coords: Coords) {
    return `x: ${coords.x}, y: ${coords.y},`;
}

function handleId(id: string | number) {
    if (typeof id === 'string') {
        return id.toUpperCase();
    } else {
        return id.toString();
    }
}

const name = Object.freeze({
    first: "John",
});

// named enums as arguments to a function
function canPerformAction(
    action: "create" | "update",
    entity: "user" | "post"
    ) {}

canPerformAction('create', 'user')

