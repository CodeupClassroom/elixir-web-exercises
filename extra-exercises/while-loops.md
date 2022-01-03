## WHILE LOOPS EXTRAS

---
### Ramp-up

#### A) Maths!
1. Write a function called `add(num1, num2)` which returns the sum of a and b


2. Write a function named `square(numToSqr)` which takes in a number (`numToSqr`) and returns the number multiplied by itself


3. Write a function called `sumOfSquares(a, b)`.
   1. You should find the square of `a`, then the square of `b`.
   2. Invoke `add(num1, num2)` and pass the new squared values in as arguments.
   
---

#### B) FIZZ-BUZZZZZZZ

1. Write a function named `getFizzBuzz(startingNum)` which performs the following actions:
   1. If `startingNum` is divisible by 3 
      1. console log `"fizz"`
   2. Else, if `startingNum` is divisible by 5
      1. console log `"buzz"`
   3. If `startingNum` is divisible by 3 ***AND*** divisible by 5
      1. *return* a string which says `"FIZZ BUZZ"`


2. Thinking about `getFizzBuzz(startingNum)`, let's console log the *return* value of this function
   1. What if `getFizzBuzz` doesn't return a value (VOID)?
      1. How do you want to handle that?

---
---

### WHILE LOOPS WITH FUNCTIONS

#### A) `getPaswordInput`

1. Define a function named `getPassword()` which performs the following actions:
   1. Using `prompt()`, `alert()`, variables, and a while-loop, ask the user to input their password until their entry matches your hard-coded password value.
   

***HINT: start by defining the correct password and don't forget to link your html file***

---

#### B) `getMeaningOfLife`

1. Write a function named `getMeaningOfLife` which accepts one parameter, `meaningfulNum`.
   1. This function will use a ***while loop*** to compare its current number (a variable named `counter`)
   against the `meaningfulNum`.
   2. *While* the `counter` is not equivalent to the `meaningfulNum`, continue the loop.
      1. Once that condition is broken, console log a string telling the user `"The meaning of life, the universe, and everything is [your meaningful number]"`
   

2. Thinking about the above function, `getMeaningOfLife`, let's ask a question: **What happens if the value of `meaningfulNum` is a non-numeric?**
   1. Write some code to account for this case. ***How the function handles the situation is up to you!***


3. Let's continue with `getMeaningOfLife`: If the value of `meaningfulNum` happens to be `42`, console log a separate message *at the end* of the function to say:
   `"Did you bring your towel?"`

---

#### LESSON EXERCISE WALK-THRU

--> While Loops

--> Break and Continue?