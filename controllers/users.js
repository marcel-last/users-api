import { v4 as uuidv4 } from 'uuid';

// Mock 'users' data/database -- FOR TESTING ONLY --
let users = []

// Create a new user on the database
export const createUser = (req, res) => {
    const userId = uuidv4();
    const user = { id: userId, ...req.body }; // prepend unique UUID to user JSON object.
    users.push(user);

    res.send(`User added. \n 
    ID: ${userId}
    First Name: ${user.firstName}
    Last Name: ${user.lastName}
    Age:${user.age}`);

    console.log(`==> [INFO] POST request to '/users/':\n`, user);
};

// Get all users from the database
export const getUsers = (req, res) => {
    res.send(users);

    console.log(`==> [INFO] GET request to '/users/':\n`, users);
};

// Get user identified by UUID from the database
export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);

    console.log(`==> [INFO] GET request to '/users/${id}':\n`, foundUser);
};

// Update an existing user in the database
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if(firstName)user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    
    res.send(`User with the id ${id} has been updated in the database.`);

    console.log(`==> [INFO] PATCH request to '/users/${id}':\n`, user);
};

// Delete an existing user from the database
export const deleteUser = (req, res) => {
    const { id } = req.params;
    
    console.log(`==> [INFO] DELETE request to '/users/':\n`
    , users.find((user) => user.id === id));

    users = users.filter((user) => user.id !== id) // Keep all users except for the 'user id' specified in DELETE request.
    
    res.send(`User with the id ${id} has been deleted from the database.`);
};
