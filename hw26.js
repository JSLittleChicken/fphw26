function parseJSON(jsonString) {
    try {
      const myObject = JSON.parse(jsonString)
  
      if (myObject.age && typeof myObject.age !== 'number') {
        throw new Error('Invalid JSON: Unexpected string in JSON at position 27');
      }
      return myObject
    } catch (e) {
      return {
        error: e.message
      }
    }
  }
  const jsonString1 = '{"name": "John", "age": 30, "city": "New York"}';
  const jsonString2 = '{"name": "Alice", "age": "twenty-five", "city": "London"}';
  console.log(parseJSON(jsonString1));
  
  console.log(parseJSON(jsonString2));