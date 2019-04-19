import React, { Component } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';

import { FB_CONFIG } from './configs';
import { api } from './instances';

import { MainPage } from './containers'

export default class Index extends Component {

  state = { hasToken: false }


  componentDidMount(){
    api.setToken("EAAGNO4a7r2wBADxRvS3t4l1ciDzLLZB0iNkR0spiZBx1DgagLIFP6ofDXr6z5cm2tsZC8YIhvtCizcClBnrHoh44X3tIy9ed5jZCNgLtmVYQ55lsD8bulez6kvzNOMDkVOQRUUB2VMGzxlMJZBWIKhE5hfrsYpyWjw3gTnRgatgZDZD")
  
    setTimeout(() => {
      this.setState({ hasToken: true })
    }, 500);
  }

  handleResponse = (res) => {
    api.setToken(res.tokenDetail.accessToken);

    setTimeout(() => {
      this.setState({ hasToken: true })
    }, 500);

  }

  render() {
    const { hasToken } = this.state
    return (
      <div>
         <FacebookProvider appId={FB_CONFIG.APP_ID}>
            <LoginButton
              scope="email"
              onCompleted={this.handleResponse}
              onError={this.handleError}
            >
              <span>{`${hasToken ? "Reset" : "Login"} with Facebook`}</span>
            </LoginButton>
          </FacebookProvider>
          <MainPage />
      </div>

    );
  }
}