/**
* @Author: Matthew Juggins <matthewjuggins>
* @Date:   03-10-16
* @Email:  jugginsmatthew@gmail.com
* @Last modified by:   matthewjuggins
* @Last modified time: 03-10-16
* @Description: JavaScript to run True unit tests.
*/

var path = require('path');
var sass_true = require('sass-true');

var sassFile = path.join(__dirname, 'test.scss');
sass_true.runSass({file: sassFile}, describe, it);
