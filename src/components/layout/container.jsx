import React from "react";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";
import Game from "./game";

import "./container.css";

const Container = () => (
  <Grid fluid={true}>
    <Row>
      <Col md={4} mdOffset={4}>
        <PageHeader>Counting puzzle</PageHeader>
      </Col>
    </Row>
    <Row className="content">
      <Game />
    </Row>
  </Grid>
);

export default Container;
