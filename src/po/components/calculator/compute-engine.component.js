export class ComputeEngine{
   
    get addGPU() {
        return $('//div[text()="Add GPUs"]/ancestor::div[contains(@class,"XIfRlb")]/preceding-sibling::div')
    } 

    get region() {
        return $('//span[text()="Region"]/ancestor::div[contains(@class, "VfPpkd-O1htCb")]')
    }
    
}