declare module 'convert-csv-to-json' {
  export class ConvertCsvToJson {
    /** 
     * If there is a space in the headers, it is replaced by a specific character
     */
    getReplaceChar(value: string): void;

    /**
     * Prints a digit as Number type (for example 32 instead of '32')
     */
    formatValueByType(active: boolean): this;

    /**
     *
     */
    supportQuotedField(active: boolean): this;
    /**
     * Defines the field delimiter which will be used to split the fields
     */
    fieldDelimiter(delimiter: string): this;

    /**
     * Defines the index where the header is defined
     */
    indexHeader(index: number): this;

    /**
     * Defines how to match and parse a sub array
     */
    parseSubArray(delimiter: string, separator: string): this;

    /**
     * Defines a custom encoding to decode a file
     */
    customEncoding(encoding: string): this;

    /**
     * Defines a custom encoding to decode a file
     */
    utf8Encoding(): this;

    /**
     * Defines ucs2 encoding to decode a file
     */
    ucs2Encoding(): this;

    /**
     * Defines utf16le encoding to decode a file
     */
    utf16leEncoding(): this;

    /**
     * Defines latin1 encoding to decode a file
     */
    latin1Encoding(): this;

    /**
     * Defines ascii encoding to decode a file
     */
    asciiEncoding(): this;

    /**
     * Defines base64 encoding to decode a file
     */
    base64Encoding(): this;

    /**
     * Defines hex encoding to decode a file
     */
    hexEncoding(): this;

    /**
     * Parses .csv file and put its content into a file in json format.
     * @param {inputFileName} path/filename
     * @param {outputFileName} path/filename
     *
     */
    generateJsonFileFromCsv(
      inputFileName: string,
      outputFileName: string,
    ): void;

    /**
     * Parses .csv file and put its content into an Array of Object in json format.
     * @param {inputFileName} path/filename
     * @return {Array} Array of Object in json format
     *
     */
    getJsonFromCsv(inputFileName: string): any[];

    csvStringToJson(csvString: string): any[];
    /**
     * Parses .csv file and put its content into a file in json format.
     * @param {inputFileName} path/filename
     * @param {outputFileName} path/filename
     *
     * @deprecated Use generateJsonFileFromCsv()
     */
    jsonToCsv(inputFileName: string, outputFileName: string): void;
  }
  const converter: ConvertCsvToJson;
  export default converter;
}
