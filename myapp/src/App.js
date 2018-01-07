import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        // Use Super so that this reference is for the App component rather than the React Component
        super();

        // Sort of like scope functions in angular
        this.updateText = this.updateText.bind(this);
        this.updateRefs = this.updateRefs.bind(this);

        // To be used by React Components Only
        this.state = {
            txt: 'Default state variable',
            items: []
        }

    }

    /**
     * Some boilerplate code
    **/

    // Do anything you need right before mounting the component onto the DOM
    componentWillMount() {
        console.log('Mounting');

        // Sample Ajax call
        fetch('http://swapi.co/api/people?format=json')
            .then(response => response.json())
            .then(({results: items}) => this.setState({items}))
    }

    // Do cleanup after unmounting the component like removing references to intervals or promises
    componentDidMount() {
        console.log('Component Mounted.');
    }

    componentWillUnmount() {
        console.log('Unmounting Component');
    }

    updateText(e) {
        this.setState({txt: e.target.value});
    }

    updateRefs() {
        // Use refs to distinguish between same elements, changing content in a should only update a's text and similar for b
        // Note: The attribute uses ref but the component gets ref (took some time away!)
        this.setState(
            {a: this.refs.a.value, b: this.refs.b.value}
        );
    }

    render() {
        console.log('Rendering Component..!');
        // If the markup is one level, parenthesis are not required
        return (
            <div>
                <Widget update={this.updateText} />
                <h1>{this.state.txt}</h1>
                <span>{this.props.customText}</span>
                <hr/>
                <input ref="a" type="text" onChange={this.updateRefs}/>{this.state.a}
                <hr/>
                <input ref="b" type="text" onChange={this.updateRefs}/>{this.state.b}
                <hr/>

                <div>
                    {this.state.items.map(item => <div key={item.name}>{item.name}</div>)}
                </div>
            </div>
        );
    }

    // Default Props, To be used by outside markups only
    static defaultProps = {
        customText: 'Default Prop Value'
    };

    // Props Validations
    static propTypes = {
        customText(props, propName, component) {
            let propVal = props[propName];

            if (!propVal) {
                return new Error(`The field ${propName} is mandatory`);
            }
            if (propVal.length < 5) {
                return new Error(`Length of ${propName} should be greater than 5`);
            }
        }
    };
}

// Using External Component to call parents state update
const Widget = (props) =>  <input type="text" onChange={props.update}/>;

/**
 * This wrapper will be used to mount and unmount our App Component
 */
class Wrapper extends React.Component {

    constructor() {
        super();
        this.mountApp = this.mountApp.bind(this);
        this.unmountApp = this.unmountApp.bind(this);
    }

    mountApp() {
        ReactDOM.render(<App/>, document.getElementById('target'));
    }

    unmountApp() {
        ReactDOM.unmountComponentAtNode(document.getElementById('target'));
    }

    render() {
        return (
          <div>
              <button onClick={this.mountApp}>Mount App</button>
              <button onClick={this.unmountApp}>Unmount App</button>
              <div id="target"></div>
          </div>
        );
    }
}

export default Wrapper;
// export default App;
