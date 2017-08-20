    import { ImageSource } from 'image-source';

    /**
     * Share an image.
     * @param {ImageSource} image - The image to share.
     * @param {string} [subject] - The subject of the share *** ANDROID ONLY ***
     */
    export function shareImage(image?: ImageSource, subject?: string);


    /**
    * Share text.
    * @param {string} text - Text to share.
    * @param {string} [subject] - The subject of the share *** ANDROID ONLY ***
    */
    export function shareText(text: string, subject?: string);


    /**
     * Share URL.
     * @param {string} url - URL to share.
     * @param {string} text - Text to share with URL.
     * @param {string} [subject] - The subject of the share *** ANDROID ONLY ***
     */
    export function shareUrl(url: string, text: string, subject?: string);


    /**
     * Share using the * mime type *** ANDROID ONLY ***
     * 
     * @export
     * @param {string} fileName - the filename that should be used
     * @param {string} content - the file contents
     * @param {string} [subject] - the subject of the share
     */
    export function shareGeneric(fileName: string, content: string, subject?: string);

    /**
     * Share using the CSV mime type *** ANDROID ONLY ***
     * 
     * @export
     * @param {string} fileName - the filename that should be used
     * @param {string} content - the file contents
     * @param {string} [subject] - the subject of the share
     */
    export function shareCsv(filename: string, content: string, subject?: string);

    /**
     * Share using the a custom mime type *** ANDROID ONLY ***
     * 
     * @export
     * @param {string} fileName - the filename that should be used
     * @param {string} content - the file contents
     * @param {string} [subject] - the subject of the share
     */
    export function shareCustomMimeType(filename: string, content: string, mimeType: string, subject?: string)
