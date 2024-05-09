import { BasePage } from "./base.page.js";
import { AddEstimate } from "../components/calculator/add-estimate.component.js";
import { PopUpEstimate } from "../components/calculator/pop-up-estimate.components.js";
import { ComputeEngine } from "../components/calculator/compute-engine.component.js";
import { CostDetails } from "../components/calculator/cost-details.component.js";
import { PopUpShareEstimate } from "../components/calculator/pop-up-share-estimate.component.js";

export class CalculatorLanding extends BasePage{
    constructor() {
        super()
        this.addEstimate = new AddEstimate()
        this.popUpEstimate = new PopUpEstimate()
        this.computeEngine = new ComputeEngine()
        this.costDetails = new CostDetails()
        this.popUpShareEstimate = new PopUpShareEstimate()
   }
}