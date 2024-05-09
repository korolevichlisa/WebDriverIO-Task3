import { BasePage } from "./base.page.js";
import { ResultListComponent } from "../components/result/result-list.common.js";

export class ResultListPage extends BasePage{
    constructor() {
        super()
        this.rusultListCalculator = new ResultListComponent()
    }  
}
