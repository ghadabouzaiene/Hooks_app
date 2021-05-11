import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ListMovies from "./components/ListMovies";
import AddModal from "./components/AddModal";

class App extends React.Component {
  state = {
    movies: [
      {
        id: uuidv4(),
        title: "the invisible guest",
        description:
          "The Invisible Guest (Spanish: Contratiempo, lit. 'Setback') is a Spanish mystery thriller film written and directed by Oriol Paulo. It was released in Spain on 6 January 2017. The film opened to lukewarm critical response, but was a commercial success, grossing $30.5 million against its €4 million budget.",
        posterUrl:
          "https://th.bing.com/th/id/R51ce75bb09991f36bcbc49691529dc3b?rik=PjuK2L8VUZlMMw&pid=ImgRaw",
        rating: 5,
        year: "2016"
      },
      {
        id: uuidv4(),
        title: "Your Name.",
        description:
          "Mitsuha and Taki are total strangers living completely different lives. But when Mitsuha makes a wish to leave her mountain town for the bustling city of Tokyo, they become connected in a bizarre way. She dreams she is a boy living in Tokyo while Taki dreams he is a girl from a rural town he’s never visited.",
        posterUrl:
          "https://static.cinebel.be/img/movie/poster/full/1017364_fr_your_name_1511451802582.jpg",
        rating: 4,
        year: "2017"
      },
      {
        id: uuidv4(),
        title: "Social Dilemma",
        description:
          "The Social Dilemma is an American docudrama film directed by Jeff Orlowski and written by Orlowski, Davis Coombe, and Vickie Curtis. It goes into depth on how social media's design is meant to nurture an addiction, manipulate people and governments, and spread conspiracy theories and disinformation.",
        posterUrl:
          "https://th.bing.com/th/id/R0c89ffd52457bf5ca1f3bb1fc65d4b59?rik=OvEZ3CW8Db%2fKcw&pid=ImgRaw",
        rating: 3,
        year: "2020"
      },
      {
        id: uuidv4(),
        title: "Soul",
        description:
          "Produced by Pixar and released by Disney , the story follows a middle school music teacher named Joe Gardner, who seeks to reunite his soul and his body after they are accidentally separated, just before his big break as a jazz musician. Soul is the first Pixar film to feature an African-American protagonist.",
        posterUrl:
          "https://th.bing.com/th/id/OIP.bRMEBwz-3oMpbc6P-GiOZQHaLH?pid=ImgDet&rs=1",
        rating: 4,
        year: "2020"
      }
    ]
  };
  addMovie = (newMovie) => {
    this.setState({
      ...this.state,
      movies: [...this.state.movies, newMovie]
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            {" "}
            <span>Saturday Nights </span> Movies{" "}
          </h1>
        </header>

        <ListMovies
          movies={this.state.movies.filter((el) => el.title.includes("a"))}
        />
        <AddModal addMovie={this.addMovie} />
      </div>
    );
  }
}

export default App;
