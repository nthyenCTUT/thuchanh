//Là file mà Mỗi lần truy cập vào đường link của website thì sẽ chạy vào file này đầu tiên
import express from 'express'
let router = express.Router()
//tạo hàm 
let initWebRoute = (app) => {
    //xây dựng route đầu tiên
    router.get("/", (req, res) => {
        return res.send('Hello world')
    })
    //hàm này trả về router
    return app.use("/", router)
}
//muốn bên ngoài sử dụng phải export
export default initWebRoute