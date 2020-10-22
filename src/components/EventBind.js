import React from 'react'

class EventBind extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: "Goodbye!"
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* <button onClick={this.clickHandler}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind

//1.Binding Event Handler in Render Method: We can bind the handler when it is called in the render method using bind() method.
//2.Binding Event Handler using Arrow Function: This is pretty much the same approach as above, however, in this approach we are binding the event handler implicitly. This approach is the best if you want to pass parameters to your event.
//3.Binding Event Handler in the Constructor: In this approach, we are going to bind the event handler inside the constructor. This is also the approach that is mentioned in ReactJS documentation. This has performance benefits as the events aren’t binding every time the method is called, as opposed to the previous two approaches. Just add the following line in the constructor for this approach,
//4.Binding Event Handler using Arrow Function as a Class Property: This is probably the best way to bind the events and still pass in parameters to the event handlers easily. 
