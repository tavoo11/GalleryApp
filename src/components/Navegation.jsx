import React from 'react';
import  {Link } from 'react-router-dom';
import Paisaje1 from './Paisaje1';
import Paisaje2 from './Paisaje2';
import Paisaje3 from './Paisaje3';
import Paisaje4 from './Paisaje4';
import Paisaje5 from './Paisaje5';
import Paisaje6 from './Paisaje6';
import Paisaje7 from './Paisaje7';
import Paisaje8 from './Paisaje8';
import Paisaje9 from './Paisaje9';
import Paisaje10 from './Paisaje10';

const Navegation = () => {
  return (
    <div className='navigation'>
        <Link to="/images1">
            <figure>
                <Paisaje1/>
                <figcaption>Imagen 1</figcaption>
            </figure>
        </Link>
        <Link  to="/images2">
            <figure>
                <Paisaje2/>
                <figcaption>Imagen 2</figcaption>
            </figure>
        </Link>
        <Link  to="/images3">
            <figure>
                <Paisaje3/>
                <figcaption>Imagen 3</figcaption>
            </figure>
        </Link>
        <Link  to="/images4">
            <figure>
                <Paisaje4/>
                <figcaption>Imagen 4</figcaption>
            </figure>
        </Link>
        <Link  to="/images5">
            <figure>
                <Paisaje5/>
                <figcaption>Imagen 5</figcaption>
            </figure>
        </Link>
        <Link  to="/images6">
            <figure>
                <Paisaje6/>
                <figcaption>Imagen 6</figcaption>
            </figure>
        </Link>
        <Link  to="/images7">
            <figure>
                <Paisaje7/>
                <figcaption>Imagen 7</figcaption>
            </figure>
        </Link>
        <Link  to="/images8">
            <figure>
                <Paisaje8/>
                <figcaption>imagen 8</figcaption>
            </figure>
        </Link>
        <Link  to="/images9">
            <figure>
                <Paisaje9/>
                <figcaption>Imagen 9</figcaption>
            </figure>
        </Link>
        <Link  to="/images10">
            <figure>
                <Paisaje10/>
                <figcaption>Imagen 10</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navegation