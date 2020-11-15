import './App.css';
import Pages from './pages';
import React, {useEffect, useState} from 'react';

function App() {
    const [user, setUser] = useState(null);
    useEffect(() =>{
      fetch('https://gitconnected.com/v1/portfolio/chrisjabb21')
        .then(res => res.json())
        .then(user => {
          setUser(user);
        });

    }, []);

    if (!user) {
      return <div />;
    }

    return <Pages user={user} />;
}

export default App;
