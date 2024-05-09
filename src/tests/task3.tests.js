import { CalculatorLanding } from "../po/pages/calculatorLanding.page.js"
import { BasePage } from "../po/pages/base.page.js"
import { ResultListPage } from "../po/pages/resultList.page.js"
import { CostEstimateSummary } from "../po/pages/cost-estimate-summary.page.js"
const costEstimateSummary = new CostEstimateSummary
const calculatorLandingPage = new CalculatorLanding()
const resultLanding = new ResultListPage()
const basePage = new BasePage()

describe('Task 3', () => {
    beforeEach(async () => {
        await basePage.open()
    })
    it('Google Cloud Platform Pricing Calculator',async() => {
        await basePage.header.item('search').click()
        await $('//input[@class="qdOxv-fmcmS-wGMbrd"]').setValue('Google Cloud Platform Pricing Calculator')
        await $('//i[@class="google-material-icons PETVs PETVs-OWXEXe-UbuQg"]').click()
        await resultLanding.rusultListCalculator.openCalculator.click()
        await calculatorLandingPage.addEstimate.addToEstimate.click()
        await calculatorLandingPage.popUpEstimate.rootEl.waitForDisplayed()
        await calculatorLandingPage.popUpEstimate.item('computeEngine').click()
        await expect(calculatorLandingPage.popUpEstimate.rootEl).not.toBeDisplayed()
        
        await calculatorLandingPage.computeEngine.rootEl.$('//div[contains(@class,"QiFlid")]/descendant::input[@type="number"]').setValue(4)
        await calculatorLandingPage.computeEngine.rootEl.$('//div[text()="Machine type"]/ancestor::div[contains(@class,"XIfRlb")]').scrollIntoView()
        await calculatorLandingPage.computeEngine.rootEl.$('//span[text()= "Machine type"]/ancestor::div[contains(@class,"PPUDSe")]').click()
        await calculatorLandingPage.computeEngine.rootEl.$('//span[text()="n1-standard-8"]/ancestor::li[contains(@class,"MCs1Pd")]').click()
        await calculatorLandingPage.computeEngine.rootEl.$('//div[text()="Add GPUs"]/ancestor::div[contains(@class,"XIfRlb")]').scrollIntoView({block:'center'});
        await calculatorLandingPage.computeEngine.rootEl.$('//div[text()="Add GPUs"]/ancestor::div[contains(@class,"XIfRlb")]/preceding-sibling::div').click()
        await calculatorLandingPage.computeEngine.rootEl.$('//span[text()="GPU Model"]/ancestor::div[contains(@class,"Iykrdb")]').click()
        await calculatorLandingPage.computeEngine.rootEl.$('//span[contains(text(),"NVIDIA Tesla V100")]/ancestor::li[contains(@class,"MCs1Pd")]').click()
        await calculatorLandingPage.computeEngine.rootEl.$('//span[text()="Local SSD"]/ancestor::div[contains(@class,"Iykrdb")]').click()
        await calculatorLandingPage.computeEngine.rootEl.$('//span[contains(text(),"2x375 GB")]/ancestor::li[contains(@class,"MCs1Pd")]').click()
        await calculatorLandingPage.computeEngine.rootEl.$('//span[text()="Region"]/ancestor::div[contains(@class, "VfPpkd-O1htCb")]').scrollIntoView({block:'center'})
        await calculatorLandingPage.computeEngine.rootEl.$('//span[text()="Region"]/ancestor::div[contains(@class, "VfPpkd-O1htCb")]').click()
        await calculatorLandingPage.computeEngine.rootEl.$('//span[contains(text(),"Netherlands (europe-west4)")]/ancestor::li[contains(@class,"MCs1Pd")]').click()
        await calculatorLandingPage.computeEngine.rootEl.$('//label[text()="1 year"]/ancestor::div[contains(@class,"e2WL2b")]').click()
        await browser.pause(2000)

        const estimateCost = await calculatorLandingPage.costDetails.rootEl.$('//label[contains(@class,"gt0C8e")]').getText()
        await calculatorLandingPage.costDetails.rootEl.$('//span[contains(text(),"Share")]/ancestor::button[contains(@class,"FOBRw-LgbsSe")]').click()
        
        await calculatorLandingPage.popUpShareEstimate.rootEl.waitForDisplayed()
        await calculatorLandingPage.popUpShareEstimate.rootEl.$('//a[contains(text(),"Open estimate summary")]').click()
        const aHref = await calculatorLandingPage.popUpShareEstimate.rootEl.$('//a[contains(text(),"Open estimate summary")]').getAttribute('href')
        await browser.switchWindow(aHref)

        const totalEstimateCost = await costEstimateSummary.totalEstimateCost.rootEl.$('//h5[text()="Total estimated cost"]/following-sibling::h4').getText()
        
        expect(estimateCost).toEqual(totalEstimateCost)
    })
})
