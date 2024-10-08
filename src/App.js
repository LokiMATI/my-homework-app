import { useState } from 'react';

// Компоненты
const Greeting = (props) => {
  const {name, setName} = useState('');
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>  
        Увеличить
      </button>
      <button onClick={() => setCount(count - 1)}>  
        Уменьшить
      </button>
      <button onClick={() => setCount(0)}>  
        Обнулить
      </button>
    </div>
  );
}

const UserInfo = (props) => {
  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);
  const [flag, setFlag] = useState(false);

  const changeFlag = (e) => {
    e.preventDefault();
    setFlag(!flag);
  };
  return (
    <div>
      <button onClick={changeFlag}>Информация о авторе</button>
      {
          flag ? (
            <div>
              <h1>Имя: {name}</h1>
              <h1>Возраст: {age}</h1>
              <button onClick={() => {setAge(Math.floor(Math.random() * (70 - 20 + 1)) + 20)}}> Изменить возраст</button>
            </div>
          ) : null
      }
    </div>
      
  );
}

function App() {
  return (
    <dev>
      <Greeting name="Nikia" />
      <Counter />
      <UserInfo name="Nikia" age="17" />
    </dev>
  );
}

export default App;
