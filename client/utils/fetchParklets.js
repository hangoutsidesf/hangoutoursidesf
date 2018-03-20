const fetchParklets = url => fetch(url)
  .then(response => response.json())
  .then(json => json.map(parklet => (
    {
      title: parklet.applicant,
      position: [parklet.location.coordinates[1], parklet.location.coordinates[0]],
    }
  )));

export default fetchParklets;
