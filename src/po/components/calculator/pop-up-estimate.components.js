export class PopUpEstimate {
    get rootEl() {
        return $('//div[@class ="bwApif-cnG4Wd"]')
    }
    item(param) {
        const selectors = {
            computeEngine:'Compute Engine',
            cloudStorage:'Cloud Storage',
            cloudSQL: 'Cloud SQL',
        }
        return $(`//h2[text()="${selectors[param]}"]/ancestor::div[@class="VobRQb"]`)
    }
}