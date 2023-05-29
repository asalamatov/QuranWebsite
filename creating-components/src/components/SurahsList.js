export default function SurahsList() {
    const list = async function() {
      const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/kir-shamsaldinhakim.json");
      const jsonData = await response.json();
      return jsonData
    }
    return (
      <>
        <ul>
          <li>{list}</li>
          {/* {list.map((k) => (
            <li key={k}>
              {k}
            </li>
          ))} */}
        </ul>
      </>
    )
  }