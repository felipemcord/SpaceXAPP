import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import { LaunchGroup } from './LaunchGroup';
import getDataFromEndpoint from '../lib/apiWrapper';

export class PastLaunches extends Component {

    constructor(props) {
      super(props);
      this.state = { launches: [], loading: true };
    }
    componentDidMount() {
        this.populateLaunchData();
    }

    render () {
        let contents = this.state.loading
            ? <Spinner className='mt-3' color="dark">Loading...</Spinner>
            : <LaunchGroup launches={this.state.launches}></LaunchGroup>;

        return (
            <div>
                <h3>Past Launches</h3>
                {contents}
            </div>
        )
    }

    async populateLaunchData() {
        const data = await getDataFromEndpoint('/pastLaunches');
        this.setState({ launches: data, loading: false });
      }
}

