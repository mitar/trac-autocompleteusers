jQuery(document).ready(function($) {
  $("#field-cc").autocomplete("users", {
    multiple: true,
    formatItem: formatItem,
    delay: 100,
    max: 3,
    minChars: 2
  });
});
