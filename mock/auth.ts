import mockjs from 'mockjs';

const mock = {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // 支持自定义函数，API 参考 express@4
  //   'POST /api/users/create': (req, res) => {
  //     // 添加跨域请求头
  //     res.setHeader('Access-Control-Allow-Origin', '*');
  //     res.end('ok');
  //   },
};

export default mock;
