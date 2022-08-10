import BirthdaySection from './component/BirthdaySection.js';
import data from './data.js'

function App() {

  // console.log(data)
  return (
    <main>
      <BirthdaySection data={data}/>
    </main>
  );
}

export default App;
