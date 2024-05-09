import { TotalEstimateCost } from "../components/cost/total-estimate-cost.components.js"
import { BasePage } from "./base.page.js";

export class CostEstimateSummary extends BasePage{
    constructor() {
        super()
        this.totalEstimateCost = new TotalEstimateCost()
   }
}