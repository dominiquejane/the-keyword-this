//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //To refer back to the object invoking the function without reusing the object's name so as to avoid scope confusion.

  //2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //this is bound to the object that invokes the function containing this
      //if a function containing this is invoked outside of an object it refers to the window object
      //

  // 3) What is the difference between call and apply?

      //Answer
      //they're almost identical, the main difference is that apply accepts an array of arguments. Also, you don't necessarily have to know what your arguments are at the time you use the apply method. If you do this use 'argument' for the unknown arguments.

  // 4) What does .bind do?

      //Answer
      //bind allows you to set a specific object to the function once it gets invoked.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: "dominique",
  email: "dominique.code.com",
  getUsername: function () {
    return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

console.log(user.getUsername());


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car (make, model, year) { //create a Car constructor
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
}

Car.prototype.moveCar = function() { //create a function prototype for Car that increments move property
  this.move += 10;
  return this.move;
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

console.log(prius.move);
console.log(mustang.move);


//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here
console.log(getYear.call(prius));
console.log(getYear.call(mustang);


//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

//setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
//undefined
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
//bound to the window object
//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
setTimeout(getUsername.bind(user), [5000]); //use bind instead of call/apply. call/apply will invoke the function immediately. bind will return a new function that setTimeout will then execute once the timer has gone out.
















