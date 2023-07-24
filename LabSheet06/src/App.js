import './App.css';
import Question from './components/Question/Question';
import Toggle from './components/Toggle'
import Timer from './components/Timer';
import TodoList from './components/TodoList';
import CardList from './components/CardList';
import Form from './components/Form';

function App() { 
  return (
    <div>
      <div className='line'>
        <Question num="01" />
        <Toggle />
      </div>
      <div className='line'>
        <Question num="02" />
        <Timer />
      </div>
      <div className='line'>
        <Question num="03" />
        <TodoList />
      </div>
      <div>
        <Question num="04" />
        <CardList />
      </div>
      <div>
        <Question num="05" />
        <Form />
      </div>
    </div>
  );
}

export default App;
