# Simple express js + mongodb API

A barebones Node.js app using Express JS and mongodb

## Requirements

- node - 14.17.1
- npm - 7.20.5

## Running Locally

```sh
$ git clone git@github.com:pratims091/getir-assignment.git # or clone your own fork
$ cd getir-assignment
$ create .env file from sample.env
$ npm install
$ npm run dev
```

## Documentation

For API documentation and playground visit [https://secret-shelf-83694.herokuapp.com/api-docs/](https://secret-shelf-83694.herokuapp.com/api-docs/).

**Sample request:**

```sh
curl --location --request POST 'https://secret-shelf-83694.herokuapp.com/api/v1/records' \
--header 'Content-Type: application/json' \
--data-raw '{
    "startDate": "2017-01-01",
    "endDate": "2021-12-31",
    "minCount": 100,
    "maxCount": 500
}'
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

**Get coverage report:**

```sh
$ firefox coverage/lcov-report/index.html
```

## License

[MIT](LICENSE)
