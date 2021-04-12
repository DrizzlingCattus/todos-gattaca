import styled
import React from "react";
import { Grommet, Box, List, Grid } from "grommet";
import { grommet } from "grommet/themes";

const locations = [
  "Boise",
  "Fort Collins",
  "Los Gatos",
  "Palo Alto",
  "San Francisco",
];

const data = [];

for (let i = 0; i < 40; i += 1) {
  data.push({
    entry: `entry-${i + 1}`,
    location: locations[i % locations.length],
    date: `2018-07-${(i % 30) + 1}`,
    percent: (i % 11) * 10,
    paid: ((i + 1) * 17) % 1000,
  });
}

const CardBox = () => {
  const [clicked, setClicked] = React.useState();
  return (
    <Box align="center" pad="large" gap="large">
      <List
        data={data.slice(0, 10)}
        onClickItem={(event) => setClicked(event.item)}
      />
      {clicked && JSON.stringify(clicked, null, 2)}
    </Box>
  );
};

const TODOBoard = () => (
  <Grid
    columns={{
      count: 6,
      size: "auto",
    }}
    gap="small"
  >
    <CardBox background="brand" />
    <CardBox background="brand" />
    <CardBox background="brand" />
    <CardBox background="brand" />
    <CardBox background="brand" />
    <CardBox background="brand" />
    <CardBox background="brand" />
  </Grid>
);

function App() {
  return (
    <Grommet themes={grommet} full>
      <CardBox />

      <hr />

      <TODOBoard />
    </Grommet>
  );
}

export default App;
