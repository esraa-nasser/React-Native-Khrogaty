import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Home from './Home';
import AllRestaurants from './AllRestaurants';
import AllPlaces from './AllPlaces';
import AllActivities from './AllActivities';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
        <Tab heading="All">
            <Home />
          </Tab>
          <Tab heading="Restaurants">
            <AllRestaurants />
          </Tab>
          <Tab heading="Places">
            <AllPlaces />
          </Tab>
          <Tab heading="Activities">
            <AllActivities />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}