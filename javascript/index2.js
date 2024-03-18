// searchInput(검색창)에 엔터를 해도 전송이 되게 하는 코드

function submitTextarea(e) {
  if (e.keyCode === 13) {
    alert("전송");
  }
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", (event) => submitTextarea(event));

// 이하 작성
