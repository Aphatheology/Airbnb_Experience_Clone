import './App.css';
import "./index.css"
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import airData from "./data.js"
import Card from './component/Card';


function App() {
    const eachCard = airData.map(x => {
        return (
            <Card 
                key={x.id}
                {...x}
            />
        )
    })
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <section className='card-list'>
                {eachCard}
            </section>
            
        </div>
  );
}

export default App;
