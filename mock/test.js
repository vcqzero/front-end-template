module.exports = [
  {
    url: "/index2",
    type: "get",
    // response 可以是mock模板或者是返回mock模板的函数
    response: (req, res) => {
      return {
        "list|1-10": [
          {
            "name|+1": ["Hello", "Mock.js", "!"],
          },
        ],
      };
    },
  },
];
