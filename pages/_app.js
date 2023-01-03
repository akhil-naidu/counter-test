import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flexGrow: '1' }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
