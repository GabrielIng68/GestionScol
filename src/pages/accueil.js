import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Bandeau extends React.Component {
    render () {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Mon Site</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Accueil</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">À Propos</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


function Accueil() {
  return (
    <div>
      <Header/>
      <Bandeau/>
    </div>
  );
}

export default Accueil;