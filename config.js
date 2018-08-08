module.exports = {
    PORT: process.env.PORT || 8080,
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
    DATABASE_URL:
        process.env.DATABASE_URL || 'mongodb://zhy0319:newlife5408@ds115762.mlab.com:15762/dogs',
    TEST_DATABASE_URL:
        process.env.TEST_DATABASE_URL ||
        'mongodb://localhost/thinkful-backend-test',
    // DATABASE_URL:
    //     process.env.DATABASE_URL || 'postgres://localhost/thinkful-backend',
    // TEST_DATABASE_URL:
    //     process.env.TEST_DATABASE_URL ||
    //     'postgres://localhost/thinkful-backend-test'
};
