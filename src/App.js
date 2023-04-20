import './App.css';
import { Navbar } from './components/Navbar';
import { Heading } from './components/Heading';
import { Topo } from './components/Topo';
import { Footer } from './components/Footer';
import { Card } from './components/Card';


function App() {

  const produto = [
    {
      id: 1,
      title: "Air Jordan Retro High OG Twist Feminino",
      src: "jordan",
      preco: 1199.99
    },
    {
      id: 2,
      title: "Air Jordan High Zoom Tropical Twist",
      src: "jordan",
      preco: 1199.99
    },
    {
      id: 3,
      title: "Air Jordan Retro High Cour Purple",
      src: "jordan",
      preco: 1199.99
    },
    {
      id: 4,
      title: "Air Jordan Mid Light Smoke Grey ",
      src: "jordan",
      preco: 1199.99
    },
    {
      id: 5,
      title: "Air Jordan Mid Black Noble Red",
      src: "jordan",
      preco: 1199.99
    },
    {
      id: 6,
      title: "Air Jordan Mid Bright Citrus",
      src: "jordan",
      preco: 1199.99
    },
    {
      id: 7,
      title: "Air Jordan Mid Grey Camo",
      src: "jordan",
      preco: 1199.99
    },
    {
      id: 8,
      title: "Air Jordan Mid Carbon Fiber",
      src: "jordan",
      preco: 1199.99
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Topo text={"Frete grátis para todo o Brasil *"} />
      </header>
      <Navbar text={"JordanShoes"} />
      <section>
        <Heading title={"A melhor loja de Jordan"} text={"O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan."} />
      </section>
      <section>
        <div className='textos'>
          <h2>Destaques</h2>
          <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</p>
        </div>
      </section>
      <section className='produtos'>
        {
          produto.map((item) => (
            <Card key={item.id} img={`${item.src}/${item.id}`} title={item.title} preco={item.preco} />
          ))
        }
      </section>
      <Footer />
    </div>
  );
}

export default App;
