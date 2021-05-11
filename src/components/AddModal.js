import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import AddMovie from "./AddMovie";
import { v4 as uuidv4 } from "uuid";

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      newMovie: {
        id: uuidv4(),
        title: "",
        description: "",
        posterUrl: "",
        rating: 1,
        year: ""
      }
    };
  }

  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = (event) => {
    this.setState({
      ...this.state,
      newMovie: {
        ...this.state.newMovie,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          +
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{ textAlign: "center" }}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              You have some other Suggestions? Add Here :{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label className="input"> Title :</label>
                <input type="text" name="title" onChange={this.handleChange} />
              </div>
              <div>
                <label className="input"> Description : :</label>
                <input
                  type="text"
                  name="description"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label className="input"> Poster :</label>
                <input
                  type="text"
                  name="posterUrl"
                  alt=""
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label className="input"> Rate :</label>
                <input type="text" name="rating" onChange={this.handleChange} />
              </div>
              <div>
                <label className="input"> Year of Release :</label>
                <input type="text" name="year" onChange={this.handleChange} />
              </div>
            </div>
          </Modal.Body>
          <Button onClick={() => this.props.addMovie(this.state.newMovie)}>
            Submit
          </Button>
        </Modal>
      </>
    );
  }
}

export default AddModal;
