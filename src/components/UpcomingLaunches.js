import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import { LaunchGroup } from './LaunchGroup';

export class UpcomingLaunches extends Component {

    constructor(props) {
      super(props);
      this.state = { launches: [], loading: true };
    }
    async componentDidMount() {
        this.populateLaunchData();

        if (window.dataLayer) {
            await window.dataLayer.push({ event: "optimize.activate" });
        }
        this.intervalId = setInterval(() => {
            if (window.google_optimize !== undefined) {
                const variant = window.google_optimize.get('xe1xp2XWQwCpL5COKQW62w');
                this.setState({ variant });
                clearInterval(this.intervalId);
            }
        }, 100);
    }

    render () {
        let contents = this.state.loading
            ? <Spinner className='mt-3' color="dark">Loading...</Spinner>
            : <LaunchGroup showPrecision launches={this.state.launches}></LaunchGroup>;

        return (
            <div>
                <h3>Upcoming Launches</h3>
                {contents}
            </div>
        )
    }

    async populateLaunchData() {
        const response = await fetch('upcomingLaunches');
        console.log(response);
        const data = await response.json();
        this.setState({ launches: data, loading: false });
      }
}

