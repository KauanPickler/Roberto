import '../App.css';
import membro1 from '../assets/membro1.jpg';
import membro2 from '../assets/membro2.jpg';
import membro3 from '../assets/membro3.jpg';
import membro4 from '../assets/membro4.jpg';
import Nav from './nav';
import Footer from './footer';
function SobreNos() {
  return (
    
    <div className="SobreNos-Container">
        <Nav />
      {/* História da equipe */}
      <section className="Equipe-Historia">
        <h2>Nossa História</h2>
        <p>
          Nossa equipe foi formada pela união de profissionais apaixonados por tecnologia, inovação e soluções criativas.
          Ao longo dos anos, nos especializamos em desenvolvimento de sites, aplicativos e serviços elétricos industriais,
          sempre focando em qualidade, eficiência e parceria com nossos clientes.
        </p>
      </section>

      {/* Membros individuais */}
      <section className="Membros-Equipe">
        <div className="Membro">
          <img src={membro1} alt="Bagatim" className="Foto-Membro" />
          <h3>Bagatim</h3>
          <p>
            Jogador capudo de free fire, tem um xmerda
          </p>
        </div>

        <div className="Membro">
          <img src={membro2} alt="Pífio" className="Foto-Membro" />
          <h3>Pífio</h3>
          <p>
            Designer UI/UX com foco em experiência do usuário. Maria transforma ideias em interfaces intuitivas e modernas.
          </p>
        </div>

        <div className="Membro">
          <img src={membro3} alt="Piclis" className="Foto-Membro" />
          <h3>Piclis</h3>
          <p>
            Engenheiro de software e automação industrial. Carlos cuida das integrações técnicas e infraestrutura dos projetos.
          </p>
        </div>

        <div className="Membro">
          <img src={membro4} alt="João hyeok" className="Foto-Membro" />
          <h3>João hyeok</h3>
          <p>
            Gerente de projetos com forte background em TI. Ana garante que os prazos sejam cumpridos e que a equipe trabalhe unida.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SobreNos;
