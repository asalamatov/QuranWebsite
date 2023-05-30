import quranLogo from '../img/alquran.png';


export default function PageHeader() {
    return (
      <div>
        <div className='w-full max-w-7xl my-0 mx-auto p-5'>
          <div className='quran-surah-header rounded py-0 px-0 shadow-md text-white'>
            <div className="text-center ql-cover py-8 px-0">
              <img className="inline-block" src={quranLogo} alt='quran png' /><br/>
              <h1 className="text-2xl mt-3 font-bold">Ыйык Куран</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }