## Secret Santa Selector (TDD)
#
#### 

Secret Santa Selector project was created with the concept of TDD (Test Driven Development) the focus was on the components tests, which were made using testing library from react.
Some tests implemented: snapshot test for a no behaviour page, form functionalities, participants list and so on.
For an easier implementation it was used mocking tool from Jest library on some values, so it is independent of the global state.

#

## About

The fully flexible application consists in sorting a classic Secret Santa game.
First the user has to fill up the participants names, as long as these names has more then three letters and are not doubled.
Once the participants's names are on, the user will click the Start Game button which will lead to another screen where the user will be able to see who is the secret santa of the chosen name.
#

## Project ScreenShot

#### First screen:   

![First Page](/Screenshot_1.png)

#### Second Screen:   

![Second Page](/Screenshot_2.png)

#
## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

You can run all the tests I created with:

`npm test`

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`   
`localhost:3000/selector`  
#