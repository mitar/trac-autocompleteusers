jQuery(document).ready(function($) {
  $("#field-owner").autocomplete("users", {
    formatItem: formatItem,
    max: 3,
    minChars: 2
  });
});
