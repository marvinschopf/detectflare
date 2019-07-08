const chalk = require("chalk")
const request = require("request")
const sslCertificate = require("get-ssl-certificate")

// set colored logger functions
const error = (err) => {
	console.log(chalk.bgRed.black("ERR!") + " " + err)
}

const success = (msg) => {
	console.log(chalk.bgGreen.black("SUC!") + " " + msg)
}

const warn = (msg) => {
	console.log(chalk.bgYellow.black("WARN!") + " " + msg)
}


// set response variable to null
let response = null

// create resulsts array
let results = { }


// request website and load response to variable
request
	.get("https://npmjs.com")
	.on('response', (resp) => {
		success("HTTP request successful.")
	})
	.on('error', (err) => {
		error('HTTP request failed.')
	})


