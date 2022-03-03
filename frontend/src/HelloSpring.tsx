import React from 'react';

type MyProps = { };
type MyState = { data: string };
class HelloSpring extends React.Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);

        this.state = {
            data: ""
        }
    }
    componentDidMount() {
        const apiURL = 'http://localhost:8080/message';
        fetch(apiURL)
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    data: json.message
                })
            })
    }
    render() {
        return (
            <p>
                <div>
                    It worked, this is the message from the backend: <br/>
                    {this.state.data}
                </div>
            </p>

        )
    }
}

export default HelloSpring;