import React, { Component } from 'react';
import { Spinner, Container, Row, Col } from 'reactstrap';
import { LaunchCard } from './LaunchCard';

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
                        <Col>
                            <h3>Last Launch</h3>
                        </Col>
                        <Col>
                            <h3>Next Launch</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {contentsLast}
                        </Col>
                        <Col>
                            {contentsNext}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    async populateLastLaunchData() {
        const response = await fetch('lastLaunch');
        const data = await response.json();
        console.log(data);
        this.setState({ lastLaunch: data, loadingLast: false });
      }

      async populateNextLaunchData() {
          const response = await fetch('nextLaunch');
          const data = await response.json();
          console.log(data);
          this.setState({ nextLaunch: data, loadingNext: false });
        }
}

