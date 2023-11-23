import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './layouts/Footer'
import Router from './router/Router';
import Header from './layouts/Header'



function App() {
  return (
    <div >
       <Header/>
      <Router/>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
