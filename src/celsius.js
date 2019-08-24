import React from 'react';

class Celsius extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.entry = React.createRef();
    }

    handleChange(e) {
        this.props.onTempChange(e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.entry.current.value);
    }
    
    render() {
        return (
            <div>
                The Celsius temp is {this.props.temperature}
                <input type="text" ref={this.entry} value={this.props.temperature} onChange={this.handleChange} />
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Update</button>
            </div>
        );
    }
}

export { Celsius };