import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';


const CLOUDINARY_UPLOAD_PRESET = 'sx7elaqc';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/juuprz/image/upload';

export default class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: ''
    };
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
