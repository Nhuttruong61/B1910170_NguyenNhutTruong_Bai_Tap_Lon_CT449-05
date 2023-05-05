const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kiểm tra xem email đã được đăng ký trước đó chưa
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email đã được sử dụng. Vui lòng sử dụng email khác.' });
    }

    // Mã hóa mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Tạo user mới
    const user = new User({
      email,
      password: hashedPassword
    });

    // Lưu user vào database
    await user.save();

    res.status(201).json({ message: 'Tài khoản đã được tạo thành công.' });
  } catch (error) {
    res.status(500).json({ message: 'Đăng ký thất bại. Vui lòng thử lại sau.' });
  }
};

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Tìm user trong database
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Email hoặc mật khẩu không chính xác.' });
      }
  
      // So sánh mật khẩu đã mã hóa với mật khẩu được cung cấp
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Email hoặc mật khẩu không chính xác.' });
      }
  
      // Tạo token cho người dùng
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
      );
  
      res.status(200).json({ message: 'Đăng nhập thành công.', token });
  
    } catch (error) {
      res.status(500).json({ message: 'Đăng nhập thất bại. Vui lòng thử lại sau.' });
    }
  };