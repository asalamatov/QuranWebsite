export default function SurahsList() {
    const list = async function() {
      const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/kir-shamsaldinhakim.json");
      const jsonData = await response.json();
      return jsonData
    }
    const a_list = list()
    return (
      <>
        <div className='w-full max-w-7xl my-0 mx-auto p-5 '>
          <div className=' rounded py-0 px-0 shadow-md bg-white' style={{color: '#00bcd4'}}>
            <div className="text-center py-6 px-0">
                <div className="text-xl font-bold">
                    <a href="#" className="py-6 flex-row">
                        <div class="flex- font-bold w-10 text-center inline-block">1</div>
                        <div class="inline-block">
                            <div>Китепти Ачуучу</div>
                        </div>
                        <div>
                            الفاتحة
                        </div>
                    </a>
                </div>
            </div>
            
          </div>
        </div>
        <div className='w-full max-w-7xl my-0 mx-auto p-5 '>
          <div className=' rounded py-0 px-0 shadow-md bg-white' style={{color: '#00bcd4'}}>
            <div className="text-center py-6 px-0">
                <div className="text-xl font-bold">
                    <a href="#" className="py-6 flex-row">
                        <div class="flex- font-bold w-10 text-center inline-block">1</div>
                        <div class="inline-block">
                            <div>Китепти Ачуучу</div>
                        </div>
                        <div>
                            الفاتحة
                        </div>
                    </a>
                </div>
            </div>
            
          </div>
        </div>
      </>
    )
  }