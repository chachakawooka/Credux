# Credux
Reactive Credits datastore for Dapps

Credux will detect and utilise installed credits browser extensions, and abstract methods so you don't need to limit yourself to supporting a single extension

## Works with
* Crext [crext.io]
* Ceser [ceser.io]

Calls with send the responses into a redux store that you can utilise the data directly on your own React components

## DEMO
[https://chachakawooka.github.io/Credux/]

## Install Instructions
```
npm install credux
```

## Using Credux
```
import { Credux } from 'Credux'
credux = new Credux();
```

## METHODS

##### checkExtension - detects installed extensions - stores in state.Core.extension
checkExtension is automatically called on window load
```
credux.checkExtension()
```

##### updateKey - gets the logged in users public key - stores in state.User.key
updateKey is automatically called on authorised
```
credux.updateKey()
```

##### updateUserBalance - gets the logged in users balance - stores in state.User.balance
updateUserBalance is automatically called on user key change
```
credux.updateUserBalance()
```

##### updateBalance - get a account balance - stores data in state.Wallet.balances
```
credux.updateBalance(publicKey)
```

## STORE

#### state.Core
```
{
  extension: false|'CREXT'|'CESER'],
  authorised: false|true
}
```
#### state.User
```
{
  key: false|{usersPublicKey},
  balance: 0.00
}
```
#### state.Wallet
```
{
balances: 
  [
    {key:'thePublicKey', balance: 251.22},
    {key:'anotherPublicKey', balance: 2.1038}
  ]
}
```



