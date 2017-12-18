// This will only work when using the Recommended embed code.
// This will not work when using the IFrame embed code.

var parentDocument = window.parent.document;
var styleSheet = parentDocument.createElement('style');
styleSheet.innerHTML = [
  'svg[aria-label="Close"] {',
  '  cursor: default !important;',
  '  display: none !important;',
  '}'
].join('');

parentDocument.head.appendChild(styleSheet);

