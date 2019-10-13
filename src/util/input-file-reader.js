var InputFileReader = /** @class */ (function () {
    function InputFileReader() {
    }
    InputFileReader.readFileFromHTMLInputElement = function (selector, onLoad) {
        if (typeof onLoad !== 'function') {
            return;
        }
        var element = document.querySelector(selector);
        if (typeof element !== 'undefined' && element.files instanceof FileList && element.files.length > 0) {
            var file = element.files[0];
            this.readFile(file, onLoad);
        }
    };
    InputFileReader.readFile = function (file, onLoad) {
        if (!this._reader) {
            this._reader = new FileReader();
        }
        this._reader.onload = function (event) {
            onLoad(event.target.result);
        };
        this._reader.readAsArrayBuffer(file);
    };
    return InputFileReader;
}());
export default InputFileReader;
//# sourceMappingURL=input-file-reader.js.map