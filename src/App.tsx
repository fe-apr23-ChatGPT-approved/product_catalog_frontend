import React, { useState } from 'react';
import './App.scss';
import './Components/Header/Header.scss';
import './Components/Menu/Menu.scss';
import { Header } from './Components/Header/Header';
import { Menu } from './Components/Menu/Menu';

export const App: React.FC = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="starter">
      <Header menu={menu} setMenu={setMenu} />
      {menu && <Menu />}
    </div>
  );
};
