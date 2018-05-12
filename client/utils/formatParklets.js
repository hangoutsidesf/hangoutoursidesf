const formatParklets = json => json.map(parklet => ({
  title: parklet.applicant,
  position: [parklet.location.coordinates[1], parklet.location.coordinates[0]],
}));

export default formatParklets;
