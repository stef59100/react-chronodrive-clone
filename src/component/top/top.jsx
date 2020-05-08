import React from 'react';
import './top.scss';

class TopArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            greet: "Bonjour",
            user: {
                name: "John Doe",
                id: 225
            }

        }
    }
    componentDidMount() {
        this.props.callb(this.state.user)
    }

    render() {
        return (
            <div className="toparea">
                <div className="container">
                    <div className=" row d-flex justify-content-between p-3">
                        <p className="toparea__greet">{this.state.greet} {this.state.user.name}</p>
                        <div className="toparea__info">
                            <span>{this.props.storeinfo.message} {this.props.storeinfo.week} / {this.props.storeinfo.sunday}</span>
                        </div>
                        <div className="toparea__phone">Un p'tit coup de main ? {this.props.storephone}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TopArea
