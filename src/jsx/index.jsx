class CourseTime {
  constructor(startAt) {
    this.startAt = new Date(startAt)
  }

  currentTime() {
    return moment()
  }

  startTime() {
    return moment(this.startAt)
  }

  formatedStartTime() {
    return this.startTime().format("YYYY-MM-DD HH:mm:ss")
  }

  diff() {
    let current = this.currentTime().toDate()
    let start = this.startAt
    return current.getTime() - start.getTime()
  }

  getHour() {
    return parseInt(this.diff() / (60 * 60 * 1000))
  }

  diffTime() {
    return moment(this.diff())
  }
}

let course = new CourseTime("2015-12-07T00:50:00")

class Separator extends React.Component {
  render() {
    return (
      <span>:</span>
    )
  }
}

class Second extends React.Component {
  render() {
    return (
      <span>{this.props.second}</span>
    )
  }
}

class Minute extends React.Component {
  render() {
    return (
      <span>{this.props.minute}</span>
    )
  }
}

class Hour extends React.Component {
  render() {
    return (
      <span>{this.props.hour}</span>
    )
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hour: course.getHour(),
      minute: course.diffTime().minute(),
      second: course.diffTime().second()
    }
  }

  componentDidMount() {
    setInterval(function(){
      this.setState({
        hour: course.getHour(),
        minute: course.diffTime().minute(),
        second: course.diffTime().second()
      })
    }.bind(this),1000)
  }

  render() {
    return (
    <div className="timer">
      <Hour hour={this.state.hour}/>
      <Separator/>
      <Minute minute={this.state.minute}/>
      <Separator/>
      <Second second={this.state.second}/>
    </div>
    )
  }
}

class StartTime extends React.component {
  render() {
    return (
      <div className="start-time">
        { course.formatedStartTime() }
      </div>
    )
  }
}

let Container = React.createClass({
  render: function() {
    return (
    <div>
      <StartTime/>
      <Timer/>
    </div>
    )
  }
})

React.render(
  <Container/>,
  document.getElementById('container')
)
