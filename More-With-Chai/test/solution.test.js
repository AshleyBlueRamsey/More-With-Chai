const findStudentScoreName = require("../src/solution.js");
const expect = require("chai").expect;

describe ("findStudentByName", () => {
    it("should return a student's name and score if the name matches", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
        ];
        const expected = { name: "Natalee Vargas", score: 9.2};
        const actual = findStudentByName(students, "Natalee Vargas")
        expect(actual).to.eql(expected);
    });

    describe("findStudentByName", () => {
        it("should return 'null' if student name does not match", () => {
            const students = [
                { name: "Leo Yeon-Joo", score: 8.9 },
                { name: "Morgan Sutton", score: 7.4 },
                { name: "Natalee Vargas", score: 9.2 },
            ];
            const name = undefined;
            const actual = findStudentByName(students, name);
            expect(actual).to.be.null;
        });
    });
});
