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
console.log(course.getHour())
// console.info(current)

let Separator = React.createClass({
  render: function() {
    return (
      <span>:</span>
    )
  }
})

let Second = React.createClass({
  getDefaultProps: function(){
    return {second: course.diffTime().second()}
  },
  render: function(){
    return (
      <span>{this.props.second}</span>
    )
  }
})

let Minute = React.createClass({
  getDefaultProps: function(){
    return {minute: course.diffTime().minute()}
  },
  render: function(){
    return (
      <span>{this.props.minute}</span>
    )
  }
})

let Hour = React.createClass({
  getDefaultProps: function(){
    return {hour: course.getHour()}
  },
  render: function(){
    return (
      <span>{this.props.hour}</span>
    )
  }
})

let Timer = React.createClass({

  render: function() {
    return (
    <div>
      <Hour/>
      <Separator/>
      <Minute/>
      <Separator/>
      <Second/>
    </div>
    )
  }
})

let StartTime = React.createClass({
  render: function() {
    return (
      <div className="start-time">
        { course.formatedStartTime() }
      </div>
    )
  }
})

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
