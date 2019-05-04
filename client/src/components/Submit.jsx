import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

export default class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.onDrop = this.onDrop.bind(this);
  }
  onDrop(acceptedFiles) {
    console.log(acceptedFiles);
  }
  render() {
    return(
    <div>
        <Dropzone multiple={false} accept="image/*" onDrop={this.onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
      </div>
    )
  }
}

// export default class Submit extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//     this.onImageDrop = this.onImageDrop.bind(this);
//   }
//   onImageDrop() {
//     console.log('item droppped');
//   }
//   render() {
//     <Dropzone
//       multiple={false}
//       accept="image/*"
//       onDrop={this.onImageDrop}>
//       <p>Drop an image or click to select a file to upload.</p>
//     </Dropzone>
//   }
// }
