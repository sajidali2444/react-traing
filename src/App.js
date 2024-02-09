import { Route, Routes } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import Home from './components/Home';
import NotFoundPage from './components/NotFound';
import Students from './components/Students';

export default function App() {
  return (
    <div>
      <header>
        <nav>
          <ul style={{ display: 'flex', gap: '10px' }}>
            <li style={{ listStyle: 'none' }}>
              <a href="/">Home</a>
            </li>
            <li style={{ listStyle: 'none' }}>
              <a href="/students">Students</a>
            </li>
            <li style={{ listStyle: 'none' }}>
              <a href="/add"> Add Student</a>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/add/:studentId?" element={<AddStudent />} />
        {/* <Route path="/edit/:studetId/:rollNumber?" element={<EditStudent />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
