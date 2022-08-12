import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';

const dtodos=[
  {text:'Entrevistas',completed:false},
  {text:'Curso de react',completed:true},
  {text:'Curso de next',completed:false},
]

function App(){
  const [todos,setTodos] = React.useState(dtodos);
  const [searchValue,setSearchValue] = React.useState("");
  const nHecho = (todos.filter(todo=>todo.completed)).length;
  const nTotal = todos.length;
  let tfiltrados = [] //new Array();
  if(searchValue.length>0){
    tfiltrados=todos.filter(todo=>todo.text.includes(searchValue))
  }else{
    tfiltrados=todos
  }
  console.log(tfiltrados)

  const compleTarea= (strTarea)=>{
    const nIndice = todos.findIndex(todo => todo.text===strTarea)
    //todos[nIndice].completed = true
    const newTodos = [...todos]
    newTodos[nIndice].completed = ! newTodos[nIndice].completed
    setTodos(newTodos)
 }

     
 const borraTarea = (strTarea)=>{
     const nIndice = todos.findIndex(todo=>todo.text===strTarea)
     todos.splice(nIndice,1)
     const newTodos=[...todos]
     setTodos(newTodos)     
 }

  return(
    <React.Fragment>
      <TodoCounter hecho = {nHecho} total={nTotal}/>
      <TodoSearch estado={searchValue} setSearchV={setSearchValue}/>
      <TodoList>
         <ul>
            {tfiltrados.map(t=>(<TodoItem 
                                   key={t.text} 
                                   desc={t.text} 
                                   completed={t.completed} 
                                   completala={()=>{compleTarea(t.text)}}
                                   borrale={()=>{borraTarea(t.text)}}
                                />))
            }
         </ul>
      </TodoList>  
      {/*<CreateTodoButton />*/}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;