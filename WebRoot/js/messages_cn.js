jQuery.extend(jQuery.validator.messages, {
  required: "该项目不能为空",
  //remote: "请修正该字段",
  email: "请输入正确的电子邮件",
  url: "请输入正确的网址",
  date: "请输入正确的日期",
  dateISO: "请输入正确的日期 (ISO).",
  number: "请输入正确的数字",
  digits: "只能输入整数",
  creditcard: "请输入正确的信用卡号",
  equalTo: "请再次输入相同的值",
  accept: "请输入正确后缀名的字符串",
  maxlength: jQuery.validator.format("请输入 长度最多是 {0} 的字符串"),
  minlength: jQuery.validator.format("请输入 长度最少是 {0} 的字符串"),
  rangelength: jQuery.validator.format("请输入 长度介于 {0} 和 {1} 之间的字符串"),
  range: jQuery.validator.format("请输入介于 {0} 和 {1} 之间的值"),
  max: jQuery.validator.format("请输入最大为{0} 的值"),
  min: jQuery.validator.format("请输入最小为{0} 的值")
});