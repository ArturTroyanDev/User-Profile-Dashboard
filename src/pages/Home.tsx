import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';

function Home() {
  // const location = useLocation();


    return (
      <div className="App">
        <Header title={'Welcome to User Profile Dashboard'}/>
        <main>
        <Link to="/ProfilePage">Go to Profile List</Link>
        </main>
        <Outlet/>
      </div>
    );
  }
  
export default Home;