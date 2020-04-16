import React from 'react';

class StoreItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: "Bondues",
            currentStoreName: this.props.name

        }

    }
    handleOptionChange = e => {
        this.setState({
            selectedOption: e.target.value,
            currentStoreName: e.target.value
        })

    }

    render() {
        return (
            <div className="form-check">
                
                    <input type="radio"
                        name="options"
                        id={`option_${this.props.id}`}
                        className="form-check-input"
                        value={this.props.name}
                        checked={this.state.selectedOption === this.props.name}
                        onChange={this.handleOptionChange}
                    />
                   <label className="form-check-label" htmlFor={`option_${this.props.id}`}>
                    <span>{this.props.cp}</span> - <span>{this.props.name}</span>
                </label>
            </div>

        )
    }

}

export default StoreItem