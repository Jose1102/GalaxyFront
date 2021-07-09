import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">Página realizada por Jose Castro</span>
                    <a href="https://github.com/Jose1102">
                        <img align="center" alt="Prashant's Github" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
                    </a>

                </footer>

                

            </div>
        );
    }
}

export default FooterComponent;