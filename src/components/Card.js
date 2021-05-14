import React from "react" 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './ListMovies.css'
import StarRating from "react-rating-stars-component"

const ListMovies = (props) => {
    return (
      <div className="listMovies">
        {props.movies.map((el, i) => (
          <div className="movie">
            <Card key={i} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={el.posterUrl}
                style={{
                  height: "400px",
                  width: "286px",
                  borderRadius: "5px",
                  boxShadow: "0px 2px 4px 2px grey"
                }}
              />
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text style={{ fontSize: "10px" , fontFamily:"cursive"}}>
                  {el.description}
                </Card.Text>
                <Card.Text style={{ fontSize: "15px" }}>
                  {" "}
                  Year of Release : {el.year}{" "}
                </Card.Text>
                <Card.Text style={{ fontSize: "20px" }}>
                  {" "}
                  <StarRating
                    name="rate"
                    starCount={5}
                    value={el.rating}
                  ></StarRating>{" "}
                </Card.Text>
                <Button variant="primary">Download</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  };
  export default ListMovies;