# JSON 2 xlsx converter

Use the `json2xls` package to convert a JSON string to xlsx file.

First trim the whitespase from data, then remove new lines and breaks and finaly parsing the string into a json object.

And passes it through the `json2xls` package to convert it to xlsx file.

## Installation

Install the dependencies

```
npm install
```

create a `data.js` file with your stringified JSON. Example:

```
module.exports = `[
    {
        name: 'example name 1',
        surname: 'example surname 1'
    },
    {
        name: 'example name 2',
        surname: 'example surname 2'
    }
]`;
```

and then run the `index.js` file with

```
node index.js
```

OR

```
npm run export
```
