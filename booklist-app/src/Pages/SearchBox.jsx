import React, {useState} from "react";

export const Home = () =>{
const getPayload = {
    "pagination": {
        "sortDirection": "DESC",
        "totalPages": 13,
        "pageSize": 25,
        "currentPage": 1,
        "totalElements": 308
    },
    "data": [
        {
            "author": "asdasd",
            "country": "asdasd",
            "language": "asdas",
            "link": "asdasd.shdd.jdh",
            "pages": "2343",
            "title": "ABCDEF",
            "year": "3423",
            "id": 292
        },
        {
            "author": "1212",
            "country": "asda",
            "language": "asda",
            "link": "asdas.ahgs.jasdh",
            "pages": "232",
            "title": "HarryPotter",
            "year": "3000",
            "id": 290
        },
        {
            "author": "Akshay",
            "country": "India",
            "language": "English",
            "link": "www.abhipas.com",
            "pages": "678",
            "title": "AKshay1",
            "year": "2562",
            "id": 19
        },
        {
            "author": "Akshay",
            "country": "India",
            "language": "English",
            "link": "www.abhipas.com",
            "pages": "678",
            "title": "AKshay2",
            "year": "2562",
            "id": 99
        },
        {
            "author": "dancer",
            "country": "dancer",
            "language": "Sukanta",
            "link": "Sukanta",
            "pages": "201",
            "title": "Chintu",
            "year": "2345",
            "id": 237
        },
        {
            "author": "sdasd",
            "country": "dasdas",
            "language": "dasdasd",
            "link": "asdasd",
            "pages": "2323",
            "title": "asdasdas",
            "year": "2323",
            "id": 293
        },
        {
            "author": "jeel12",
            "country": "jeel1",
            "language": "jeel1",
            "link": "jeel1",
            "pages": "222",
            "title": "jeel1",
            "year": "2222",
            "id": 12
        },
        {
            "author": "1212",
            "country": "sadasd",
            "language": "erewr",
            "link": "wer",
            "pages": "22",
            "title": "sdasdas",
            "year": "22",
            "id": 291
        },
        {
            "author": "andru11",
            "country": "andru11",
            "language": "andru11",
            "link": "andru11",
            "pages": "2017",
            "title": "Women and Mens",
            "year": "219",
            "id": 222
        },
        {
            "author": "dabd",
            "country": null,
            "language": null,
            "link": null,
            "pages": "20258",
            "title": "dabd",
            "year": "2056",
            "id": 232
        },
        {
            "author": "qwerty",
            "country": null,
            "language": null,
            "link": null,
            "pages": "2654",
            "title": "qwerty",
            "year": "2056",
            "id": 233
        },
        {
            "author": "jeel",
            "country": "India",
            "language": "english",
            "link": "ww.oneday.com",
            "pages": "45",
            "title": "one day",
            "year": "2023",
            "id": 1
        },
        {
            "author": "NewTesting",
            "country": "UK",
            "language": "English",
            "link": "www.google.com",
            "pages": "250",
            "title": "newtesting",
            "year": "2023",
            "id": 257
        },
        {
            "author": "hashsmishags",
            "country": "england",
            "language": "english",
            "link": "ww.footer.com",
            "pages": null,
            "title": "hashshs",
            "year": "2023",
            "id": 96
        },
        {
            "author": "ksr",
            "country": "ind",
            "language": "ksr",
            "link": "hellksr",
            "pages": "141",
            "title": "ksr",
            "year": "2023",
            "id": 226
        },
        {
            "author": "new",
            "country": "ind",
            "language": "new",
            "link": "hellnew",
            "pages": "141",
            "title": "new",
            "year": "2023",
            "id": 227
        },
        {
            "author": "dsa",
            "country": "ind",
            "language": "dsa",
            "link": "helldsa",
            "pages": "141",
            "title": "dsa",
            "year": "2023",
            "id": 229
        },
        {
            "author": "BD",
            "country": "BD",
            "language": "BD",
            "link": "BD.com",
            "pages": "2024",
            "title": "BDs",
            "year": "2023",
            "id": 239
        },
        {
            "author": "ritika",
            "country": "India",
            "language": "christian",
            "link": "google.com",
            "pages": "500",
            "title": "ritika",
            "year": "2023",
            "id": 240
        },
        {
            "author": "lofllfd",
            "country": "germany",
            "language": "english",
            "link": "www.germany.com",
            "pages": null,
            "title": "testubf",
            "year": "2022",
            "id": 106
        },
        {
            "author": "Sharad",
            "country": "Indi",
            "language": "en",
            "link": "shrd@1.com",
            "pages": "99",
            "title": "Myaaa",
            "year": "2022",
            "id": 109
        },
        {
            "author": "Sharad",
            "country": "Indi",
            "language": "en",
            "link": "shrd@1.com",
            "pages": "99",
            "title": "Myaa",
            "year": "2022",
            "id": 110
        },
        {
            "author": "mmana",
            "country": "amamn",
            "language": "maman",
            "link": "maman@1.com",
            "pages": "99",
            "title": "maamn",
            "year": "2022",
            "id": 111
        },
        {
            "author": "ytx",
            "country": "xx",
            "language": "xx",
            "link": "xx@1.com",
            "pages": "99",
            "title": "xx",
            "year": "2022",
            "id": 116
        },
        {
            "author": "mmasna",
            "country": "amsamn",
            "language": "masman",
            "link": "mamsan@1.com",
            "pages": "99",
            "title": "masamn",
            "year": "2022",
            "id": 117
        }
    ]
};

const [searchBook, setSearchBook] = useState("");
const [message, setMessage]= useState('');
const [searchResult, setSearchResult]= useState([]);
const [currentPage, setCurrentPage] = useState(1);
const pageSize = 5;

const handleSubmit = (e) =>{
    e.preventDefault();
    setMessage(`Results for Book Search: ${searchBook}` );
    console.log("result:", searchBook);

    const filteredResults = getPayload.data.filter((book)=>book.title.toLowerCase().includes(searchBook.toLowerCase()));
    setSearchResult(filteredResults);
    setCurrentPage(1);
}

    const startIndex = (currentPage-1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentResults = searchResult.slice(startIndex, endIndex);

 return(
    <>
        <div className="book-container">
            <form className="book-search-container"  onSubmit={handleSubmit}>
                <input type="text" div="searchbar" className="searchbar" placeholder="Search Book Name from Title..." onChange={(e)=>setSearchBook(e.target.value)} value={searchBook}/>
                <button type="submit" className="search-submit">Search</button>
            </form>
            {
                message && (
                    <>
                    <p>{message}</p>
                    <div className="book-result-container">
                    <table style={{width:"100%"}}>
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentResults.map((book, index)=>(
                                <tr key={book.id}>
                                    <td>{startIndex + index + 1 }</td>
                                    <td>{book.title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                        <div className="pagination-container">
                            {Array.from(
                                { length: Math.ceil(searchResult.length / pageSize) },
                                (_, index) => (
                                    <button
                                        key={index}
                                        className={currentPage === index + 1 ? "active" : ""}
                                        onClick={() => setCurrentPage(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                    </>
                )
            }
        </div>
    </>
 )   
}