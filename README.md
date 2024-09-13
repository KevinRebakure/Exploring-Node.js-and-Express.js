# Solution 3

-   I tried to not hardcode the values
-   Created a util function for getting items as a module
-   I added comments to clarify what certain blocks of code do. The comments show the title of the sub-exercise.
-   Sub-exercises are clarified with the comments as well
    1. **READ**
    2. **CREATE**
    3. **UPDATE**
    4. **DELETE**

## How to work with the app

1. To read the items just make a `get` request at `/data`
2. To add a new item, make a `post` request at `/data` and in the body add the item in form of

```javascript
{
    id: number,
    title: string
}
```

3. To update the item, make a `put` request at `/data/:id` (use the id of the item you want to update)
4. To delete the item, make a `delete` request at `/data/:id`

### **Question - Enhanced CRUD Version:**

You are tasked with creating a basic Node.js server using Express. The server should allow you to perform basic **CRUD** operations (Create, Read, Update, and Delete) on a collection of items stored in a file (`data.json`). You are required to implement the following endpoints:

1. **GET Request**: Fetch all items from the `data.json` file and return them as a response.
2. **POST Request**: Create a new item by sending data in the request body and appending it to the list of items in `data.json`. Each item should have an `id` field, which should be unique.
3. **PUT Request**: Update an existing item by specifying its `id` in the URL and sending the updated data in the request body.
4. **DELETE Request**: Delete an item by specifying its `id` in the URL, and remove it from `data.json`.

You are free to implement the file operations (reading, writing, and updating) using the standard Node.js `fs` (File System) module. If the file doesn't exist, create it as part of the process.

**Requirements:**

-   Create a server using Express.
-   Implement CRUD operations as described above.
-   Use the `fs` module to handle reading, writing, updating, and deleting from the `data.json` file.
-   Ensure each item in `data.json` has a unique `id` (you can generate the id using UUID or by incrementing a counter).
-   Return appropriate status codes (200, 201, 404, etc.) based on the outcome of the operations.

**Bonus:**

-   Add validation for incoming data (e.g., ensuring each item has a `name` field).
-   Handle errors gracefully, returning appropriate error messages if a file operation fails or if an item with the specified `id` doesn't exist.
