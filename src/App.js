import logo from './logo.svg';
import './App.css';
import WordCounter from './components/countWord';
function App() {
  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <WordCounter/> 
    </div>
  );
}

export default App;
echo "# t1" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/srik4442/t1.git
git push -u origin main