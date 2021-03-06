
/*
    Execute these commands before running the tests:

    create user 'liolio'@'localhost' identified by 'karamba';
    grant all on `mysql-validator`.* to 'liolio'@'localhost';
*/

var fs = require('fs');
require('colors');

var mysql = require('mysql'),
    c = mysql.createConnection({
        user: 'liolio',
        password: 'karamba',
        typeCast: false,
        multipleStatements: true
    });

var table = {},
    dataType = require('../lib/data-type');


describe('mysql database', function () {
    before(function (done) {
        var schema = fs.readFileSync('./test/fixtures/schema.sql', 'utf8');
        c.query(schema, function (err, rows) {
            if (err) return done(err);
            done();
        });
    });

    it('should get columns info', function (done) {
        c.query('describe `datatypes`;', function (err, rows) {
            if (err) return done(err);
            for (var i=0; i < rows.length; i++) {
                var column = rows[i];
                table[column.Field] = {
                    type: column.Type,
                    allowNull: column.Null === 'YES' ? true : false,
                    key: column.Key.toLowerCase(),
                    defaultValue: column.Default,
                    extra: column.Extra
                }
            }
            rows.length.should.equal(Object.keys(table).length);
            done();
        });
    });

    it('should test data types', function (done) {
        console.log('');
        for (var key in table) {
            var column = table[key],
                type = dataType.get(column.type);
            console.log(column.type.yellow, type);
        }
        done();
    });

    after(function (done) {
        c.query('drop schema `mysql-validator`;', function (err, rows) {
            if (err) return done(err);
            done();
        });
    });
});
