export class AddEstimate { 
    get rootEl() {
        return $('//div[@class="kyx3Tb AlLELb"]')
    }
    get addToEstimate() {
        return this.rootEl.$('button.UywwFc-LgbsSe')
    }
}