import Control from "./components/Control";
import TimeContent from "./components/TimeContent";


function App() {

  // const [data,setData] = useState([]);

  const testTimer = (data) => {
    console.log(data);
  }

  return (
    <div className="App">
      <TimeContent/>
      <Control test={testTimer} />
    </div>
  );
}

export default App;
