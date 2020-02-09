import React from 'react'

class AboutProfileAge extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 0,
        }
    }
    componentDidMount() {
        const myBirthday = new Date(1994, 6, 17)
        setInterval(() => {
            const date = new Date()
            this.setState({
                age: (date - myBirthday) / 31536000000
            })
        }, 1)
    }
    render() {
        return (
            (this.state.age.toString()).substring(0, 15)
        )
    }
}

export default AboutProfileAge