import React, {Component} from 'react';
import './App.css';
import {Card, Icon, Image} from 'semantic-ui-react'
import {Button} from 'semantic-ui-react'


const github_user="http://api.github.com/users/Delvric"



class App extends Component {
  state = {
    user: {},
    active: false
  }

  card = () => {
  console.log('Button clicked')

  if(this.state.active === true){
    this.setState({active: false})
  }

  else {
    fetch(github_user)
    .then(response => response.json())
    .then(user => {
      this.setState({user, active: true})
    })
  }
}
  render() {
    return (
<React.Fragment>
  {console.log(this.state.user)}
  <Button onClick = {this.card}> click me</Button>
  {this.state.active === true &&(
    <Card>
    <Image src = {this.state.user.avatar_url} wrapped ui = {false} />
    <Card.Content>
      <Card.Header>{this.state.user.name}</Card.Header>
      <Card.Meta>
        <span className = "date">Joined in 08/2019</span>
      </Card.Meta>
      <Card.Description>
        {this.state.user.bio}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name = "user" />
        Followers: {this.state.user.followers}
    </Card.Content>
  </Card>
  )}
</React.Fragment>
  );
}
}

    

export default App;
