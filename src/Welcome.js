import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import ShoppingCard from './Component/ShoppingCard/ShoppingCard';


function Welcome() {
  return (
    <>
      <Header />
      <Content/>
      <ShoppingCard />
      <Footer />
    </>
  );
}

export default Welcome;
