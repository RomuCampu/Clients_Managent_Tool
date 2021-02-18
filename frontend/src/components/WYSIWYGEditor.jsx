import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html'
import { Editor } from 'react-draft-wysiwyg';
import './WYSIWYGEditor.css'
import { PreviewModal } from './PreviewModal';

const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()))

class WYSIWYGEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      description: ''
    }
  }

  onEditorStateChange = editorState => {
    this.setState(() => {
      return {
        editorState,
        description: editorState.getCurrentContent().getPlainText('\u0001')
      }
    })
  }

  sendDescription = () => {
    this.props.sendDescription(this.state.description)
  }

  render() {
    const { editorState } = this.state;
    return (
      <React.Fragment>
        <Editor
          editorState={editorState}
          wrapperClassName="rich-editor editor-wrapper"
          editorClassName="custom-editor"
          onEditorStateChange={this.onEditorStateChange}
        />

        {this.sendDescription()}

        <button className="btn btn-success mt-2"
          data-toggle="modal"
          data-target="#previewModal">
          Preview
        </button>

        <PreviewModal output={getHtml(editorState)} />
      </React.Fragment>
    );
  }
}
export default WYSIWYGEditor;






















// import React, { Component } from 'react';
// import { EditorState, convertToRaw } from 'draft-js';
// import draftToHtml from 'draftjs-to-html'
// import { Editor } from 'react-draft-wysiwyg';
// import './WYSIWYGEditor.css'
// import { PreviewModal } from './PreviewModal';

// const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()))

// class WYSIWYGEditor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editorState: EditorState.createEmpty(),
//       description: ''
//     };
//   }

//   onEditorStateChange = editorState => {
//     this.setState(() => {
//       return {
//         editorState,
//         description: getHtml(editorState)
//       }
//     })
//   };

//   render() {
//     const { editorState } = this.state;
//     return (
//       <React.Fragment>
//         <Editor
//           editorState={editorState}
//           wrapperClassName="rich-editor editor-wrapper"
//           editorClassName="custom-editor"
//           onEditorStateChange={this.onEditorStateChange}
//         />

//         <button className="btn btn-success mt-2"
//           data-toggle="modal"
//           data-target="#previewModal">
//           Preview
//         </button>

//         <PreviewModal output={getHtml(editorState)} />
//       </React.Fragment>
//     );
//   }
// }
// export default WYSIWYGEditor;