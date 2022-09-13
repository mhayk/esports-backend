import express from 'express'

const app = express()

app.get('/ads', (req, res) => {
    return res.status(200).json({ msg: 'accessed ads' })
})

app.listen(3333)