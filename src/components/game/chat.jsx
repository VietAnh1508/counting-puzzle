import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Panel } from "react-bootstrap";
import "./chat.css";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.messagesContainer = React.createRef();
  }

  getInitialState = () => {
    return {
      messages: [
        {
          player: "Bot",
          content: "Welcome to counting puzzle"
        },
        {
          player: "Bot",
          content: "I am your oponent, we will count one by one from 1 to 32"
        },
        {
          player: "Bot",
          content: "Who reach the goal will be the winner"
        },
        {
          player: "Bot",
          content: "Now is your turn"
        }
      ],
      currentCount: 0
    };
  };

  componentWillReceiveProps(nextProps) {
    const { userCount, isEndGame, isRestart } = nextProps;
    let currentCount = this.renderUserMessages(userCount);
    let messages = this.renderBotMessages(userCount, currentCount);

    if (isEndGame) {
      let mess = {
        player: "Bot",
        content: 'You lose :">'
      };

      messages.push(mess);
    }

    if (isRestart) {
      this.setState(this.getInitialState());
    } else {
      this.setState({ messages });
    }
  }

  renderUserMessages = userCount => {
    let { messages, currentCount } = this.state;
    let mess = [];

    for (let i = 1; i <= userCount; ++i) {
      mess.push({
        player: "User",
        content: ++currentCount
      });
    }

    messages.push(...mess);
    this.setState({ messages });

    return currentCount;
  };

  renderBotMessages = (userCount, currentCount) => {
    let { messages } = this.state;
    let mess = [];

    let maxStep = this.props.maxCount + this.props.minCount;
    for (let i = 1; i <= maxStep - userCount; ++i) {
      mess.push({
        player: "Bot",
        content: ++currentCount
      });
    }

    messages.push(...mess);
    this.setState({ currentCount });

    this.props.checkStatusGame({ currentCount });

    return messages;
  };

  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    const messagesContainer = ReactDOM.findDOMNode(
      this.messagesContainer.current
    );
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  renderChatContent = () => {
    return this.state.messages.map((message, index) => {
      return (
        <li key={index}>
          <b>{message.player}: </b>
          {message.content}
        </li>
      );
    });
  };

  render() {
    return (
      <Panel
        bsStyle="primary"
        className="chat-box"
        ref={this.messagesContainer}
      >
        <Panel.Body>
          <ul>{this.renderChatContent()}</ul>
        </Panel.Body>
      </Panel>
    );
  }
}

export default Chat;
