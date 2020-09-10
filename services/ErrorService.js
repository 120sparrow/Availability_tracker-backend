const ErrorService = {
    consoleErr: (err, res) => {
        console.error(err);
        return res.status(500).send('Error')
    }
}

module.exports = ErrorService;
