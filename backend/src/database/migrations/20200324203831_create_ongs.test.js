const _20200324203831_create_ongs = require("./20200324203831_create_ongs")
// @ponicode
describe("_20200324203831_create_ongs.up", () => {
    test("0", () => {
        let callFunction = () => {
            _20200324203831_create_ongs.up({ schema: "payment transaction at Satterfield - Hyatt using card ending with ***0494 for GHS 370.23 in account ***63108447" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            _20200324203831_create_ongs.up({ schema: "invoice transaction at Larkin Inc using card ending with ***8987 for GHS 889.84 in account ***54986018" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            _20200324203831_create_ongs.up({ schema: "withdrawal transaction at Kovacek Inc using card ending with ***6291 for IRR 718.83 in account ***77705372" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            _20200324203831_create_ongs.up({ schema: "invoice transaction at O'Connell, Beahan and Gerhold using card ending with ***6715 for ARS 840.46 in account ***86953668" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            _20200324203831_create_ongs.up({ schema: "deposit transaction at Streich, Mann and Rutherford using card ending with ***5156 for TJS 69.36 in account ***97846125" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            _20200324203831_create_ongs.up(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
