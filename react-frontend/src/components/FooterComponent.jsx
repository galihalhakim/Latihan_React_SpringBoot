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
                <footer className="footer bg-dark text-center text-white">
                    <span className="text-muted">All Rights Reserved 2021</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;