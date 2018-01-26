var sass = require('node-sass');

console.log(sass);

sass.render({
    file: '/path/to/myFile.scss',
    data: 'body{background:blue; a{color:black;}}',
    includePaths: [ 'lib/', 'mod/' ],
    outputStyle: 'compressed'
});