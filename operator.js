//MongoDb Operators

//Update Operators -> Arithmatic / Logical operations
//$inc -> increment (+1,+2,-1,-2)
//$min
//$max
//$set -> sets a data
//$unset -> removes a property from an object

//Array Operators
//$push -> pushing data
//$pull -> Extracting data - it works on particular condition eg.
name=["abc", "xyz"]
name === "xyz";-> just FYI
//write this below only to pull
$pull : {
  name : "xyz"
}
//$pop -> pop out data (LIFO)
//$addToSet -> Duplicates not pushed again  -> unique (don't throw errors )
