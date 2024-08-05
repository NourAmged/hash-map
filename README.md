# HashMap Implementation in JavaScript

This project implements a HashMap (or hash table) in JavaScript. A HashMap is a data structure that maps keys to values for highly efficient lookup. This implementation uses separate chaining to handle collisions and includes functionality for dynamic resizing.

## Features

- **Insert**: Add a key-value pair to the hash map.
- **Retrieve**: Get the value associated with a specific key.
- **Delete**: Remove a key-value pair from the hash map.
- **Check Existence**: Check if a key exists in the hash map.
- **Clear**: Clear all entries in the hash map.
- **Retrieve All Keys**: Get an array of all keys in the hash map.
- **Retrieve All Values**: Get an array of all values in the hash map.
- **Retrieve All Entries**: Get an array of all key-value pairs in the hash map.
- **Load Factor**: Calculate the load factor of the hash map.
- **Dynamic Resizing**: Resize the hash map when the load factor exceeds a specified threshold.

### Methods
The following methods are implemented:

* `hash(key)` - Computes a hash code for a given key.
* `set(key, value)` - Adds or updates a key-value pair in the hash map.
* `get(key)` - Retrieves the value associated with a given key.
* `has(key)` - Checks if a key exists in the hash map.
* `remove(key)` - Removes a key-value pair from the hash map.
* `length()` - Returns the number of elements in the hash map.
* `clear()` - Clears all entries in the hash map.
* `keys()` - Returns an array of all keys in the hash map.
* `values()` - Returns an array of all values in the hash map.
* `entries()` - Returns an array of all key-value pairs in the hash map.
* `loadFactor()` - Returns the current load factor of the hash map.
* `resize(newSize)` - Resizes the hash map to a new size.
