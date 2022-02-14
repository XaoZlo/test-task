# Test TypeScript

## Install

```bash
git clone
npm i 
```

## TS.1 - Add generic typings to function

file: api.ts

We have refactored the function how we see right 

Possible improvements: Create interface for the function

## UT.1 - Create 3 tests for a util function

file: context.text.js

#### RUN

```bash
npm run test
```

## CD.1 - Reduce

Consider the following code:

**What is the value of result, and what is its type?**

Answer: Result value is the object with the "IPrescription" interface.
```json 
// result
{
    prescription_id: 12345,
    drug_name: 'Lipitor',
    strength: '20 mg',
    route: 'by mouth',
    instructions: 'Take 1 tablet daily',
    dispense: 30
}
```

**What would you say is the purpose of the function x?**

Answer: The function creates a new object with IPrescription interface, with keys from MAP dictionary and values from medication object

**What would you name x? What about y and z?**

Answer: x - getRecipe, y - recipe, z - identifier

**Offer any comments on or suggestions to improve the function x.**

Answer: should use short ternary operator for key