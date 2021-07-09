import React, { Component } from 'react';
import nave2 from '../images/nave2.png';
import nave from '../images/nave.PNG';

import '../css/App.css';
class Jugar extends Component {
    constructor(props) {

        const keys = {
            a: false,
            d: false,
            [' ']: false
        };
        super(props)
        this.state = {

        }

        this.el = document.createElement('img');
        this.el.src = nave;
        document.body.appendChild(this.el);
        this.el.className = 'nave';
        this.setXNave1(window.innerWidth / 2);
        this.setYNave1(window.innerHeight - 80);


        this.el2 = document.createElement('img');
        this.el2.src = nave2;
        document.body.appendChild(this.el2);
        this.el2.className = 'nave2';
        this.setXNave2(window.innerWidth / 2);
        this.setYNave2(window.innerHeight - 80);

        document.addEventListener('keydown', (event) => {
            keys[event.key] = true;
        });

        document.addEventListener('keyup', (event) => {
            keys[event.key] = false;
        });




        const update = () => {
            //console.log("key : "+ keys[' '])
            if (keys['d']) {
                this.moveRigthNave1();
            }

            if (keys['a']) {
                this.moveLeftNave1();
            }


            if (keys['l']) {
                this.moveRigthNave2();
            }

            if (keys['j']) {
                this.moveLeftNave2();
            }

        };
        setInterval(update, 20);


    }

    moveRigthNave1() {
        this.setXNave1(this.x + 2);
    }

    moveLeftNave1() {
        this.setXNave1(this.x - 2);
    }

    moveRigthNave2() {
        this.setXNave2(this.x + 2);
    }

    moveLeftNave2() {
        this.setXNave2(this.x - 2);
    }



    setXNave1(x) {
        this.x = x;
        this.el.style.left = `${this.x}px`;

    }
    setYNave1(y) {
        this.y = y;
        this.el.style.top = `${this.y}px`;

    }

    setXNave2(x) {
        this.x = x;
        this.el2.style.left = `${this.x}px`;

    }
    setYNave2(y) {
        this.y = y;
        this.el.style.top = `${this.y}px`;

    }


    render() {
        return (
            <div className="fondo">
                <h1>
                    
                </h1>

            </div>
        );
    }
}

export default Jugar;