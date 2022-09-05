import './App.css';
import { React, Component } from 'react';
import PreviewWindow from './components/PreviewWindow';
import EditorWindow from './components/EditorWindow';

const placeholder = `
# This is a h1 heading
## This is a h2 heading

**BOLD**
*important*

> Blockquote

[this link takes you nowhere](www.nowhere.com)

Here's some inline code, \`<div class="inline-code"></div>\`

\`\`\`
// multi-line code

function helloWorld() {
  console.log('Hello world');
}
\`\`\`

### Grocery List
- bread
- butter
- cheese
- milk

![Peace](https://media.istockphoto.com/vectors/sign-of-victory-or-peace-hand-gesture-of-human-black-line-icon-two-vector-id1179573132?k=20&m=1179573132&s=612x612&w=0&h=XKEEAZ7PzzkzVGgHqqwaS_emXz3X3KNfJsVN3Au8EmE=)

`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };
  this.handleChange = this.handleChange.bind(this)
  };


  handleChange = e => {
    this.setState({
      markdown: e.target.value
    });
  }
  
  
  render() {
    return (
      <div className="App">
        <h1>Markdown Live Preview</h1>
        <EditorWindow markdown={this.state.markdown} parseMark={this.handleChange} />
        <PreviewWindow previewText={this.state.markdown}/>
      </div>
    );
  };
};
