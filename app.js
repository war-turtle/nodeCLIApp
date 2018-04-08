const yargs = require('yargs');
const helper = require('./modules/helper.js');

var argv = yargs
            .command('add','add notes to file',{
              title: {
                describe: 'Title of note',
                demand: true,
                alias: 't'
              },
              body: {
                describe: 'body of note',
                demand: true,
                alias: 'b'
              }
            })
            .command('remove','remove notes from file',{
              title: {
                describe: 'Title of note',
                demand: true,
                alias: 't'
              }
            })
            .command('list','list notes in the file')
            .help()
            .alias('help','h')
            .argv;

var command = argv._[0];
var title = argv.title;
var body = argv.body;

if( command == 'add'){
  helper.addNote(title, body);
} else if( command == 'list' ){
  helper.listNote();
} else if( command == 'remove' ){
  helper.removeNote(title);
} else {
  console.log('invalid command');
}
