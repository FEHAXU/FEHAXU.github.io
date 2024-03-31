$("body").after(
  "<div align='center' class='bq' style='display:none;'><h3 align='center' style='color: crimson;font-family: 黑体;'>骚瑞<a href='javascript:$('.bq').hide(500);' style='color: red;'>X</a></h3><h4 align='center' style='color: crimson;font-family: 黑体;'>很抱歉给您带来了不便，我会尽快修复这个错误</h4><input type='button' class='button' value='返回下载站' onClick='backXzz()'><input type='button' class='button' value='投诉' style='color: red;' onClick='ts()'></div>"
);
//添加错误          关闭尝试缓存扩展

try {
  $("noscript").text("请启用JavaScript，这样才能继续游戏");
  //$('.loading-text').text("正在努力加载...")
  $("#error").append(
    "<div align='center'><a style='color: cornflowerblue;' href='javascript:bq()'>返回下载站</a></div>"
  );
  $("#launch").title = "点击开始游戏";
} catch (p) {
  console.log("嘎嘎嘎嘎");
}
$(".bq").hide();
var lll = false;
function fk(a) {
  if (!a) {
    if (confirm("停止游戏跳转至反馈页?")) {
      window.removeEventListener("beforeunload", tcym);
      location.href = "https://fehaxu.github.io/xz.html?fkjslx";
    }
  } else {
    window.removeEventListener("beforeunload", tcym);
    window.open("https://fehaxu.github.io/xz.html?fkjslx");
  }
}
function bq() {
  $(".bq").show(500);
}
function backXzz() {
  window.removeEventListener("beforeunload", tcym);
  location.href = "https://fehaxu.github.io/xz.html?cwfh";
}
function ts() {
  window.removeEventListener("beforeunload", tcym);
  location.href = "weixin://contacts/profile/fhxyehappy";
}
// 定义退出页面事件处理函数
function tcym(e) {
  var message = "再次加载游戏需要漫长的等待，确定退出?";
  e.preventDefault();
  e.returnValue = message;
}
// 注册退出页面事件
$(".bq").hide();
window.addEventListener("beforeunload", tcym);
console.log("1");
