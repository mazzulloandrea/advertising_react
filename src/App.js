import { useEffect, useState } from 'react';
import './App.css';
import CloseButton from './components/CloseButton';
import Blur from './components/Blur';
import Quiz from './components/Quiz';

function App() {
  const [closeAnimation, setCloseAnimation] = useState(null);

  useEffect(() => { }, []);

  useEffect(() => {
    // if (closeAnimation && closeAnimation !== 'open') {
    //   console.log(closeAnimation);
    // }
    if (closeAnimation === 'close') {
      const anim = document.getElementById("animation");
      anim.classList.toggle("exit");
      anim.onanimationend = (evt => evt.target.style.right = '-100vw')
    }
  }, [closeAnimation]);

  return (
    <div id="app">
      <div id="animation" className="container" onAnimationEnd={() => setCloseAnimation('open')}>
        <div className="closeContainer" >
          <CloseButton closeAnimation={() => setCloseAnimation('close')} />
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
