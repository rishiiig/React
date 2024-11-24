// import Parent from "./Components/Parent";
import Datatable from "./Components/Datatable";
import UseEffectHook from "./Components/UseEffectHook";

const App = () => {

    const arr1 = [
        {name:"Name1",  designation:"designation1"},
        {name:"Name2",  designation:"designation2"},
        {name:"Name3",  designation:"designation3"},
    ];

    return (
            <div className="app">
                <Datatable data={arr1} />
                <UseEffectHook />
            </div>
    );
};

export default App;