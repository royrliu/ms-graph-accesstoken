var graph = require('./graph.js');

console.log("main", "start")

async function getEvents(accessToken) {
  if (accessToken && accessToken.length > 0) {
    try {
      // Get the events
      var events = await graph.getEvents(accessToken);
      console.log('events:' , events)
    } catch (err) {
      console.log('error:', err)
    }
  }
}

(async () => {
  console.log('get events start')
  var accessToken = 'XXXXXXXX'
  await getEvents(accessToken)
  console.log('get events end')
})()

console.log("main", "end")