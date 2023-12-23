import Todo from "./components/Todo";

function App() {
    const TODOS = [
        { name: 'Coding' },
        { name: 'Assignment' },
        { name: 'Study' },
    ]

    return (
        <div className="App">
            <div>
                <h1>TODOS</h1>
                <ul>
                    {
                        TODOS.map((d) => (
                            <Todo name={d.name} />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default App;
