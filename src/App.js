
import './App.css';
import Navbar from './Navbar'
import data from './data'
import Card from './Card'

export default function App() {
 
  const cards = data.map(item => {
    return (
      <Card 
      key={item.id}
      item={item}
     />
    )
  })

  return (
    <div className="App">
           <Navbar />
           {cards}

    </div>
  );
}


