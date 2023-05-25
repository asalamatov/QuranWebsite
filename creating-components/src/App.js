import logo from './logo.svg';
import './App.css';
import quranLogo from './img/alquran.png';

function Header(){
  const pi = 3.14;
  return <h1 className='text-3xl font-bold bg-green-500 text-center'>{pi}</h1>;
}

function NavBar(){
  return (
    <>
      <div className='bg-white h-16 shadow-md text-3xl p-3 '>
        <button className="float-left">☰</button>
        <button className="float-right"><span className="text-2xl">Guest</span>☺</button>
      </div>
    </>
  )
}

function PageLeader() {
  return (
    <div>
      <div className='w-full max-w-7xl my-0 mx-auto p-5'>
        <div className='quran-surah-header rounded py-0 px-0 shadow-md text-white'>
          <div className="ql-cover text-center py-8 px-0">
            <div className="text-center">
              <img class="inline-block" src={quranLogo} alt='quran png' /><br/>
              <h1 class="text-2xl mt-3 font-bold">Ыйык Куран</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function App() {
  return (
      <>
      <NavBar />
      <PageLeader />
      </>
  );
}

export default App;
