import './App.css';
import CloseButton from './components/closeButton';
import Blur from './components/blur';
import Quiz from './components/quiz';

function App() {

  function close() {
    const anim = document.getElementById("animation");
    if (anim.classList.value.includes('exit')) {
      return;
    } else {
      anim.classList.toggle("exit");
      anim.onanimationend = (evt => evt.target.style.right = '-25vw')
    }
  };

  return (
    <div id="app">
      <div id="animation" className="container">
        <div className="closeContainer" >
          <CloseButton closeAnimation={(evt) => close()} />
        </div>
        <div className="blurSection" onClick={() => window.open("http://www.google.it")}>
          <Blur />
        </div>
        <div className="quizSection" onClick={() => window.open("http://www.google.it")}>
          <Quiz />
        </div>
      </div>
    </div>
  );
}

export default App;
