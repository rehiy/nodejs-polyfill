global.location = {
    href: '',
    host: '',
    pathname: '',
    port: '',
    origin: '',
    assign: function () {
        console.log('location.assign', arguments);
    },
    reload: function () {
        console.log('location.reload', arguments);
    },
};
