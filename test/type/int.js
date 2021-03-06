
exports.TEST = {
    'bigint': {
        valid: ['-9223372036854775808', '9223372036854775807'],
        invalid: ['-9223372036854775809', '9223372036854775808']
    },
    'bigint unsigned': {
        valid: ['0', '18446744073709551615'],
        invalid: ['-1', '18446744073709551616']
    },
    'int': {
        valid: ['-2147483648', '2147483647'],
        invalid: ['-2147483649', '2147483648']
    },
    'int unsigned': {
        valid: ['0', '4294967295'],
        invalid: ['-1', '4294967296']
    },
    'mediumint': {
        valid: ['-8388608', '8388607'],
        invalid: ['-8388609', '8388608']
    },
    'mediumint unsigned': {
        valid: ['0', '16777215'],
        invalid: ['-1', '16777216']
    },
    'smallint': {
        valid: ['-32768', '32767'],
        invalid: ['-32769', '32768']
    },
    'smallint unsigned': {
        valid: ['0', '65535'],
        invalid: ['-1', '65536']
    },
    'tinyint': {
        valid: ['-128', '127'],
        invalid: ['-129', '128']
    },
    'tinyint unsigned': {
        valid: ['0', '255'],
        invalid: ['-1', '256']
    },
    'bit': {
        valid: ['1', '64'],
        invalid: ['0', '65']
    }
};
