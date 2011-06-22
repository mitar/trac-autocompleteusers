jQuery(document).ready(function($) {
  $("#field-cc").autocomplete("../users", {
    multiple: true,
    formatItem: formatItem,
    max: 3,
    minChars: 2
  });
});
