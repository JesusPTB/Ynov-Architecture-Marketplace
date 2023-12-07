
const express = require('express');

const cors = require('cors');

const morgan = require('morgan');
const {createProxyMiddleware} = require('http-proxy-middleware');
const cookie = require('cookie');

const createError = require('http-errors');

const passport = require('passport');

const axios = require('axios');

const jwt = require('jsonwebtoken');
dotenv = require('dotenv');
dotenv.config();

/**
 *
 */
var tokenExtractor = function (req) {
    var token = null;
    if (req && req.headers && req.headers['authorization']) {
        token = req.headers['authorization'];
    }
    return token;
}


/**
 *
 */
const verifyToken = function (req, res, next) {
    var token = tokenExtractor(req);
    token = token.replace('Bearer ', '');

    if (!token) {
        return next(createError(401, 'No auth token'));
    }
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            return next(createError(401, 'Invalid auth token'));
        }
        req.user = decoded;
        next();
    });
}

/**
 *
 */
const app = express();
/**
 *
 */
const router = express.Router();
router.use(cors());
router.use(morgan('combined'));

/**
 *
 */
const authProxy = createProxyMiddleware({
    target: 'http://users-service:3001',
    changeOrigin: true,
    pathRewrite: {
        '^/auth': '/',
    },
    onProxyRes: (proxyRes, req, res) => {
        if (req.originalUrl === '/auth/login' && proxyRes.statusCode === 200) {
            console.log('Login successful');
        }
    }
});

/**
 *
 */
const userProxy = createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true
});


router.use('/auth', authProxy);
router.use('/users', userProxy);

app.get('/profile', verifyToken, function (req, res) {
    res.send(req.user.profile);
});


app.use(router);
app.listen(3000, () => console.log('API Gateway listening on port 3000'));
