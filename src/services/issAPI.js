const ISS_BASE_API = 'http://api.open-notify.org';
// mudar para async wait
export const getCurrentISSLocation = () => (
  fetch(`${ISS_BASE_API}/iss-now.json`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

// mudar para async wait
export const getCurrentISSCrew = () => (
  fetch(`${ISS_BASE_API}/astros.json`)
    .then((answer) => (
      answer
        .json()
        .then((json) => (answer.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
