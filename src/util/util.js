const getIssueName = async (id, token, project) => {
  const response = await fetch(`https://gitlab.com/api/v4/projects/${project}/issues/${id}`, {
    method: 'get',
    headers: {
      'Private-Token': token
    }
  }).then(r => r.json().then());

  return response.title || id;
};
/**
 * @param {number} sec
 * @return {string} time in HH:MM:SS format
 */
const toHHMMSS = sec => {
  var hours = Math.floor(sec / 3600);
  var minutes = Math.floor((sec - hours * 3600) / 60);
  var seconds = sec - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return hours + ':' + minutes + ':' + seconds;
};

export { toHHMMSS, getIssueName };
