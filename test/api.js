test('api', function() {

    var date = moment('2014-01-01');

    var config = {
        date: date,
        min: date.clone().subtract(1, 'y'),
        max: date.clone().add(1, 'y')
    };

    var picker = $('#picker').MomentPicker(config);
    var api = picker.data('MomentPicker');
    var header = picker.children('div.mp-header');
    var body = picker.children('div.mp-body');

    ok(body.find('[data-year="2015"]').is('a'));
    ok(body.find('[data-year="2016"]').is('span'));

    api.max(config.max.add(1, 'y'));

    ok(body.find('[data-year="2015"]').is('a'));
    ok(body.find('[data-year="2016"]').is('a'));
    ok(body.find('[data-year="2017"]').is('span'));
});