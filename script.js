// Practice with JavaScript OOP Concepts 

//Part1
/*
    var ANIMAL = ANIMAL || {};
    
//sub classes    
    ANIMAL.Cat = function(){
    };
    ANIMAL.Dog = function(){
    };  
*/

//Part2 and Part3
/*
    var Cat = {};          // Literal notation
    function Dog() {}      // Construction notation
    var kujo = new Dog();
*/

//Part4 
/*
    function Animal() {
        console.log("An Animal has been created");
    }
*/

//Part5
/*
    function Animal(specie) {
        console.log("The " + specie + " has been created");
    }
    var chimp = new Animal('ape');
*/ 

//Part6
/* 
    function Animal(type, breed, color, height, length) {
        this._type = type;
        this._breed = breed;
        this._color = color;
        this._height = height;
        this._length = length;
        console.log(this._type); //added bonus
    }
    var myAnimal = new Animal('Lizard', 'Komodo', 'Green', '6"', '12"');
*/


//Part7
/*
    function Animal(type, breed, color, height, length) {
        this.type = type; //keyword this is the object
        this.breed = breed; //remove _ best practice
        this.color = color; //use _ for private members
        this.height = height;
        this.length = length;
        for (var prop in this) { //prop to call my properties in my this object
            console.log(this[prop]); 
        } 
        console.log(' ');
    }
    var myAnimal = new Animal('Lizard', 'Komodo', 'Green', '6"', '12"');
    var mojo = new Animal('Dog', 'Dogo', 'White', '27"', '3\'');
*/

//Part8
/*
    function Animal(type, breed, color, height, length) {
        this.type = type; 
        this.breed = breed; 
        this.color = color; 
        this.height = height;
        this.length = length;
    }
    Animal.prototype.speak = function() {
        if (this.type == 'Dog') {
           return 'The ' + this.color + ' dog is barking!'; 
        }
        if (this.type == 'Cat') {
           return 'The ' + this.color + ' cat is meowing!'; 
        } 
        return 'Crickets chirping';
    }  
    var myAnimal = new Animal('Lizard', 'Komodo', 'Green', '6"', '12"');
    var mojo = new Animal('Dog', 'Dogo', 'White', '27"', '3\'');
    console.log(myAnimal.speak());
    console.log(mojo.speak());
*/
    
//Part9 *** help why undefined ***
/*    
    var Animal = function(type, breed, color, height, length) {
        var _type = type; 
        var _breed = breed; 
        var _color = color; 
        var _height = height;
        var _length = length;

        var checkType = function() {
            if (_type == 'Dog') {
               return 'Dog'; 
            }
            else { 
                return 'Cat'; //now my Lizard is a Cat
            }   
        }
        this.speak = function() { 
            return 'The ' + checkType() + ' has made a noise.'
            
        }
    } //end Animal constructor
        
    var myAnimal = new Animal('Lizard', 'Komodo', 'Green', '6"', '12"');
    var mojo = new Animal('Dog', 'Dogo', 'White', '27"', '3\'');
    console.log(myAnimal.speak());
    console.log(mojo.speak());
    console.log(mojo.checkType()); //err because it is private
*/   

//Part10 
/*    
    String.prototype.findWords = function(word) {
        var regexp = new RegExp(word,'gi');
        return this.match(regexp).length;
    }
    var str = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood? He would chuck, he would, as much as he could, and chuck as much wood As a woodchuck would if a woodchuck could chuck wood.';
    console.log(str.findWords('chuck'));
*/

//The Recipe Card 
/*
    var Recipe = function(title, servings, ingredients) {
        this._title = title;
        this._servings = servings;
        this._ingredients = ingredients;
    }
    Recipe.prototype.displayMethod = function() {
        console.log(this._title);
        console.log('Serves: ' + this._servings);
        console.log('Ingredients: ');        
        for (var i in this._ingredients) {
            console.log('-' + this._ingredients[i][0] + ' ' + this._ingredients[i][1]); 
        }
    };
    
    var ingredients = [['3','Avocados'], ['1','Lime'], ['1 Tspn','Salt'], ['1/2 Cup','Onion'], ['3 Tblspn','Cilantro'],['2', 'Diced Tomatoes'], ['1 Tspn','Garlic'], ['1 Pinch', 'Ground Pepper']];
    
    var favoriteRecipe = new Recipe('Guacamole', 4, ingredients);
    favoriteRecipe.displayMethod();
*/

        
//The Reading List     
    // create book constructor
/*
   var Book = function(title, author, alreadyRead) { //creates book Objects to put into our Array aka our list of books 
        this._title = title;
        this._author = author;
        this._alreadyRead = alreadyRead;
    }
    // create the books using the constructor
    var book1 = new Book('The Hobbit', 'J.R.R. Tolkien', false);
    var book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', false);
    var book3 = new Book('The World is Flat', 'Thomas L. Friedman', true);
    var book4 = new Book('1984', 'George Orwell', true);
    var book5 = new Book('Lines and Shadows', 'Joseph Wambaugh', true);
    // place the books in an array
    var books = [book1, book2, book3, book4, book5];
    // loop thru the array - display contents of ea obj
    for (var i = 0; i < books.length; i++) { 
        if (books[i]._alreadyRead) {
        console.log('You already read "' + books[i]._title + '" by ' + books[i]._author)
        } else {
        console.log('You still need to read "' + books[i]._title + '" by ' + books[i]._author);
        } 
    };
*/
    
  