// Mock configuration file for jodit-pro-react
// This file is required by the package to prevent 404 errors

window.JoditConfig = {
  // Basic configuration to prevent errors
  defaultMode: 1,
  useSearch: false,
  spellcheck: false,
  showCharsCounter: false,
  showWordsCounter: false,
  showXPathInStatusbar: false,
  askBeforePasteHTML: false,
  askBeforePasteFromWord: false,
  defaultActionOnPaste: 'insert_clear_html',
  
  // Prevent unnecessary network requests
  uploader: {
    insertImageAsBase64URI: true,
    url: null,
    pathVariableName: 'path',
    headers: {},
    data: {},
    withCredentials: false,
    isSuccess: function (resp) {
      return resp.success;
    },
    getMessage: function (resp) {
      return resp.message;
    },
    process: function (resp) {
      return resp.data || resp.files || [];
    },
    error: function (e) {
      console.log('Upload error:', e);
    },
    defaultHandlerSuccess: function (data, resp) {
      console.log('Upload success:', data);
    },
    defaultHandlerError: function (e) {
      console.log('Upload handler error:', e);
    }
  },
  
  // Disable features that might cause network requests
  filebrowser: {
    ajax: {
      url: null,
      headers: {},
      data: {},
      withCredentials: false
    }
  },
  
  // Basic toolbar configuration
  buttons: [
    'source', '|', 'bold', 'strikethrough', 'underline', 'italic', '|',
    'ul', 'ol', '|', 'outdent', 'indent', '|', 'font', 'fontsize', 'brush', 'paragraph', '|',
    'image', 'link', 'table', '|', 'align', 'undo', 'redo', '|', 'hr', 'eraser', 'copyformat', '|',
    'fullsize'
  ],
  
  // Prevent external requests
  events: {
    beforeDestruct: function () {
      // Cleanup any pending requests
      console.log('Jodit editor destroyed');
    }
  }
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.JoditConfig;
}
