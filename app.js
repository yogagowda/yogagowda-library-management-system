const production = true;

var createError = require('http-errors');
var express = require('express');
const app = express();
let http = require('http');
var https = require('https');
global.io = require('socket.io')(server);
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var LocalStrategy = require('passport-local').Strategy;
var async = require('async');
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var cors = require('cors');
