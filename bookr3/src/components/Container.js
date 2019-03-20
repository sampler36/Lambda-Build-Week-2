import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Books from "./Books";
import BookForm from "./BookForm";
import Spinner from "./Spinner";
import LoginForm from "./Login";

const StyledContainer = styled.div`
  padding: 40px;
  background-color: black;
  nav {
    
    a {
      margin: 10% 10% 10%;
      color:white;
     text-decoration: none;
      min-height: 10vh;
      display: inline;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
     
    }

    }
    background-color:black;
   
  }
`;

// 1- use react router to break the app into /books and /login paths.
// 2- create links to these paths.
// 3- protect the books path to check localStorage for userToken.
export default function Container() {
  return (
    <Router>
      <StyledContainer>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/login">Login</Link>
        </nav>

        <Route
          path="/books"
          render={() => {
            if (localStorage.getItem("userToken")) {
              return (
                <Spinner>
                  <Books />
                  <BookForm />
                </Spinner>
              );
            }
            return <Redirect to='/login' />;
          }}
        />
        <Route path="/login" component={LoginForm} />
      </StyledContainer>
    </Router>
  );
}
