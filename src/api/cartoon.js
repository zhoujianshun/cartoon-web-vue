import request from "@/utils/request";

const getCarttonList = function(data) {
  return request({
    url: "/cartoons",
    method: "get",
    data
  });
};

const getCartton = function(name) {
  return request({
    url: "/cartoon/" + name,
    method: "get"
  });
};

const getCarttonChapter = function(name, chapter) {
  return request({
    url: "/cartoon/" + name + "/" + chapter,
    method: "get"
  });
};

export default {
  getCarttonList,
  getCartton,
  getCarttonChapter
};
