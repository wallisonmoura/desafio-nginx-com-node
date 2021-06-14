const express = require('express')
const faker = require('faker-br')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
  const name = faker.name.firstName()
  const sql = `INSERT INTO people(name) VALUES('${name}')`
  connection.query(sql)

  let html = "<h1>Full Cycle Rocks!</h1>"

  connection.query('SELECT * FROM people', function(error, results, fields) {
    if(error) throw error;
    html += "<ol>"
    results.map(result => {
      html += `<li>${result.name}</li>`
    })
    html += "</ol>"
    res.send(html)
  })

})

app.listen(port, () => {
  console.log('rodando na porta' + port)
})