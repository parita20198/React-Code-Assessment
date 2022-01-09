import React, { useState, useRef, useEffect, useCallback } from "react";
import useFetch from "../hooks/useFetch";
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';

function Home() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(query, page);
  const loader = useRef(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  const history = useHistory();
  const navigate = () => {
      history.push('/');
  }

  return (
    <React.Fragment>
    <div className="App" style={{marginTop: "20px"}}>
      <div className="row">
        <h2 className="col">Infinite Scroll Contact list</h2>
        <button className="col-1 btn btn-primary btn-block" style={{marginRight:"20px"}} onClick={e=>navigate()}>Logout</button>                
      </div>     
      <div>
        {list.map((book, i) => (
          <div key={i}>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={book.url + "cap"} />
            <Card.Body>
              <Card.Title>{book.author}</Card.Title>
              <Card.Text>
                {book.author}
              </Card.Text>              
            </Card.Body>
          </Card>          
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </div>
    </React.Fragment>
  );
}

export default Home;
