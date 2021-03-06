// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var $form   = $(this);
    var message = $form.find("input#message_body").val();
    var url     = $form.attr("action");

    var posting = $.post(url, { message: { body: message } } );
  });
});

$(function() {
  var faye = new Faye.Client('http://localhost:9292/faye');
  faye.subscribe('/messages/new', function (data) {
    eval(data);
  });
});
