import React,{useState} from 'react';

const App = ()=>{

    //const [delete,toggle] = useState(false)

    const todolist = [
        {task:'Reactの学習',status:false},
        {task:'Vueの学習',status:false},
        {task:'FireStoreの学習',status:false},
    ]

    // const todoMap = todolist.map(ailias=>{
    //     return (
    //         <tr key={ailias.id}>
    //             <td>{ailias.id}</td>
    //             <td>{ailias.todo}</td>
    //             <td>{ailias.status}</td>
    //             <td> <button onClick={ ()=>{ alert('削除ボタンが押されました！') } }>削除</button> </td>
    //         </tr>
    //     )
    // })

    const [todos,setTodo] = useState(todolist) // todo表示

    const [task,setTask] = useState('') // 入力フォーム

    const addTask = (event)=>{
        //console.log(event.target.value);
        setTask(event.target.value)
    }

    const submitTask = (event)=>{
        event.preventDefault()
        if(task === '') return
        setTodo(ailias=>[...ailias,{task,status:false}])
        setTask('') //初期化
    }

    const removeTask = (index)=>{
        const removeTodo = [...todos]
        removeTodo.splice(index,1)
        setTodo(removeTodo)
    }

    return (
        <React.Fragment>
            <h1>Reactで作成したToDoリスト</h1>

            <ul>
                {
                    todos.map( (ailias,index)=>{
                        return (
                        <li key={index}>
                            {ailias.task}
                            <button onClick={ ()=>{removeTask(index)} }>削除</button>
                        </li>
                        )
                    })
                }
            </ul>

            <h2>新しいToDoの追加</h2>
            <form onSubmit={submitTask}>
                ToDoを追加： <input value={task} placeholder='タスクを追加してね！' onChange={addTask} />
            </form>
                
                {/* <button onClick={ ()=>{} } >追加</button> */}
        </React.Fragment>
    )


}

// <TodoMap />
// const TodoMap = (props)=>{

// }




export default App;