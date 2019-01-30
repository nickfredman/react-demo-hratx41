Welcome! I used to be a happy app, now I'm incomplete

This is a sample starter you can use to create whatever project you'd like
However, here's a recommendation:

Make a todo app, that stores your todos in a mysql database
Here are the steps you'd need to follow to make this happen:

1. Grab todos from json.placeholder api and store them in the client's state to start (check out axios)
2. Setup a way to add more todos to state and create the todo functionality
3. Connect your server and database, setup your table(s?)
4. Delete your local state from the client, instead, your server should seed the database when you turn it on (OR create a seed script in your package.json to seed the database from json.placeholder) - use the request module (or axios if you feel comfy with request)
5. Connect your client to now your now functioning server/db
6. Add any additional functionality you'd like! Some ideas - timestamps (check out momentJS), a calendar, multiple states for todos (not just active/done), multiple lists, login/logout to connect todos to a specfic user
