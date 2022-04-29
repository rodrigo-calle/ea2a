module.exports = app => {
    app.get('/api/project/getProjects', (req, res) => {
        var data = require('../json/projects.json');
        res.json(data);
    })

    app.get('/api/apartment/getApartments', (req, res) => {
        var data = require('../json/apartment.json');
        res.json(data);
    })
}
