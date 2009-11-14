test("data still sets values", function() {
  expect(1);
  jQuery("#user").data('size', 24)
  ok( jQuery("#user").data('size') == 24, "Check username property")
});

test("data is extended with metadata", function() {
  expect(1);
  ok( jQuery("#user").data('username') == "loverboy34", "Check username property")
});

