'use strict';

module.exports = {

    respond: function(req, res, next){
        res.json(req.cdata);
    },

    error: function(e, req, res, next){
        var err = {};
        if(!e) {
            err = new Error('An error has occurred');
            err.code = 500;
        }
        if(typeof(e) == 'string'){
            err = new Error(e);
            err.code = 500;
        } else {
            err = new Error(e.message || "An error has occurred");
            err.code = e.code || 500;
        }

        res.status(err.code).json({
            success: 0,
            error: 1,
            error_msg: err.message
        });
    }

};