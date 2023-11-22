const hashHelper = require(process.cwd() + "/helpers/password-encrypter");
// const jwt = require("jsonwebtoken");

const { getUserByAccount } = require("../CRUD/user");

async function login(req, res) {
    try {
        const { gmail, password } = req.body;
        const regex = /@gmail\.com/g;

        const user = await getUserByAccount(gmail);

        console.log(gmail.match(regex) !== null)

        if(gmail.match(regex) === null)
        {
            return res.status(400).json({ message: "Lỗi tài khoản gmail nhập vào không đúng" });
        }

        if (!user) {
            return res.status(404).json({ message: "Không tìm thấy tài khoản" });
        }

        const isPasswordValid = await hashHelper.compare(
            password,
            user.password.trim()
        );
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Sai mật khẩu",
            });
        }

        // Tạo token sử dụng jsonwebtoken
        // const token = jwt.sign(
        //     { id: user.id, email: user.email, isAdmin: user.isAdmin },
        //     process.env.JWT_SECRET_KEY,
        //     {
        //         expiresIn: "5h",
        //     }
        // );

        res.status(200).json({
            message: "login success!!",
            // token,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = login;