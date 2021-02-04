import { LitElement, html, css } from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
import {script} from './script.js';

class FomoGratisfaction extends LitElement {

    static get properties() {
        return { 
            dataSource: { type: String },
            template: { type: String },
            newTemplate: { type: String }
        };
    }
    
    constructor() {
        super();        
        this.newTemplate = "";
        this.data = "";
             
        fetch("./data.json", {
            method: "get"
        }).then((response) => {
            return response.json();
        }).then(data => {
            this.data = JSON.stringify(data);
            var template_file_name = './signup1.js';
            // if(template_file_name !== '') {
            //     template_file_name = 'https://cdn.devam.pro/gr/demo/newfile.js';
            // }            
            import(template_file_name).then(template => {  this.newTemplate = template; });            
        }).catch((err) => {
            console.log(err);
        });
    }

    _setTemplate() {        
        if (this.data !== 'undefined' && this.data !== '' && this.newTemplate !== '')
        {
            var data         = JSON.parse(this.data);
            var htmlTemplate = this.newTemplate.htmlTemplate(data);             
            return html ` 
                ${unsafeHTML(htmlTemplate)} 
                ${script(this.newTemplate.jsFuntions)}                
            `;
        }        
        return html ` 
            Something went wrong...
        `;
    }  
    
    // connectedCallback() {
    //     super.connectedCallback();
    // }
       
    render() {        
        return this._setTemplate();
    }

    open() {
        this.setAttribute("opened", "");
    }
}

customElements.define('fomo-gratisfaction', FomoGratisfaction);