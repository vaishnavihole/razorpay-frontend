const app = require('express')()
const path = require('path')

app.get('/logo.svg', (req, res) => {
    res.sendFile(path.join(__dirname, 'logo.svg'));
})

app.listen(5000, () => {
    console.log('Listining on 5000');
})