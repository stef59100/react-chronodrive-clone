import React from 'react'

class TopArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            greet: "Hello",
            user: " Stéphane Joos",
            info: 'xxxx-xxxx-xxx'
        }
    }

    render() {
        return (
            <div className="toparea">
            <div className="container">
                <div className=" row d-flex justify-content-between p-3">
                    <p>{this.state.greet} {this.state.user}</p>
                    <p>{this.state.info}</p>
                    </div>
            </div>
                </div>


        )
    }

}
export default TopArea
