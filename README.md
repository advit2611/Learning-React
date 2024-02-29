# Learning-React

- Started learning react components and how they are initiated

    - It is initialized by
```javascript
const Component: React.FC<Props> =(props) => {
return (
    <div> Hello World!<div>
    )
}
```
- Making props Type Safe by initializing Interface in the TypeScript File.
```javascript
interface{
    id: number;
    title: String;
    value: string;
    onClick: () => void;
    array: Array[]
}
```
- Learnt about API Fetching
- Learnt React hooks like `useState()` and `useEffect()`
- Learnt about redux and redux store
    - What is Reducers
    - What is Dispatchers

