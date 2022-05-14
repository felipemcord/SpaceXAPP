import React, { Component } from 'react';
import { Spinner, Container, Row, Col } from 'reactstrap';
import { LaunchCard } from './LaunchCard';
import getDataFromEndpoint from '../lib/apiWrapper';

export class NextAndLastLaunches extends Component {

    constructor(props) {
      super(props);
      this.state = { nextLaunch: [], loadingNext: true, lastLaunch : [], loadingLast: true };
    }
    componentDidMount() {
        this.populateLastLaunchData();
        this.populateNextLaunchData();
    }

    render () {
        let contentsNext = this.state.loadingNext
            ? <Spinner className='mt-3' color="dark">Loading...</Spinner>
            : <LaunchCard showPrecision={true} launch={this.state.nextLaunch}></LaunchCard>;
        let contentsLast = this.state.loadingLast
            ? <Spinner className='mt-3' color="dark">Loading...</Spinner>
            : <LaunchCard launch={this.state.lastLaunch}></LaunchCard>;

        return (
            <div>
                <Container>
                    <Row>
                        <Col sm='12' lg='6' >
                            <h3>Last Launch</h3>
                            {contentsLast}
                        </Col>
                        <Col sm='12' lg='6' >
                            <h3>Next Launch</h3>
                            {contentsNext}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    async populateLastLaunchData() {
        const data = await getDataFromEndpoint('/lastLaunch');
        this.setState({ lastLaunch: data, loadingLast: false });
      }

      async populateNextLaunchData() {
          const data = await getDataFromEndpoint('/nextLaunch');
          this.setState({ nextLaunch: data, loadingNext: false });
        }
}

