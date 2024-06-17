import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => { 
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Tecnología</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Opciones
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <Card
              img="marshall2.JPG"
              description="Audífonos Marshall Motif A.N.C."
              price="70.000"
              inventory="6"
            />
            {/* Card */}
            <Card
              img="Karaoke.JPG"
              description="Máquinas de Karaoke con cambio de voces"
              price="22.000"
              inventory="13"
            />
            {/* Card */}
            <Card
              img="Tatuaje.JPG"
              description="Kits de Tatuajes"
              price="60.000"
              inventory="9"
            />
            {/* Card */}
            <Card
              img="Afeitadora.JPG"
              description="Afeitadoras Eléctrica Profesional"
              price="20.000"
              inventory="15"
            />
            {/* Card */}
            <Card
              img="Colmi.AVIF"
              description="Relojes COLMI P71"
              price="20.000"
              inventory="10"
            />
            {/* Card */}
            <Card
              img="lenovoxt80.avif"
              description="Audífonos XT80"
              price="20.000"
              inventory="4"
            />
            {/* Card */}
            <Card
              img="lenovolp75.jpg"
              description="Audífonos LP75"
              price="30.000"
              inventory="8"
            />
            {/* Card */}
            <Card
              img="audifonosm25.avif"
              description="Audífonos M25"
              price="15.000"
              inventory="2"
            />
            {/* Card */}
            <Card
              img="lenovoht38.jpg"
              description="Audífonos HT38"
              price="15.000"
              inventory="3"
            />
            {/* Card */}
            <Card
              img="m19.jpg"
              description="Audífono M19"
              price="10.000"
              inventory="1"
            />
            {/* Card */}
            <Card
              img="m90.jpg"
              description="Audífono TWS M90"
              price="10.000"
              inventory="4"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
