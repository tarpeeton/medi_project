const QualityModel = require("../model/quality");
const MyClass = require("../config/class")

exports.CreateNewData = async (req, res, next) => {
    const result = new MyClass(QualityModel, req, res, next)
    result.createData()
}
exports.GetAllDatas = async (req, res, next) => {
    const result = new MyClass(QualityModel, req, res, next)
    result.getDatas(10)
}
exports.GetSingleData = async (req, res, next) => {
    const result = new MyClass(QualityModel, req, res, next)
    result.getData()
}
exports.UpdateSingleData = async (req, res, next) => {
    const result = new MyClass(QualityModel, req, res, next)
    result.updateSingleDataWithoutFile()
}
exports.DeleteSingleData = async (req, res, next) => {
    const result = new MyClass(QualityModel, req, res, next)
    result.deleteSingleDataWithoutFile()
}