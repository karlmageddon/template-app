import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Container, Button, Header, Icon, List } from 'semantic-ui-react'

const App = () => {
  return(
    <Container textAlign='center'>
      <Header as='h2' icon>
        <Icon name='thumbs up outline' />
        It's A Template App
        <Header.Subheader>This baby's got Express, React, React Router, and Semantic UI going for it</Header.Subheader>
      </Header>
          <List>
            <List.Item>
              <Button basic color='teal'>
                <Link to="/">Home</Link>
              </Button>
            </List.Item>
            <List.Item>
              <Button basic color='brown'>
                <Link to="/test/">Test</Link>
              </Button>
            </List.Item>
          </List>
        <Route path="/" exact component={Home} />
        <Route path="/test/" component={Test} />
    </Container>
  )
}

const Home = () => (
  <Container text>
    This is a Heroku-deployable template app. Click 'Test' to make a request to the Express backend.
  </Container>
)

class Test extends React.Component {
  state = { text: '' }

  getTest = () => {
    fetch('/api/test')
      .then(res => res.json())
      .then(payload => this.setState({ text: payload.text }));
  }

  componentDidMount() {
    this.getTest();
  }

  render() {
    const { text } = this.state;

    return(
      <Container text>
        <Header as='h3'>
          <Icon name="smile outline" /> {text}
        </Header>
      </Container>
    )
  }
}

export default App;
