'use strict';

module.exports = {

    fetchAllUsers: function(req, res, next){
        var dataFromDb = [
            {
                id: "1",
                first_name: "Bruce",
                last_name: "Wayne",
                username: "batman",
                email: "iambatman@gmail.com"
            },
            {
                id: "2",
                first_name: "Tony",
                last_name: "Stark",
                username: "ironman",
                email: "geniusbillionareplayboyphilantropist@gmail.com"
            }
        ];

        req.cdata = {
            success: 1,
            message: 'Users retrieved successfully',
            data: dataFromDb
        };

        next();
    }

};