import './App.scss';
import { Footer } from './components/Footer';
import { PaginationLayout } from './components/Pagination/PaginationLayout';

export const App: React.FC = () =>
  <>
    <PaginationLayout />
    <Footer />
  </>;
