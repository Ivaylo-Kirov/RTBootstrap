import React from 'react';

class Fahrenheit extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTempChange(e.target.value);
    }
    
    render() {
        return (
            <div>
                The Fahrenheit temp is {this.props.temperature}
                <input type="text" value={this.props.temperature} onChange={this.handleChange} />
            
            </div>
        );
    }
}

export { Fahrenheit };