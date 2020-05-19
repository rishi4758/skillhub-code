const proxy = require('http-proxy-middleware')
// proxy file should be created after both front nd backend server are running
 
module.exports = function(app) {
    app.use(proxy(['/api', '/api/prowork'], { target: 'https://infinite-basin-75173.herokuapp.com' }));
    app.use(proxy(['/api', '/api/category'], { target: 'https://infinite-basin-75173.herokuapp.com' }));
    app.use(proxy(['/api', '/api/login'], { target: 'https://infinite-basin-75173.herokuapp.com' }));
    app.use(proxy(['/api', '/api/user'], { target: 'https://infinite-basin-75173.herokuapp.com' }));
    app.use(proxy(['/api', '/api/register'], { target: 'https://infinite-basin-75173.herokuapp.com' }));
    app.use(proxy(['/api', '/api/logout'], { target: 'https://infinite-basin-75173.herokuapp.com' }));
    app.use(proxy(['/api', '/auth/google'], { target: 'https://infinite-basin-75173.herokuapp.com' }));
    app.use(proxy(['/api', '/auth/facebook'], { target: 'https://infinite-basin-75173.herokuapp.com' }));
    app.use(proxy(['/api', '/api/cat'], { target: 'https://infinite-basin-75173.herokuapp.com' }));
    app.use(proxy(['/api', 'api/workerlist'], { target: 'https://infinite-basin-75173.herokuapp.com' }));
    }

//    app.use(proxy(['/api', '/api/prowork'], { target: 'http://localhost:5555' }));
//    app.use(proxy(['/api', '/api/category'], { target: 'http://localhost:5555' }));
//    app.use(proxy(['/api', '/api/login'], { target: 'http://localhost:5555' }));
//    app.use(proxy(['/api', '/api/user'], { target: 'http://localhost:5555' }));
//    app.use(proxy(['/api', '/api/register'], { target: 'http://localhost:5555' }));
//    app.use(proxy(['/api', '/api/logout'], { target: 'http://localhost:5555' }));
//    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:5555' }));
//    app.use(proxy(['/api', '/auth/facebook'], { target: 'http://localhost:5555' }));
//    app.use(proxy(['/api', '/api/cat'], { target: 'http://localhost:5555' }));
//    app.use(proxy(['/api', 'api/workerlist'], { target: 'http://localhost:5555' }));

   
