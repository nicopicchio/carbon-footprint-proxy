const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001

app.use(cors())

app.use((req, res, next) => {
    const reqUrl = req.originalUrl.replace('/', '')
    const url = `https://api.websitecarbon.com/site?url=http%3A%2F%2F${reqUrl}`
    console.log(url)
    axios.get(url)
    .then(response => {
        console.log(response.data)
        res.json(response.data)
    })
    .catch(e => console.error("err", e.message))
})

app.listen(port, () => {
    console.log('Listening on ', port)
})
