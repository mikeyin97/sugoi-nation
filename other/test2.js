var jsonfile = require('jsonfile')
 
var file = 'C:\Users\\Michael\\Documents\\GitHub\\sugoi-nation\\other\\test.json'
var obj = {name: 'JP'}
 
jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
})