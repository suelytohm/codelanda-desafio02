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
      img: "img/jordan/1.svg",
      preco: 1199.99,
      link: "https://pag.ae/7ZjDDm1jq",
    },
    {
      id: 2,
      title: "Air Jordan High Zoom Tropical Twist",
      img: "img/jordan/2.svg",
      preco: 1199.99,
      link: "https://donate.stripe.com/test_eVa0336zTbI561W3ce",
    },
    {
      id: 3,
      title: "Air Jordan Retro High Cour Purple",
      img: "img/jordan/3.svg",
      preco: 1199.99,
      link: "https://pag.ae/7ZjDFHyVq",
    },
    {
      id: 4,
      title: "Air Jordan Mid Light Smoke Grey ",
      img: "img/jordan/4.svg",
      preco: 1199.99,
      link: "https://pag.ae/7ZjDDm1jq",
    },
    {
      id: 5,
      title: "Air Jordan Mid Black Noble Red",
      img: "img/jordan/5.svg",
      preco: 1199.99,
      link: "https://pag.ae/7ZjDDm1jq",
    },
    {
      id: 6,
      title: "Air Jordan Mid Bright Citrus",
      img: "img/jordan/6.svg",
      preco: 1199.99,
      link: "https://pag.ae/7ZjDDm1jq",
    },
    {
      id: 7,
      title: "Air Jordan Mid Grey Camo",
      img: "img/jordan/7.svg",
      preco: 1199.99,
      link: "https://pag.ae/7ZjDDm1jq",
    },
    {
      id: 8,
      title: "Air Jordan Mid Carbon Fiber",
      img: "img/jordan/8.svg",
      preco: 1199.99,
      link: "https://pag.ae/7ZjDDm1jq",
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
            <Card key={item.id} img={item.img} title={item.title} preco={item.preco} link={item.link} />
          ))
        }
      </section>
      <Footer />
    </div>
  );
}

export default App;
