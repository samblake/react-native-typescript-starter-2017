# A React-Native &amp; TypeScript Starter for 2017

## Why Another Starter?

Most TypeScript starters use [Typings](https://github.com/typings/typings), however Typings is 
[no longer being developed](https://github.com/typings/typings/issues/738) and 
[@Types](https://microsoft.github.io/TypeSearch/) should be used instead.

## The Stack

* React-Native
* Typescript
* Redux
* Immutable

## How To Run

See the wiki for environment setup.

Start the device simulator, then start the react-native server:

```
yarn start
```

Then in another terminal build the app: 

```
yarn build
```

Or with hot reloading (not tested):

```
yarn build -- --watch
```

And run the app in Android:

```
yarn android
```

Or iOS:

```
yarn ios
```

## What's Missing

* [Jest](https://facebook.github.io/jest/) based testing.
