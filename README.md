# Base Graphql

### STEP 1: 
- Go to folder:  `codegen/codegen.js`
- Change `API URL + Token`

### STEP 2: 
- get the entire api Mutation + Query from the api into the ``__generated__`` folder

``` 
yarn codegen
```

### STEP 3: 
- Copy file `.graphql` from `__generated__/mutations/queries` to `src/graphql/mutations/queries`

- then
```
yarn typegen
```


### [DEMO](https://www.youtube.com/watch?v=kG5-qid82Vo)