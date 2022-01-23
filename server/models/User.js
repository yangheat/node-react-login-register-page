const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// 정보를 저장하기 전에 처리할 내용
userSchema.pre("save", function (next) {
  let user = this;
  if (user.isModified("password")) {
    // 비밀번호를 암호화
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);

        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  // planPassword: 1234567  암호화된 비밀번호: $2b$10$NGk/FK8xQKxviKjTIAwIAOB1jix9pFeMr0/VqrnosFlIyYKvtR8le
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  let user = this;
  // jsonwebtoken을 이용하여 token 생성
  // user_id는 Object로 이루어져있기 때문에 반드시 toString을 통해 출력해야함.
  const token = jwt.sign(user._id.toString(), "secretToken");
  // user._id + 'scretToken' = token;
  // ->
  // 'scretToken' -> user._id
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  let user = this;

  // user._id + "scretToken";
  // 토큰을 decode 한다.
  jwt.verify(token, "secretToken", function (err, decoded) {
    // 유저 아이디를 이용하여 유저를 찾은 다음에
    // 클라이언트에서 가져온 token과 DB에 보관한 토큰이 일치하는지 확인
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model("User", userSchema);

// 다른 파일에서도 사용할 수 있도록 export 설정
module.exports = { User };
