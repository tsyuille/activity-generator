document.querySelector('button').addEventListener('click', getActivity)
function getActivity() {
    fetch('http://www.boredapi.com/api/activity/')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('.activity').innerText = data.activity
      document.querySelector('.type').innerText = data.type
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}