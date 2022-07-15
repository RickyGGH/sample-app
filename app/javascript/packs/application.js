// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require( "channels")
require("jquery")
import "bootstrap"


document.addEventListener("turbolinks:load", function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
        $('[data-toggle="popover"]').popover()
        $('.dropdown-toggle').dropdown()
    })
})
