import ReactDom from "react-dom";
import Home, { sum } from "./Home";

describe("sum tests", () => {
    it("should return 3", () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });
    it("test with string, should return hello2", () => {
        const result = sum("hello", 2);
        expect(result).toEqual("hello2");
    });
    it("sum function test with 0", () => {
        const result = sum(0, 2);
        expect(result).toEqual(2);
    });
    it("sum function test with missing arg", () => {
        const result = sum(2);
        expect(result).toBeNaN();
    });
})
describe("Home component tests", () => {
    it("should render Home component", () => {
        let div = document.createElement("div");
        ReactDom.render(<Home lastName="inggi"/>, div);
        const expected = '<div class="main home"><h1>inggi</h1></div>';
        expect(div.innerHTML).toEqual(expected);
    });
    it("should render the world 'Home' in component", () => {
        let div = document.createElement("div");
        ReactDom.render(<Home lastName="jacob"/>, div);
        const expectedH1 = div.firstChild.firstChild.innerHTML;
        expect(expectedH1).toEqual("jacob");
    });
});