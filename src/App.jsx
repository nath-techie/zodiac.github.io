import Box from './Box.jsx';
import z from './datas.jsx';

function App() {
  return (
    <div className="App">

      <h1 className="heading">Zodiac</h1>
      <p className="top">Every sign brings something to the celestial table. Here's what you should know about the zodiac signs including strengths, weaknesses, and how they think.</p>
      <div class="one">
      {z.map(a=>(<Box
                key={a.id}
                star={a.star}
                img={a.img}
                exp={a.exp}
                />))}
      </div>
      <div className="pair">
      <h3>Know your best zodiac pair</h3>

      </div>
    </div>
  );
}

export default App;
