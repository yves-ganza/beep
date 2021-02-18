module.exports = (app)=>{
    app.get('/',(req, res)=>{
        res.send('Beep Beep')
    })

    app.route('/api').get((req, res)=>{
        res.json({message: 'Hello from Api'})
    })
}