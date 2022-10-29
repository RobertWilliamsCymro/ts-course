type User = {
    name: string,
    age: number,
    occupation?: string,
    getUser?: () => void,
    address?: {
        street: string
    }
}

const rob: User = {
    name: 'rob',
    age: 28
}

type Bird = {
    fly: () => void
}

type Fish = {
    swim?: () => void
}

type Pet = Fish & Bird;

let roadRunner: Pet = {
    fly: () => {}
}

type Day = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday"| "sunday";

let monday: Day = "monday";

function bar(){
    
}
function getUser(){
    
}

// let foo;
// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);
// console.log(user?.address?.street);

// let x = foo !== null && foo !== undefined ? foo : bar();
//  x = foo ?? bar();
