import Nav from './nav';
import Servicos from './servicos';
import Mostruario from './mostruario';
import Footer from './footer';
import Informacoes from './informacoes';
import '../App'
function Home() {
  return (
    <div className="Container-All">
        <Nav />
     <Mostruario />
      <Informacoes />
      <Servicos />
      <Footer />
    </div>
  );
}
export default Home;