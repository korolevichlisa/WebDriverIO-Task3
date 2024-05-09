import { HeaderComponent } from "../components/common/header.component.js"

export class BasePage{
    
    constructor(url='https://cloud.google.com/') {
        this.url = url
        this.header = new HeaderComponent() 
    }
    open() {
        return browser.url(this.url)
    }
}