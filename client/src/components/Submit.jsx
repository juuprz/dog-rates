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
  onDrop(files) {
    console.log(files);
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }
  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }
  render() {
    return (
    <div>
      <div className='FileUpload'>
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
        <div>
          <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img src={this.state.uploadedFileCloudinaryUrl} style={{maxWidth: 300, maxHeight: 300}}/>
              </div>}
          </div>
        </div>
    </div>
    )
  }
}
