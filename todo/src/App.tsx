import { useState } from "react";

function App() {
    // const [count, setCount] = useState<Number>(0)
    const [todoInp, setTodoInp] = useState<string>("");
    const [todolist, setTodoList] = useState<string[]>([]);

    return (
        <>
            <input
                onChange={(e) => setTodoInp(e.target.value)}
                type="text"
                name="todo"
                value={todoInp}
            />
            <button
                onClick={() => {
                    setTodoList([...todolist, todoInp]);
                }}
            >
                Submit
            </button>
            <p>
                {todolist.map((todo, i: number) => (
                    <p key={i}>
                        {todo}
                        <button
                            onClick={() => {
                                //
                            }}
                        >
                            X
                        </button>
                    </p>
                ))}
            </p>
        </>
    );
}

export default App;
