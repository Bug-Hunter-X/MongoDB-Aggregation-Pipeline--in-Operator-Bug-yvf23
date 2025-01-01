```javascript
//Incorrect use of $in operator in MongoDB aggregation pipeline
db.collection.aggregate([
  {
    $match: {
      field: { $in: [1, 2, 3] }
    }
  }
]);
//Correct way to use $in operator
db.collection.aggregate([
    {
      $match: {
        field: { $in: [1,2,3] }
      }
    }
  ]);
```