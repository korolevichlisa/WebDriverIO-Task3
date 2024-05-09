export class TotalEstimateCost{
    get rootEl() {
        return $('div.qBohdf ')
    }

    get totalPrice() {
        return $('div.fbc2ib h6')
    }
    item(param) {
        const selectors = {
            numberInstance: 'Number of Instances',
            OS: "Operating System / Software",
            provisioningModel: "Provisioning Model",
            machineType: "Machine type",
            gpuModel: "GPU Model",
            numbersGPU: "Number of GPUs",
            ssd: "Local SSD",
            region: "Region",
            commited:"Committed use discount options"
        }
        return $(`//span[text()="${selectors[param]}"]/following-sibling::span`)
    }
}