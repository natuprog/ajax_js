/**
 * ajax class
 * 
 * Autor: natuprog
 * 
 */

class ajax {
    constructor (mode, url, async, header) {
        this.url = url;
        this.mode = mode;
        this.async = async;
        this.this.header = header;
        this.html = new XMLHttpRequest ();
        this.response = "";
        this.responseType;
    }
    request (msg) {
        this.html.open (this.mode, this.url, this.async);
        this.html.setRequestHeader (this.content[0], this.content[1]);
        if (typeof (msg) == 'undefined') {
            this.html.send ();
        }
        else {
            this.html.send(msg);
        }

        this.html.onreadystatechange = () => {
            if (this.html.status == 200 && this.html.readyState == 4) {
                // its ready
                if (this.html.responseType == 'text') {
                    this.response = this.html.responseText;
                }
                else if (this.html.responseType == 'arraybuffer') {
                    this.response = this.html.response;
                }
                else if (this.html.responseType == 'json') {
                    this.response = this.html.response;
                }
                else if (this.html.responseType == 'document') {
                    this.response = this.html.responseXML;
                }
                this.responseType = this.html.responseType;
            }
        }

    }
}