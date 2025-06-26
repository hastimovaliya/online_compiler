import React from 'react'
// import Header from '../Header';
import LandingPage from '../HomepageScreen/LandingPage';
import CodingPage from '../HomepageScreen/CodingPage'; 
import ImageCod from '../../assets/JavaScript frameworks-rafiki.svg'
import HtmlCod from '../../assets/Website Creator-amico.svg'
import Pycod from '../../assets/Man reading-pana.svg'
import SpeechCod from '../../assets/Speech to text-bro.svg'
import CodJava from '../../assets/Coding-bro.svg'
import ImagCod from '../../assets/Writing on the wall-rafiki.svg'
// import MoreCod from '../../assets/Sponsor-rafiki.svg';
import MoreCod from '../../assets/paralympic winners podium-pana.svg';
import Feedback from '../HomepageScreen/Feedback';
import Footer from '../HomepageScreen/Footer';

function Homepage() { 

  const width2 = window.outerWidth;

  return (
    <>
    <div className="smallScreen">
      <mark>The Screen is Visible with width more than 250px <br/><br/><hr/><br/>Screen Size: {width2}px</mark>
    </div>
    <div className="container">
        {/* <Header/>  */}
        <LandingPage/> 
        <CodingPage 
          
          title="JavaScript Compiler"
          con="Run JavaScript"
          info={<><mark>Learn</mark>, <mark>build</mark>, and <mark>test</mark> your JavaScript logic in real time — no setup, just code with our smart <mark>JS Text Editor</mark> 😃
</>} 
          path='/editor/javaScript' 
          image={ImageCod}
          // poss={{'flexDirection':'row'}}
          
        />
        <CodingPage
          title="Python Compiler"
          con="Run Python"
          path="/editor/python"
          info={<>Unlock your inner dev! <mark>Think smart, code smart</mark> with <mark>Python</mark> in our no-hassle Web IDE 😍</>
}
          image={Pycod}
          // poss={{'flexDirection':'row-reverse'}}
          uniId={"uni"}
        />
        <CodingPage
          title="Dart Compiler"
          path='/editor/java'
          con="Run Dart"
          info={<>
  <mark>Dart</mark> is the engine behind modern apps — made by <mark>Google</mark> and supercharged with <mark>Flutter</mark>.  
  Fuel your <mark>knowledge</mark> in our lightning-fast <mark>Dart Code Editor</mark> 🙌
</>
}
          image={CodJava}
          // poss={{'flexDirection':'row'}}
        />
        <CodingPage
          title="Real-Time Website Editor"
          path="/editor/html"
          con="Try Web Editor"
          info={<>
           Still hitting <mark>Ctrl + R </mark>to see changes? Nah. Our <mark>Live Preview's  got you</mark>— code it, see it, no clicks 😎
          </>}
          image={HtmlCod}
          // poss={{'flexDirection':'row-reverse'}}
          uniId={"uni"}
        />
        <CodingPage
          title="Image To Text"
          path='/editor/image2text'
          image={ImagCod}
          con="Get Started"
          info={<>
            Drop a Pic. <mark>Boom — It's Text!</mark> No more manual typing — try <mark>Image to Text </mark>😆

          </>}
          // poss={{'flexDirection':'row'}}
        />
        <CodingPage
          title="Voice To Text"
          path='/editor/voice2text'
          image={SpeechCod}
          info={<>
           <mark>"Alexa, take notes."</mark> Oops — we mean our <mark>Voice to Text</mark> tool 😉

          </>}
          con="Get Started"
          // poss={{'flexDirection':'row-reverse'}}
          uniId={"uni"}
        />

        <Feedback/>
        <Footer/>
        {/* <a href="http://" target="_blank" rel="noopener noreferrer"></a> */}
    </div>
    </>
  )
}

export default Homepage