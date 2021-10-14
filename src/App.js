import "./App.css";
import { Component } from "react";
import Section from "./component/Section";
import FeedbackOptions from "./component/FeedbackOptions";
import Statistics from "./component/Statistics";
import Notification from "./component/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = (option) => {
    this.setState((prevstate) => ({ [option]: prevstate[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <section className="app">
        <div className="container">
          <Section title={"Please leave feedback"}>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.incrementFeedback}
            />
          </Section>

          <Section title={"Statistics"}>
            {this.countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification text={"No feedback given"} />
            )}
          </Section>
        </div>
      </section>
    );
  }
}

export default App;
