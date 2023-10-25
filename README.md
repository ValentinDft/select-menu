# Select Menu

> This is a component for an input list https://www.npmjs.com/package/react-select-menu-valentindft

![Model](https://github.com/ValentinDft/select-menu/blob/master/public/assets/input.png)

## Prerequisites

This project requires NodeJS and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
Make sure there are install in your device.

## Installation

Install the npm package in your project

```sh
npm i react-select-menu-valentindft
```

## How to use it 

### Import 
```javascript
import { SelectMenu } from 'react-select-menu-valentindft';
```

### Component
```javascript
// data is the data you want to list inside the input
// you can add an id to the input
// inputValue is the input value selected

<SelectMenu data={myData} id='some id' inputValue={valueSelectMenuMyData} />
```

### Inject Data
```javascript
// The structure of your data need to be an array of object with key name

const myData: Array<object> = [
   {
      name: 'First value'
   },
   {
      name: 'Second value'
   },
   {
      name: 'Third value'
   }
]
```
![Model](https://github.com/ValentinDft/select-menu/blob/master/public/assets/input-list.png)

### Input value
```javascript
let stateInput: string;

const valueSelectMenuMyData = (value: string) => {
    stateInput = value;
};
```
